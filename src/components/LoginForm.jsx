const LoginForm = ({ type, handleChange, handleClick, data, handleForget }) => (
  <>
    <div className='mb-8'>
      {type === 'email' ? (
        <>
          <h1 className='text-4xl font-semibold'>
            <span className='capitalize'>sign </span>in to manage your property
          </h1>

          <p className='mt-3'>
            <span className='capitalize'>create </span>an account to list and manage your property
          </p>
        </>
      ) : type === 'password' ? (
        <>
          <h1 className='text-4xl font-semibold'>
            <span className='capitalize'>enter </span>your password
          </h1>

          <p className='mt-3'>
            <span className='capitalize'>enter </span>your password for <span className='font-semibold'>{data.email}</span>
          </p>
        </>
      ) : (
        <>
          <h1 className='text-4xl font-semibold'>
            <span className='capitalize'>forgot </span>your password?
          </h1>

          <p className='mt-3'>
            <span className='capitalize'>confirm </span>your username and we'll send you a link to reset your password.
          </p>
        </>
      )}
    </div>

    <div>
      <div className='mb-6'>
        {type === 'password' ? (
          <>
            <label className='block text-sm font-medium capitalize'>password</label>

            <input
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 mt-2'
              placeholder='Enter your password'
              required
              onChange={handleChange}
              value={data.password}
            />
          </>
        ) : (
          <>
            <label className='block text-sm font-medium capitalize'>email address</label>

            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 mt-2'
              placeholder='name@flowbite.com'
              required
              onChange={handleChange}
              value={data.email}
            />
          </>
        )}
      </div>

      {type === 'password' && (
        <button
          className='text-primary font-semibold mb-5'
          onClick={handleForget}
        >
          <span className='capitalize'>forgot </span>password?
        </button>
      )}

      <button
        type='submit'
        className='text-white bg-primary font-medium rounded-lg text-sm w-full px-5 py-3 text-center capitalize'
        onClick={(e) => handleClick(e)}
      >
        continue
      </button>
    </div>

    <hr className='mt-6 border-b-2 bg-neutral-100 dark:bg-white/10' />

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
  </>
)

export default LoginForm
