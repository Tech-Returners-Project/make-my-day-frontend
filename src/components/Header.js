import React from "react";
import '../components/Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="row" >
                <div className="col-12">
                    <img className="logo img-fluid"
                        src="MakeMyDayLogoCrop.png"
                        alt="Make My Day"
                    />
                </div>
            </div>
        )
    }
}

export default Header;