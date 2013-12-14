$(function(){
    var keyboard = Object.create(instrument);
    keyboard.init();
    console.log(keyboard.keys);
});

var instrument = {
    init: function() {
        this.keys = {
            'la': 'A',
            'si': 'B',
            'do': 'C',
            're': 'D',
            'mi': 'E',
            'fa': 'F',
            'sol': 'G'
        }
    }
};
