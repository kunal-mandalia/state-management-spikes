import { effect, signal } from "@preact/signals-react";
import { events } from "../signals/events"

export const leftStore = {
    count: signal(0),
}

export function increment(by = 1) {
    leftStore.count.value = leftStore.count.value + by;
}

effect(() => {
    const latest = events.value[events.value.length - 1];
    if (latest && latest.name === "global_increment") {
        leftStore.count.value = leftStore.count.peek() + 1;
    }
})
