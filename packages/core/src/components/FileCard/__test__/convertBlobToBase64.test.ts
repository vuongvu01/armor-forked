import { convertBlobToBase64 } from '../utils';

describe('convertBlobToBase64', () => {
    // to create a mock blob value
    function fixBinary(bin: string) {
        const { length } = bin;
        const buf = new ArrayBuffer(length);
        const arr = new Uint8Array(buf);
        for (let i = 0; i < length; i += 1) {
            arr[i] = bin.charCodeAt(i);
        }
        return buf;
    }

    const base64Input =
        'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB1klEQVR42n2TzytEURTHv3e8N1joRhZG' +
        'zJsoCjsLhcw0jClKWbHwY2GnLGUlIfIP2IjyY2djZTHSMJNQSilFNkz24z0/Ms2MrnvfvMu8mcfZvPvu' +
        'Pfdzz/mecwgKLNYKb0cFEgXbRvwV2s2HuWazCbzKA5LvNecDXayBjv9NL7tEpSNgbYzQ5kZmAlSXgsGG' +
        'XmS+MjhKxDHgC+quyaPKQtoPYMQPOh5U9H6tBxF+Icy/aolqAqLP5wjWd5r/Ip3YXVILrF4ZRYAxDhCO' +
        'J/yCwiMI+/xgjOEzmzIhAio04GeGayIXjQ0wGoAuQ5cmIjh8jNo0GF78QwNhpyvV1O9tdxSSR6PLl51F' +
        'nIK3uQ4JJQME4sCxCIRxQbMwPNSjqaobsfskm9l4Ky6jvCzWEnDKU1ayQPe5BbN64vYJ2vwO7CIeLIi3' +
        'ciYAoby0M4oNYBrXgdgAbC/MhGCRhyhCZwrcEz1Ib3KKO7f+2I4iFvoVmIxHigGiZHhPIb0bL1bQApFS' +
        '9U/AC0ulSXrrhMotka/lQy0Ic08FDeIiAmDvA2HX01W05TopS2j2/H4T6FBVbj4YgV5+AecyLk+Ctvms' +
        'QWK8WZZ+Hdf7QGu7fobMuZHyq1DoJLvUqQrfM966EU/qYGwAAAAASUVORK5CYII=';

    const binary = fixBinary(atob(base64Input));
    const blob = new Blob([binary], { type: 'image/png' });

    it('should convert blob to base64', async () => {
        const convertedValue = await convertBlobToBase64(blob);

        expect(convertedValue).toBe(`data:image/png;base64,${base64Input}`);
    });

    it('should return error', async () => {
        // @ts-ignore
        await expect(convertBlobToBase64('undefined')).rejects.toThrowError();
    });
});
