import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../utils/fetchData';
import ItemList from '../presentation/ItemList';

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts().then((data) => {
      if (category) {
        setProducts(data.filter(product => product.category === category));
      } else {
        setProducts(data);
      }
      setLoading(false);
    });
  }, [category]);

  return (
    <div>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;