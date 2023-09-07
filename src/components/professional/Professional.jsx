import React from 'react'
import './Professionsl.css'
import IPHONEOG from '../../asset/iphoneog.png'

export default function Professional() {
  return (
    <div className='professiondiv'>
        <div className='proup'>
            <div className='procon'>
                <div className='proconleft'>
                    <div className='proleftimg'>
                        <img src={IPHONEOG} className="iphone" alt="" />
                    </div>
                </div>
                <div className='proconright'>
                    <div className='righttxt1'>
                        <p className='download'>Download App</p>
                    </div>
                    <div className='righttxt2'>
                        <p className='bestapp'>BEST APP FOR DELIVERY</p>
                    </div>
                    <div className='righttxt3'>
                        <div className='apple'>
                            <button className='applebtn'>
                                <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" className='appleicon' alt="" />
                                <p className='appstore'>Download on the APP STORE</p>
                                {/* <p>APP STORE</p> */}
                            </button>
                        </div>
                        <div className='apple'>
                        <button className='applebtn'>
                                <img src="https://www.freepnglogos.com/uploads/google-play-png-logo/google-play-store-app-logo-gets-a-slight-redesign-png-19.png" className='appleicon' alt="" />
                                <p className='appstore'>Available on the PLAY STORE</p>
                                {/* <p>APP STORE</p> */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='prodown'>
            <div className='writing'></div>
        </div> */}
    </div>
  )
}
