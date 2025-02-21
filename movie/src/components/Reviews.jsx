import { addDoc } from 'firebase/firestore'
import React,{useState} from 'react'
import { TailSpin } from 'react-loader-spinner'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import { reviewsRef } from '../firebase/Firebase'

const Reviews = ({userRated,id,prevRating}) => {
    const [rating, setrating] = useState();
    const [form,setForm]=useState();
    const [loading, setLoading] = useState(false)
    const sendReview = async () => {
        setLoading(true);
        await addDoc(reviewsRef,{
            movie_id:id,
            rating:rating,
            thought:form,
            timestamp:new Date().getTime()
        })
        const ref = doc(db, "movies", id);
        await updateDoc(ref, {
            rating: prevRating + rating,
            rated: userRated + 1
        })
        Swal.fire({
            title: "Review Sent",
            icon: "success",
            buttons: false,
            timer: 3000
          })
          setform('');
          setrating('')
          setLoading(false)
    }
  return (
    <div className='mt-2 border-gray-700 w-full py-2 border-t-2'>
         <ReactStars
            size={30}
            value={rating}
            onChange={(rate) => setrating(rate)}
            half={true}
            
        />
        <input type="text" value={form} placeholder='Enter ur thoughts' onChange={(e)=>setForm(e.target.value)}  className='w-full p-2 outline-none header text-white' />
        <button onClick={sendReview} className='bg-green-600 flex justify-center w-full p-2'>
            {loading ? <TailSpin height={20} color="white" /> : 'Share'}
        </button>
    </div>
  )
}

export default Reviews