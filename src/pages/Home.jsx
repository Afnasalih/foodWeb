import React from 'react'
import Header from '../components/header/Header'
import Heroscreen from '../components/hero/Heroscreen'
import Menuscreen from '../components/menu/Menuscreen'
import Offer from '../components/offer/Offer'
import './Home.css'
import Popular from '../components/popular/Popular'
import Kombo from '../components/kombo/Kombo'
import Professional from '../components/professional/Professional'
import Chef from '../components/chef/Chef'
import News from '../components/blog/News'
import Footer from '../components/footer/Footer'

export default function Home() {
    return (
        <>
            <div className='topDiv'>
                <div className="header">
                    <Header />
                </div>
                <div className="hero">
                    <Heroscreen />
                </div>
                


            </div>
            <div className='menudiv'>
                <Menuscreen />
            </div>
            <div className='offerdiv'>
                <Offer />
            </div>
            <div className='popular1div'>
                <Popular />
            </div>
            <div className='kombodiv'>
                <Kombo />
            </div>
            <div className='professionaldiv'>
                <Professional />
            </div>
            <div className="chefdiv">
                <Chef />
            </div>
            <div className="newsdiv">
                <News />
            </div>
            <div className='footerdiv'>
                <Footer />
            </div>
        </>
    )
}
