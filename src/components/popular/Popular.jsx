import React from 'react'
import './Popular.css'
import POTATO from '../../asset/potato.png'
import STAR from '../../asset/star.png'
import BURG from '../../asset/burg.png'
import CHUP from '../../asset/chup.png'
import SALMON from '../../asset/salmon.png'
import MESH from '../../asset/mesh.png'
import FRIES from '../../asset/fries.png'

export default function Popular() {
  return (
    <div className='populardish'>
        <div className='populardiv'>
           <div className='dum'><p className='poptxt'>Popular dishes</p></div> 
        </div>
        <div className='popular2'>
            <p className='pop2'>POPULAR DISHES</p>
        </div>
        <div className='category'>
            <div className='catdiv'>
                <button className='all'>ALL CATEGORIES</button>
                <button className='all'>BURGER</button>
                <button className='all'>PIZZA</button>
                <button className='all'>BLUEBERRY SHAKE</button>
                <button className='all'>CHICKEN CHUP</button>
                <button className='all'>ICE CREAM</button>
                <button className='all'>DRINK</button>
            </div>
        </div>
        <div className='potato'>
            <div className='picdiv'>
                <div className='potimg'>
                    <div className='ogpot'>
                        <img src={POTATO} className="postyle" alt="" />
                    </div>
                    <div className='ogtxt'>
                        <div className='rating'><p className='style1'>CHICKEN CHUP, DRINK</p>
                        <img src={STAR} className="stardiv" alt="" />
                        </div>
                        <div className='name'><p className='style2'>POTATO WEDGES</p></div>
                        <div className='priceog'><p className='style3'>PRICE -$100.00 $59.00</p></div>
                    </div>
                </div>
                <div className='potimg'>
                <div className='ogpot'>
                        <img src={BURG} className="postyle" alt="" />
                    </div>
                    <div className='ogtxt'>
                        <div className='rating'><p className='style1'>ICE CREAM, PIZZA</p>
                        <img src={STAR} className="stardiv" alt="" />
                        </div>
                        <div className='name'><p className='style2'>SALMON BURGER</p></div>
                        <div className='priceog'><p className='style3'>PRICE -$80.00 $70.00</p></div>
                    </div>
                </div>
                <div className='potimg'>
                <div className='ogpot'>
                        <img src={CHUP} className="postyle" alt="" />
                    </div>
                    <div className='ogtxt'>
                        <div className='rating'><p className='style1'>CHICKEN CHUP, DRINK</p>
                        <img src={STAR} className="stardiv" alt="" />
                        </div>
                        <div className='name'><p className='style2'>PASTA CARBONARA</p></div>
                        <div className='priceog'><p className='style3'>PRICE -$70.00 $65.00</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='potato'>
        <div className='picdiv'>
                <div className='potimg'>
                    <div className='ogpot'>
                        <img src={SALMON} className="postyle" alt="" />
                    </div>
                    <div className='ogtxt'>
                        <div className='rating'><p className='style1'>PIZZA, DRINK</p>
                        <img src={STAR} className="stardiv" alt="" />
                        </div>
                        <div className='name'><p className='style2'>SMOKED SALMON</p></div>
                        <div className='priceog'><p className='style3'>PRICE -$30.00 $20.00</p></div>
                    </div>
                </div>
                <div className='potimg'>
                <div className='ogpot'>
                        <img src={MESH} className="postyle" alt="" />
                    </div>
                    <div className='ogtxt'>
                        <div className='rating'><p className='style1'>BLUEBERRY SHAKE, BURGER</p>
                        <img src={STAR} className="stardiv" alt="" />
                        </div>
                        <div className='name'><p className='style2'>CAULIFLOWER MASH</p></div>
                        <div className='priceog'><p className='style3'>PRICE -$100.00 $59.00</p></div>
                    </div>
                </div>
                <div className='potimg'>
                <div className='ogpot'>
                        <img src={FRIES} className="postyle" alt="" />
                    </div>
                    <div className='ogtxt'>
                        <div className='rating'><p className='style1'>CHICKEN CHUP, DRINK</p>
                        <img src={STAR} className="stardiv" alt="" />
                        </div>
                        <div className='name'><p className='style2'>EGG BURGER</p></div>
                        <div className='priceog'><p className='style3'>PRICE -$80.00 </p></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='product'>
            <button className='pro'> SEE ALL PRODUCT</button>
        </div>
    </div>
  )
}
