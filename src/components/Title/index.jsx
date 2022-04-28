import * as Styled from 'components/Title/styled'

function Title({text}) {

  const lines = text.split('\n')

  return (
    <Styled.Title className='title'>
      {lines.map((line, i) => (
        <Styled.TextLine
          key={i}
        >{line}</Styled.TextLine>
      ))}
    </Styled.Title>
  )
}

export default Title