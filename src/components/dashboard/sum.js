
import React from 'react'
import Nav from "./nav"




function Sum({Toggle}) {
  return (
    <div className="px-3">
     <Nav Toggle={Toggle}/>
      <div className="container-fluid">
        <div  className="row g-3 my-2">
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justtify-content-around align-items-center rounded "></div>
            <div>
              {/* <h3 className="fs-2"> 230</h3>
              <p className="fs-5">products</p> */}
            </div>
            <i className="bi bi-cart-plus p-3"></i>
          </div>
        </div>
      </div>
    </div>


  

  );
}

export default Sum;