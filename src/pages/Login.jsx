import { Header, Body } from '../components'

const Login = ({ type, isSuccessful, handleChange, handleClick, data, handleForget, maskEmail }) => (
  <>
    <Header />

    <Body
      type={type}
      handleChange={handleChange}
      handleClick={handleClick}
      data={data}
      handleForget={handleForget}
      isSuccessful={isSuccessful}
      successType={'reset'}
      maskEmail={maskEmail}
    />
  </>
)

export default Login
