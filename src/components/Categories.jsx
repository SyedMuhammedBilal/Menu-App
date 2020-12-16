import React from 'react'

const Categories = ({ filterItem, categories }) => {
    return (
        <div className='btn-container'>
            {categories.map((category, index) => {
                return (
                    <button 
                        className='filter-btn' 
                        type='button'
                        key={index}
                        onClick={() => filterItem(category)}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories
