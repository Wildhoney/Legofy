import {transform} from '../../src/core';

document.addEventListener('DOMContentLoaded', () => {
    transform(document.querySelector('img'), { factor: .05 });
});
