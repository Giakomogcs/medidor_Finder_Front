import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function WorkHours({ filter }) {
  const [data, setData] = useState([]);
  let { startDate, endDate, selectedMachine } = filter;

  if (!startDate) {
    // Se start não foi fornecido na query, defina-o como dois dias atrás do dia atual.
    const oneDaysAgo = new Date();
    oneDaysAgo.setDate(oneDaysAgo.getDate() - 1);
    startDate = oneDaysAgo.toLocaleString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
  
  if (!endDate) {
    // Se end não foi fornecido na query, defina-o como o dia atual.
    const currentDate = new Date();
    endDate = currentDate.toLocaleString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  useEffect(() => {
    if (startDate && endDate && selectedMachine) {
      axios
        .get(`http://localhost:3333/data/hist/${selectedMachine}`, {
          params: {
            start: startDate,
            end: endDate,
          },
        })
        .then((response) => {
          // Extrair os dados relevantes do JSON de resposta
          const dataPoints = response.data.datas.map((item) => ({
            timestamp: item.timestamp,
            U1: item.U1,
            U2: item.U2,
            U3: item.U3,
          }));

          setData(dataPoints);
        })
        .catch((error) => {
          console.error('Erro ao buscar dados do backend:', error);
        });
    }
  }, [startDate, endDate, selectedMachine]);

  return (
    <div>
      <h2>Gráfico de Tensões Trifásicas</h2>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="U1" name="U1" stroke="red" />
        <Line type="monotone" dataKey="U2" name="U2" stroke="blue" />
        <Line type="monotone" dataKey="U3" name="U3" stroke="green" />
      </LineChart>
    </div>
  );
}
