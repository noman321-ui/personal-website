import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                {/* <h1>web development and websites promotions</h1> */}

                <br></br>
                

                <Typed
                className="typed-text"
                strings={["BHUIYAN,ABDULLAH-ALL-NOMAN. \n"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer"> cotact me</a>
                

            </div>

        </div>
    )
}

export default Header
