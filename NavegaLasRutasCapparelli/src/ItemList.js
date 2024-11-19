import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div>
      <h2>Catálogo de productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <Link to={`/product/${product.id}`}>Ver detalle</Link>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;