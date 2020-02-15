import React from "react";
import '../components/Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="container">

                <div className="row" >
                    <div className="col-12">
                        <img className="logo"
                            src="MakeMyDayLogoCrop.png"
                            alt="Make My Day"
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;