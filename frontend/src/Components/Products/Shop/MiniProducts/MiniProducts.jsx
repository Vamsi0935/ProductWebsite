// import React from "react";
// import "./miniproducts.css";
// import { miniProducts } from "../../utils/Data";
// import { useNavigate } from "react-router-dom";

// const MiniProducts = () => {
//   const navigate = useNavigate();

//   const handleWishlistClick = (product) => {
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     const updatedWishlist = [...storedWishlist, product];
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//     navigate("/wish-list", { state: { product } });
//   };

//   const handleAddToCart = (product) => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const updatedCart = [...storedCart, product];
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     navigate("/add-to-cart", { state: { product } });
//   };

//   return (
//     <div className="container mt-4">
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {miniProducts.map((product, index) => (
//           <div className="col" key={index}>
//             <div className="card mini-card">
//               <img
//                 src={product.product_url}
//                 className="card-img-top min-card-img-top"
//                 alt={product.product_title}
//               />
//               <div className="card-body mini-card-body">
//                 <h5 className="card-title">{product.product_title}</h5>
//                 <p className="card-text">{product.product_content}</p>
//                 <p className="card-text">
//                   <strong>{product.product_cost}</strong>
//                 </p>
//                 <div className="button-group">
//                   <button className="btn btn-outline-success">Buy</button>
//                   <button
//                     className="btn btn-outline-secondary"
//                     onClick={() => handleAddToCart(product)}
//                   >
//                     Add to Cart
//                   </button>
//                   <button
//                     className="btn btn-outline-primary"
//                     onClick={() => handleWishlistClick(product)}
//                   >
//                     Add to Wishlist
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MiniProducts;
