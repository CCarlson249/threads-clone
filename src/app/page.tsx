import LeftSidebar from "./components/LeftSidebar"



const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* left sidebar for navigation/header */}
        <LeftSidebar />
        <main className='ml-[275px] mx-2 p-6 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
          <h1 className='text-xl font-bold'>Home</h1>
          <div className=''></div>
          </main>
        {/*<section>right section</section>*/}
      </div>
    </div>
  )
}

export default Home
