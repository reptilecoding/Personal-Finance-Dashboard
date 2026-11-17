import './App.css';
import {
  Link,
  NavLink,
  Routes,
  Route
} from "react-router";
import searchicon from './Images/search.png';
import noti from './Images/images.png';
import vault from './Images/money.png';
import dash from './Images/menu.png';
import analyze from './Images/analytics.png';
import card from './Images/credit-card.png';
import darrow from './Images/double-arrow-vertical-symbol.png';
import Week from './pages/1-week.jsx';
import OneMonth from './pages/1-month.jsx';
import ThreeMonth from './pages/3-month.jsx';
import OneYear from './pages/1-year.jsx';





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
            <img src={dash} alt="" className='size-7 bg-[#0D0D1C] rounded-md border border-white bg-white' />
            <h6 className='text-[#B8B8B8]'>Dashboard</h6>
          </div>
          <div className='flex items-center gap-3'>
            <img src={analyze} alt="" className='size-7 bg-[#0D0D1C] rounded-md border border-white bg-white' />
            <h6 className='text-[#B8B8B8]'>Analytics</h6>
          </div>
          <div className='flex items-center gap-3'>
            <img src={card} alt="" className='size-7 rounded-md border border-white bg-white' />
            <h6 className='text-[#B8B8B8]'>Cards</h6>
          </div>

          <div>
            <h5 className='text-[#B8B8B8] text-xs tracking-wider font-semibold mb-5 pt-4'>FINANCE</h5>
            <div className='flex items-center gap-3'>
              <img src={darrow} alt="" className='bg-[#0D0D1C] bg-white size-7 rounded-md border border-white' />
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
            <Link to="/Week" className='text-white '>1W</Link>
            <Link to='/OneMonth' className='text-white '>1M</Link>
            <Link to='/ThreeMonth' className='text-white '>3M</Link>
            <Link to='/OneYear' className='text-white '>1Y</Link> 
          </div>
          <div className='flex items-center gap-4'>
            <img src={searchicon} alt="Search " className='size-8 bg-[#111124] rounded-xl' />
            <img src={noti} alt="Notifications" className='size-8 bg-[#111124] rounded-xl' />
            <img src="" alt="Profile" className='size-10 bg-[#111124] rounded-full' />
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className='p-5'>
          <Routes>
            <Route path="/week" element={<Week />} />
            <Route path="/onemonth" element={<OneMonth />} />
            <Route path="/threemonth" element={<ThreeMonth />} />
            <Route path="/oneyear" element={<OneYear />} />
          </Routes>
          <div className='flex gap-4 '>
            <div className='bg-[#0D0D1C] w-[300px] h-[100px]  rounded-xl'>
              <h5 className='pl-5 pt-4 text-[10px] text-[#B8B8B8] tracking-wider'>NET WORTH</h5>
              <h2 className='pl-5 text-bold text-2xl text-white'>$0.000</h2>
              <h5 className='pl-5 pt-2 text-[10px] text-[#B8B8B8]'>+0% vs last quarter</h5>
            </div>
            <div className='bg-[#0D0D1C] w-[300px] h-[100px]  rounded-xl'>
              <h5 className='pl-5 pt-4 text-[10px] text-[#B8B8B8] tracking-wider'>MONTHLY INCOME</h5>
              <h2 className='pl-5 text-bold text-2xl text-white'>$0.000</h2>
              <h5 className='pl-5 pt-2 text-[10px] text-[#B8B8B8]'>+0$ vs last month</h5>
            </div>
            <div className='bg-[#0D0D1C] w-[300px] h-[100px]  rounded-xl'>
              <h5 className='pl-5 pt-4 text-[10px] text-[#B8B8B8] tracking-wider'>TOTAL SPENT</h5>
              <h2 className='pl-5 text-bold text-2xl text-white'>$0.000</h2>
              <h5 className='pl-5 pt-2 text-[10px] text-[#B8B8B8]'>+0% vs last month</h5>
            </div>
            <div className='bg-[#0D0D1C] w-[300px] h-[100px]  rounded-xl'>
              <h5 className='pl-5 pt-4 text-[10px] text-[#B8B8B8] tracking-wider'>SAVINGS RATE</h5>
              <h2 className='pl-5 text-bold text-2xl text-white'>0%</h2>
              <h5 className='pl-5 pt-2 text-[10px] text-[#B8B8B8]'>+0% target: 50%</h5>
            </div>
          </div>
          <div className='flex pt-5 gap-4'>
            <div className='bg-[#0D0D1C] w-[900px] h-[350px]  rounded-xl'>
              <div >
              <h5 className='text-white text-bold pl-5 pt-5'>Cash Flow Overview</h5>
              <h5 className='text-[#B8B8B8] pl-5'>Income vs Expenses - last 6 months</h5>
            </div>
            <div className='flex items-center'>
            <div className='flex items-center gap-2'>
              <h5 className='flex items-center gap-2'>Income</h5>
            </div>
            <div>
              <h5 className=''>Expenses</h5>
            </div>
            </div>
            </div>
            <div className='bg-[#0D0D1C] w-[350px] h-[350px]  rounded-xl'></div>
          </div>
            


        </main>
      </div>
    </div>
    
  )
}

export default App