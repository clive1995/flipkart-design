import React from "react"
import "./header.styles.css"
import DropdownButton from "../../component/dropdownbutton/dropdownbutton.component"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class HeaderComponent extends React.Component{
    constructor(){
        super()
        this.state={
            menubuttons:[
                {
                    name:"More",
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
                },{
                    name:"Login",
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
                }

            ]
        }
    }
    render(){
        return(
            <div className="header-style">
                <div className="search-bx-container">
                    <img className="imgtag" src={process.env.PUBLIC_URL + "/flipkart-plus.png"}/>
                    <input class="search-box" type="text"/>
                </div>
                <div className="menu-btns">
                    {
                        this.state.menubuttons.map((buttons)=>
                        <p>{buttons.name}</p>
                        )
                    }
                <FontAwesomeIcon icon="check-square" />
                    <DropdownButton></DropdownButton>
                </div>
            </div>
        )
    }
}

export default HeaderComponent