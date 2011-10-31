var Chart = require('../chart');

var drawbar = function() {
    var chart = new Chart({width: 80, lmargin: 11,
        height: 20, step: 2, direction: 'x', ylabel:'time (hrs)', xlabel:'coolness'});
    chart.addBar({size:10}).addBar({size:12}).addBar({size:8, color:'green'}).addBar({size:80, color:'red'}).addBar({size:10});
    chart.draw();
};

drawbar();
process.exit();
