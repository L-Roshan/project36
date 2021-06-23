var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj; 

var foodStock = foodObj.getFoodStock();
if (foodStock <= 0){
  foodObj.updateFoodStock(foodStock *0);
}else{
  foodObj.updateFoodStock(foodStock -1);
}
       
//create feed and lastFed variable here
var feed;
var lastFeed;

function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here
  feed=createButton("Feed");
  feed.position(700,95);
  feed.mousePressed(feed);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  //write code to read fedtime value from the database 
  if(lastFeed>=12){
  }else if(lastFeed==0){
    text = ("lastFeed : 12 AM"350,30);
  }else if (lastFeed==0){
    text = ("lastFeed : 12+ AM",350,30);
  }
 
  //write code to display text lastFed time here
   display = lastFeed;
 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time
 if(mousePressed = feed){
   foodStock--;

   database.ref('/')update({
     feed:foodStock
   })
 }
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
