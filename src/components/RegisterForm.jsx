const RegisterForm = ({ type }) => (
  <>
    <div className='mb-8'>
      {type !== 'email' && type !== 'contact' && (
        <div className='flex mb-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 me-2 text-primary'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5 8.25 12l7.5-7.5'
            />
          </svg>

          <p className='capitalize font-semibold'>back</p>
        </div>
      )}

      {type === 'email' ? (
        <>
          <h1 className='text-4xl font-semibold'>
            <span className='capitalize'>create </span>your partner account
          </h1>

          <p className='mt-3'>
            <span className='capitalize'>create </span>an account to list and manage your property
          </p>
        </>
      ) : type === 'contact' ? (
        <>
          <h1 className='text-4xl font-semibold'>
            <span className='capitalize'>contact </span>details
          </h1>

          <p className='mt-3'>
            <span className='capitalize'>create </span>your partner account create an account to list and manage your property
          </p>
        </>
      ) : (
        <>
          <h1 className='text-4xl font-semibold'>
            <span className='capitalize'>create </span>password
          </h1>

          <p className='mt-3'>
            <span className='capitalize'>use </span>a minimum of 10 characters, including uppercase letters, lowercase letters and numbers.
          </p>
        </>
      )}
    </div>

    <form>
      <div className='mb-6'>
        {type === 'contact' ? (
          <>
            <div className='mb-6'>
              <label className='block text-sm font-medium capitalize'>first name</label>
              <input
                type='text'
                id='first-name'
                className='bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 mt-2'
                placeholder='Enter your first name'
                required
              />
            </div>

            <div className='mb-6'>
              <label className='block text-sm font-medium capitalize'>last name</label>
              <input
                type='text'
                id='last-name'
                className='bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 mt-2'
                placeholder='Enter your last name'
                required
              />
            </div>

            <div className='mb-6'>
              <label className='block text-sm font-medium capitalize'>username</label>
              <input
                type='text'
                id='username'
                className='bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 mt-2'
                placeholder='Enter your username'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium capitalize'>phone number</label>

              <div className='flex mt-2'>
                <button
                  id='dropdown-button'
                  data-dropdown-toggle='dropdown'
                  className='flex-shrink-0 z-10 inline-flex items-center p-2.5 text-sm text-center text-gray-500 bg-gray-50 border border-gray-300 border-e-0 rounded-s-lg'
                  type='button'
                >
                  +1
                  <svg
                    className='w-2.5 h-2.5 ms-2.5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m1 1 4 4 4-4'
                    />
                  </svg>
                </button>

                <div
                  id='dropdown'
                  className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44'
                >
                  <ul
                    className='py-2 text-sm text-gray-700 dark:text-gray-200'
                    aria-labelledby='dropdown-button'
                  >
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Shopping
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Images
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Finance
                      </a>
                    </li>
                  </ul>
                </div>

                <input
                  type='text'
                  id='phone-number'
                  className='bg-gray-50 border border-gray-300 rounded-e-lg w-full p-2.5'
                  placeholder='(888) 888-888'
                  required
                />
              </div>
            </div>
          </>
        ) : type === 'email' ? (
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
            <div>
              <label className='block text-sm font-medium capitalize'>password</label>

              <input
                type='password'
                id='password'
                className='bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 mt-2'
                placeholder='Enter your password'
                required
              />
            </div>

            <div className='mt-6'>
              <label className='block text-sm font-medium capitalize'>confirm password</label>

              <input
                type='password'
                id='password'
                className='bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 mt-2'
                placeholder='Enter your password'
                required
              />
            </div>
          </>
        )}
      </div>

      {type === 'contact' && (
        <div className='bg-gray-100 p-5 flex items-center rounded-lg border-s-8 border-s-[#475BCA] mb-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8 me-2 text-[#475BCA]'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
            />
          </svg>

          <p className='text-sm'>
            <span className='capitalize'>we'll </span>text a two-factor authentication code to this number when you sign in.
          </p>
        </div>
      )}

      <button
        type='submit'
        className='text-white bg-primary font-medium rounded-lg text-sm w-full px-5 py-3 text-center capitalize'
      >
        continue
      </button>
    </form>

    <hr className='mt-6 border-b-2 bg-neutral-100 dark:bg-white/10' />

    <div className='mt-8'>
      {type === 'email' && (
        <button
          type='submit'
          className='bg-transparent border-2 border-primary font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mb-6 capitalize'
        >
          login
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

export default RegisterForm
