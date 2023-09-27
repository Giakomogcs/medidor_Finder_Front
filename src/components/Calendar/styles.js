import styled  from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    z-index: 2;

    .calendar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .react-datepicker__day--selected {
        background-color: ${({theme}) => theme.COLORS.LIGHT_700} !important; /* Altere a cor conforme sua preferência */
        color: white;
    }

    .custom-datepicker {
        /* Personalize o estilo do DatePicker aqui */
        font-size: 16px;
        padding: 5px;
        border: 1px solid ${({theme}) => theme.COLORS.DARK_200};
        border-radius: 5px;
        background-color: ${({theme}) => theme.COLORS.LIGHT_700};
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        text-align: center;
    }

    .custom-datepicker::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    }

    /* Estilize os elementos internos do DatePicker conforme necessário */
    .custom-datepicker .react-datepicker-wrapper {
        width: 100%;
    }

    .custom-datepicker .react-datepicker__input-container {
        display: block;
        width: 100%;
    }

    /* Estilize o calendário em si */
    .react-datepicker {
        border: 1px solid ${({theme}) => theme.COLORS.LIGHT_300};
        border-radius: 5px;
        background-color: ${({theme}) => theme.COLORS.LIGHT_300}; /* Cor de fundo do calendário */
    }

    /* Estilize os dias do calendário */
    .react-datepicker__day {
        color: ${({theme}) => theme.COLORS.LIGHT_700}; /* Cor do texto dos dias */
    }

    /* Estilize os dias do calendário quando selecionados */
    .react-datepicker__day--selected {
    background-color: ${({theme}) => theme.COLORS.LIGHT_700} !important;
    color: white;
    }

    /* Estilize o cabeçalho do calendário (mês e ano) */
    .react-datepicker__header {
    background-color: ${({theme}) => theme.COLORS.LIGHT_400};
    border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT_700};
    padding-top: 8px;
    }

    /* Estilize os botões de navegação do calendário */
    .react-datepicker__navigation {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    /* Estilize os botões de navegação do calendário quando passa o mouse */
    .react-datepicker__navigation:hover {
    color: ${({theme}) => theme.COLORS.LIGHT_700};
    }

    /* Estilize os seletores de ano e mês */
    .react-datepicker__current-month,
    .react-datepicker__year-select {
    color: ${({theme}) => theme.COLORS.LIGHT_700};
    }

    /* Estilize os ícones dos seletores de ano e mês */
    .react-datepicker__current-month--hasYearDropdown::after,
    .react-datepicker__current-month--hasMonthDropdown::after {
    border-color: ${({theme}) => theme.COLORS.LIGHT_700};
    }

    /* Estilize os dias selecionados */
    .react-datepicker__day--in-range {
        background-color: ${({theme}) => theme.COLORS.LIGHT_700};; /* Cor de fundo dos dias selecionados */
        color: white; /* Cor do texto dos dias selecionados */
    }

    /* Estilize a borda dos dias selecionados */
    .react-datepicker__day--in-range::before {
        border-color: ${({theme}) => theme.COLORS.LIGHT_700};; /* Cor da borda dos dias selecionados */
    }

`
