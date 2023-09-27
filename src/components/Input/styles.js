import styled from "styled-components";

export const Container = styled.select`

  width: 200px;
  height: 60px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  
  
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  //appearance: none; /* Remove a seta padrão do navegador */

`;

export const Option = styled.option`
  font-size: 15px;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  border: none;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
`;
