
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import CategoryFilter from './components/presentation/CategoryFilter';
import Header from './components/presentation/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer />}
        />
        <Route
          path="/category/:category"
          element={<ItemListContainer />}
        />
        <Route
          path="/product/:id"
          element={<ItemDetailContainer />}
        />
      </Routes>
    </Router>
  );
};

export default App;
