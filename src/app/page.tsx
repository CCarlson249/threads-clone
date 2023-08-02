import LeftSidebar from "./components/LeftSidebar"
//import AuthForm from "./auth-form"
import { BsDot, BsChat, BsShare, BsThreeDots } from "react-icons/bs"
import {AiOutlineRetweet, AiOutlineHeart} from 'react-icons/ai'
import {ImStatsBars} from 'react-icons/im'
import Login from "./login"
import MainComponent from "./components/MainComponent"
import {BsSearch} from 'react-icons/bs'
import RightSection from "./components/RightSection"


const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* left sidebar for navigation/header */}
        <LeftSidebar />
        <MainComponent />
        <RightSection />
        
      </div>
    </div>
  )
}

export default Home
