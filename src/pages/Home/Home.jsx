import React from 'react'
import Categories from '../../components/Categories/Categories'
import Slider from '../../components/Slider/Slider'

function Home() {
  return (
    <section className='home'>
      <div className='max-w-full m-auto flex justify-between px-14'>
        <Categories/>
        <Slider/>
      </div>
    </section>
  )
}

export default Home