//P-39 Traffic Racer 2D V3.2 ~ C39 WHTJR
//At 24-04-2021 13:20 - Remastered

var Play = 1;
var End = 0;
var Win = 2;
var gameState = Play;

var Kilometers = 0;
var OTraffic, OTrafficGroup;
var GuardRailL, GuardRailR, SolidLine;
var PTraffic, PPTraffic, PTrafficGroup;
var CarCrash, CarCrashImage, PlayerCar, PlayerCarImage;
var testObject, assist, destination;
var laneR, laneL;
var marking10000m, marking10000mImage, marking20000m, marking20000mImage, marking30000m, marking30000mImage, marking40000m, marking40000mImage, universitydestina, universitydestinaImage;

function preload() {

    PlayerCarImage = loadImage("playercar.png");
    CarCrashImage = loadImage("crash.png");
    marking10000mImage = loadImage("univ-10000m.png");
    marking20000mImage = loadImage("univ-20000m.png");
    marking30000mImage = loadImage("univ-30000m.png");
    marking40000mImage = loadImage("univ-40000m.png");
    universitydestinaImage = loadImage("universitydestina.png");
}

function setup() {

    createCanvas(displayWidth-10, displayHeight-150);

    for (var i = -49000; i < 5000; i=i+400){
         var light = createSprite(550, i, 40, 10);
        light.shapeColor =rgb(200, 200, 200);
    }

    for (var i = -49000; i < 10000; i=i+400){
        var light2 = createSprite(50, i, 40, 10);
       light2.shapeColor =rgb(200, 200, 200);
   }

    testObject = createSprite(300, -24300, 420, 1000000);
    testObject.shapeColor = rgb(100, 100, 100);

    marking10000m = createSprite(400, -10000, 200, 100);
    marking10000m.addImage(marking10000mImage);

    marking20000m = createSprite(400, -20000, 200, 100);
    marking20000m.addImage(marking20000mImage);

    marking30000m = createSprite(400, -30000, 200, 100);
    marking30000m.addImage(marking30000mImage);

    marking40000m = createSprite(400, -40000, 200, 100);
    marking40000m.addImage(marking40000mImage);

    universitydestina = createSprite(400, -49170, 200, 100);
    universitydestina.addImage(universitydestinaImage);

    GuardRailL = createSprite(100, 300, 10, 1000000000000);
    GuardRailL.shapeColor = rgb(181);

    SolidLine = createSprite(300, 300, 5, 1000000000000);
    SolidLine.shapeColor = rgb(255, 255, 255);

    GuardRailR = createSprite(500, 300, 10, 1000000000000);
    GuardRailR.shapeColor = rgb(181);

    assist = createSprite(300, 700, 500, 40);

    destination = createSprite(300, -49070, 700, 10);
    destination.shapeColor = rgb(255, 255, 255);

    for (var i = -49000; i < 5000; i=i+300){
        var laneR = createSprite(400, i, 10, 150);
        laneR.shapeColor =rgb(255, 255, 255);
    }

    for (var i = -49000; i < 5000; i=i+300){
        var laneR = createSprite(200, i, 10, 150);
        laneR.shapeColor =rgb(255, 255, 255);
    }

    PlayerCar = createSprite(300, 0, 40, 80);
    PlayerCar.addImage(PlayerCarImage);
    PlayerCar.shapeColor = rgb(255, 0, 0);

    PTrafficGroup = new Group();
    OTrafficGroup = new Group();

}

