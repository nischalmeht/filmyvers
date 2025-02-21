import { doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { db, movieref } from '../firebase/Firebase';
import { ThreeCircles } from 'react-loader-spinner';
import Reviews from './Reviews';
import ReactStars from 'react-stars';
const Details = () => {
    const id = useParams()
    const [data, setData] = useState({
        title: "",
        year: "",
        image: "",
        description: "",
        rating: 0,
        rated: 0
    });
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                const documentId = id.id;

                const _doc = doc(db, "movies", documentId);  // Reference to the movie document
                const _data = await getDoc(_doc);    // Fetch the document
                console.log(_data)
                if (_data.exists()) {                // Check if data exists
                    setData(_data.data());
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);  // Ensure loading is set to false after the request completes
            }
        }

        // if (documentId) {
        getData();  // Fetch data when id changes
        // }

    }, [id.id]); // Adding 'id' as a dependency, so the effect re-runs when 'id' changes



    return (
        <div className='p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center'>
            {loading ? <div className='h-96 flex w-full justify-center items-center'><ThreeCircles height={30} color="white" /></div> :
                <>
                    <img src={data.img} alt="" className="h-96 block md:sticky top-24" />
                    <div className="ml-0 md:ml-4 w-full md:1/2">
                        <h1 className='text-3xl font-bold text-gray-400'>{data.title} <span className='text-xl'>({data.year})</span></h1>
                        {/* <ReactStars
                            size={20}
                            half={true}
                            value={data?.rating / data?.rated}
                            edit={false}
                        /> */}
                         <ReactStars
                            size={15}
                            half={true}
                            value={data.rating/data.rated}
                            edit={false}
                        />
                     <h1>
                     <span className="text-gray-500">Year: {data.year}</span> 
                     </h1>
                     <p className='mt-2 text-gray-300'>{data.description}</p>
                    <Reviews id={id} prevRated={data.rating} userRated={data.rated}/>
                    </div>
                </>}
        </div>
    )
}

export default Details