import React, { useState } from 'react'
import { Layout, Button, List } from 'antd'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';


const config = {
  apiUrl: 'https://type.fit/api/quotes',
  // repoUrl: 'https://github.com/ssokurenko/quotes-react-app'
}

const { Header, Content } = Layout


export default function Affirmation() {
  const [quotes, setQuotes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const Quote = ({ text, author }) => {
    return (
      <span>
        <strong>{text}</strong> &nbsp; <span>{author}</span>
      </span>
    )
  }

  function getRandomInt() {
    return Math.floor(Math.random() * 1634);
  }

  const getQuotes = () => {
    setQuotes([])
    setIsLoading(true)
    fetch(config.apiUrl)
      .then(function (response) {
        return response.json()
      })
      .then((data) => {
        setQuotes([data[getRandomInt()]])
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  return (
    <Layout>
      <Content className="container">
        <List
          size="small"
          loading={isLoading}
          header={
            <Button className='bg-black content-center'
              onClick={() => getQuotes()}
              type="primary"
              disabled={isLoading}
              size="large"
              color='black'>
              Daily Motivation!
            </Button>
          }
          bordered
          dataSource={quotes}
          // quoteArray={[quote]}
          renderItem={(setQuotes) => (
            <MDBCard className='flex w-2/5 text-center'>
              <MDBCardBody>
                <MDBCardText>
                  <Quote text={setQuotes.text} author={setQuotes.author} />
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          )}
        />
      </Content>
    </Layout>
  )
}
