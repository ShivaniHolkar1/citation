






import React, { useState,useEffect, useRef } from "react";

import "./navbar.css";
import Anemoi from "../Assets/Anemoi.png";




const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  






  

 



  
//  function Logout() {
//   navigate("/");
//     localStorage.clear("user");
//     window.location.reload(false);
//   }
 
  




  return (
    <>
      {/* <Toast ref={toast} /> */}
      <nav className="navbar">
        <div style={{ display: "flex" }} >
          {/* <img  src={Logo} alt="Logo" />  */}
          <img
        style={{ height: "35px",borderRadius:"50%", float: "right" }}
        src={Anemoi}
        alt=" Anemoi "
      />
          <span   style={{marginLeft:"10px"}}>
            <b className="platform" style={{color:"white" }}>Citation Platform</b>
          </span>
          
        </div>
     
       

        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        
        >


                  
     
      
  
{/* 
           <Button
            style={{
              
              background: "#203570",
              height: "35px",
              width: "35px",
         
              
              
            }}
            aria-label="User"
            icon="pi pi-user"
            onClick={(e) => op.current.toggle(e)}
            aria-haspopup
            aria-controls="overlay_panel"
            className="p-button-rounded p-button-info"
          /> */}

             
          {/* <OverlayPanel ref={op}>
      
         <h4>{loginUser}({loginrole}) </h4> 
          <br/>
       

            <Button
              label="Logout"
              icon="pi pi-sign-out"
              onClick={Logout}
              style={{ color: "black ", padding: "0%", margin: "0%" }}
              className=" p-button-text p-button-plain"
            />
          </OverlayPanel> */}
        
        </ul>
       
      </nav>
    </>
  );
};
export default Navbar;







