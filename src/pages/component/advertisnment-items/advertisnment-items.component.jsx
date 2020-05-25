import React from "react"
import "./advertisnment-items.styles.css"
const AdvertisnmentItems =(props)=>(
    <div className="adv-product-body">
        <div className="product-Header"><p>Summer Essentials</p><button>VIEW ALL</button></div>
        <div className="adv-items">
            <div className="item">
                {/* <img src={process.env.PUBLIC_URL+"/caret-up.png"}/> */}
                {/* <div style={ {backgroundImage : `url(${Background})`}} ></div> */}
                <div className="product-image"></div>
                <p className="item-name"><b>item name</b></p>
                <p className="discount"><b>Discount</b></p>
                <p className="motivate"></p>
            </div>
        </div>
    </div>
)

export default AdvertisnmentItems