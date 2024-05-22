import { Header, Body } from '../components'

const Login = ({ type, email, isSuccessful }) => (
  <>
    <Header />

    <Body
      type={type}
      email={email}
      isSuccessful={isSuccessful}
      successType={'reset'}
    />
  </>
)

export default Login
