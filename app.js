'use strict';

//Global var
var imgUsed = [];
var clicksArray = [];
var imgProduced = [];
var totalClicks = 0;
var maxClicks = 25;
var imgName = [];

//Object for product in Bus Mall
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.amtClicks = 0;
  this.amtUsed = 0;
  imgUsed.push(this);
};

Product.prototype.persistToLocalStorage = function (){
  localStorage.imgBag = JSON.stringify(this);
  localStorage.imgBanana = JSON.stringify(this);
  localStorage.imgBathroom = JSON.stringify(this);
  localStorage.imgBoots = JSON.stringify(this);
  localStorage.imgBreakfast = JSON.stringify(this);
  localStorage.imgBubblegum = JSON.stringify(this);
  localStorage.imgChair = JSON.stringify(this);
  localStorage.imgCthulhu = JSON.stringify(this);
  localStorage.imgDogDuck = JSON.stringify(this);
  localStorage.imgDragon = JSON.stringify(this);
  localStorage.imgPen = JSON.stringify(this);
  localStorage.imgPetSweep = JSON.stringify(this);
  localStorage.imgScissors = JSON.stringify(this);
  localStorage.imgShark = JSON.stringify(this);
  localStorage.imgSweep = JSON.stringify(this);
  localStorage.imgTauntaun = JSON.stringify(this);
  localStorage.imgUnicorn = JSON.stringify(this);
  localStorage.imgUsb = JSON.stringify(this);
  localStorage.imgWaterCan = JSON.stringify(this);
  localStorage.imgWineglass = JSON.stringify(this);
};

//Create Instances
var imgBag = new Product('Bag', 'img/bag.jpg');
var imgBanana = new Product('Banana', 'img/banana.jpg');
var imgBathroom = new Product('Bathroom', 'img/bathroom.jpg');
var imgBoots = new Product('Boots', 'img/boots.jpg');
var imgBreakfast = new Product('Breakfast', 'img/breakfast.jpg');
var imgBubblegum = new Product('Bubblegum', 'img/bubblegum.jpg');
var imgChair = new Product('Chair', 'img/chair.jpg');
var imgCthulhu = new Product('Cthulhu', 'img/cthulhu.jpg');
var imgDogDuck = new Product('Dog-Duck', 'img/dog-duck.jpg');
var imgDragon = new Product('Dragon', 'img/dragon.jpg');
var imgPen = new Product('Bag', 'img/pen.jpg');
var imgPetSweep = new Product('PetSweep', 'img/pet-sweep.jpg');
var imgScissors = new Product('Scissors', 'img/scissors.jpg');
var imgShark = new Product('Shark', 'img/shark.jpg');
var imgSweep = new Product('Sweep', 'img/sweep.png');
var imgTauntaun = new Product('Tauntaun', 'img/tauntaun.jpg');
var imgUnicorn = new Product('Unicorn', 'img/unicorn.jpg');
var imgUsb = new Product('Usb', 'img/usb.gif');
var imgWaterCan = new Product('Water Can', 'img/water-can.jpg');
var imgWineglass = new Product('Wine Glass', 'img/wine-glass.jpg');

//Random-generated
function random() {
  return Math.round(Math.random() * (imgUsed.length - 1));
};

var one;
var two;
var three;
var newSet = [imgUsed[one], imgUsed[two], imgUsed[three]];

function producedImage() {
  for (var i = 0; i < newSet.length; i++) {

    var one = random();
    newSet[0] = imgUsed[one];
    var indexOne = imgUsed[one];
    picOne.src = indexOne.path;
    picOne.alt = indexOne.name;

//no duplicates for three images shown
    var two = random();
    while (two === one) {
      two = random();
    }
    newSet[1] = imgUsed[two];

    var indexTwo = imgUsed[two];
    picTwo.src = imgUsed[two].path;
    picTwo.alt = imgUsed[two].name;

  //no duplicates for theee images shown
    var three = random();
    while (three === one || three === two) {
      three = random();
    }
    newSet[2] = imgUsed[three];

    var indexThree = imgUsed[three];
    //indexThree.amtUsed++;
    picThree.src = imgUsed[three].path;
    picThree.alt = imgUsed[three].name;

  }
  imgProduced.push(newSet);
  imgUsed[one].amtUsed += 1;
  imgUsed[two].amtUsed += 1;
  imgUsed[three].amtUsed += 1;

};

producedImage();
console.log(newSet[0]);

function clickOne() {
  if (totalClicks < maxClicks - 1) {
    totalClicks += 1;
    newSet[0].amtClicks += 1;
    console.log('Clicks: ' + newSet[0].amtClicks);
    console.log('Used: ' + newSet[0].amtUsed);
    producedImage();
  } else if (totalClicks == maxClicks - 1) {
    totalClicks += 1;
    newSet[0].amtClicks += 1;
    picOne.removeEventListener('click', clickOne);
    picTwo.removeEventListener('click', clickTwo);
    picThree.removeEventListener('click', clickThree);
    console.log('Done!');
    renderTotals();
    renderChart();
  }
};

function clickTwo() {
  if (totalClicks < maxClicks - 1) {
    totalClicks += 1;
    newSet[1].amtClicks += 1;
    console.log('Clicks: ' + newSet[1].amtClicks);
    console.log('Used: ' + newSet[1].amtUsed);
    producedImage();
  } else if (totalClicks == maxClicks - 1) {
    totalClicks += 1;
    newSet[1].amtClicks += 1;
    picOne.removeEventListener('click', clickOne);
    picTwo.removeEventListener('click', clickTwo);
    picThree.removeEventListener('click', clickThree);
    console.log('Done!');
    renderTotals();
    renderChart();
  }
};

function clickThree() {
  if (totalClicks < maxClicks - 1) {
    totalClicks += 1;
    newSet[2].amtClicks += 1;
    console.log('Clicks: ' + newSet[2].amtClicks);
    console.log('Used: ' + newSet[2].amtUsed);
    producedImage();

  } else if (totalClicks == maxClicks - 1) {
    totalClicks += 1;
    newSet[2].amtClicks += 1;
    picOne.removeEventListener('click', clickOne);
    picTwo.removeEventListener('click', clickTwo);
    picThree.removeEventListener('click', clickThree);
    console.log('Done!');
    renderTotals();
    renderChart();
  }
};

function renderTotals() {

  for (var i = 0; i < imgUsed.length; i++) {
    console.log(imgUsed[i].name);
    console.log(imgUsed[i].amtClicks);
    clicksArray.push(imgUsed[i].amtClicks);
    imgName.push(imgUsed[i].name);
    imgUsed[i].persistToLocalStorage();
  }
}

picOne.addEventListener('click', clickOne);
picTwo.addEventListener('click', clickTwo);
picThree.addEventListener('click', clickThree);

function renderChart () {
  var context = document.getElementById('product-chart').getContext('2d');

  var chartColors = ['#9f717d', '#ae8b98', '#968896', '#808187', '#6b6e78', '#808187', '#968896', '#ae8b98', '#9f717d', '#ae8b98', '#968896', '#808187', '#6b6e78', '#808187', '#968896', '#ae8b98', '#9f717d', '#ae8b98', '#968896'];
  var chartOptions = {
    responsive: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var productChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: imgName,
      datasets: [{
        label: '# of Votes for Each Image',
        data: clicksArray,
        backgroundColor: chartColors,
      }]
    },
    options: chartOptions

  });
};
