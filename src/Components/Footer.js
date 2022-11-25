import React from 'react'

const Footer = () => {
  return (
    <div className='row Footer'>
        <div className='col-lg-6 col-xs-0'>
            <button className='back' type="">Back</button>
        </div>
        <div className='col-lg-3 col-xs-12'>
            <button className='save' type="">Save as Draft</button>
            <button className='next' type="">Next</button>
        </div>
    </div>
  )
}

export default Footer