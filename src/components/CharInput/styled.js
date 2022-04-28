import styled from "styled-components"
import { colorTable } from "utils/colorTable"

const { white, thickGray, lightGreen, lightRed } = colorTable

const getBorderColor = (type, state) => {
    let border
    if (type === 'initial') {
        if (state === 'basic') {
            border = thickGray
        } else if (state === 'right') {
            border = lightGreen
        } else if (state === 'wrong') {
            border = lightRed
        }
    } else if (type === "full") {
        border = thickGray
    }
    return border
}

const getBackgroundColor = (type, state) => {
    let background
    if (type === 'initial') {
        if (state === 'basic') {
            background = white
        } else if (state === 'right') {
            background = lightGreen
        } else if (state === 'wrong') {
            background = lightRed
        }
    } else if (type === "full") {
        background = thickGray
    }
    return background
}

const getFontColor = (type, state) => {
    let font
    if (type === 'initial') {
        if (state === 'basic') {
            font = thickGray
        } else if (state === 'right') {
            font = white
        } else if (state === 'wrong') {
            font = white
        }
    } else if (type === "full") {
        font = white
    }
    return font
}

const CharInput = styled.input`
  font: inherit;
  margin: 0.5rem 0.1rem;
  width: 1.5rem;
  font-size: 1.3rem;
  line-height: 2.5rem;
  text-align: center;
  
  border: solid 2px ${props => getBorderColor(props.type, props.state)};
  background-color: ${props => getBackgroundColor(props.type, props.state)};
  color: ${props => getFontColor(props.type, props.state)};
  
  transition: 0.2s;
`

export { CharInput }