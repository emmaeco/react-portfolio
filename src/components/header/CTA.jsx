import React from 'react'

import CV from  '../../assets/CV.pdf'


const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV}  className='btn' download>Download Cv</a>
            <a href className='btn btn-primary'>LET TALK</a>

            
        </div>
    )
}

export default CTA
