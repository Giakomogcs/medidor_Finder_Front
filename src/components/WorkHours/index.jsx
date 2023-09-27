import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles'; 
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export function WorkHours({ filter }) {
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
        setDatas(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar dados do backend:', error);
        });
    }
  }, [filter]);

  const processData = () => {
    const totalShift = datas.shift;
    const workingPercentage = ((datas.work / totalShift) * 100).toFixed(2);
    const availablePercentage = ((datas.available / totalShift) * 100).toFixed(2);
    
    return [
      { name: 'Trabalhado', value: parseFloat(workingPercentage) },
      { name: 'Disponível', value: parseFloat(availablePercentage) },
    ];
  };
  
  const COLORS = ['#4AA250', '#E5C15E']; // Cores para as fatias do gráfico
  
  return (
    <Container>
      <div className='Grafico'>
        <PieChart width={600} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <Pie
            data={processData()}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={64} // Tamanho do buraco no centro
            fill="#8884d8"
            label={({ value, percent }) => `${value.toFixed(1)}%`} // Formato do rótulo
          >
            {processData().map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="top" height={15} formatter={(value) => `${value}%`} />
        </PieChart>  
      </div>

      <div className='Informations'>
        <div>
          <h2>Total de Horas: <p className='total'>{parseFloat(datas.shift).toFixed(2)}</p></h2>
          <h2>Horas trabalhadas: <p className='workH'>{parseFloat(datas.work).toFixed(2)}</p></h2>
          <h2>Horas disponíveis: <p className='avaliableH'>{parseFloat(datas.available).toFixed(2)}</p> </h2>
        </div>
      </div>

    </Container>
  );
}
