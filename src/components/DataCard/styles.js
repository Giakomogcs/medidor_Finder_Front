import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.LIGHT_700};
  border-radius: 8px;
  padding: 5px;
  min-width: 140px;

  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`

export const CardTitle = styled.div`
  display: flex;
  gap: 3px;

  font-family: 'Quicksand', sans-serif;
  p{
    font-size: 18px;
  }
  h2{
    font-size: 18px;
  }
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.LIGHT_500};
  padding: 5px;
  border-radius: 8px;
`;

// export const CardIcon = styled.img`
//   width: 24px;
//   height: 24px;
//   margin-right: 8px;
// `;

