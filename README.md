# Legofy

> Based entirely on [the Python implementation](https://github.com/JuanPotato/Legofy).

![Travis](http://img.shields.io/travis/Wildhoney/Legofy.svg?style=flat-square)
&nbsp;
![npm](http://img.shields.io/npm/v/legofy.svg?style=flat-square)
&nbsp;
![License MIT](http://img.shields.io/badge/License-MIT-lightgrey.svg?style=flat-square)
&nbsp;
[![Heroku](https://img.shields.io/badge/web-Heroku-blue.svg?style=flat-square)](http://legofy.herokuapp.com/)

* **npm:** `npm install legofy --save`

![Screenshot](media/screenshot.png)

## Usage

Simply `import` the `transform` function from the Legofy module, and then invoke it by passing in your `img` element.

```javascript
import {transform} from 'legofy';

// ...

const imgElement = document.querySelector('img');
transform(imgElement);
```

### Brick Size

You can adjust the size of the bricks by using the second argument of the `transform` function &mdash; by default the `factor` is `.05`.

```javascript
// ...

// Make the bricks twice the size of the default.
transform(imgElement, { factor: .1 });

// ...Or make them twice as small!
transform(imgElement, { factor: .025 });
```

As the brick isn't currently SVG &mdash; [see ticket](https://github.com/Wildhoney/Legofy/issues/5) &mdash; larger bricks will look blurry.

## Browser Support

<img src="https://github.com/alrra/browser-logos/raw/master/chrome/chrome_256x256.png" width="32" height="32" />
<img src="https://github.com/alrra/browser-logos/raw/master/firefox/firefox_256x256.png" width="32" height="32" />
<img src="https://github.com/alrra/browser-logos/raw/master/safari/safari_256x256.png" width="32" height="32" />
<img src="https://github.com/alrra/browser-logos/raw/master/opera/opera_256x256.png" width="32" height="32" />

<sub><sup>Tested with Chrome 46.0, Firefox 42.0, Safari 9.0.1, Opera 33.0.</sup></sub>
