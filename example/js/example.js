import {throttle} from 'lodash';
import {transform} from '../../src/core';

(function($window, $document) {

    $document.addEventListener('DOMContentLoaded', () => {

        const imgElement = document.querySelector('img');
        transform(imgElement);

        $window.addEventListener('resize', throttle(() => {
            transform(imgElement);
        }, 250));

    });

})(window, document);
