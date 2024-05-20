import banner from '../assets/banner.png'
import { Form, Success } from './index'

const Body = ({ type, email, isSuccessful }) => (
  <div className='flex items-center justify-between h-screen md:gap-16 xs:gap-8 gap-0'>
    {isSuccessful ? (
      <>
        <Success
          type={type}
          email={email}
        />
      </>
    ) : (
      <>
        <Form
          type={type}
          email={email}
        />

        <div className='md:w-1/2 xs:w-1/4 w-full h-full'>
          <img
            src={banner}
            alt='banner'
            className='w-full h-full object-cover object-center'
          />
        </div>
      </>
    )}
  </div>
)

export default Body
