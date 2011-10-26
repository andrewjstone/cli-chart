var defaults = {
    color: 'blue'
};

var Bar = module.exports = function(chart, size, color) {
    this.chart = chart;
    this.size = size;
    this.color = color || defaults.color;
};

Bar.prototype.draw = function(scale) {
    var charm = this.chart.charm;
    var dir = this.chart.direction;
    charm.background(this.color);
    for (var i = 0; i < Math.round(this.size*scale); i++) {
        if (dir === 'x') {
            charm.write(' ');
        } else {
            charm.write(' ');
            charm.left(1);
            charm.up(1);
        }
    }
    charm.display('reset');
};