import { useState } from 'react'
import Login from './pages/Login'

function App() {
  const [data, setData] = useState({
    name: '',
    email: 'asd@gmaili.com',
    password: '',
  })
  const [isSuccessful, setIsSuccessful] = useState(true)

  return (
    <>
      <Login
        type={'email'}
        // type={'password'}
        // type={'forget'}
        email={data.email}
        isSuccessful={isSuccessful}
      />
    </>
  )
}

export default App
