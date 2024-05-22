import banner from '../assets/banner.png'
import RegisterForm from './RegisterForm'
import { LoginForm, Success } from './index'

const Body = ({ type, successType, isSuccessful, isRegister, handleChange, handleClick, data, handleForget }) => (
  <div className='h-screen container mx-auto'>
    {isSuccessful ? (
      <Success
        successType={successType} // create or reset
        email={data.email}
      />
    ) : (
      <div className='h-full flex items-center md:gap-16 xs:gap-8 gap-0 xs:absolute relative'>
        <div className='md:w-1/2 xs:w-3/4 w-full flex flex-col xs:bg-transparent bg-white p-8 xs:p-0 xs:rounded-none rounded-lg absolute xs:static top-0 left-0 right-0'>
          {isRegister ? (
            <RegisterForm type={type} />
          ) : (
            <LoginForm
              type={type}
              data={data}
              handleChange={handleChange}
              handleClick={handleClick}
              handleForget={handleForget}
            />
          )}
        </div>

        <div className='md:w-1/2 xs:w-1/4 h-full'>
          <img
            src={banner}
            alt='banner'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    )}
  </div>
)

export default Body
