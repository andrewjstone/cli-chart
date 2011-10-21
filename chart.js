var Bar = require('./bar');

var defaults = {
    xlabel: null,
    ylabel: null,
    width: 80,
    height: 40,
    step: 4
};

var Chart = module.exports = function(config) {
    var charm = this.charm = config.charm;
    if (!charm){
        charm = this.charm = require('charm')(process);
        this.charm.on('^C', process.exit);
    }
    
    this.direction = config.direction;
    this.width = config.width || defaults.width;
    this.height = config.height || defaults.height;
    if (this.height) {
        for (var i = 0; i < this.height; i++) {
            charm.write('\n');
        }
    }
    this.step = config.step || defaults.step;
    this.bars = [];
};

Chart.prototype.addBar = function(size, color) {
    this.bars.push(new Bar(this, size, color));
};

Chart.prototype.draw = function() {
    var charm = this.charm;
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
    charm.write('\n');
};
