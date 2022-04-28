import * as Styled from 'pages/Main/styled'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useAsync } from 'hooks/useAsync'
import Page from 'pages/Page'
import Title from 'components/Title'
import Button from 'components/Button'
import { getAddress } from 'utils/getAddress'
import getTodayDate from 'utils/getTodayDate'
import getDday from 'utils/getDday'



async function getData(address) {
  const response = await axios.get(address)
  return response.data
}

function Main({titleText}) {

  const {simpleDate:todayDate} = getTodayDate()
  const address = getAddress('tajo', todayDate)
  const { infoAddress } = address
  const [ infoState ] = useAsync(() => getData(infoAddress), [infoAddress])
  const { loading, data, error } = infoState

  if (loading) return <div>로딩중</div>
  if (error) return <div>에러..</div>
  if (!data) return null

  const { date } = data
  const { start, end } = date

  console.log(data)
  console.log(date)
  let message = todayDate
  if (end) {
    message = getDday(end)
  } else if (start) {
    message = getDday(start)
  }

  const title = `오늘도
  ${titleText}를
  기다리며`

  return (
    <Page className='main'>
      <Styled.TitleContainer className='title-container'>
        <Title
          text={message + '\n' + title}
        />
      </Styled.TitleContainer>
      <Styled.MenuContainer className='menu-container'>
        <Link to={'/' + todayDate}>
          <Button
            text={'오늘의 문제'}
          />
        </Link>
      </Styled.MenuContainer>
    </Page>
  )
}

export default Main