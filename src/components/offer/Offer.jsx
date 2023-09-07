import React from 'react'
import './Offer.css'
import GRILL from '../../asset/grill.png'

export default function Offer() {
  return (
    <div className='offerdiv'>
        <div className='offerleft'>
            <div className='offercont'>
                <div className='frstxt'>Special Offer</div>
                <div className='secndtxt'>GOOD FOOD, DRINKS & GREAT COMPANY.</div>
                <div className='thirdtxt'>As well known and we are very busy all days advice you. advice you to call
                        us of before arriving, so we can guarantee your seat. advice you to call us of before arriving As well known and we are very busy all days advice you
                </div>
                <div className='last'>
                <button className='orderbtn'>ORDER NOW</button>
                <p className='price'>$46.99</p>
                <p className='oprice'>$59.99</p>
                </div>
            </div>
        </div>
        <div className='offerright'>
           <div className='grill'>
            <img src={GRILL} className="imggrill" alt="" />
           </div>
        </div>
        
    </div>
    
  )
}
