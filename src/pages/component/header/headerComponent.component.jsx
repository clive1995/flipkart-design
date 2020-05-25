import React from "react"
import "./header.styles.css"
import DropdownButton from "../../component/dropdownbutton/dropdownbutton.component"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Linkbar from "../linkbar/linkbar.component"

class HeaderComponent extends React.Component{
    constructor(){
        super()
        this.state={
            menubuttons:[{
                    name:"Login",
                    selected:true,
                    menu_items:[
                        {
                           name:"My Profile",
                           img:"",
                           route:""
                        },{
                           name:"Flipkart Plus Zone",
                           img:"",
                           route:""
                        },{
                           name:"Orders",
                           img:"",
                           route:""
                        },{
                           name:"Wishlist",
                           img:"",
                           route:""
                        },{
                           name:"Reward",
                           img:"",
                           route:""
                        }
                       ]
                },
                {
                    name:"More",
                    selected:false,
                    menu_items:[
                        {
                            name:"notification preference",
                            img:"",
                            route:""
                        },{
                            name:"sell on flipkart",
                            img:"",
                            route:""
                        },{
                            name:"24 X 7 Flipkart",
                            img:"",
                            route:""
                        },{
                            name:"Advertise",
                            img:"",
                            route:""
                        },{
                            name:"DownloadApp",
                            img:"",
                            route:""
                        }
                    ]
                },

            ],
            list:[
                {name:"Electronics"},
                {name:"TV & Applications"},
                {name:"Men"},
                {name:"Women"},
                {name:"Baby & Kids"},
                {name:"Home & Furniture"},
                {name:"Sports,Books & More"},
                {name:"Offer Zone"}
            ],
            showlink:false
        }
    }

    openmenus=()=>{
        this.setState({showlink:!this.state.showlink})
    }

    render(){
        return(
            <div>
            <div className="header-style">
                <div className="search-bx-container">
                    <img className="imgtag" src={process.env.PUBLIC_URL + "/flipkart-plus.png"}/>
                    <input className="search-box" type="text"/>
                </div>
                <div className="menu-btns">
                    {
                        this.state.menubuttons.map((buttons)=>
                        <DropdownButton {...buttons} mouseenter={this.openmenus}></DropdownButton>
                        )
                    }

                    
                </div>
            </div>
            <Linkbar ></Linkbar>
            </div>
        )
    }
}

export default HeaderComponent