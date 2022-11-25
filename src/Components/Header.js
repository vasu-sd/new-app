import React from 'react';
import logo from '../Starlogo.png';

const Header = () => {
  return (
    <div className='row'>
        <div className='col-lg-2 col-xs-12'>
            <img style={{width:'119px', height:'53px', paddingTop:'12px', paddingLeft:'18px'}} src={logo} alt=''/>
        </div>
        <div className='col-lg-5 col-xs-12 d-flex align-items-center' style={{paddingLeft:'103px'}}>
            <span className='proposal'>Proposal</span>
            <span>&#62;</span>
            <span className='createproposal'>Create Proposal</span>
        </div>
        <div className='col-lg-5'>

        </div>
    </div>
  )
}

export default Header