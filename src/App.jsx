import React from 'react'
import Header from './components/Header'
import Element from './components/Element'
import Footer from './components/Footer'
import data from './data'

function App() {
  const elements = data.map(item =>{
      return (
        <Element 
          key={item.id}
          {...item}
        />
      )
  })

  return (
    <>
     <Header/>
     <section className='elements-list'>
        {elements}
      </section>
      <Footer/>
    </>
  )
}

export default App
