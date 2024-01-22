import React from 'react'
import Button from './Button'

function Navigation() {
  return (
    <nav className='flex justify-between border m-5 rounded-full'>
        <a href='/' className='m-3 ml-9 border'>ClearLink</a>

        <div className='flex m-3 gap-6 border'>
          <ul>
              <a href='/product'>Product</a>
          </ul>
          <ul>
              <a href='/solution'>Solution</a>
          </ul>
          <ul>
              <a href='/resources'>Resources</a>
          </ul>
          <ul>
              <a href='/pricing'>Pricing</a>
          </ul>
        </div>

        <div> 
          <Button 
              color='white'
              bgColor='blue'
              text='Talk to Sales'
              borderRadius='10px'
              size='md'
            />
          <Button 
              color='white'
              bgColor='blue'
              text='Sign up for Free'
              borderRadius='10px'
              size='md'
            />
        </div> 


    </nav>
  )
}

export default Navigation