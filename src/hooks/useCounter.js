import React, { useState } from "react";

export const useCounter = initialValue => {
    const [count, setCount] = useState(initialValue);
    
    const inc = _ => {
        setCount(count + 1)
    }

    const dec = _ => {
        setCount(count - 1)
    }
}