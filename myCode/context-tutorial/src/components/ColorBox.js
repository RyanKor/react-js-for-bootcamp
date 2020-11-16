import React, {useContext} from 'react'
import ColorContext from '../contexts/Color'

const ColorBox = ()=>{
    const {state} = useContext(ColorContext)
    return (
        <>
            <div
            style={{
                width:"64px",
                height: "64px",
                background:state.color
            }}
            />
            <div
            style={{
                width:"32px",
                height: "32px",
                background:state.subColor
            }}
            />
        </>
    )
}

export default ColorBox