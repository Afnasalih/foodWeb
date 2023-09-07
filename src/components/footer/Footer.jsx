import React from 'react'
import './Footer.css'
import TIME from '../../asset/time.png'
import LOGO2 from '../../asset/logo.jpg'

export default function Footer() {
  return (
    <div className='footermain'>
        <div className="footerhead">
            <div className="foheading">
                <div className="subscribediv">
                    <p className='subnews'>SUBSCRIBE NEWSLETTER</p>
                </div>
                <div className="subtyping">
                    <input type="text" className='mailbox' placeholder='Enter Your Mail'/>
                    <button className='nowbtn'>SUBSCRIBE NOW</button>
                </div>
            </div>
        </div>
        <div className="aboutcont">
            <div className="aboutog">
                <div className="aboutus">
                    <div className="aboutd">
                        <div className="frubaz">
                            <p className='a1'>ABOUT FRUDBAZ</p>
                            <p className='a2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                                the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                        <div className="time">
                            <div className="time24">
                                <img src={TIME} className="timestyle" alt="" />
                                
                            </div>
                            <div className="openhour">
                                <p className='o1'>OPENING HOURS</p>
                                <p className='o2'>Mon-Sat(8:00-6:00)</p>
                                <p className='o3'>Sunday-Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact">
                <div className="aboutd">
                    <p className='c1'>CONTACT US</p>
                    <div className='dummy3' ><p className='c2'>ADDRESS: </p> <p className='c3'> 8638 Amarica Stranfod Mailbon Star, California, TX 70240</p></div>
                    <div className='dummy3'> <p className='c2'>MAIL: </p> <p className='c3'>support@example.com</p> </div>
                    <div className='dummy3'><p className='c2'>PHONE: </p> <p className='c3'>+7464 01873535645</p></div>
                    <div className='dummy3'><p className='c2'>FAX ID: </p> <p className='c3'>+9 65478944 6545</p></div>
                </div>
                </div>
                <div className="links">
                <div className="aboutd">
                    <p className='c1'>LINKS</p>
                    <p className='c4'>FAQ</p>
                    <p className='c4'>Team</p>
                    <p className='c4'>History</p>
                    <p className='c4'>Contact</p>
                    <p className='c4'>Recipe Menu</p>
                  
                </div>
                </div>
                <div className="recent">
                <div className="aboutd">
                <p className='c1'>RECENT BLOG</p>
                <p className='c4'>Is Fast Food Good For your body?</p>
                <p className='c3'>JANUVARY 16,2022</p>
                <p className='c4'>Change your eating habits with this organic food</p>
                <p className='c3'>JANUVARY 16,2022</p>
                </div>
                </div>
            </div>
        </div>
        <div className='lastdiv'>
            <div className='logo2'>
                <img src={LOGO2} className='logostyle' alt="" />
            </div>
            <div className="lstsocial">
                <div className='space'>
                <button className='footface'>
                    <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" className='lstface' alt="" />
                </button>
                <button className='footface'> 
                <img src="https://img.freepik.com/free-icon/twitter_318-788985.jpg" className='lstface' alt="" /></button>
                <button className='footface'>
                    <img src="https://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" className='lstface' alt="" />
                </button>
                <button className='footface'>
                    <img src="https://www.citypng.com/public/uploads/preview/hd-black-linkedin-in-icon-text-symbol-sign-png-316239729560infmcfmdl.png" className='lstface' alt="" />
                </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}
