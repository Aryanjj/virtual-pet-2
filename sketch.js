//Create variables here
var database, dog, dog1, dogImg, dog1Img, foodStock, dat, feedPetbtn;
var addFoodbtn,fedTime,lastFed,foodObj;
function preload()
{
  //load images here
  dogImg = loadImage("images/dog.png");
  dog1Img = loadImage("images/dog1.png");
}

function setup() {
  
	createCanvas(1000, 600);
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value", readStock);
  dog = createSprite(750, 250, 50, 50);
  dog.addImage(dogImg);
  dog.scale = 0.3;
  feedPetbtn = createButton('FEed the Dog');
  feedPetbtn.position(700, 95);
   feedPetbtn.mousePressed(feedDog);

    addFoodbtn = createButton('add food');
  addFoodbtn.position(600, 95);
  fedTime = database.ref('FedTime');
  fedTime.on("value", function (data) {
    lastFed = data.val();
  })
  addFoodbtn.mousePressed(addFoods);
  

}


function draw() {
  background(46, 139, 87);
  // dog = createSprite(250, 250, 50, 50);
  // dog.addImage(dogImg);
  // dog.scale = 0.3;

  // if (keyWentDown(UP_ARROW)) {
  //   writeStock(dat);
  //   dog.addImage(dog1Img);
  // }
  
  drawSprites();
  //add styles here
  food.display();
}

function readStock(data) {
  dat = data.val();
  
}

function writeStock(n) {
  if (n<= 0) {
    n=0
  }
  else {
    n = n - 1;
  }
  console.log(n);
  database.ref("/").update(
    {
      food:n
    }
    
  )
}

function addFoods() {
  foodStock++;
  database.ref('/').update({
    food:foodStock
  })
}

function feedDog() {
  dog.addImage(dog1Img);
  foodObj.updateFoodStock(foodObj.getFoodStock() - 1);
  database.ref('/').update({
    food: foodObj.getFoodStock()
    
  })
}


