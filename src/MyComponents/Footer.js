import React from 'react'

export const Footer = () => {
   let footerStyle = {
      position: "relative",
      // bottom:"100vh",
      width:"100%",
      border:"2px solid red",
      top:"10vh"
    };

  return (
   <footer className='bg-dark text-light py-3' style=
    {footerStyle}>
    <p className='text-center'> 
    Copy right &copy; My todoList.com
    </p>
    </footer>
  )
}
