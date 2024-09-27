import React, { useState } from 'react';
import Header from './components/header';
import ItemList from './components/itemlist';
import Footer from './components/footer';
import './styles/App.css';

function App() {
  // Sample state for item list
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', description: 'This is the first item.' },
    { id: 2, name: 'Item 2', description: 'This is the second item.' },
    { id: 3, name: 'Item 3', description: 'This is the third item.' },
  ]);

  return (
    <div className="App">
      <Header title="React Item List" />
      <ItemList items={items} />
      <Footer />
    </div>
  );
}

export default App;
