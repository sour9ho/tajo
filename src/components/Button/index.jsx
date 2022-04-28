import * as Styled from 'components/Button/styled'

function Button({text, onClick}) {

  return (
    <Styled.Button
      onClick={onClick}
    >
      {text}
    </Styled.Button>
  )
}

export default Button