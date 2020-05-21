import React from "react"
import "./dropdownbutton.styles.css"

const DropdownButton = ({name,menu_items,selected}) =>(
    <div>
        <div className="dropdown">
        <span className={`${selected?`btnselected`:``} btnfont`}>{name}</span>
            <div class="dropdown-content-holder">
                <div className="dropdown-content">
                    {
                        menu_items.map(linksname=>
                        <div className="spans">{linksname.name}</div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    </div>
)

export default DropdownButton
