import React from 'react'
import './Menuscreen.css'
import LEFTARROW from '../../asset/ChevronLeft.png'
import RIGHTARROW from '../../asset/ChevronRight.png'
import BROAST from '../../asset/broasted.png'
import PIZZA from '../../asset/pizza.png'
import FULL from '../../asset/full.png'
import BURGER from '../../asset/burger.png'

export default function Menuscreen() {
  return (
    <div className='menumain'>
        <div className='middle'>
            <div className='menutxt'>
                <div className='menutxttop'>
                    <p className='our'>Our Popular Menu</p>
                </div>
                 <div className='menutxtbott'>
                    <div className='eatdiv'><p className='eat'>WENT TO EAT?</p></div>
                    
                </div> 
            </div>
             <div className='menuog'>
                <div className='arrow'>
                    <div className='leftarr'>
                        <img src={LEFTARROW} className="larr" alt="" />
                    </div>
                </div>
                <div className='food'>
                    <div className='foodtxt'>
                        <div className='footxtog'>
                            <p className='chic1'>CHICKEN</p>
                            <p className='chic2'>Rorem ipsum advolu ptateme volupta tem Rorem ipsuey</p>
                        </div>
                    </div>
                    <div className='foodimg'>
                        <div className='white'>
                            <img src={BROAST} className="bro" alt="" />
                        </div>
                    </div>
                </div>
                <div className='food'>
                    <div className='foodtxt'>
                    <div className='footxtog'>
                            <p className='chic1'>PIZZA & DRINK</p>
                            <p className='chic2'>Rorem ipsum advolu ptateme volupta tem Rorem ipsuey</p>
                        </div>
                    </div>
                    <div className='foodimg'>
                    <div className='white'>
                            <img src={PIZZA} className="bro" alt="" />
                        </div>
                    </div>
                </div>
                <div className='food'>
                    <div className='foodtxt'>
                    <div className='footxtog'>
                            <p className='chic1'>BOX MEALS</p>
                            <p className='chic2'>Rorem ipsum advolu ptateme volupta tem Rorem ipsuey</p>
                        </div>
                    </div>
                    <div className='foodimg'>
                    <div className='white'>
                            <img src={FULL} className="bro" alt="" />
                        </div>
                    </div>
                </div>
                <div className='food'>
                    <div className='foodtxt'>
                    <div className='footxtog'>
                            <p className='chic1'>COMBO PACK</p>
                            <p className='chic2'>Rorem ipsum advolu ptateme volupta tem Rorem ipsuey</p>
                        </div>
                    </div>
                    <div className='foodimg'>
                    <div className='white'>
                            <img src={BURGER} className="bro" alt="" />
                        </div>
                    </div>
                </div>
                <div className='arrow'>
                <div className='leftarr'>
                        <img src={RIGHTARROW} className="larr" alt="" />
                    </div>
                </div>
            </div> 
        </div>

    </div>
  )
}
