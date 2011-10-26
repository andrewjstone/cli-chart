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

## constructor
    var config = {};
    var chart = new Chart(config);

config attributes:

 * **xlabel**: string - the label for the x axis
     * default: undefined
 * **ylabel**: string - the label for the y axis
     * default: undefined
 * **direction**: string - 'x' || 'y'
     * default: 'y'
 * **width**: number - width of chart in characters
     * default: 80
 * **height**: number - height of chart in characters
     * default: 20
 * **lmargin**: number - margin to the left of the chart 
     * default: 10
 * **step**: number - the distance in characters between bars
     * default: 4
 * **xmin**: number - the minimum of the x-axis
     * default: 0
 * **xmax**: number - the maxmimum of the x-axis
     * default: width
 * **ymin**: number - the minimum of the y-axis
     * default: 0
 * **ymax**: number - the maxmimum of the y-axis
     * default: height
 

## methods

### chart.addBar(size, color)
Manually add a bar at the next position, which is 'chart.step' spaces away on the axis perpendicular to 'chart.direction'.

  * size - Size of the bar in nominal units
  * color - Ansi color string - 'white','red','blue', etc...


### chart.bucketize(data)
Instead of manually adding bars with addBar() you can just add your data and allow cli-chart to automatically put data in buckets based on the values of the data. The number of buckets is equal to the width or height(based on direction) in characters of the chart divided by the step size. Data is sorted from min to max when bucketized. Size is automatically scaled to fit the bars in the graph and label the axis of the chart direction. min and max parameters are optional, but useful for small or sparse arrays of data where the data won't fill out every bar on the graph.

  * data - An array of values to chart
  * min - The minimum value for the chart to plot (optional)
  * max - The maximum value for the chart to plot (optional)

See the bucketize example [here](https://github.com/andrewjstone/cli-chart/blob/master/test/chart_vertical_bucketize_test.js) .

### chart.draw()
Draw the chart consisting of the bars created with chart.addBar().


## License

### The MIT License (MIT)

Copyright (c) 2011 Andrew J. Stone

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
