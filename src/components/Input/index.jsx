import React, { useEffect, useState } from 'react';
import { Container, Option } from "./styles";

export function Input({machines, onMachineChange}){

  const handleMachineChange = (event) => {

    const selectedMachine = event.target.value;
    onMachineChange(selectedMachine);
  };

  return(
    <Container  onChange={handleMachineChange}>
      <option value="">select a machine</option>
      {machines.map((machine) => (
        <Option key={machine.id} value={machine.name}>
          {machine.name.toUpperCase()}
        </Option>
      ))}
    </Container>
  )
}