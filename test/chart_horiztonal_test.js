var Chart = require('../chart');

var drawbar = function() {
    var chart = new Chart({width: 80, lmargin: 11, 
        height: 20, step: 2, direction: 'x', ylabel:'time (hrs)', xlabel:'coolness'});
    chart.addBar(10).addBar(12).addBar(8, 'green').addBar(80, 'red').addBar(10);
    chart.draw();
};

drawbar();
process.exit();
