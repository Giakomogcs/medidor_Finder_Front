import styled  from "styled-components";


export const Container = styled.div`

    margin: 0;
    height: 600px;
    overflow-y: auto; 
    position: relative;

    border-radius: 10px;
    
    scrollbar-width: thin;
    scrollbar-color: #4D585E transparent;

    &::-webkit-scrollbar {
        width: 8px; /* Largura da scrollbar */
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #999; /* Cor do indicador da scrollbar */
        border-radius: 4px; /* Bordas arredondadas */
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background-color: #777; /* Cor do indicador da scrollbar ao passar o mouse */
    }
    
    &::-webkit-scrollbar-track {
        background-color: transparent; /* Cor do fundo da scrollbar */
    }

    >table{
            
        text-align: center;
        width: 100%;
        height: auto;
        max-height: 570px;
        border-radius: 10px ;
        border-collapse: collapse;

        background-color: ${({theme}) => theme.COLORS.LIGHT_600};
        

        >thead{
            height: 30px;
            border-radius: 10px;
            background-color: ${({theme}) => theme.COLORS.DARK_800};

            tr{
                th{
                    width: 80px;
                    padding: 5px;
                    border: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
                }

                th:first-child{
                    width: 170px;
                }
            }
        }

        >tbody{
            height: auto;
            border-radius: 10px ;
        }
    }
    
    
    

    > table > thead {
        position: sticky; 

        z-index: 1; 

        height: 30px;
        top: -1px;

        margin: 0;
        padding: 0;

        background-color: ${({theme}) => theme.COLORS.LIGHT_700};
        //border-radius: 10px;
        color: white;
        font-family: Roboto;
    }

`

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
  
  &.working {
    background-color: ${({theme}) => theme.COLORS.WORKING_1}; /* Cor para "Working" verdadeiro */
  }

  &.not-working {
    background-color: ${({theme}) => theme.COLORS.WORKING_0};; /* Cor para "Working" falso */
  }

  &.available {
    background-color: ${({theme}) => theme.COLORS.AVAILABLE_1};; /* Cor para "Available" verdadeiro */
  }

  &.not-available {
    background-color: ${({theme}) => theme.COLORS.AVAILABLE_0};; /* Cor para "Available" falso */
  }
`;