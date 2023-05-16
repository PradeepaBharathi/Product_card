import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const data = [
  {
    productImage:
    "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Fancy Product",
    productPrice: "$40.00 - $80.00",
    
    id: 100
  },
  {
    productImage:
    "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productSale:"Sale",
    productName: "Special Item",
    productIprice:"$20.00",
    productFprice:"$18.00",
    productRating:"⭐",
    
    id: 101
  },
  {
    productImage:
    "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productSale:"Sale",
    productName: "Sale Item",
    productIprice:"$50.00",
    productFprice: "$25.00",
   
    id: 102
  },
  {
    productImage:
    "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName:"Popular Item",
    productPrice: "$40.00",
    productRating:"⭐",
    
    id: 103
  },
  {
    productImage:
    "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Sale Item",
    productIprice:"$50.00",
    productFprice: "$25.00", 
    
    id: 104
  },
  {
    productImage:
    "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productSale:"Sale",
    productName: "Fancy Product",
    productPrice: "$120.00 - $280.00",
    
    id: 105
  },
  {
    productImage:
    "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Special Item",
    productIprice:"$20.00",
    productFprice:"$18.00",
    productRating:"⭐",
   
    id: 106
  },
  {
    productImage:
    "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productSale:"Sale",
    productName: "Popular Item",
    productPrice: "$40.00",
    productRating:"⭐",
   
    id: 107
  }
];

function App() {
  const[cartCount,setCartcount]=useState(0)
  // setCartcount(cartCount+1)
  // setCartcount(cartCount-1)
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <img className="cart_i" src="https://img.icons8.com/?size=1x&id=59997&format=png"></img>
                            Cart  
                            <span className="badge bg-dark text-white ms-3 rounded-pill">{cartCount}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
<div className="shop_name"><div>Shop in style</div>
<div className="subname">With this shop hompeage template</div></div>
      <div>
       
      </div>
      <div className="products">
        {data.map((prod, idx) => (
          <ProductCard
            key={prod.id}
            productImage={prod.productImage}
            productSale={prod.productSale}
            productName={prod.productName}
            productPrice={prod.productPrice}
            productIprice={prod.productIprice}
            productFprice={prod.productFprice}
            productRating={prod.productRating}
            cartCount={cartCount}
            setCartcount={setCartcount}
          />
        ))}
      </div>
      <footer>Copyright © Your Website 2023</footer>
    </div>
  );
}

export default App;
// // const props = {
// ProductImage : "data"
// ProductName : "data"
// productPrice : 500000
// }
// {prodname, prodImage, prodPrice} = props
function ProductCard({
  productImage,
  productSale,
  productName,
  productPrice,
  productIprice,
  productFprice,
  productRating,
 cartCount,
 setCartcount
  
}) {
  const[show, setShow]=useState(true)
  // // let show = false
  // //setShow(data)
  // function setShow(data){
  //     show = data
  // }
  //   //setShow(true)
const handleAddtoCart=()=>{
  setShow(!show)
  setCartcount(cartCount+1)
}
const handleRemoveCart=()=>{
  setShow(!show)
  setCartcount(cartCount-1)
}
  
  return (
    <div className="pcard">
    <div className="card">
      <div className="card-img">
      <div class="badge bg-dark text-white position-absolute" >{productSale}</div>
      <img className = "pcard_img"src={productImage} alt="productimage" ></img>
      </div>
      <div>
        <h3>{productName}</h3>
        <div className="ratings">
          <div>{productRating}{productRating}{productRating}{productRating}{productRating}</div>
        </div>
      </div>
       <div className="price">Rs.
       <p>{productPrice}</p>
        <p className="iprice">{productIprice}</p>
        <span>{productFprice}</span>
        </div>
       
      {show ?
      <button onClick={handleAddtoCart}>Add to cart </button>
      :
      <button onClick={handleRemoveCart}>Remove cart</button>
      }
      
    </div>
    </div>
  );
}