function draw() {

    background(0, 183, 0);

    textSize(18);
    fill(rgb(255, 255, 255));
    textFont("Magneto");
    text("~ Traffic Racer 2D ~", 1050, PlayerCar.y-490);
    fill(rgb(255, 255, 255))
    textFont("Verdana");
    text("V4", 1270, PlayerCar.y-490);    


    if (keyCode === "SPACE") {
        gameState === Play;

    }

    if (gameState === Play) {

        Survival = Math.round(frameCount);

        CountKilometers();
        fill(rgb(255, 255, 255));
        textFont("Verdana");
        textSize(15);
        text("Survival Time : "+ Survival, 600, PlayerCar.y-440);
        textSize(20);
        textFont("Georgia");
        text("Travelled Distance : "+ Kilometers, 600, PlayerCar.y-410);

        fill(255);
        textSize(15);
        textFont("Verdana");
        text("Your Story : ", 600, PlayerCar.y-340);
        text("You have a car, you're late to your university. You've ran out of excuses of being late.", 600, PlayerCar.y-290);
        text("All you have to do is to step into your section in your university. Or, you maybe late to attend", 600, PlayerCar.y-270);
        text("your professor's (boring) lecture. ", 600, PlayerCar.y-250);
        text("* The traffic on your right is preceding, while the traffic on your left is oncoming.", 580, PlayerCar.y-190);
        text("* Hold the UP ARROW Key to accelerate, both; Down and Up arrow keys to go slow.", 580, PlayerCar.y-165);
        text("* Use Left and Right Arrow Keys to steer.", 580, PlayerCar.y-145);
        text("* Go all the way down the road, try not to hit the traffic. Travel atleast 45KMs to arrive at your destination", 580, PlayerCar.y-125);

        textFont("Comic Sans MS");
        textSize(15);
        text("Your Objective is to: ", 620, PlayerCar.y-80);
        text("1: Dodge the traffic as far as possible", 620, PlayerCar.y-60);
        text("2: Arrive at your University to win (or certainly attend the lecture).", 620, PlayerCar.y-40);
        text("3: Check your score at the end!", 620, PlayerCar.y-20);

        
    if (PlayerCar.y < -30000) {
        text("* You've travelled 30+ Kilometers.", 700, PlayerCar.y-380);
    }

    camera.position.x = displayWidth/2;
    camera.position.y = PlayerCar.y-250;

    if (keyDown("UP_ARROW")) {
        PlayerCar.y = PlayerCar.y-25;
    }

    if (keyWentDown("UP_ARROW")) {
        PlayerCar.y = PlayerCar.y-5;
    }

    if (keyDown("DOWN_ARROW")) {
        PlayerCar.y = PlayerCar.y+10;
    }

    if (keyDown("LEFT_ARROW") && keyDown("UP_ARROW")) {
        PlayerCar.x = PlayerCar.x-13;
    }

    if (keyDown("RIGHT_ARROW") && keyDown("UP_ARROW")) {
        PlayerCar.x = PlayerCar.x+13;
    }

    PlayerCar.bounceOff(GuardRailR);
    PlayerCar.bounceOff(GuardRailL);
    PlayerCar.bounceOff(assist);

    setTimeout(function(){ 

    if (frameCount % 40 === 0) {
        PTraffic = createSprite(300, PlayerCar.y-700, 40, 80);
        PTraffic.velocityY = (Math.round(random(-10, -20)));
        PTraffic.x = (Math.round(random(340, 470)));
        PTraffic.shapeColor = color(random(0, 255), random(0, 255), random(0, 255));
        PTraffic.lifetime = 900;
        PTrafficGroup.add(PTraffic);

  }

    if (frameCount % 45 === 0) {
        OTraffic = createSprite(300, PlayerCar.y-700, 40, 80);
        OTraffic.velocityY = (Math.round(random(15, 30)));
        OTraffic.x = (Math.round(random(140, 270)));
        OTraffic.shapeColor = color(random(0, 255), random(0, 255), random(0, 255));
        OTraffic.lifetime = 900;
        OTrafficGroup.add(OTraffic);

    }


}, 10000);


    if (PlayerCar.isTouching(PTrafficGroup)) {
        PTrafficGroup.setVelocityYEach(0);
        OTrafficGroup.setVelocityYEach(0);
        PlayerCar.addImage(CarCrashImage);
        gameState = End;

   }

    if (PlayerCar.isTouching(OTrafficGroup)) {
        OTrafficGroup.setVelocityYEach(0);
        PTrafficGroup.setVelocityYEach(0);
        PlayerCar.addImage(CarCrashImage);
        gameState = End;

  }

    if (PlayerCar.y < -49070) {
        gameState = Win;

    }
}

    if (gameState === End) {

    fill(255);
    textFont("Verdana")
    textSize(15);
    text("Sorry, you Crashed!", 800, PlayerCar.y-380);
    textSize(16);
    text("Press F5 to restart", 700, PlayerCar.y-280);
    textFont("Times New Roman");
    textSize(17)
    text("Survival Points : "+Survival, 900, PlayerCar.y-280);
    textSize(15)
    textFont("Georgia");
    text("Traffic Racer V4 releasing soon!", 750, PlayerCar.y-70);

    textFont("Verdana");
    text("Travelled Distance :"+Kilometers, 740, PlayerCar.y-170);

    if (Kilometers < -30000) {
        text("Congratulations! You've made it to above 30KMs!", 700, PlayerCar.y-240);
    }

    if (Kilometers < -40000) {
        text("Damn, you were almost there!", 600, PlayerCar.y-140);
    }

}

    if (gameState === Win) {
        textSize(16);
        textFont("Georgia");
        text("Dang! You made it to your University! You're a Champ!", 670, PlayerCar.y-200);
        text("Hats Off!", 830, PlayerCar.y-180);
        text("Press F5 to restart", 700, PlayerCar.y-280);
        textFont("Times New Roman");
        text("Mts Driven : "+Kilometers, 900, PlayerCar.y-280);
        textFont("Georgia");
        text("Traffic Racer V4 releasing soon!", 750, PlayerCar.y-70);
        text("Survival Points : "+Survival, 900, PlayerCar.y-320);

        OTrafficGroup.setVelocityYEach(0);
        PTrafficGroup.setVelocityYEach(0);
    }

    drawSprites();

}

function CountKilometers() {
    if (keyDown("UP_ARROW") && gameState === Play) {
        Kilometers = Math.round(PlayerCar.y);
        fill(rgb(255, 255, 255));
        textSize(18);
        textFont("Georgia");
    }
    
}


