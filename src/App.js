import React, { useState } from 'react';
import Menu from './components/Menu'
import Categories from './components/Categories'
import Item from './data'

function App() {

  const [menuItems, setMenuItems] = useState(Item);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories />
        <Menu />
      </section>
      
    </main>
  );
}

export default App;
