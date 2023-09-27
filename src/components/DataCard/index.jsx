import { Container, CardTitle, CardItem } from "./styles";

export function DataCard ({ title, description, icon, value, unit}) {

  return(
      <Container>
          {icon}
        <CardTitle>
          <p>{title}</p>
          <h2>{description}</h2>
        </CardTitle>
        <CardItem>
          {value} {unit}
        </CardItem>
      </Container>
    );
}