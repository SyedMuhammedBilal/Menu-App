import React, { useState } from 'react';
import Menu from './components/Menu'
import Categories from './components/Categories'
import items from './data'

const allCategories = ['all', ...new Set (items.map((item) => {
  return (
    item.category
  )
}))];

console.log(allCategories);

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return
    }
    const newItem = items.filter((item) => item.category === category)
    setMenuItems(newItem);
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItem={filterItem} />
        <Menu items={menuItems} />
      </section>
      
    </main>
  );
}

export default App;
