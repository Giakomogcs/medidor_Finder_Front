import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, TableCell } from './styles'; // Importe os componentes estilizados

export function TableWork({ filter }) {
  const [datas, setDatas] = useState([]);
  const { startDate, endDate, selectedMachine } = filter;

  useEffect(() => {
    if (startDate && endDate || selectedMachine) {
      axios
      .get(`http://localhost:3333/data/${selectedMachine}`, {
        params: {
          start: startDate,
          end: endDate,
        },
      })
      .then(response => {
        setDatas(response.data.datas);
        })
        .catch(error => {
          console.error('Erro ao buscar dados do backend:', error);
        });
    }
  }, [filter]);

  return (
    <Container>
      <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Working</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {datas.map(item => (
              <tr key={item.timestamp}>
                <TableCell>{item.timestamp}</TableCell>
                <TableCell className={item.working ? 'working' : 'not-working'}>
                  {item.working ? 'Yes' : 'No'}
                </TableCell>
                <TableCell className={item.available ? 'available' : 'not-available'}>
                  {item.available ? 'Yes' : 'No'}
                </TableCell>
              </tr>
            ))}
          </tbody>
      </table>
    </Container>
  );
}
