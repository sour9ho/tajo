import * as Styled from 'components/CharInput/styled'

function CharInput({type, value, placeholder, state, onChange}) {

  const disabled = (type!=="initial") ? true : false
  const handleChange = (type==="initial") ? (e) => onChange(e.target.value) : null
  
  return (
    <Styled.CharInput
      type={type}
      value={value}
      state={state}
      placeholder={placeholder}
      onChange={(e) => handleChange(e)}
      disabled={disabled}
      size={1}
    />
  )
}

export default CharInput