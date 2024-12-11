import React from 'react'

const Home = () => {
  return (
    <>
    <header className='min-h-[90vh] bg-[url(/backgrounds/mecque-3.png)] bg-cover bg-top relative'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-tl to-[#00000083] from-transparent'></div>
      <div>

      </div>
    </header>
    <main className='min-h-[300px] flex flex-wrap justify-center gap-[1px]'>
      <div className='flex-basis-[300px] h-[250px] grow  bg-bleu-nuit'></div>
      <div className='flex-basis-[300px] h-[250px] grow  bg-bleu-nuit'></div>
      <div className='flex-basis-[300px] h-[250px] grow bg-orange-100'></div>

    </main>
    </>
  )
}

export default Home