import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import list from "../../public/booklist.json";
import Card from '../components/Card'
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
      <Navbar />
    
      <div className="min-h-screen px-2 pt-20 pb-6 dark:bg-gray-900">
        <div className="mt-10 md:mt-20 items-center justify-center text-center hover:scale-120 duration-200">
          <h1 className="text-3xl font-bold text-emerald-500 dark:text-emerald-400 mb-6 md:text-4xl uppercase">
            we are delighted to have you {" "}
            <span className="text-rose-400 dark:text-rose-300">Here !!!</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Here are the courses available...
          </p>
          <Link to="/">
            <button className="mt-6 btn btn-secondary hover:bg-pink-700 dark:hover:bg-pink-800 dark:bg-gray-700 dark:text-white duration-300">
              Back to Home
            </button>
          </Link>
        </div>
        
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Course