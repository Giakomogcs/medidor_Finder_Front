import styled from 'styled-components'

export const Container = styled.div`
    
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main{
        grid-area: content;
        overflow-y: auto;
        padding: 35px;
        
        font-family: 'Inter', sans-serif;
    }
`;
     

export const Content = styled.div`
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "title"
    "graphic";

    .Title{
        grid-area: "title";
        display: flex;
        justify-content: center;
        font-size: 16px;
    }

    .Graphic{
        height: 100%;
        grid-area: "graphic";
        
        display: flex;
        gap: 50px;
        align-items: center;
        justify-content: center;
    }

`

