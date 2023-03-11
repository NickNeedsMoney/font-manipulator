leftWristX=0;
rightWrightX=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!')
}

function draw() {
    background('#008B8B');
    document.getElementById("font_size").innerHTML="font size of the text will be...="+difference+"px";
    textSize(difference);
    fill('#ffe787');
    text('Nicholas',50,400)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);
    }
}