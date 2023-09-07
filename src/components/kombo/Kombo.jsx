import React from 'react'
import './Kombo.css'
import BLACK from '../../asset/blkburg.png'

export default function Kombo() {
  return (
    <div className='combomain'>
        <div className='comboleft'>
        <div className='offerleft'>
            <div className='offercont'>
                <div className='frstxt'>Special Kombo Pack</div>
                <div className='secndtxtK'>WE MAKE THE BEST BURGER IN YOUR TOWN</div>
                <div className='thirdtxt'>As well known and we are very busy all days advice you. advice you to call
                        us of before arriving, so we can guarantee your seat. advice you to call us of before arriving As well known and we are very busy all days advice you
                </div>
                <div className='last'>
                <button className='orderbtn'>ORDER NOW</button>
                <p className='price'>$46.99</p>
                <p className='opricek'>$59.99</p>
                </div>
            </div>
        </div>
        </div>
        <div className='comboright'>
            <div className='comboimg'>
                <img src={BLACK}  className="blackburg" alt="" />
            </div>
        </div>
    </div>

  )
}
