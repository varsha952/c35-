var smartball;
var database;
var p ;

function setup(){
    createCanvas(500,500);
    smartball = createSprite(250,250,10,10);
    smartball.shapeColor = "red";
    database = firebase.database();
    console.log(database)
    database.ref('ball/position').on("value", readpos , displayerror)
}

function draw(){
    background("white");
    if(p !== undefined)
    {

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}

function changePosition(xpos,ypos){
   database.ref('ball/position').set({
     'x': p.x + xpos ,
     'y': p.y + ypos 
  
       
   })
}
function readpos(data){
 p = data.val()
 console.log(p)
 smartball.x = p.x
 smartball.y = p.y
}
function displayerror(){
    console.log("oops")
}

