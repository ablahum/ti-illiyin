import { useState } from 'react'
import { Login, Register } from './pages'

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
        // type={'email'}
        // type={'password'}
        email={data.email}
        isSuccessful={isSuccessful}
      />

      {/* <Register
        // type={'email'}
        // type={'contact'}
        type={'password'}
        email={data.email}
        isSuccessful={isSuccessful}
      /> */}
    </>
  )
}

export default App
