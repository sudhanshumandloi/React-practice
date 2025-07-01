import React from "react";

import Product from './components/Products';
import './App.css'

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Book',
      amount: 6,
      date: new Date(2023, 5, 12),
    },
    {
      id: 'p2',
      title: 'Pen',
      amount: 4,
      date: new Date(2023, 5, 10),
    },
    {
      id: 'p3',
      title: 'Pencil',
      amount: 2,
      date: new Date(2023, 5, 8),
    },
    {
      id: 'p4',
      title: 'Eraser',
      amount: 1,
      date: new Date(2023, 5, 6),
    },
  ];

  return (
    <div>
      <Product items={products} />
    </div>
  );
}

export default App;