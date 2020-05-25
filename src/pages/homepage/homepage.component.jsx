import React from "react"
import GreetingBanner from "../component/greetings/greetings.component"
import "./homepage.styles.css"
import AdvertisnmentItems from "../component/advertisnment-items/advertisnment-items.component"
class Homepage extends React.Component{
    constructor(){
        super()
        this.state={
            
        }
    }

    render(){
        return(
            <div class="body-styles">
                <GreetingBanner></GreetingBanner>
                <AdvertisnmentItems></AdvertisnmentItems>
            </div>
        )
    }
}

export default Homepage;