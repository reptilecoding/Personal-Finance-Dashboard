import './App.css'
import searchicon from './Images/search.png'
import noti from './Images/images.png'
import vault from './Images/money.png'
import dash from './Images/menu.png'
import analyze from './Images/analytics.png'
import card from './Images/credit-card.png'
import darrow from './Images/double-arrow-vertical-symbol.png'




function App() {
  return (
    <div className='min-h-screen bg-gray-950'>
      {/* FIXED SIDEBAR */}
      <nav className='fixed top-0 left-0 h-[375px] w-[250px] bg-[#0D0D1C] overflow-y-auto'>
        <div className='p-7 flex items-center gap-2'>
          <img src={vault} alt="Vault" className='size-12 bg-[#0D0D1C]' />
          <h1 className='text-white font-bold text-xl'>Vault</h1>
        </div>

        <div className='flex flex-col gap-4 pl-7'>
          <h2 className='text-[#B8B8B8] text-xs font-semibold tracking-wider mb-1 pl-2'>OVERVIEW</h2>
          <div className='flex items-center gap-3'>
            <img src={dash} alt="" className='size-7 bg-[#0D0D1C] rounded-md' />
            <h6 className='text-[#B8B8B8]'>Dashboard</h6>
          </div>
          <div className='flex items-center gap-3'>
            <img src={analyze} alt="" className='size-7 bg-[#0D0D1C] rounded-md' />
            <h6 className='text-[#B8B8B8]'>Analytics</h6>
          </div>
          <div className='flex items-center gap-3'>
            <img src={card} alt="" className='size-7 bg-[#0D0D1C] rounded-md' />
            <h6 className='text-[#B8B8B8]'>Cards</h6>
          </div>

          <div>
            <h5 className='text-[#B8B8B8] text-xs tracking-wider font-semibold mb-5 pt-4'>FINANCE</h5>
            <div className='flex items-center gap-3'>
              <img src={darrow} alt="" className='bg-[#0D0D1C] size-7 rounded-md' />
              <h5 className='text-[#B8B8B8]'>Transactions</h5>
              <span className='ml-5 inline-flex items-center justify-center bg-[#FF486B] text-white text-xs font-medium px-2.5 py-0.5 rounded-full'>
                0
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN AREA (STARTS RIGHT AT THE SIDEBAR'S EDGE) */}
      <div className='ml-[250px]'>
        {/* TOP NAVIGATION BAR */}
        <header className='bg-[#07070F] h-20 px-8 flex items-center justify-between border-b border-gray-800'>
          <div>
            <h3 className='text-white font-bold'>Good morning, User</h3>
          </div>
          <div className='flex items-center pl-6 gap-8 ml-150 bg-[#111124] h-10 w-60 rounded-xl text-s font-bold'>
            <button className='text-white '>1W</button>
            <button className='text-white '>1M</button>
            <button className='text-white '>3M</button>
            <button className='text-white '>1Y</button> 
          </div>
          <div className='flex items-center gap-4'>
            <img src={searchicon} alt="Search " className='size-8 bg-[#111124] rounded-xl' />
            <img src={noti} alt="Notifications" className='size-8 bg-[#111124] rounded-xl' />
            <img src="" alt="Profile" className='size-10 bg-[#111124] rounded-full' />
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className='p-8 text-white'>
          {/* Your dashboard content goes here */}
        </main>
      </div>
    </div>
  )
}

export default App