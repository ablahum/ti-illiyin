import logo from '../assets/logo.png'

const Header = () => (
  <div className='flex items-center justify-between bg-secondary text-white px-[72px] py-5'>
    <div className='grow'>
      <img
        src={logo}
        alt='logo'
      />
    </div>

    <div className='flex items-center justify-between'>
      <button className='flex items-center capitalize'>
        <svg
          className='h-8 w-8 me-1'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          stroke='currentColor'
          fill='none'
        >
          <path
            stroke='none'
            d='M0 0h24v24H0z'
          />
          <circle
            cx='12'
            cy='12'
            r='9'
          />
          <line
            x1='3.6'
            y1='9'
            x2='20.4'
            y2='9'
          />
          <line
            x1='3.6'
            y1='15'
            x2='20.4'
            y2='15'
          />
          <path d='M11.5 3a17 17 0 0 0 0 18' /> <path d='M12.5 3a17 17 0 0 1 0 18' />
        </svg>
        en
      </button>

      <div className='inline-block h-[20px] min-h-[1em] w-px bg-white mx-8'></div>

      <button className='bg-transparent font-semibold py-2.5 px-6 border-2 border-primary rounded-xl capitalize'>help</button>
    </div>
  </div>
)

export default Header
