// functional component....

import React from 'react'
import './Header.css';

// images put by src folder----------
// import amazonlogo from './images/amazon-logo.png'
import loclogo from './images/loc-logo.png'
import searchlogo from './images/search-logo.png';
import flagimg from './images/flagimg.png';
import cartlogo from './images/cart-logo.png';

// 1.2 prop single var & 2.2 for multi var---------------------------
export default function Header(props) {
  console.log(props);


  return (

    <header>
      {/* <!-- HEADER PART START -->  */}
      <div className="header">
        <div className="amazon-logo">

          {/* image put by public folder=============== */}
          <img src='./images/amazon-logo.png' alt=''/>
          {/* <img src={amazonlogo} alt="logo" /> */}

        </div>

        <div className="header-address">
          <div className="loc-logo">
            <img src={loclogo} alt="img" />
          </div>

          <div className="address-content">
            {/* 1.3 props (data variable) put in as a single var... after Hello --- */}
            {/* <div style={{ fontSize: "12px", color: "lightgray" }}>Hello {props.data}</div> */}
            
            {/* 2.3 props (data variable) pass as a multi var ----- */}
            <div style={{ fontSize: "12px", color: "lightgray" }}>Hello {props.data.task}</div>
            {/* <div style={{ fontWeight: "bold", fontSize: "14px" }}>Select your address</div> */}
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>{props.data.uraddress}</div>
          </div>
        </div>


        <div className="search-bar">

          {/* 2.3 for props passing multi var------------------ */}
          {/* <div className="search-all">All</div> */}
          <div className="search-all">{props.data.all}</div>
          <div className="search-input">

            {/* 2.3 props (data variable) pass as a multi var ----- */}
            <input type="text" value={props.data.task}/>
          </div>
          <div className="search-img"><img src={searchlogo} alt="img" /></div>
        </div>

        <div className="right-container">
          <div className="flag-logo">
            <img src={flagimg} alt="img" />
          </div>

          <div className="signIn-account">
            <div style={{ fontSize: "12px", marginTop: "10px", marginLeft: "10px" }}>Hello, Sign in</div>
            <div style={{ fontWeight: "bold", fontSize: "14px", marginLeft: "10px" }}>Accounts & Lists</div>
          </div>

          <div className="returns-order">
            <div style={{ fontSize: "12px", marginLeft: "10px", marginTop: "10px" }}>Returns</div>
            <div style={{ fontWeight: "bold", fontSize: "14px", marginLeft: "10px" }}>& Orders</div>
          </div>

          <div className="cart-container">
            <div className="cart-logo">

              <div style={{
                textAlign: "center", marginBottom: "-10px", color: "orange",
                fontWeight: "bolder", fontSize: "14px"
              }}></div>

              <div><img src={cartlogo} alt="img" /></div>

            </div>
               <div style={{ fontWeight: "bold", fontSize: "14px", marginTop: "20px", color: "red" }}>Cart</di
           </div>
        </div>
      </div>
      {/* <!-- HEADER PART END --> */}

    </header>

  )
}
