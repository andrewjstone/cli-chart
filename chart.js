var Bar = require('./bar');

var defaults = {
    xlabel: null,
    ylabel: null,
    width: 80,
    height: 40,
    step: 4,
    lmargin: 10,
    direction: 'y'
};

var Chart = module.exports = function(config) {
    var charm = this.charm = config.charm;
    if (!charm){
        charm = this.charm = require('charm')(process);
        this.charm.on('^C', process.exit);
    }
    this.xlabel = config.xlabel;
    this.ylabel = config.ylabel;
    this.direction = config.direction || defaults.direction;
    this.width = config.width || defaults.width;
    this.height = config.height || defaults.height;
    this.lmargin = config.lmargin || defaults.lmargin;
    this.step = config.step || defaults.step;
    this.bars = [];
};

Chart.prototype.addBar = function(size, color) {
    this.bars.push(new Bar(this, size, color));
    return this;
};

Chart.prototype.draw = function() {
    var charm = this.charm;

    if (this.height) {
        for (var i = 0; i < this.height; i++) {
            charm.write('\n');
            if (this.ylabel) {
                charm.right(this.lmargin);
                charm.write('|');
            }
        }
    }
    charm.left(this.lmargin);
    if (this.ylabel) {
        charm.push();
        charm.up(this.height/2);
        charm.write(this.ylabel);
        charm.pop();
    }
    if (this.lmargin) {
        charm.right(this.lmargin);
    }
    if (this.xlabel) {
        var pos = Math.floor(this.lmargin + this.step*this.bars.length/2 - this.xlabel.length/2);
        charm.push();
        charm.write('\n');
        charm.right(this.lmargin);
        for (var i = this.lmargin-1; i < this.width; i++) {
            charm.write('-');
        }
        charm.write('\n');
        charm.right(pos);
        charm.write(this.xlabel);
        charm.pop();
        charm.up(2);
    }

    for (var i = 0; i < this.bars.length; i++) {
        if (this.direction === 'x') {
            charm.down(this.step);
        } else {
            charm.right(this.step);
        }
        charm.push();
        this.bars[i].draw();
        charm.pop();
    }
    charm.write('\n\n\n');
};
