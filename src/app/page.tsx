import LeftSidebar from "./components/LeftSidebar"
import MainComponent from "./components/MainComponent"
import {BsSearch} from 'react-icons/bs'


const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* left sidebar for navigation/header */}
        <LeftSidebar />
        <MainComponent />
        <section className='fixed flex flex-col space-y-4'>
        <div>
          <div className='relative w-full h-full'>
            <div className='absolute top-0 left-0 h-full flex items-center justify-center'>
              <BsSearch className='w-5 h-5 text-gray-500'/>
              </div>
          <input type='text' placeholder='search' className='outline-none bg-transparent border-none w-full h-full rounded-xl py-4 px-6'/>
          </div>
        </div>
        <div></div>
        <div></div>
        </section>
      </div>
    </div>
  )
}

export default Home
