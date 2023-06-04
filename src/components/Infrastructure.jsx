import React from 'react'
import { styles } from '../styles'
import { logo } from '../assets'
const Infrastructure = () => {
  return (
    <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 flex items-center justify-center">
      <img src={logo} alt="Image" class="w-full h-auto p-15"/>
    </div>
    <div class="w-full md:w-1/2  p-16 ">
      <h2 class="text-2xl text-yellow-800 font-bold mb-4">Infrastructure</h2>
      <p class="text-gray-400 ">Blink Impex is dedicated to elevating every aspect of its products, from technology and research to design and quality. With a firm commitment to excellence, we continuously explore and implement cutting-edge production techniques to enhance the overall quality of our offerings. Our team's exceptional creativity and design prowess enable us to deliver designs that embody both innovation and exclusivity. By blending ingenuity with our relentless pursuit of uniqueness, we strive to provide our customers with truly exceptional products..</p>
    </div>
  </div>
  
  )
}

export default Infrastructure
