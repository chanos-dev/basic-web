import React, { useRef, useState } from 'react'

export default function OneRef() {
    const [renderer, setRenderer] = useState(0);

    const countRef = useRef(0);
    let countVar = 0;

    const doRendering = () => {
        setRenderer(renderer + 1);
    }

    const increaseRef = () => {
        countRef.current++;
        console.log('Ref : ',countRef.current);
    };

    const increaseVar = () => {
        countVar++;
        console.log('Var : ',countVar);
    };

    const printResults = () => {
        console.log(`ref: ${countRef.current} var: ${countVar}`);
    }


    return (
        <div>
            <p>Ref: {countRef.current}</p>
            <p>Val: {countVar}</p>
            <button onClick={doRendering}>렌더!</button>
            <button onClick={increaseRef}>Ref 올려</button>
            <button onClick={increaseVar}>Val 올려</button>            
            <button onClick={printResults}>Ref Var 출력</button>
        </div>
    )
}
