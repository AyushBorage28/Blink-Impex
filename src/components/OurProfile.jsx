import React from 'react'
import { styles } from '../styles'
import { logo } from '../assets'
const OurProfile = () => {
  return (
 
     
    <section id="OurProfile" className=" 
    flex
    md:flex-row
    flex-col
    paddingY
    text-gray-400 body-font">


      <div className= "container py-16 mx-auto">

      <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium  title-font mb-4 text-white">
            OUR <span style={{ color: "#f2b400" }}>STORY</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Blink impex is located in Morbi, Gujarat, India. We are specializing in manufacturing a wide range of porcelain tiles, slabs and sanitarywares.
We at Blink impex have a team of creative designers working with the latest trends of style and the technicians of our company are dedicated to deliver technology driven products at prices that are hard to believe.

          </p>

        </div>

<div  className='flex flex-wrap m-3 items-center justify-center '>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
 
  <div class="px-6 py-4">
    <div class="font-bold text-xl text-yellow-800 mb-2">VISION</div>
    <p class="text-gray-400 text-base">
    Innovation has always been larson's principle philosophy. Drawing inspiration from breathtaking nature to mesmerizing ambience to delivered in its true from and style
    </p>
  </div>

</div>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
 
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2  text-yellow-800">MISSION</div>
    <p class="text-gray-400 text-base">
   <ul>
    <li  className='list-disc'>Provide profitable models for all our associates
Lead the market from technical front.
</li>
<li className='list-disc'>
Lead the market from technical front.
</li>
<li className='list-disc'>
To provide a sustainable future for our talented employees.
</li>
   </ul>

    </p>
  </div>

</div>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
 
  <div class="px-6 py-4">
    <div class="font-bold text-xl text-yellow-800 mb-2">VALUE</div>
    <p class="text-gray-400 text-base">
  <ul>
    <li className='list-disc'>
    Work with authenticity.

    <li  className='list-disc'>
    Maintain excellence
    </li>
<li className='list-disc'>
An un parallel and superior quality that will create value for money for our customers.
</li>

    </li>
  </ul>
    </p>
  </div>
 
</div>
</div>


      </div>
    </section>

 
  )
}

export default OurProfile
