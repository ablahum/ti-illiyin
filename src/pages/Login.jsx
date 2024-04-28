import Header from '../components/Header'
import banner from '../assets/banner.png'

const Login = ({ type, email }) => {
  return (
    <>
      <Header />

      <div className='flex items-center justify-between h-screen'>
        <div className='pl-[120px] w-1/2 h-full flex flex-col justify-center'>
          <div className='flex flex-col'>
            <div className='mb-8'>
              {type === 'email' ? (
                <h1 className='text-4xl font-semibold'>
                  <span className='capitalize'>sign </span>in to manage your property
                </h1>
              ) : type === 'password' ? (
                <h1 className='text-4xl font-semibold'>
                  <span className='capitalize'>enter </span>your password
                </h1>
              ) : (
                <h1 className='text-4xl font-semibold'>
                  <span className='capitalize'>forgot </span>your password?
                </h1>
              )}

              {type === 'email' ? (
                <p className='mt-3'>
                  <span className='capitalize'>create </span>an account to list and manage your property
                </p>
              ) : (
                <p className='mt-3'>
                  <span className='capitalize'>enter </span>your password for <span className='font-semibold'>{email}</span>
                </p>
              )}
            </div>

            <form>
              <div className='mb-6'>
                {type === 'email' || type === 'forget' ? (
                  <>
                    <label className='block text-sm font-medium capitalize'>email address</label>

                    <input
                      type='email'
                      id='email'
                      className='bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 mt-2'
                      placeholder='name@flowbite.com'
                      required
                    />
                  </>
                ) : (
                  <>
                    <label className='block text-sm font-medium capitalize'>password</label>

                    <input
                      type='password'
                      id='password'
                      className='bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 mt-2'
                      placeholder='Enter your password'
                      required
                    />
                  </>
                )}
              </div>

              {type === 'password' && (
                <p className='text-primary font-semibold mb-5'>
                  <span className='capitalize'>forgot </span>password?
                </p>
              )}

              <button
                type='submit'
                className='text-white bg-primary font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center capitalize'
              >
                continue
              </button>

              <hr className='mt-6 border-b-2 bg-neutral-100 dark:bg-white/10' />
            </form>

            <div className='mt-8'>
              {type === 'email' && (
                <button
                  type='submit'
                  className='bg-transparent border-2 border-primary font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mb-6'
                >
                  <span className='capitalize'>create </span>your partner account
                </button>
              )}

              <p className='text-center'>
                <span className='capitalize'>by </span>signing in or creating an account, you agree with our<span className='capitalize font-semibold text-primary'> terms & conditions </span>and
                <span className='font-semibold text-primary'>
                  <span className='capitalize'> privacy </span>statement
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className='ml-[72px] w-1/2 h-full'>
          <img
            src={banner}
            alt='banner'
            className='w-full h-full object-cover object-center'
          />
        </div>
      </div>
    </>
  )
}

export default Login
