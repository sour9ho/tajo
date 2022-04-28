import * as Styled from './styled'
import { useParams } from 'react-router-dom'
import { useAsync } from 'hooks/useAsync'
import { getAddress } from 'utils/getAddress'
import axios from 'axios'
import Page from 'pages/Page'
import Problem from 'components/Problem'

async function getData(address) {
  const response = await axios.get(address)
  return response.data
}

function Play() {
  
  const params = useParams()
  const address = getAddress('tajo', params.date)
  const { paperAddress } = address

  const [ paperState ] = useAsync(() => getData(paperAddress), [paperAddress])
  const { loading, data, error } = paperState

  if (loading) return <div>로딩중</div>
  if (error) return <div>에러</div>
  if (!data) return null

  return (
    <Page className='play'>
      <Problem data={data}/>
    </Page>
  )
}

export default Play