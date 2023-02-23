import React, { useState, useEffect } from 'react'
import { Layout, Button, List } from 'antd'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
} from 'mdb-react-ui-kit';



const config = {
  apiUrl: 'https://type.fit/api/quotes',
}

const { Content } = Layout


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
  useEffect(getQuotes, [])

  return (
    <Layout className='bg-transparent place-items-center'>
      <Content className="container m-8 w-80">
        <List
          size="small"
          loading={isLoading}
          header={
            <Button className='bg-black place-items-center font-mono ml-10 mr-10'
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
          renderItem={(setQuotes) => (
            <MDBCard className='flex w-2/5 text-center leading-loose text-lg'>
              <MDBCardBody>
                <MDBCardText className='w-80 p-3'>
                  <Quote text={setQuotes.text} author={setQuotes.author}/>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          )}
        />
      </Content>
    </Layout>
  )
}
