import LeftSidebar from "./components/LeftSidebar"
//import AuthForm from "./auth-form"
import { BsDot, BsChat, BsShare, BsThreeDots } from "react-icons/bs"
import {AiOutlineRetweet, AiOutlineHeart} from 'react-icons/ai'
import {ImStatsBars} from 'react-icons/im'
import Login from "./login"
import MainComponent from "./components/MainComponent"
import {BsSearch} from 'react-icons/bs'


const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* left sidebar for navigation/header */}
        <LeftSidebar />
        <main className='ml-[275px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
          <h1 className='text-xl font-bold my-4 p-6 backdrop-blur bg-black/10 sticky top-0'>Home</h1>
          <h1 className="header">Supabase Auth + Storage</h1>
          <p className="">Lorem Ipsum, we log in ya and log ya out</p>
          <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600 relative'>
          <div className='w-11 h-11 bg-slate-400 rounded-full flex-none'></div>
          <div className='flex flex-col w-full h-full'>
            
                <input type='text' 
                className='w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none' 
                placeholder='whats happening?'/>
            
            <div className='w-full justify-between items-center flex'>
            <div>

            </div>
            <div className='w-full max-w-[100px]'>
              <button className='rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold'>
                Tweet
                </button>
            </div>
            </div>
            </div>
            </div>
            
            <div className='flex flex-col'>
          {
            Array.from({length:5}).map((_,i)=>(
              <div key={i} className='border-b-[0.5px] border-gray-600 p-4 flex space-x-4'>
                <div>
                    <div className='w-10 h-10 bg-slate-200 rounded-full'/>
                </div>
                <div className='flex flex-col'>
                  <div className='flex items-center my-1'>
                    <div className='flex items-center space-x-1'>
                    <div className='font-bold'>Username</div>
                    <div className='text-gray-500'>@username</div>
                    <div className='text-gray-500'>
                      <BsDot/>
                    </div>
                    <div className='text-gray-500'>1 hour ago</div>
                    <div><BsThreeDots/></div>
                  </div>
                  </div>
                  <div className='text-white text-base my-1'>
                    lorem ipsum
                  </div>
                  <div className='bg-slate-400 aspect-square w-full h-96'>

                  </div>
                  <div className='flex items-center justify-start space-x-20 mt-2 w-full'>
                    <div className='rounded-full hover:bg-white/25 transition duration-200 p-2 cursor-pointer'><BsChat/></div>
                    <div className='rounded-full hover:bg-white/25 transition duration-200 p-2 cursor-pointer'><AiOutlineRetweet/></div>
                    <div className='rounded-full hover:bg-white/25 transition duration-200 p-2 cursor-pointer'><AiOutlineHeart/></div>
                    <div className='rounded-full hover:bg-white/25 transition duration-200 p-2 cursor-pointer'><ImStatsBars/></div>
                    <div className='rounded-full hover:bg-white/25 transition duration-200 p-2 cursor-pointer'><BsShare/></div>
                  </div>
                </div>
              </div>
            ))
          }
            </div>
            <Login />
          {/*<AuthForm />*/}
          </main>
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
