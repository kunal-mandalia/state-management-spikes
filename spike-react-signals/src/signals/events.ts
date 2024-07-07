import { signal } from "@preact/signals-react";

export type SignalEvent = {
    name: string,
    data: unknown,
}

export const events = signal<SignalEvent[]>([]);

export function onNewEvent(evt: SignalEvent) {
    events.value = [...events.value, evt];
}

setInterval(() => {
    onNewEvent({
        name: "global_increment",
        data: 1
    })
}, 100)