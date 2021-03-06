import { useEffect } from 'react'

export const useClickOut = ( setIsOpen, Ref)=>{

 
  
  useEffect(() => {
    

    const handleOutClick = (event)=>{
      
      

          if(!Ref.contains(event.target)){
            setIsOpen(false)
        }}
    
      document.addEventListener('mousedown', handleOutClick)
    
      return ()=>{
        document.removeEventListener('mousedown', handleOutClick)
      }
    }, [setIsOpen, Ref])

}