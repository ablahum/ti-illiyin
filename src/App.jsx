import { useState } from 'react'
import { Login, Register } from './pages'
import { forgot, login } from './apis'

function App() {
  const [data, setData] = useState({
    // name: '',
    email: '',
    password: '',
  })
  const [type, setType] = useState('email')
  const [isSuccessful, setIsSuccessful] = useState(false)

  const maskEmail = (string) => {
    const [localPart, domain] = string.split('@')

    const maskedLocalPart = localPart[0] + '*'.repeat(localPart.length - 1)
    const [domainName, domainTLD] = domain.split('.')
    const maskedDomainName = domainName[0] + '*'.repeat(domainName.length - 1)

    const maskedEmail = `${maskedLocalPart}@${maskedDomainName}.${domainTLD}`

    return maskedEmail
  }

  const handleChange = (e) =>
    setData(() => ({
      ...data,
      [e.target.id]: e.target.value,
    }))

  const handleSubmit = async (e) => {
    if (data.email.length > 0 && type === 'email') setType('password')

    if (data.email.length > 0 && type === 'forgot') {
      e.preventDefault()
      const { email } = data

      try {
        const res = await forgot({ email })

        if (res.data.success) {
          setIsSuccessful(true)
        } else {
          alert(res.data.errors)
          setIsSuccessful(true)
        }
      } catch (err) {
        console.log(err)
      }
    }

    if (data.email.length > 0 && data.password.length > 0) {
      e.preventDefault()
      const { email, password } = data

      try {
        const res = await login({ email, password })

        if (res.data.success) {
          alert('Login successful.')
        } else {
          alert(res.data.errors)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <>
      <Login
        type={type}
        handleChange={handleChange}
        handleClick={handleSubmit}
        handleForget={() => {
          setData(() => ({
            ...data,
            email: '',
          }))
          setType('forgot')
        }}
        data={data}
        maskEmail={maskEmail}
        isSuccessful={isSuccessful}
      />

      {/* <Register
        // type={'email'}
        type={'contact'}
        email={data.email}
        isSuccessful={isSuccessful}
      /> */}
    </>
  )
}

export default App
