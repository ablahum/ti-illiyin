import Header from '../components/Header'
import banner from '../assets/banner.png'

const Login = () => {
  return (
    <>
      <Header />

      <div className='flex items-center justify-between'>
        <div className='flex flex-col w-1/2 me-[4.5em]'>
          <div>
            <h1 className='text-4xl font-semibold'>
              <span className='capitalize'>sign </span>in to manage your property
            </h1>

            <p className='mt-3'>
              <span className='capitalize'>create </span> an account to list and manage your property
            </p>
          </div>

          <div className='my-8'>
            <form>
              <div className='mb-6'>
                <label className='block text-sm font-medium'>
                  <span className='capitalize'>email </span>address
                </label>

                <input
                  type='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2'
                  placeholder='name@flowbite.com'
                  required
                />
              </div>

              <button
                type='submit'
                className='text-white bg-primary font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center capitalize'
              >
                continue
              </button>
            </form>

            <hr className='mt-6 border-b-2 bg-neutral-100 dark:bg-white/10' />
          </div>

          <div>
            <button
              type='submit'
              className='bg-transparent border-2 border-primary font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
            >
              <span className='capitalize'>create </span>your partner account
            </button>

            <p className='text-center mt-6'>
              <span className='capitalize'>by </span>signing in or creating an account, you agree with our <span className='capitalize font-semibold text-primary'>terms & conditions </span> and{' '}
              <span className='font-semibold text-primary'>
                <span className='capitalize'>privacy </span>statement
              </span>
            </p>
          </div>
        </div>

        <div className='w-1/2'>
          <img
            src={banner}
            alt='banner'
            className='w-full h-full'
          />
        </div>
      </div>
    </>
  )
}

export default Login
