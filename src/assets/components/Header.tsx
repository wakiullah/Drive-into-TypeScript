import type { PropsWithChildren } from "react"

type myProps = PropsWithChildren<{
    imageObj:{
        img:string,
        alt:string
    }}>

function Header({imageObj,children}: myProps) {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
        <img 
          src={imageObj.img} 
          alt={imageObj.alt}
          style={{
            width: '50px',
            height: '50px',
            marginRight: '1rem',
            objectFit: 'cover'
          }}
        />
        <h2 style={{
          margin: 0,
          fontSize: '1.5rem',
          color: '#212529'
        }}>
          {children}
        </h2>
    </header>
  )
}

export default Header
