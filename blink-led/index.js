const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {
    var led = new five.Led(13);
    led.blink(500);

    this.repl.inject({
        myled: led,
    });
  });

board.on("error", function(err){
    console.log(err);
})

