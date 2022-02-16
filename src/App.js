//import logo from './logo.svg';
//import './App.css';
import {formatData} from "./helperFunctions.js";
import MainPage from "./components/MainPage";
import React, { useState, useEffect } from 'react';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App () {

  const [productList, setProductList] = useState([]);

  const getProductList = () => fetch(`http://52.26.193.201:3000/products/list`)
  .then((response) => response.json())
  .then(formatData)

  //const getProductDetails = (productId) => fetch(`http://52.26.193.201:3000/products/${productId}`)
  //.then((response) => response.json())

  useEffect(() => {

    getProductList()
    .then((productList) => {
      let array = []
      array.push(productList);
      setProductList(array);
    })
  }, [])
//console.log('productlist', productList)
return (
  <div className = "row">
    <MainPage
    productList = {productList}
   />
  </div>)
}

export default App;


// Make an API call to get a product list (Products data service, subsection "list")
//- http://52.26.193.201:3000/products/list

// Make an API call to get specific details on a given product when its entry is clicked
//(Products data service - subsection ":productId")

// Display a list of products as cards with text of description

// Make each product clickable so that when clicked, it displays an image from the API for that
//product (Products data service - subsection "styles")

// Make it so that only one product's photo is visible at a time, and clicking it again closes the
//photo (NOTE: If a product does not have a viable photo on the API, allow for this eventuality
//with good conditional rendering).

