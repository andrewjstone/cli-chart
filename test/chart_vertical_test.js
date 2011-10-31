var Chart = require('../chart');

var drawbar = function() {
    var chart = new Chart({width: 80, height: 20, direction: 'y', xlabel:'time (hrs)', ylabel:'coolness', ymax: '200'});
    chart.addBar({size:10}).addBar({size:12}).addBar({size:8, color:'green'}).addBar({size:80, color:'red'}).addBar({size:10});
    chart.draw();
};

drawbar();
process.exit();