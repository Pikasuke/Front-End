import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_FT_XSite_HeroTALL_1500x600._CB409259720_.jpg " alt="amazon banner" />
            <div className="home__row">
                <Product
                    id="112"
                    title="title"
                    price={12.90}
                    rating={5}
                    image="https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260 " />

                <Product
                    id="112"
                    title="title"
                    price={12.90}
                    rating={5}
                    image="https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260 " />
            </div>
           

        </div>
    )
}

export default Home
