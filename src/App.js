import React, { Component } from 'react'
import Header from './Components/Header'
import Details from './Components/Details'
import './App.css'
import Footer from './Components/Footer'

export default class App extends Component {

  render() {
    return (
      <div className='row'>
        <div className='col-lg-12 col-xs-12'>
          <div className='HeaderContainer'>
          <Header />
          </div>
          <div className='detailContainer'>
          <Details />
          </div>
        </div>  
        <div>
          <Footer/>
        </div>        
      </div>
    )
  }
}

