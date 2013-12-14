$(function(){
    piano = Object.create(piano);
    piano.init(1);
    console.log(piano.id);
});

var piano = {
    init: function(id) {
        this.id = id
    }
};
