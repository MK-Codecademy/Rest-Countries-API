import React, { useEffect } from 'react'
import { useSelector } from "react-redux";


export default function Example () {

    const dark = useSelector(state => state.darkMode.value)

    // useEffect(() => {
    //     console.log("🚀 ~ file: example.js ~ line 8 ~ Example ~ dark", dark)
    // },[dark])

    return (
        <div>
            <p>{`From dark mode button ${dark}`}</p>
        </div>
    )
}