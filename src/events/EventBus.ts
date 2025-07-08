export const Events = {
    ASSETS_LOADED: 'assets-loaded',

    SPLASH_SCENE_CREATED: 'splash-scene-created'
} as const;

type EventKey = typeof Events[keyof typeof Events];

export class EventBus {

    private static instance: EventBus;
    private events: Record<EventKey, Record<string, (...args: any[]) => void>>;

    private constructor() {
        this.events = {} as Record<EventKey, Record<string, (...args: any[]) => void>>;

        for (const key in Events) {
            const eventName = Events[key as keyof typeof Events];
            this.events[eventName] = {};
        }
    }

    public static getInstance(): EventBus{
        if (!EventBus.instance) {
            EventBus.instance = new EventBus();
        }

        return EventBus.instance;
    }

    public on(event: EventKey, callback: (...args: any[]) => void): string {
        // No need to check if it exists bc events typed and hardcoded
        const id: string = crypto.randomUUID();
        this.events[event][id] = callback;

        return id;
    }

    public off(event: EventKey, id: string): string {
        if (this.events[event]?.[id]) {
            delete this.events[event]?.[id];
            return '';
        }
        // If fail return same id again
        return id;
    }

    public emit(event: EventKey, ...args: any[]): void {
        if (!this.events[event]) {
            console.log("No listeners for event: ", event);
            return;
        }

        const listeners = this.events[event];
        for (const id in listeners) {
            listeners[id](...args);
        }
    }
}