// utils/fetchData.js
export const fetchProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        import('../data/products.json').then((data) => resolve(data));
      }, 1000);
    });
  };