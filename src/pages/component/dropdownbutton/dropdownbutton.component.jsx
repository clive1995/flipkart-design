import React from "react"
import "./dropdownbutton.styles.css"

const DropdownButton = () =>(
    <div>
        <div className="dropdown">
            <span className="btnfont">Login</span>
            <div class="dropdown-content-holder">
                <div className="dropdown-content">
                    <div className="spans">My profile</div>
                    <div className="spans">My Wislist</div>
                    <div className="spans">Orders</div>
                    <div className="spans">Rewards</div>
                </div>
            </div>
        </div>
    </div>
)

export default DropdownButton
