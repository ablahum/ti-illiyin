const Success = ({ successType, email }) => (
  <div className='w-full h-full flex flex-col justify-center items-center text-center container mx-auto'>
    <div className='text-primary'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-12 h-12'
      >
        <path
          fillRule='evenodd'
          d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
          clipRule='evenodd'
        />
      </svg>
    </div>

    <div className='my-10'>
      {successType === 'create' ? (
        <h1 className='text-4xl font-semibold'>
          <span className='capitalize'>verify </span> your email address
        </h1>
      ) : (
        <h1 className='text-4xl font-semibold'>
          <span className='capitalize'>check </span>your inbox
        </h1>
      )}

      {successType === 'create' ? (
        <p className='mt-3'>
          <span className='capitalize'>we </span>sent you an email with a verification link to <span className='font-semibold'>{email}. </span>
          <br className='hidden md:inline' />
          <span className='capitalize'>to </span>confirm your account please follow the link in the email we just sent.
        </p>
      ) : (
        <p className='mt-3'>
          <span className='capitalize'>we </span>just emailed instructions and a reset password link to <span className='font-semibold'>{email}. </span>
          <br className='hidden md:inline' />
          <span className='capitalize'>it </span>might take a few minutes to arrive.
        </p>
      )}
    </div>

    <button
      type='submit'
      className='text-white bg-primary font-medium rounded-lg text-sm md:w-1/2 w-full px-5 py-3 text-center'
    >
      <span className='capitalize'>open </span>your email
    </button>
  </div>
)

export default Success
