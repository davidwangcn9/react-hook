import React, {useEffect, useState} from "react";
import {useUserList} from "./useUserList";

export function MyHook() {
    const [count, setCount] = useState(1);
    const [disableLeft, setDisableLeft] = useState(true);
    const [disableRight, setDisableRight] = useState(false);
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                setCount(count - 1);
                setDisableLeft((count - 1) === 1)
            }} disabled={disableLeft}>
                left
            </button>
            <button onClick={() => {
                setCount(count + 1)
                setDisableLeft((count + 1) === 1)
            }} disabled={disableRight}>
                right
            </button>
            <ul>{useUserList(count)}</ul>
        </div>
    );
}
