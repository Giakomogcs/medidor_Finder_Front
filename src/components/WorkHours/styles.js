import styled  from "styled-components";

export const Container = styled.div`

    margin: 0;
    height: 600px;

    display: flex;
    flex-direction: column;
    

    align-items: center;
    justify-content: center;

    border-radius: 10px;

    >.Informations{
        height: auto;
        width: 400px;

        div{
            display: flex;
            flex-wrap:wrap;
            gap: 16px;

            align-items: center;
            justify-content: center;
    
            background-color: ${({theme}) => theme.COLORS.LIGHT_600};
            padding: 8px;
            border-radius: 20px;
            
            font-family: 'Inter', sans-serif;
            >h2{
                font-size: 26px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;

                >P{
                    margin: 0 8px;
                    font-size: 30px;
                    padding: 5px 8px;
                    border-radius: 16px;
                    color: ${({theme}) => theme.COLORS.LIGHT_600};
                    background-color: ${({theme}) => theme.COLORS.DARK_1000};

                    font-family: 'Poppins', sans-serif;
                }
            }

            .total{
                color: ${({theme}) => theme.COLORS.LIGHT_300};
            }

            .workH{
                color: ${({theme}) => theme.COLORS.WORKING_1};
            }

            .avaliableH{
                color: ${({theme}) => theme.COLORS.AVAILABLE_1};
            }
        }

    }


`
