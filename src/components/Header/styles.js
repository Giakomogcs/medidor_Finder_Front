import styled  from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.DARK_1000};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;

  background-color: ${({theme}) => theme.COLORS.DARK_200};

  img{
    width: 200px;
  }

  >div{
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .images{
    gap: 15px;
  }

  .divider{
    height: 30px;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};;
  }




`