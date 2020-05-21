import React from "react"
import "./linkbar.styles.css"

class Linkbar extends React.Component{
    constructor(){
        super()
        this.state={
            list:[
            {name:"Electronics"},
            {name:"TV & Applications"},
            {name:"Men"},
            {name:"Women"},
            {name:"Baby & Kids"},
            {name:"Home & Furniture"},
            {name:"Sports,Books & More"},
            {name:"Offer Zone"}
            ]
        }
    }

    render(){
        return(
            <div className="link-holder">
                <div className="normal-links">
                    {
                        this.state.list.map((list)=>
                        <div class="link">{list.name}</div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Linkbar