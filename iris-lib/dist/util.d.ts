import 'gun/sea';
declare function gunAsAnotherUser(gun: any, key: any, f: Function): any;
declare function gunOnceDefined(node: any): Promise<unknown>;
declare const _default: {
    gunOnceDefined: typeof gunOnceDefined;
    gunAsAnotherUser: typeof gunAsAnotherUser;
    getHash(str: string, format?: string): Promise<any>;
    capitalize(s: string): string;
    generateName(): string;
    base64ToHex(str: string): string;
    getCaret(el: HTMLInputElement): any;
    injectCss(): void;
    getUrlParameter(sParam: string, sParams: string): string | true | undefined;
    formatTime(date: Date): any;
    formatDate(date: Date): string;
    getDaySeparatorText(date: Date, dateStr: string, now?: Date | undefined, nowStr?: string | undefined): string;
    getProfileLink(pub: string): string;
    truncateString(s: string, length?: number): string;
    createElement(type: string, cls?: string | undefined, parent?: HTMLElement | undefined): HTMLElement;
    isNode: boolean;
    isElectron: boolean | "";
    isMobile: boolean;
    throttle: (func: Function, limit: number) => () => void;
    debounce: (func: Function, delay: number) => () => void;
    sample: (arr: any[]) => any;
    sampleSize: (arr: any[], size: number) => any[];
    defer: (func: Function) => number;
    once: (func: Function) => () => void;
    omit: (obj: any, keys: string[]) => {};
};
export default _default;
