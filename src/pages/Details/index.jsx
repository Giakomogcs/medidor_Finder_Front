import {Container, Content} from "./styles"
import { Header } from "../../components/Header"
import { TableWork } from "../../components/Table"
import { WorkHours } from "../../components/WorkHours"
import {DataCard} from '../../components/DataCard';

import { ImPower } from 'react-icons/im';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Details(){
  const [data, setData] = useState(null);

  const [filter, setFilter] = useState({
    startDate: null,
    endDate: null,
    selectedMachine: 'machine1',
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    fetchData();
    // Atualizar a cada 5 segundos (5000 milissegundos)
    const intervalId = setInterval(fetchData, 5000);

    // Limpar o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  const fetchData = () => {
    axios.get(`http://localhost:3333/data/${filter.selectedMachine}`)
    .then(response => {
      setData(response.data.datas);
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });
  };

  return (

    <Container>
      <Header onFilterChange={handleFilterChange}/>

      <main>

        <div className="title">
          <h1>Medidor Finder</h1>
          {data &&(
            <p>{ data.timestamp}</p>
          )}
        </div>

        <div className="App">
          {data && (
            // <ul>
            //   <li>Pt: {data.Pt}</li>
            //   <li>Qt: {data.Qt}</li>
            //   <li>St: {data.St}</li>
            //   <li>PFt: {data.PFt}</li>
            //   <li>Frequência: {data.Frequency}</li>
            //   <li>U1: {data.U1}</li>
            //   <li>U2: {data.U2}</li>
            //   <li>U3: {data.U3}</li>
            //   <li>I1: {data.I1}</li>
            //   <li>I2: {data.I2}</li>
            //   <li>I3: {data.I3}</li>
            // </ul>
            <div>
              <DataCard title="Active Power Total" description=" (Pt)" icon={<ImPower/>} value={data.Pt} unit="kW" />
              <DataCard title="Reactive Power Total" description=" (Qt)" icon={<ImPower/>} value={data.Qt} unit="kW" />
              <DataCard title="Apparent Power Total" description=" (St)" icon={<ImPower/>} value={data.Pt} unit="kW" />
              <DataCard title="Power Factor Total" description=" (PFt)" icon={<ImPower/>} value={data.St} unit="kW" />
              <DataCard title="Frequency" description="" icon={<ImPower/>} value={data.PFt} unit="kW" />

              <div className="U1">
                <DataCard title="U1" description="" icon={<ImPower/>} value={data.Frequency} unit="kW" />
                <DataCard title="I1" description="" icon={<ImPower/>} value={data.U3} unit="kW" />
              </div>

              <div className="U2">
                <DataCard title="U2" description="" icon={<ImPower/>} value={data.U1} unit="kW" />
                <DataCard title="I2" description="" icon={<ImPower/>} value={data.I1} unit="kW" />
              </div>

              <div className="U3">
                <DataCard title="U3" description="" icon={<ImPower/>} value={data.U2} unit="kW" />
                <DataCard title="I3" description="" icon={<ImPower/>} value={data.I2} unit="kW" />
              </div>
            </div>
          )}
        </div>
      </main>
    </Container>
  );
}