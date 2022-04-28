import styled from "styled-components"
import { colorTable } from "utils/colorTable"

const { white, thickGray, lightGray, black} = colorTable

const Button = styled.button`
  text-align: center;

  /* position */
  padding: 0.2rem 0.5rem;
  margin-left: auto;
  
  /* shape */
  border: solid ${thickGray};
  background-color: ${thickGray};

  /* font */
  font: inherit;
  font-size: 1rem;
  font-weight: 500;
  color: ${white};

  /* animation */
  transition: all ease 0.2s;
`

export { Button }