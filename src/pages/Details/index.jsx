import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { DataCard } from '../../components/DataCard';
import { WorkHours } from "../../components/WorkHours"

import { ImPower } from 'react-icons/im';
import { ImRadioChecked } from 'react-icons/im';
import { ImRadioUnchecked } from 'react-icons/im';
import { ImPowerCord } from 'react-icons/im';
import { CiWavePulse1 } from 'react-icons/ci';
import { LuTriangleRight } from 'react-icons/lu';
import { api } from '../../services/api';


export function Details() {
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
    axios
      api.get(`/data/${filter.selectedMachine}`)
      .then((response) => {
        setData(response.data.datas);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  };

  return (
    <Container>
      <Header onFilterChange={handleFilterChange} />

      <main>

        <Content>
          
          <div className="currentData">
            
            <div className="title">
              <h1>Medidor Finder</h1>
              {data && <p>{data.timestamp}</p>}
            </div>

            {data && (
              <div>
                <DataCard
                  title="Active Power Total"
                  description=" (Pt)"
                  icon={<LuTriangleRight />}
                  value={data.Pt}
                  unit="W"
                />
                <DataCard
                  title="Reactive Power Total"
                  description=" (Qt)"
                  icon={<LuTriangleRight />}
                  value={data.Qt}
                  unit="VAR"
                />
                <DataCard
                  title="Apparent Power Total"
                  description=" (St)"
                  icon={<LuTriangleRight />}
                  value={data.St}
                  unit="VA"
                />
                <DataCard
                  title="Power Factor Total"
                  description=" (PFt)"
                  icon={<ImPowerCord />}
                  value={data.PFt}
                  unit=""
                />
                <DataCard
                  title="Frequency"
                  description=""
                  icon={<CiWavePulse1 />}
                  value={data.Frequency}
                  unit="Hz"
                />

                <div className="U1">
                  <DataCard
                    title="U1"
                    description=""
                    icon={<ImRadioChecked />}
                    value={data.U1}
                    unit="V"
                  />
                  <DataCard
                    title="I1"
                    description=""
                    icon={<ImRadioUnchecked />}
                    value={(data.I1)*1000}
                    unit="mA"
                  />
                </div>

                <div className="U2">
                  <DataCard
                    title="U2"
                    description=""
                    icon={<ImRadioChecked />}
                    value={data.U2}
                    unit="V"
                  />
                  <DataCard
                    title="I2"
                    description=""
                    icon={<ImRadioUnchecked />}
                    value={(data.I2)*1000}
                    unit="mA"
                  />
                </div>

                <div className="U3">
                  <DataCard
                    title="U3"
                    description=""
                    icon={<ImRadioChecked />}
                    value={data.U3}
                    unit="V"
                  />
                  <DataCard
                    title="I3"
                    description=""
                    icon={<ImRadioUnchecked />}
                    value={(data.I3)*1000}
                    unit="mA"
                  />
                </div>
              </div>
            )}
          </div>


          <div className="Graphic">
            <WorkHours filter={filter}/>
          </div>
        </Content>
      </main>
    </Container>
  );
}
