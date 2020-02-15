import React from "react";
import '../components/Header.css'
//import '../MakeMyDayLogo.png'

class Header extends React.Component {
    render() {
        return (
            <div className = "container">

                <div className = "row" >
                    <div className = "col-12">
                        <img className = "logo" 
                        //src = "logo192.png" 
                        //src = "..src/MakeMyDayLogo.png" 
                        src = "MakeMyDayLogoCrop.png"
                        alt = "" 
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;



//<h1 className="title"> Make my Day!</h1>