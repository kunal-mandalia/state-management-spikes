import { useEffect } from "react"
import { rightStore, increment } from "./signals/right"

export function Right() {
    useEffect(() => {
        console.log(">>> right")
    }, [])
    return (
        <div>
            <h2>
                Right
            </h2>
            <div>
                count: {rightStore.count}
            </div>
            <button onClick={() => { increment(1) }}>Increment</button>
        </div>
    )
}
