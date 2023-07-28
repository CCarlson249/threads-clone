import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsBookmark, BsEnvelope, BsTwitter} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'
import {HiEnvelope} from 'react-icons/hi2'
import Link from 'next/Link';

const NAVIGATION_ITEMS = [
  {
    title:'Twitter',
    icon:BsTwitter

  },
  {
    title: 'Home',
    icon:BiHomeCircle
  },
  {
    title:'Explore',
    icon:HiOutlineHashtag
  },
  {
    title:'Notifications',
    icon:BsBell
  },
  {
    title:'Messages',
    icon:BsEnvelope
  },
  {
    title:'Bookmarks',
    icon:BsBookmark
  },
  {
    title:'Profile',
    icon:BiUser
  }

  
]


const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* left sidebar for navigation/header */}
        <section className='fixed w-[275px] flex flex-col items-stretch h-screen'>
          <div className='flex flex-col items-stretch space-y-4 mt-4'>
            {NAVIGATION_ITEMS.map((item)=>(
                <Link className='hover:bg-white/10 text-3xl transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-3xl py-6 px-6'href={`/${item.title.toLowerCase()}`} key={item.title}>
                  <div>
                      <item.icon/>
                  </div>
                  {item.title !== 'Twitter' && <div>{item.title}</div>}

                </Link>
              ))}
            <button className='rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200'>
              Tweet
            </button>
            </div>
            <div>
              at the bottom
            </div>
        </section>
        <main>Home Timeline</main>
        <section>right section</section>
      </div>
    </div>
  )
}

export default Home
