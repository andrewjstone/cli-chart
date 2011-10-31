var Chart = require('../chart');

var drawbar = function() {
    var chart = new Chart({width: 80, lmargin: 11, height: 20, step: 2, direction: 'x'});
    chart.addBar({size:10, label: 'oranges'})
	 .addBar({size:12, label: 'apples'})
	 .addBar({size:8, color:'green', label: 'pears'})
	 .addBar({size:80, color:'red', label: 'peaches'})
	 .addBar({size:10, label: 'grapes'});
    chart.draw();
};

drawbar();
process.exit();
