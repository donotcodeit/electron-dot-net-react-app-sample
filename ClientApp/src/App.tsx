import React, { useCallback, useState } from "react";

import "./custom.css"

export const App = () => {
    const [cnt, setCnt] = useState(0);
    const click = useCallback(() => {
        console.log("increase");
        setCnt(o => o + 1);
    }, []);

    return (
        <div>
            <h1>Test</h1>
            <div onClick={click}>Count: {cnt} (click to increase)</div>
        </div>
    )
}
