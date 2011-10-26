var Chart = require('../chart');

var chart = new Chart({width: 120, height: 20, directon: 'y', xlabel: 'time (hrs)', 
    ylabel: 'winners', xmax: 3});

var min = new Date().getTime();
var max = new Date(min+1000*60*60*3); // 3 hrs
var data = [];
for (var i = 0; i < 1000; i++) {
    var date = Math.floor(min + Math.random()*(max - min));
    data.push(date);
}

chart.bucketize(data);
chart.draw();
process.exit();

