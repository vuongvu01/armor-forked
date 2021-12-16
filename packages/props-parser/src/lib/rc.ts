// @ts-ignore
import findUpAll from 'find-up-all';
import debug from 'debug';

// eslint-disable-next-line @typescript-eslint/ban-types
type RCType = {};

const d = debug('app');

const defaultSettings = {};

export class RC {
    private static config?: RCType;

    public static async getConfig(): Promise<RCType> {
        if (!this.config) {
            const files = await findUpAll('.armorpprc', {
                cwd: process.cwd(),
            });

            d(files);

            if (!files || !files[0]) {
                return defaultSettings;
            }

            const [rcFile] = files;

            d(`RC file found at: ${rcFile}`);

            try {
                this.config = await import(rcFile);
            } catch (e) {
                console.error(
                    // @ts-ignore
                    `Was not able to import the RC file located at: ${rcFile}: ${e.message}`,
                );
                // @ts-ignore
                d(e.stack);
                return defaultSettings;
            }
        }

        return { ...defaultSettings, ...this.config };
    }
}
