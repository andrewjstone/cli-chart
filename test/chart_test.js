var Chart = require('../chart');

var drawbar = function() {
    var chart = new Chart({width: 80, height: 20, direction: 'y', xlabel:'time (hrs)', ylabel:'coolness'});
    chart.addBar(10);
    chart.addBar(12);
    chart.addBar(8, 'green');
    chart.addBar(19, 'red');
    chart.addBar(10);
    chart.draw();
};

drawbar();