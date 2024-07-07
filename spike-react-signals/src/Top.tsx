import { useEffect } from "react";
import { onNewEvent } from "./signals/events"


export function Top() {
    useEffect(() => {
        console.log(">>> top")
    }, [])
    return (
        <div>
            <h1>Top</h1>
            <button onClick={() => {
                onNewEvent({
                    name: "global_increment",
                    data: 1
                });
            }}>Global increment</button>
        </div>
    )
}