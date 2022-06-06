import React, { useState, useEffect } from 'react'

export default function Box({ createBoxStyle }) {
    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log('call box');
        setStyle(createBoxStyle());
    }, [createBoxStyle])

    return (
        <div style={style}/>
    )
}