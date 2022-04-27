import React, { useEffect, useRef, useState } from 'react'

export default function TwoRef() {
    const [count, setCount] = useState(1);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current++;
        console.log('렌더링 수 : ', renderCount.current);
    });

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>올려</button>
        </div>
    )
}
