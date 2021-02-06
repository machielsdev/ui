import { Config } from '@/components/utils/config/Config';

export class ConfigManager {
    private config: Record<string, Config> = {};

    public addNamespace(key: string): void {
        if (!Object.prototype.hasOwnProperty.call(this.config, key)) {
            this.config[key] = new Config();
        }
    }
}
