import LeftSidebar from "./components/LeftSidebar"
import AuthForm from "./auth-form"


const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* left sidebar for navigation/header */}
        <LeftSidebar />
        <main className='ml-[275px] mx-2 p-6 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
          <h1 className='text-xl font-bold'>Home</h1>
          <h1 className="header">Supabase Auth + Storage</h1>
          <p className="">Lorem Ipsum, we log in ya and log ya out</p>
          <div className=''></div>
          <AuthForm />
          </main>
        {/*<section>right section</section>*/}
      </div>
    </div>
  )
}

export default Home
