import {forwardRef,useImperativeHandle, useState } from "react";

const Counter = forwardRef((_props,ref) => {
    const [count ,SetCount] = useState(0);
    useImperativeHandle(ref,() => ({
        increment: () => {
            SetCount((prevCount) => prevCount +1);
        },
        decrement: () => {
            SetCount((preconnect) => preconnect -1);
        }
    }));
    return (
        <div>
            <h1> Counter: {count}</h1>
        </div>
    )
});
export default Counter;