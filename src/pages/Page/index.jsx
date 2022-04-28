import * as Styled from './styled'

function Page({className, children}) {

  return (
    <Styled.Page className={className}>
      {children}
    </Styled.Page>
  )
}

export default Page