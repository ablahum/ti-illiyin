import { Header, Body } from '../components'

const Register = ({ type, isSuccessful }) => (
  <>
    <Header />

    <Body
      isRegister
      type={type}
      isSuccessful={isSuccessful}
      successType={'create'}
    />
  </>
)

export default Register
