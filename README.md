# Legofy

> Based entirely on [the Python implementation](https://github.com/JuanPotato/Legofy).

![Travis](http://img.shields.io/travis/Wildhoney/Legofy.svg?style=flat-square)
&nbsp;
![npm](http://img.shields.io/npm/v/legofy.svg?style=flat-square)
&nbsp;
![License MIT](http://img.shields.io/badge/License-MIT-lightgrey.svg?style=flat-square)
&nbsp;
[![Heroku](https://img.shields.io/badge/web-Heroku-blue.svg?style=flat-square)](http://legofy.herokuapp.com/)

![Screenshot](media/screenshot.png)

* **npm:** `npm install legofy --save`

## Usage

Simply `import` the `transform` function from the Legofy module, and then invoke it by passing in your `img` element.

```javascript
import {transform} from 'legofy';

// ...

const imgElement = document.querySelector('img');
transform(imgElement);
```
