import React from 'react'

const Home = () => {
  return (
    <>
    <header className='min-h-[90vh] bg-[url(/backgrounds/mecque-3.png)] bg-cover bg-top relative -z-10'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-tl to-[#00000083] from-transparent -z-10'></div>
      <div className='max-w-[1200px] m-auto py-12'>
        <span className='text-white text-center block'>Votre chemin pour l'avenir</span>
        <h1 className='text-white text-5xl'></h1>
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