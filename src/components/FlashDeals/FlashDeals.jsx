import React from 'react'
import FlashCard from './FlashCard/FlashCard'

function FlashDeals() {
  return (
    <>
        <section className='flash background p-5'>
            <div className='max-w-full m-auto '>
                <div className='text-4xl font-semibold flex'>
                    <i className='fa fa-bolt me-1 text-blue-950'></i>
                    <h1>Flash Deals</h1>
                </div>
                <FlashCard/>
            </div>

        </section>
    </>
  )
}

export default FlashDeals