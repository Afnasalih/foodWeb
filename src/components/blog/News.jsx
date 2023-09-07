import React from 'react'
import './News.css'
import BLOG1 from '../../asset/blog1.png'
import BLOG2 from '../../asset/blog2.png'
import BLOG3 from '../../asset/blog3.png'
import B1 from '../../asset/b1.png'
import B2 from '../../asset/b2.png'
import B3 from '../../asset/b3.png'
import B4 from '../../asset/b4.png'
import B5 from '../../asset/b5.png'
import B6 from '../../asset/b6.png'

export default function News() {
  return (
    <div className='newsmain'>
        <div className='newstxt'>
            <div className="newstxtog">
               <div className="newsup"><p className='newstxt1'>Recent Article</p></div>
               <div className="newsdown"><p className='newstxt2'>LATEST NEWS & BLOG</p></div>
            </div>
        </div>
        <div className="blogcont">
            <div className="blogog">
                <div className="blogleft">
                     <div className="leftdup"> 
                    <div className="blogdate">JAN 15, 2022</div>
                    <div className="blogwrite">BEST BURGER IN YOUR SOCI...</div>
                    <div className="blogimg">
                        <img src={BLOG1} className='blogstyle' alt="" />
                    </div>
                    <div className="blogread"> 
                    <div className='more'>
                        <img src="https://www.freeiconspng.com/thumbs/green-arrow-png/green-arrow-png-0.png" className='greenarrw' alt="" />
                    <p className='greentxt'>READ MORE</p>
                    </div>
                    
                     </div>
                    </div> 
                    
                </div>
                <div className="blogleft">
                     <div className="leftdup">
                    <div className="blogdate">JAN 15, 2022</div>
                    <div className="blogwrite">BEST BURGER IN YOUR SOCI...</div>
                    <div className="blogimg">
                        <img src={BLOG2} className='blogstyle' alt="" />
                    </div>
                    <div className="blogread"> 
                    <div className='more'>
                        <img src="https://www.freeiconspng.com/thumbs/green-arrow-png/green-arrow-png-0.png" className='greenarrw' alt="" />
                    <p className='greentxt'>READ MORE</p>
                    </div>
                    
                     </div>
                    </div>
                    </div>
                <div className="blogleft">
                <div className="leftdup">
                    <div className="blogdate">JAN 15, 2022</div>
                    <div className="blogwrite">BEST BURGER IN YOUR SOCI...</div>
                    <div className="blogimg">
                        <img src={BLOG3} className='blogstyle' alt="" />
                    </div>
                    <div className="blogread"> 
                    <div className='more'>
                        <img src="https://www.freeiconspng.com/thumbs/green-arrow-png/green-arrow-png-0.png" className='greenarrw' alt="" />
                    <p className='greentxt'>READ MORE</p>
                    </div>
                    
                     </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='blogbtn'>
             <button className="seeall">SEE ALL BLOG</button>
        </div>
        <div className="brands">
            <div className="brandsog">
                <div className="brand1">
                    <img src={B1} className='brandstyle' alt="" />
                </div>
                <div className="brand1">
                <img src={B2} className='brandstyle' alt="" />
                </div>
                <div className="brand1">
                <img src={B3} className='brandstyle' alt="" />
                </div>
                <div className="brand1">
                <img src={B4} className='brandstyle' alt="" />
                </div>
                <div className="brand1">
                <img src={B5} className='brandstyle' alt="" />
                </div>
                <div className="brand1">
                <img src={B6} className='brandstyle' alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}
