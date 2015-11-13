import RgbQuant from 'rgbquant';
import * as c from './core';

/**
 * @method transform
 * @param {Element} img
 * @param {Number} [factor]
 * @param {String} [blendMode]
 * @return {void}
 */
export function transform(img, { factor = c.DEFAULTS.FACTOR, blendMode = c.DEFAULTS.BLEND_MODE } = {}) {

    c.transform(img, { factor, blendMode, quantize: () => {

        // TODO: Add quantize functionality.

    }});

}
