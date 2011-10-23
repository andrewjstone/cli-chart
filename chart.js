var Bar = require('./bar');

var defaults = {
    xlabel: null,
    ylabel: null,
    width: 80,
    height: 40,
    step: 4,
    lmargin: 10,
    direction: 'y',
    xmin: 0,
    ymin: 0
};
defaults.xmax = defaults.width;
defaults.ymax = defaults.height;

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
    this.xmin = config.xmin || defaults.xmin;
    this.xmax = config.xmax || defaults.xmax;
    this.ymin = config.ymin || defaults.ymin;
    this.ymax = config.ymax ||  defaults.ymax;
    this.yscale = 1;
    this.xscale = 1;

    if (this.ymin || this.ymax != defaults.height) {
        this.yscale = this.height/(this.ymax - this.ymin);
    }

    if (this.xmin || this.xmax != defaults.width) {
        this.xscale = this.width/(this.ymax - this.ymin);
    }
};

Chart.prototype.addBar = function(size, color) {
    var scale = this.direction === 'y' ? this.yscale : this.xscale;
    this.bars.push(new Bar(this, Math.round(size*scale), color));
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
            if (i != 0) charm.up(this.step);
        } else {
            if (i != 0) charm.right(this.step);
        }
        charm.push();
        this.bars[i].draw();
        charm.pop();
    }
    if (this.direction === 'x') charm.down(this.step*this.bars.length+1);
    charm.write('\n\n\n');
    if (this.direction === 'y') charm.write('\n');
};
