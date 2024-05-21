import { Header, Body } from '../components'

const Register = ({ type, email, isSuccessful }) => (
  <>
    <Header />

    <Body
      type={type}
      email={email}
      isSuccessful={isSuccessful}
      isRegister
    />
  </>
)

export default Register
