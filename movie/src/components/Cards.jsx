import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars';
import { Link } from "react-router-dom";
import { db, movieref } from '../firebase/Firebase';
import { doc, getDoc, getDocs } from 'firebase/firestore';

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state set initially

  useEffect(() => {
    async function getData() {
      try {
        const _data = await getDocs(movieref);  // Fetching all documents from Firestore
        const movies = [];  // Temporary array to hold movie data

        _data.forEach((doc) => {
          movies.push({ ...doc.data(), id: doc.id });  // Push each movie into the movies array
        });

        setData(movies);  // Update state once with all movie data
        setLoading(false);  // Set loading to false after data is fetched
      } catch (err) {
        console.error("Error fetching data: ", err);
        setLoading(false);  // Ensure loading is set to false even on error
      }
    }

    getData();  // Invoke the data-fetching function
  }, []);
  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {loading ? (
        <h1 className='text-red-500'>Loading Data...</h1>  // Show loading message
      ) : (
        data.map((e, i) => {
          return (
            <Link to={`/detail/${e.id}`}>
              <div className='shadow-lg font-medium card p-2 hover:-translate-y-3 cursor-pointer md:mt-0 mt-4 duration-500' key={i}>
                <img className='h-72' src={e.img} alt="" />
                <h1><span className='text-gray-500'>Name: </span>
                  <span className='text-gray-500'>
                    {e.title}
                  </span>
                </h1>
                <h1><span className='text-gray-500'>Rating:</span>                  
                  <ReactStars
                    size={20}
                    half={true}
                    value={e.rating/e.rated}
                    edit={false}
                  />
                </h1>
                <h1><span className='text-gray-500'>Year:</span>
                  <span className='text-gray-500'>
                    {e.year}
                  </span>
                </h1>
              </div>
            </Link>
          )
        }
        ))
      }
    </div>
  );
};

export default Cards;
