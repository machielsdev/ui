export class Config {
    private config: Record<string, string> = {};

    public extend(key: string, value: any): void {
        if (this.has(key)) {

        }
    }

    public has(key: string): boolean {
        return Object.prototype.hasOwnProperty.call(this.config, key);
    }

    public set(key: string, value: string): void {
        this.config[key] = value;
    }
}
