import RgbQuant from 'rgbquant';
import * as c from './core';

/**
 * @method transform
 * @param {Element} img
 * @param {Number} [factor]
 * @param {String} [blendMode]
 * @param {Boolean} [restrictColours]
 * @return {void}
 */
export function transform(img, { factor = c.DEFAULTS.FACTOR, blendMode = c.DEFAULTS.BLEND_MODE, restrictColours = true } = {}) {
    transform(img, { factor, blendMode, restrictColours });
}
