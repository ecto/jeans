# jeans

Easy, opinionated configuration API for node.js

![jeans](http://f.cl.ly/items/2Y0f17082Q3f1z1e3D3v/med_gallery_2574__616.png)

# install

````bash

npm install jeans

````

# usage

````javascript

var jeans = require('jeans');

jeans.set('pockets', 4);

var pockets = jeans.get('pockets');

````

````javascript

jeans.set('holding', {
  pen: 1,
  receipts: 10,
  money: 0
});

````

````javascript

jeans.set('holding', [
  'pen',
  'receipt',
  'cash'
]);

````

````javascript

jeans.env('production');

jeans.set('port', 80);

var port = jeans.get('port');

jeans.env('development');

````

# license

(The MIT License)

Copyright (c) 2011 Cam Pedersen <cam@onswipe.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.