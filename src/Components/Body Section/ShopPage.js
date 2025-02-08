import { useState } from "react";
import "./ShopPage.css";

const ShopPage = () => {
  const [buyPopup, setBuyPopup] = useState(false);
  const [sellPopup, setSellPopup] = useState(false);
  const [sellForm, setSellForm] = useState({ name: "", quantity: "", price: "", image: null });

  const products = [
    { id: 1, name: "Apple", price: "$2" },
    { id: 2, name: "Banana", price: "$1" },
    { id: 3, name: "Orange", price: "$3" },
  ];

  const handleSellChange = (e) => {
    const { name, value } = e.target;
    setSellForm({ ...sellForm, [name]: value });
  };

  const handleImageUpload = (e) => {
    setSellForm({ ...sellForm, image: e.target.files[0] });
  };

  return (
    <div className="shop-container">
      <h1 className="shop-title">Shop</h1>
      <div className="button-container">
        <button className="button buy-button" onClick={() => setBuyPopup(true)}>Buy Products</button>
        <button className="button sell-button" onClick={() => setSellPopup(true)}>Sell Products</button>
      </div>

      
      {buyPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-button" onClick={() => setBuyPopup(false)}>✖</button>
            <h2 className="popup-title">Available Products</h2>
            <ul className="product-list">
              {products.map((product) => (
                <li key={product.id} className="product-item">
                  {product.name} - {product.price}
                  <button className="buy-product-button">Buy</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {sellPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-button" onClick={() => setSellPopup(false)}>✖</button>
            <h2 className="popup-title">Sell a Product</h2>
            <form className="sell-form">
              <input type="text" name="name" placeholder="Product Name" className="form-input" onChange={handleSellChange} />
              <input type="number" name="quantity" placeholder="Quantity" className="form-input" onChange={handleSellChange} />
              <input type="number" name="price" placeholder="Price" className="form-input" onChange={handleSellChange} />
              <input type="file" accept="image/*" className="form-input" onChange={handleImageUpload} />
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;