import React,{useState} from 'react'
import Banner from '../../components/Banner/Banner'
import Main from '../../components/Main/Main';

function Homepage() {

  return (
    <div className='homepage'>
     <Banner />
     <Main />
    </div>
  )
}

export default Homepage