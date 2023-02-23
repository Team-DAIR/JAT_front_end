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
    return Math.floor(Math.random() * quotes.length);
  }

  const getQuotes = () => {
    setQuotes([])
    setIsLoading(true)
    fetch(config.apiUrl)
      .then(function (response) {
        return response.json()
      })
      .then((data) => {
        setQuotes(data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }
  console.log(quotes);
  let indexOfQuote = getRandomInt();
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
          renderItem={(quote) => (
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  <Quote text={quotes.text} author={quotes.author} />
                </MDBCardText>
                <MDBBtn>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          )}
        />
      </Content>
    </Layout>
  )
}
