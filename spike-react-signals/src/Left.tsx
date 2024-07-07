import { useEffect } from "react"
import { leftStore, increment } from "./signals/left"

export function Left() {
    useEffect(() => {
        console.log(">>> left")
    }, [])
    return (
        <div>
            <h2>
                Left
            </h2>
            <div>
                count: {leftStore.count}
            </div>
            <button onClick={() => { increment(1) }}>Increment</button>
        </div>
    )
}
