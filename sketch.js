var dog,happydog,database,FoodS,FoodStock;
var dogimage,happydogimage;

function preload(){
	 dogimage = loadImage("images/Dog.png");
   happydogimage = loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
 
  database = firebase.database();
  console.log(database);

  dog = createSprite(130,200,10,10);
  dog.addImage(dogimage);


  FoodStock = database.ref('Food');
  FoodStock.on("value",readStock);
}


function draw() {  

 background(46,139,87);

 if(KeyWentDown(UP_ARROW)){
   writeStock(FoodS);
   dog.addImae(happydogimage);
 }

  drawSprites();

  text("Food remaining" + FoodStock, 200,250);
  textSize(32);
  fill("red");
  Stroke("blue");

}

function readStock(data){

FoodS = data.val();

}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}

database.ref('/').update({
   Food:x
})  

}
