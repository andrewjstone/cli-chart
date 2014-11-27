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
process.exit();
