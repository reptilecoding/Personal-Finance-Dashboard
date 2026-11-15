import './App.css'

function App() {


  return (
    <>
    {/* SIDEBAR */}
      <nav className='bg-[#07066b] w-[200px] h-[300px]'>
        <div className='p-5 flex items-center gap-2'>
          <img src="" alt="" className='size-12 bg-white rounded-xl'/>
          <h1 className='text-white font-bold text-xl'>Vault</h1>
        </div>  
        <div >
          <div className=''>
            <h2 className='text-white text-xs'>OVERVIEW</h2>
            <div className='w-fit p-6 flex items-center gap-2 border border-gray-400 px-6 py-1 rounded-lg'>
              <img src="" alt="" className='size-10 bg-white'/>
              <h6 className='text-[#B8B8B8] '>Dashboard</h6>
            </div>
            <div className='w-fit p-6 flex items-center gap-2 border border-gray-400 px-6 py-1 rounded-lg'>
              <img src="" alt="" className='size-10 bg-white'/>
              <h6 className='text-[#B8B8B8] '>Analytics</h6>
            </div>
            <div className='w-fit p-6 flex items-center gap-2 border border-gray-400 px-6 py-1 rounded-lg'>
              <img src="" alt="" className='size-10 bg-white'/>
              <h6 className='text-[#B8B8B8] '>Cards</h6>
            </div>
          </div>
          <h3>Finance</h3>
          <div>Transcations</div>
        </div>
      </nav>
    </>
  )
}

export default App
