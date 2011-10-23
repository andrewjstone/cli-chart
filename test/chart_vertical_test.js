var Chart = require('../chart');

var drawbar = function() {
    var chart = new Chart({width: 80, height: 20, direction: 'y', xlabel:'time (hrs)', ylabel:'coolness', ymax: '200'});
    chart.addBar(10).addBar(12).addBar(8, 'green').addBar(80, 'red').addBar(10);
    chart.draw();
};

drawbar();
process.exit();