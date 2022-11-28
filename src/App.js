import React, { Component } from 'react';
import './App.css';
import logo from './Starlogo.png';
import { useState } from 'react';
import { Form } from 'react-bootstrap'

const App = () => {

  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [income, setIncome] = useState('');
  const [gst, setGst] = useState('');
  const [gstNum, setGstnum] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("All Data", name, dob, mobile, occupation, email, gender, income, gst, gstNum);
  }

  return (
    <div className='row'>
      <Form onSubmit={submitHandler}>
      <div className='col-lg-12 col-xs-12'>
        <div className='HeaderContainer'>
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
        </div>
        <div className='detailContainer'>
        <div className='row'>
        <div style={{fontWeight: '400',fontSize: '22px',lineHeight: '26px',color: '#000000', paddingBottom:'6px'}}>
        Proposer Detail
        </div>
        <div style={{fontWeight: '400',fontSize: '16px',lineHeight: '19px',color: '#333333', paddingBottom:'36px'}}>
        Star Women Care Policy
        </div>
        <div className='row'>
            <div className='col-xs-12 col-lg-3 marbtm'>
            <label className='labels' for="Name">Name<span>&#42;</span></label>
            <div>
                <input className='inputFields' value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Enter'/>
            </div>
            </div>
            <div className='col-xs-12 col-lg-3 marbtm'>
            <label className='labels' for="DOB">Date of Birth<span>&#42;</span></label>
            <div>
                <input className='inputFields' value={dob} onChange={e => setDob(e.target.value)} type='text' placeholder='DD/MM/YYYY'/>
            </div>
            </div>
            <div className='col-xs-12 col-lg-3 marbtm'>
            <label className='labels' for="Mobile">Mobile<span>&#42;</span></label>
            <div>
                <input className='inputFields' value={mobile} onChange={e => setMobile(e.target.value)} type='text' placeholder='Enter'/>
            </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-xs-12 col-lg-3 marbtm'>
            <label className='labels' for="Occupation">Occupation<span>&#42;</span></label>
            <div>
                <select className='inputFields' onChange={e => setOccupation(e.target.value) } value={occupation} name='Occupation'>
                <option defaultValue="" >select</option>
                <option value="Engineer" >Engineer</option>
                </select>
            </div>
            </div>
            <div className='col-xs-12 col-lg-3 marbtm'>
            <label className='labels' for="Email">Email<span>&#42;</span></label>
            <div>
                <input className='inputFields' value={email} onChange={e => setEmail(e.target.value)} type='text' placeholder='Enter'/>
            </div>
            </div>
            <div className='col-xs-12 col-lg-3 marbtm'>
            <label className='labels' for="Gender">Gender<span>&#42;</span></label>
            <div>
            <select className='inputFields' onChange={ e=> setGender(e.target.value)} value={gender} name='Gender'>
                <option defaultValue="">select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select>
            </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-xs-12 col-lg-3 marbtm'>
            <label className='labels' for="Income">Annual Income<span>&#42;</span></label>
            <div>
                <input className='inputFields' value={income} onChange={e => setIncome(e.target.value)} type='text'/>
            </div>
            </div>
            <div className='col-xs-12 col-lg-3 marbtm'>
            <label className='labels' for="Gst">GST Type</label>
            <div>
                <input className='inputFields' value={gst} onChange={e => setGst(e.target.value)}  type='text' placeholder='Enter'/>
            </div>
            </div>
            <div className='col-xs-12 col-lg-3 marbtm'>
            <label className='labels' for="GstNum">GST ID Number</label>
            <div>
                <input className='inputFields' value={gstNum} onChange={e => setGstnum(e.target.value)}  type='text' placeholder='Enter'/>
            </div>
            </div>
        </div>

    </div>
        </div>
      </div>  
      <div>
        <div className='row Footer'>
        <div className='col-lg-6 col-xs-0'>
            <button className='back' type="">Back</button>
        </div>
        <div className='col-lg-3 col-xs-12'>
            <button className='save' type="">Save as Draft</button>
            <button className='next' type="Submit">Next</button>
        </div>
      
      </div>
      </div>   
      </Form>     
    </div>
  )
}

export default App

