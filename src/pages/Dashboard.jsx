import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { ScrollPanel } from "primereact/scrollpanel";
import { Button } from "primereact/button";

function SearchProduct() {
  const [data, setData] = useState([]);
  const [customer, setCustomers] = useState([]);
  const [query,setQuery] = useState();

const handleInputChange = async (event) => {
    const value = event.target.value;
    setQuery(value);
 
  }


//   const downloadFileAtURL = (e) => {
// // console.log(e);
//     let url=`${process.env.REACT_APP_API_KEY}/document/downloadFile/${e.id  }`;
//     const fileName = url.split("/").pop();
//     const aTag = document.createElement("a");
//     aTag.href = url;
//     aTag.setAttribute("download", fileName);
//     document.body.appendChild(aTag);
//     aTag.click();
//     aTag.remove();
//   };

  

  async function search(key) {
    if (key.length > 1) {
      let text = key;
      let encoded = window.btoa(text);
      let result = await fetch(
        `${process.env.REACT_APP_API_KEY}/sample/getHighlightedValue/` + encoded
      );
      result = await result.json();
      console.warn("Tasdiq", result);
      setData(result);
      setCustomers(result);
      // setdocumentId(result.id);
      // alert(id)
    }
  }
  
  const handleClearInput = () => {
    setQuery('');
  };


  return (
    <div>
      <Card >
        <span style={{ marginLeft: "20%" }} className="p-input-icon-left">
        <div class="layout-sidebar-filter-content p-input-icon-left p-fluid p-input-icon-right">
          <i className="pi pi-search" />

         


   

<InputText  
     style={{  height:"35px" ,width:"660px"}}
     type="text" 
     value={query}
     onChange={handleInputChange}
     onKeyDown={(e) => search(e.target.value)}

     placeholder="Search....."
      aria-label="Search input"
       autocomplete="off"
       class="p-inputtext p-component p-filled"
       
       />
     
       <i class="clear-icon pi pi-times"
         onClick={handleClearInput}
       ></i>
     </div>
        </span>
       
       
        <br />
        <br />

        <ScrollPanel style={{ width: "100%", height: "350px" }}>
          {data.length > 0 ? (
            <div value={customer}>
              {customer.map((data) => (
                <div key={data.id}>
                  <br />
                  <Card >
                    <h4>{data.filename}</h4>

                    

                    <p dangerouslySetInnerHTML={{ __html: data.content }}></p>

                    <label style={{ float: "right" }}>
                      <b>Last Edited By:</b>
                      {data.edit}{" "}
                    </label>
                  </Card>
                </div>
              ))}
            </div>
          ) : null}
        </ScrollPanel>
      </Card>
    </div>
  );
}
export default SearchProduct;
