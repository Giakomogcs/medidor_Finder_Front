import {Container, Content} from "./styles"
import React, { useEffect, useState } from 'react';
import { Header } from "../../components/Header"
import { TableWork } from "../../components/Table"
import { WorkHours } from "../../components/WorkHours"


export function Details(){

  const [filter, setFilter] = useState({
    startDate: null,
    endDate: null,
    selectedMachine: 'machine1',
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    // Define um timeout para recarregar a página a cada 5 minutos (300000 milissegundos)
    const reloadInterval = setInterval(reloadPage, 300000);

    // Certifique-se de limpar o intervalo quando o componente for desmontado
    return () => {
      clearInterval(reloadInterval);
    };
  }, []);
  
  return(
    <Container>
      <Header onFilterChange={handleFilterChange}/>

      <main>
        <Content>
          <div className="Title">
            <h1>Disponibilidade CNC SENAI</h1>
          </div>

          <div className="Graphic">
            <TableWork filter={filter}/>
            <WorkHours filter={filter}/>
          </div>


        </Content>
      </main>



    </Container>
  )
}