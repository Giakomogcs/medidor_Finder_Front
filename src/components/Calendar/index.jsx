import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

import { Container } from './styles'; // Importe os componentes estilizados

export function Calendar({ selectedStartDate, selectedEndDate, onStartDateChange, onEndDateChange }) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
        onStartDateChange(date)
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        onEndDateChange(date);
    };

    return (
        <Container>
            <div className="calendar">
                <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Data de início"
                    dateFormat="dd/MM/yyyy HH:mm:ss"
                    showTimeSelect // Ativar seleção de hora
                    timeFormat="HH:mm:ss" // Formato da hora
                    timeIntervals={15} // Intervalo de seleção de minutos
                    timeCaption="Hora"
                    className="custom-datepicker"
                />
                <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Data de fim"
                    dateFormat="dd/MM/yyyy HH:mm:ss"
                    showTimeSelect // Ativar seleção de hora
                    timeFormat="HH:mm:ss" // Formato da hora
                    timeIntervals={15} // Intervalo de seleção de minutos
                    timeCaption="Hora"
                    className="custom-datepicker"
                />
            </div>
        </Container>
    );

}