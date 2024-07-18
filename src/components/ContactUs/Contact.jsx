import React from 'react'
import MainNavbar from '../MainNavbar/MainNavbar'
import facebook from "../About/assets/Frame 141.png";
import instagram from "../About/assets/Frame 142.png";
import linkdin from "../About/assets/Frame 143.png";
import email from "../About/assets/Frame 1000003533.png"
import call from "../About/assets/Frame 1000003539.png"
import location from "../About/assets/Frame 1000003535.png"

import './Contact.css'
import Googlemap from './Googlemap';



const Contact = () => {
  return (
    <div className='contactusContainer'>
      <div>
        <MainNavbar />
      </div>

      <div className='mainSection'>
        <div className='left'>

          <div>
            <div>
              <div>
                <h1>Let's talk</h1>
              </div>
              <div>
                <p>We collaborate with thousands of creators, enterpreneurs and complete legends.</p>
                <hr className='linee' />
              </div>
              <div className='relative top-20 '>
                <div className='email' >
                  <div className='flex '>
                    <img src={email} alt="" />
                    <h2 className='font-bold text-lg'>Our email</h2>
                  </div>
                  <span>hello@example.com</span>
                </div>
                <div className='call'>
                  <div className='flex'>
                    <img src={call} alt="" />
                  </div>
                  <h3 className='font-bold text-lg'>Call us</h3>
                  <span>+123 456 7892</span>
                </div>
                <div className='location'>
                  <div className='flex'>
                    <img src={location} alt="" />
                  </div>
                  <h4 className='font-bold text-lg'>Find us</h4>
                  <span>Open Google Maps</span>
                </div>
              </div>

            </div>
            <div>

            <hr  className='lineee'/>
            </div>
            <div className='socialmedia'>
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={linkdin} alt="" />
            </div>
          </div>
        </div>



        <div className='rightside'>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block text-xl tracking-wide text-gray-700   mb-2" for="grid-first-name">
                  First Name
                </label>
                <input class="top-6 relative w-full underline text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block text-xl tracking-wide text-gray-700  mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input class="top-6 relative w-full underline  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />

              </div>
            </div>

            <div className='flex'>
              <div class="">
                <div class="">
                  <label class="block text-xl  top-6 relative tracking-wide text-gray-700  mb-2" for="grid-email">
                    Email
                  </label>
                  <input class="border text-gray-700  border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 top-10 relative" id="grid-email" type="email" />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2 ml-11">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="top-6 relative tracking-wide text-gray-700 text-xl  mb-2" for="grid-phone">
                    Phone
                  </label>
                  <input class=" top-10 relative text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
                </div>
              </div>
              <div class=" relative top-24 -left-96">
                <div class="">
                  <label class="-left-24 top-10 relative tracking-wide text-gray-700 text-xl " for="grid-message">
                    Message
                  </label>
                  <input class=" top-16 -left-24 relative text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" type="message" />
                </div>
              </div>
            </div>
            <button>Submit Now</button>
          </form>
         
        </div>
      </div>

      <div className='googlemap'>
          <Googlemap />
          </div>
    </div>  
  )
}

export default Contact