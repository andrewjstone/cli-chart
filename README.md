# cli-chart

Create color bar charts in the terminal using node.js!

## Example

 ![dog happiness](https://github.com/andrewjstone/cli-chart/raw/master/dog-happiness-chart.png)


````javascript
var Chart = require('cli-chart');
var chart = new Chart({
    xlabel: 'snausages/hr',
    ylabel: 'dog\nhappiness',
    direction: 'y',
    width: 80,
    height: 20,
    lmargin: 15,
    step: 4
});

chart.addBar(3, 'red');
chart.addBar(9).addBar(13).addBar(15).addBar(16);
chart.draw();    
````

## API


## License

### The MIT License (MIT)

Copyright (c) 2011 Andrew J. Stone

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
