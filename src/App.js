import React, { useState } from 'react';
import Menu from './components/Menu'
import Categories from './components/Categories'
import items from './data'

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItem = (category) => {
    const newItem = items.filter((item) => {
      if(item.category === category) {
        setMenuItems(newItem)
      }
    })
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
      
    </main>
  );
}

export default App;
