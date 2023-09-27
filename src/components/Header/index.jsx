import { Container } from "./styles";
import {Input} from "../../components/Input"; 
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';


import { Calendar } from "../../components/Calendar"


export function Header({ onFilterChange }) {
  const [machines, setMachines] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedMachine, setSelectedMachine] = useState('');

  useEffect(() => {
    
    axios
      .get('http://localhost:3333/machine')
      .then(response => {
        setMachines(response.data.machines);
      })
      .catch(error => {
        console.error('Erro ao buscar dados do backend:', error);
      });
  }, []);

  const handleStartDateChange = (date) => {
    const formattedDate = format(date, 'dd/MM/yyyy HH:mm:ss');
    setStartDate(formattedDate);
    onFilterChange({ startDate: formattedDate, endDate, selectedMachine });
  };

  const handleEndDateChange = (date) => {
    const formattedDate = format(date, 'dd/MM/yyyy HH:mm:ss');
    setEndDate(formattedDate);
    onFilterChange({ startDate, endDate: formattedDate, selectedMachine });
  };

  const handleMachineChange = (event) => {
    const machine = event;
    setSelectedMachine(machine);
    onFilterChange({ startDate, endDate, selectedMachine: machine });
  };

  return (
    <Container>
      <img src="/images/SENAI_Logo.png" alt="Logo Istituto SENAI de Tecnologia" />

      <div>
        <Calendar
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
        />
        <Input machines={machines} onMachineChange={handleMachineChange} />
      </div>
    </Container>
  );
}
