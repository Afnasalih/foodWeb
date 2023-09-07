import React from 'react'
import './Chef.css'
import RASA from '../../asset/rasa.png'
import MARK from '../../asset/mark.png'
import YLINA from '../../asset/ylina.png'

export default function Chef() {
  return (
    <div className='chefmain'>
        <div className="chefwriting">
            <div className="chefcontent">
                <div className="contentleft">
                    <div className="cheftxt">
                        <p className='ctstyle'>Our Professional</p>
                    </div>
                    <div className="cheftxt2">
                        <p className='ctstyle2'>MEET OUR STUFF</p>
                    </div>
                </div>

                <div className="contentright">
                    <div className="chefbtn">
                        <button className='view'>VIEW ALL STAFF</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="review"> 
        <div className="ogreview">
            <div className="leftreview">
                <div className="mainrev">
                    <div className="mainrevup">
                        <img src={RASA} className="rasaimg" alt="" />
                    </div>
                    <div className="mainrevdown">
                        <div className="chefname"><p className='cnstyle'>RASALINA DE</p></div>
                        <div className="chefexp"><p className='cnstyle2'>12 YEAR EXPERIENCE</p></div>
                        <div className="chefsocial">
                            <div className="ogsocial">
                                <button className='socialbtn'> <img className='faicon' src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="" /></button>
                                <button className='socialbtn'><img className='faicon' src="https://img.freepik.com/free-icon/twitter_318-788985.jpg" alt="" /></button>
                                <button className='socialbtn'><img className='faicon' src="https://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" alt="" /></button>
                                <button className='socialbtn'><img className='faicon' src="https://www.citypng.com/public/uploads/preview/hd-black-linkedin-in-icon-text-symbol-sign-png-316239729560infmcfmdl.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middlerev">
            <div className="mainrev">
                    <div className="mainrevup">
                        <img src={MARK} className="rasaimg" alt="" />
                    </div>
                    <div className="mainrevdown">
                        <div className="chefname"><p className='cnstyle'>MARK HENERYTIX</p></div>
                        <div className="chefexp"><p className='cnstyle2'>09 YEAR EXPERIENCE</p></div>
                        <div className="chefsocial">
                            <div className="ogsocial">
                                <button className='socialbtn'> <img className='faicon' src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="" /></button>
                                <button className='socialbtn'><img className='faicon' src="https://img.freepik.com/free-icon/twitter_318-788985.jpg" alt="" /></button>
                                <button className='socialbtn'><img className='faicon' src="https://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" alt="" /></button>
                                <button className='socialbtn'><img className='faicon' src="https://www.citypng.com/public/uploads/preview/hd-black-linkedin-in-icon-text-symbol-sign-png-316239729560infmcfmdl.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightrev">
            <div className="mainrev">
                    <div className="mainrevup">
                        <img src={YLINA} className="rasaimg" alt="" />
                    </div>
                    <div className="mainrevdown">
                        <div className="chefname"><p className='cnstyle'>YLINA PITERSON KIM</p></div>
                        <div className="chefexp"><p className='cnstyle2'>06 YEAR EXPERIENCE</p></div>
                        <div className="chefsocial">
                            <div className="ogsocial">
                                <button className='socialbtn'> <img className='faicon' src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="" /></button>
                                <button className='socialbtn'><img className='faicon' src="https://img.freepik.com/free-icon/twitter_318-788985.jpg" alt="" /></button>
                                <button className='socialbtn'><img className='faicon' src="https://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" alt="" /></button>
                                <button className='socialbtn'><img className='faicon' src="https://www.citypng.com/public/uploads/preview/hd-black-linkedin-in-icon-text-symbol-sign-png-316239729560infmcfmdl.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
