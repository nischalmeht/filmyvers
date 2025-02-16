import React from 'react'

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
        <div className='shadow-lg card p-2 hover:-translate-y-3 cursor-pointer'>
            <img className='h-72' src="https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_.jpg" alt="" />
            <h1>Avenger</h1>
            <h1>Rating:5</h1>
            <h1>Year:2019</h1>
        </div>
    </div>
  )
}

export default Cards