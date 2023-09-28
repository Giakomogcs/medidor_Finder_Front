import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, CustomSelect } from './styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Select from 'react-select';


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
            I1: item.I1*1000,
            I2: item.I2*1000,
            I3: item.I3*1000,
            Pt: item.Pt,
            Qt: item.Qt,
            St: item.St,
            PFt: item.PFt,
            Frequency: item.Frequency
          }));

          setData(dataPoints);
        })
        .catch((error) => {
          console.error('Erro ao buscar dados do backend:', error);
        });
    }
  }, [startDate, endDate, selectedMachine]);

  const [selectedVariable, setSelectedVariable] = useState(null);

  const variableOptions = [
    { value: 'U', label: 'Tensões (U1, U2, U3)' },
    { value: 'I', label: 'Correntes (I1, I2, I3)' },
    { value: 'U1', label: 'Tensão (U1)' },
    { value: 'U2', label: 'Tensão (U2)' },
    { value: 'U3', label: 'Tensão (U3)' },
    { value: 'I1', label: 'Corrente (I1)' },
    { value: 'I2', label: 'Corrente (I2)' },
    { value: 'I3', label: 'Corrente (I3)' },
    { value: 'Pt', label: 'Active Power Total (Pt)' },
    { value: 'Qt', label: 'Reactive Power Total (Qt)' },
    { value: 'St', label: 'Apparent Power Total (St)' },
    { value: 'PFt', label: 'Power Factor Total (PFt)' },
    { value: 'Frequency', label: 'Frequency' },
  ];

  const handleVariableChange = (selectedOption) => {
    setSelectedVariable(selectedOption);
  };

  const dataKeyList = [];

  if (selectedVariable) {
    if (selectedVariable.value === 'U') {
      dataKeyList.push('U1', 'U2', 'U3');
    } else if (selectedVariable.value === 'I') {
      dataKeyList.push('I1', 'I2', 'I3');
    } else {
      dataKeyList.push(selectedVariable.value);
    }
  }

  const getStrokeColor = (variable) => {
    switch (variable) {
      case 'U1':
        return 'red';
      case 'U2':
        return 'orange';
      case 'U3':
        return 'green';
      case 'I1':
        return 'blue';
      case 'I2':
        return 'purple';
      case 'I3':
        return 'pink';
      case 'Pt':
        return 'brown';
      case 'Qt':
        return 'gray';
      case 'St':
        return 'cyan';
      case 'PFt':
        return 'magenta';
      case 'Frequency':
        return 'lime';
      default:
        return 'black'; // Cor padrão para variáveis desconhecidas
    }
  };

  return (
    <Container>
      <h2>Histórico Finder</h2>

      <CustomSelect
        className="select"
        classNamePrefix="select"
        value={selectedVariable}
        onChange={handleVariableChange}
        options={variableOptions}
        placeholder="Selecione uma variável..."
      />

      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />

        {dataKeyList.map((key) => (
        <Line
          key={key}
          type="monotone"
          dataKey={key}
          name={key}
          stroke={getStrokeColor(key)} // Defina uma função para obter cores
        />
        ))}

      </LineChart>
    </Container>
  );
}
