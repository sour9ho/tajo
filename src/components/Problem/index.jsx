import * as Styled from 'components/Problem/styled'
import useAnswerSheet from 'hooks/useAnswerSheet'
import CharInput from 'components/CharInput'
import Button from 'components/Button'

function Problem({data}) {

  const { question, answer } = data
  const [answerSheet, setAnswer, checkAnswer] = useAnswerSheet(question, answer)

  const onChange = (number, value) => {
    setAnswer(number, value)
  }

  const renderCharacter = (as) => {
    return (<CharInput
      key={as.number}
      type={as.type}
      value={as.character}
      state={as.state}
      placeholder={as.placeholder}
      onChange={(value) => onChange(as.number, value)}
    />)
  }

  const renderWord = (characters) => {
    return characters.map(char => renderCharacter(char))
  }

  const breakWord = (as) => {
    const words = []
    let word = []
    for (let i=0; i<as.length; i++){
      const a = as[i]
      if (a.type === "blank") {
        words.push(word)
        word = []
      } else {
        word.push(a)
      }
    }
    words.push(word)
    return words
  }

  const breakLine = (words) => {
    const lines = []

    let buf = []
    let bufSize = 0
    for (let i=0; i<words.length; i++){
      const line = words[i]
      if (bufSize + line.length + 1 <= 7) {
        buf.push(line)
        bufSize += line.length
      } else {
        lines.push(buf)
        buf = []
        buf.push(line)
        bufSize = line.length
      }
    }
    lines.push(buf)
    return lines
  }

  const renderInputs = (as) => {
    const words = breakWord(as)
    const lines = breakLine(words)

    const inputs = []

    for (let i=0; i<lines.length; i++){
      const line = lines[i]
      let renderedLine = []
      const numWords = line.length
      for (let j=0; j<numWords; j++){
        const word = line[j]
        const renderedWord = renderWord(word)
        renderedLine = [...renderedLine, ...renderedWord]
        if (numWords-1 !== j) {
          renderedLine = [...renderedLine, <span>&nbsp;&nbsp;</span>]
        }
      }
      inputs.push(<div key={i}>{renderedLine}</div>)
    }
    return inputs
  }

  return (
    <Styled.Problem>
      <Styled.QuizContainer>
        {
          renderInputs(answerSheet)  
        }
      </Styled.QuizContainer>
      <Styled.ButtonContainer>
        <Button
          onClick={() => {
            checkAnswer()
          }}
          text={'정답 확인'}
        />
      </Styled.ButtonContainer>
    </Styled.Problem>
  )
}

export default Problem