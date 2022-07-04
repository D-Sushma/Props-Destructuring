import React from 'react'
import './Subheader.css'

// 1.2 destructuring  for singlr var & 2.2 for multi var---------------------------
export default function Subheader({data}) {
    console.log(data);
    return (
        //  <!-- SUBHEADER START --> 
        < div className="subheader" >

            {/* 1.3 destructure (data variable) pass as a sinle var ------- */}
            {/* <div>All {data}</div> */}

             {/* 2.3 destructure (data variable) pass as a multi var ----- */} 
            <div>All {data.task}</div>
            <div>Shirts {data.all}</div>
            <div>Pant {data.uraddress}</div>

            <div>Best Sellers</div>
            <div>Mobiles</div>
            <div>Customer Service</div>
            <div>Fashion</div>
            <div>Electronics</div>
            <div>Rents</div>
            <div>Service</div>
            <div>Prime</div>
        </div >

        //  <!-- SUBHEADER END -->
    )
}
