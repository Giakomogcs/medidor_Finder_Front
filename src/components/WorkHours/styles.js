import Select from "react-select";
import styled  from "styled-components";

export const Container = styled.div`

    margin: 0;
    height: 600px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    align-items: center;
    justify-content: center;

    border-radius: 10px;
        
    font-family: 'Inter', sans-serif;

    >h2{
        font-size: 26px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

    }

`


export const CustomSelect = styled(Select)`

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    .select__menu-list {
        padding: 0; /* Remover o espaço extra nas margens */
        //max-height: none !important;
        border-radius: 8px;
        
    }

    /* Se você deseja personalizar ainda mais a aparência da barra de rolagem, pode fazê-lo aqui */
    .select__menu-list::-webkit-scrollbar {
        width: 10px;
    }

    .select__menu-list::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.LIGHT_400};
        border-radius: 80px;
    }

    /* O restante do seu CSS permanece o mesmo */
    .select__control {
        width: 300px;
        height: 50px;
        padding: 5px;
        border: none;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        text-align: center;
        font-size: 15px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .select__control:focus {
        box-shadow: none;
        border-color: ${({ theme }) => theme.COLORS.DARK_900}; /* Substitua pela cor desejada para a borda */
    }

    .select__option {
        font-size: 15px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        border: none;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        text-align: center;

        margin-top: 0 !important;
        margin-bottom: 0 !important;
        border-radius: 0 !important;
    }

    .select__menu {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        max-height: none !important;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        
    }
`;
