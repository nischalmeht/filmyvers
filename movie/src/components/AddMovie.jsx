import React, { useState } from 'react'

const AddMovie = () => {
    const [form, setform] = useState({
        title:'',
        year:'',
        description:"",
        img:""
    })
  return (
    <div>
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-3xl text-xl font-medium title-font mb-4 text-white">
            Add Movie
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label  className="leading-7 text-sm text-gray-300">
                  Title
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.title}
                  onChange={(e)=>setform({...form,title:e.target.value})}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label  className="leading-7 text-sm text-gray-300">
                  Year
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.year}
                  onChange={(e)=>setform({...form,year:e.target.value})}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label  className="leading-7 text-sm text-gray-300">
                  Image Link
                </label>
                <input
                  id="message"
                  name="message"
                  value={form.img}
                  onChange={(e)=>setform({...form,img:e.target.value})}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label  className="leading-7 text-sm text-gray-300">
                  Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.description}
                  onChange={(e)=>setform({...form,description:e.target.value})}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button  className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
                {/* {loading ? <TailSpin height={25} color="white" /> : 'Submit'} */}
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default AddMovie