import { signal } from "@preact/signals-react";

export const rightStore = {
    count: signal(0),
}

export function increment(by = 1) {
    rightStore.count.value = rightStore.count.value + by;
}
