import React, { useState } from 'react'
import ReactStars from 'react-stars';
import { Link } from "react-router-dom";
const Cards = () => {
  const [data, setdata] = useState([
    {
      name:"Avenger",
      year:"2018",
      rating:5,
      img:"https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_.jpg"
    },
    {
      name:"Avenger",
      year:"2018",
      rating:5,
      img:"https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_.jpg"
    },
    {
      name:"Avenger",
      year:"2018",
      rating:5,
      img:"https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_.jpg"
    },
    {
      name:"Avenger",
      year:"2018",
      rating:2,
      img:"https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_.jpg"
    },
    {
      name:"Avenger",
      year:"2018",
      rating:3,
      img:"https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_.jpg"
    },
    {
      name:"Avenger",
      year:"2018",
      rating:5,
      img:"https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_.jpg"
    }    

  ])
  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
        {data.map((e,i)=>{
          return(
            <div className='shadow-lg  font-medium card p-2 hover:-translate-y-3 cursor-pointer md:mt-0 mt-4 duration-500' key={i}>
          <img className='h-72' src={e.img} alt="" />
          <h1><span className='text-gray-500'>Name:</span> {e?.name}</h1>
          <h1><span className='text-gray-500'>Rating:</span>
          <ReactStars
          size={20}
          half={true}
          value={e.rating}
          edit={false}
          />
          </h1>
          <h1><span className='text-gray-500'>Year:</span>{e?.year}</h1>
      </div>
          )
        })}
        
        
    </div>
  )
}

export default Cards