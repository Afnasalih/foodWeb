import React from 'react'
import { useState } from 'react'
import './Header.css'
import SEARCH from '../../asset/search.png'
import LOGO from '../../asset/logo.jpg'
import BELL from '../../asset/bell.png'
import HEART from '../../asset/HEART.png'

export default function Header() {
    const [show, setShow] = useState(false)
    return (
        <div className='head'>
            <div className='head1'>
                <div className='head2'>
                    <img src={LOGO} alt="" className='logoimg'/>
                </div>
                <div className='head3'>
                    <div className='head3con'>
                        <div className='nav'>
                            <p className='navtxt'>HOME</p>
                        </div>
                        <div className='nav'>
                        <p className='navtxt'>ABOUT</p>
                        </div>
                        <div className='nav'>
                        <p className='navtxt'>PAGES</p>
                        </div>
                        <div className='nav'>
                        <p className='navtxt'>SHOP</p>
                        </div>
                        <div className='nav'>
                        <p className='navtxt'>BLOG</p>
                        </div>
                        <div className='nav'>
                        <p className='navtxt'>CONTACT</p>
                        </div>
                    </div>
                </div>

                <div className='head4'>
                    <input type="text"placeholder='search keywords' className='searchbtn' />
                    <img src={SEARCH} alt="" className='searchimg'/>
                </div>

                <div className='head5'>
                    <div className='head5con'>
                        <div className='search'>
                            <img src={BELL} alt="" className='iconimg'/>
                        </div>
                        <div className='search'>
                        <img src={HEART} alt="" className='iconimg'/>
                        </div>
                    </div>
                </div>

            </div>

            <div className='headresp'>
                <div className='headleft'>
                <img src={LOGO} alt="" className='logoimg'/>
                </div>
                <div className='headright'>
                    <button onClick={() => {
                        console.log("button clicked")
                        // alert("clicked")
                        setShow(!show)

                    }}>
                        <img src={show ? "data:image/png;base64,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" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///90d3lxdHZtcHJqbW/AwcHk5eWVmJlnam1rbnCpq6yBhIb5+fnHyMng4eH29veKjI6ztLWipKV5fH6OkZLZ2tvq6+vLzMy5u7zIycnR0tLCw8OanJ7n5uYQAAACyUlEQVR4nO3di27iMBCFYcfOFodbEiBAgfd/ziXQSlvJNqkWCc3h/54gR3ac1p4xzgEAAAAAAAAAAAAAAAAoa4fVH2tWQzs13vK4qJtgT1MvjsspAfsYfGWTD7F/mG+/Da9+zv8StvtywKG2On7ffD2UAn7EVz/gE8SPfMCl7Rn6LeTXm5n1KXrnZ7mAa4U5Oopr7SHMD2KrMoTXQUz/eXPQWGdG4ZBMOFeZpNdpOk8m3Akl3CUTLoQSLt40YSeUsEsm3Agl3CQTnoW+Fudkwr3QFz/zT6LMUpNZaJw71a9+tCepT5mEKoOYHUKZNzH3Fo7OChFjeiH9crQfMR5LAZ37jLbfRR8/ywGv72JneEPR192D7dKbYReb4O0JTdwV90r/0Z76zcyaTX+afDQDAAAAAAAAAAAAYDL180P1M2D5c/yV+VqMVTmgfD2NfE2UROtasXlNvjbxIFNfmm6ZkRnC/CCKVJeOMhWm+rX6+v0W+j0zMgvNG3d26fcf6veQ6vcB6/dy6/fjv8GdCiqDmL8X4w3uNtH4J790P41zg/GttnGz7cGeqfw9UU7/ri93u68tmryvLU68r23UDquzNb+4cw8AAAAAAAAAAADAdKd5V726i+nXqm6evSD5p2UfGm/xnNv7JvQTDoFXwXKpQggP2p6cu1ivqImXcsCd5QG8C+nq2S8b+wGvEdOF+jcn61P0LubXVIsraIrPBTwqzNFRyDVZvvrBnigdcK3SnFdVdbpIWGaSZqfpRWWhuS416c8+nV2GvG1nl0gvwijTj9ALraXpYuihefWDPU2TqdcX+uKnA+o0IGbaD51rVQaxzta0i6w1mXXmRuKTWPhRMueWlf2IviruKLbG257GxqdHjSUX091r/tFm4mhYRJNb3uOmd1xM+0mr9Xzb1PY023mxt/Kn5f7Dmv3kvjUAAAAAAAAAAAAAUPUXCyx+ltjBidoAAAAASUVORK5CYII=" } alt="" className='btn' />
                    </button>
                </div>
            </div>


            {/* {show ? <p>show is true</p> : <p>show is false</p>} */}
            {show && <div className='drop'>
                <div className='dropnav'>
                    <p className='navtext'>HOME</p>
                    <p className='navtext'>ABOUT</p>
                    <p className='navtext'>PAGES</p>
                    <p className='navtext'>SHOP</p>
                    <p className='navtext'>BLOG</p>
                    <p className='navtext'>CONTACT</p>
                </div> 

                 <div className='dropSearch'>
                    <div className='searchwords'>
                        <input type="text" placeholder='search keyword' className='searchwords1'/>
                        <img src={SEARCH} alt="" className='imageSearch'/>
                    
    
                        
                    </div>
                </div> 

                <div className='head1resp'>
                    <div className='contentresp'>
                    <div className='head5con'>
                        <div className='search'>
                            <img src={BELL} alt="" className='iconimg'/>
                        </div>
                        <div className='search'>
                        <img src={HEART} alt="" className='iconimg'/>
                        </div>
                    </div>
                    </div>
                
                </div> 

            </div>}

        </div>
    )
}
