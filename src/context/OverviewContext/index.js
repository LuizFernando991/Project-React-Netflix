import React, { useState } from 'react'



export const OverViewContext = React.createContext()

export const OverviewContext = ({children})=>{

    const [ isOpen, setIsOpen ] = useState(false)
    const [ data, setData ] = useState(null)


    return <OverViewContext.Provider value= {{isOpen, setIsOpen, data, setData}}>{children}</OverViewContext.Provider>
}
