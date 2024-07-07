import { events } from "./signals/events";

export function Events() {
    return (
        <div style={{ height: "200px", overflowY: "scroll" }}>
            {events.value.map((evt, idx) => {
                return (
                    <div key={`${evt.name}_${idx}`}>
                        {evt.name} : {`${evt.data}`}
                    </div>
                )
            })}
        </div>
    )
}
