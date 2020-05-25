import React from "react"
import "./linkbar.styles.css"

class Linkbar extends React.Component{
    constructor(){
        super()
        this.state={
            showmenu:true,
            list:[
            {name:"Electronics",showmenu:false},
            {name:"TV & Applications",showmenu:false},
            {name:"Men",showmenu:false},
            {name:"Women",showmenu:false},
            {name:"Baby & Kids",showmenu:false},
            {name:"Home & Furniture",showmenu:false},
            {name:"Sports,Books & More",showmenu:false},
            {name:"Offer Zone",showmenu:false}
            ]
        }
    }

    showmenu=(list,index)=>{
        let newarray = this.state.list
        newarray[index] = {...newarray[index],showmenu:!newarray[index].showmenu}
        //newarray[index] = {...newarray[index],showmenu:true}
        this.setState({list:newarray})
        this.setState({showmenu:!this.state.showmenu})
    }
    showMegaBox(){
        this.setState({showmenu:!this.state.showmenu})
    }
    render(){
        let carrotimg = ""
        if(this.state.showmenu){
            carrotimg = <img  src={process.env.PUBLIC_URL+"/caret-down.png"} height="10" width="10" />;
        } else {
            carrotimg = <img src={process.env.PUBLIC_URL+"/caret-up.png"} height="6" width="4" />;
        }
        return(
            <center>
            <div className="whole-link-holder">
                <div className="link-holder">
                    <div className="normal-links">
                        {
                            this.state.list.map((list,index)=>
                                <div className="link-btns"  key={index} onMouseEnter={e=>this.showmenu(list,index)} onMouseLeave={e=>this.showmenu(list,index)}>
                                    <div className="link" >{list.name}</div>
                                    { this.state.list[index].showmenu?
                                    <img  src={process.env.PUBLIC_URL+"/caret-down.png"} height="10" width="10" />:
                                    <img src={process.env.PUBLIC_URL+"/caret-up.png"} height="6" width="4" /> }
                                </div> 
                                // {   list.showmenu?
                                //     <div className="many-links">
                                //         <p>{list.name}</p>
                                //     </div> :
                                //     ""
                                // }    
                            
                            )
                        }
                    </div>
                </div>
                {
  
                }
                
            </div>
            </center>
        )
    }
}


// let carrotimg = ""
// if(showlink){
//     carrotimg = <img  src={process.env.PUBLIC_URL+"/caret-down.png"} height="10" width="10" />;
// } else {
//     carrotimg = <img src={process.env.PUBLIC_URL+"/caret-up.png"} height="6" width="4" />;
// }
export default Linkbar