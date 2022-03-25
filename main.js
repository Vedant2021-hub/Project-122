x = 0;
y = 0;

draw_apple = "";

screen_width = 0;
screen_height = 0;

apple = "";
speak_data = "";
to_number = 0;

function preload() {
    apple = loadImage("apple.jpg");
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening Please Speak";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + Content;
    to_number = Number(Content);
    if (Number.isInteger(to_number)) {

        document.getElementById("status").innerHTML = "Started Drawing apple";
        draw_apple = "set";
    } else {
        document.getElementById("status").innerHTML = "The Speech has not recognized a number: ";
    }
}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height - 100);
    canvas.position(0, 150);
}

function draw() {
    if (draw_apple == "set") {
        for (var i = 1; i <= to_number; i++) {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            image(apple, x, y, 50, 50);
        }
        document.getElementById("status").innerHTML = "apple is Drawn";
        draw_apple = "";
    }
}