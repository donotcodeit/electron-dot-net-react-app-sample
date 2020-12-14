import React, { useCallback, useState } from "react";
import { Layout } from "./Layout";

export const Comp1 = () => {
    const [cnt, setCnt] = useState(0);
    const click = useCallback(() => {
        console.log("increase");
        setCnt(o => o + 1);
    }, []);

    return (
        <Layout title="Comp1">
            <div onClick={click}>Count: {cnt} (click to increase)</div>
        </Layout>
    )
}