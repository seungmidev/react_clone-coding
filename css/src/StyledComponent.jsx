import React from 'react'
import styled, { css } from 'styled-components';

const Container = styled.div`
  background: beige;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid pink;
  color: #b9eaff;
  margin: 0 1em;
  padding: 0.24em 1em;

  ${props => props.primary && css`background: #009cd5; color: white;`};
`;

export default function StyledComponent() {
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary="true">Primary Button</Button>
    </Container>
  )
}
