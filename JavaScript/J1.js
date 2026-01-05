'use strict';









// TODO: assign an array to the hours variable below


// your array should contain the hours of 6am through 7pm


var hours; 







// REVIEW: look at the JS object for a store below (seattle)


// You will be copying this object design, and it's capabilities







var seattle = {


 locationName: 'Seattle',


 minCustomersPerHour: 23,


 maxCustomersPerHour: 65,


 avgCookiesPerSale: 6.3,


 customersEachHour: [23, 24, 45, 56, 37, 48, 29, 60],


 cookiesEachHour: [40, 39, 27],


 totalDailyCookies: 0,


 calcCustomersEachHour: function () {


   for (var i = 0; i < hours.length; i++) {


     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));


   }


 },


 calcCookiesEachHour: function () {


   this.calcCustomersEachHour();


   for (var i = 0; i < hours.length; i++) {


     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);


     this.cookiesEachHour.push(oneHour);


     this.totalDailyCookies += oneHour;


   }


 },


 render() {


   this.calcCookiesEachHour();


   // TODO:  access the seattle store HTML list by it's ID


   // and assign it to the unorderedList variable below


   var unorderedList;
const myElement = document.getElementById('seattle');






   for (var i = 0; i < hours.length; i++) {


     var listItem = document.createElement('li');


     listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';


     unorderedList.appendChild(listItem);


   }


   listItem = document.createElement('li');


   listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';


   unorderedList.appendChild(listItem);


 }


};







// TODO:  copy the object data from above and paste it 4 times below, each time representing a new city:  tokyo, dubai, paris, lima


// the minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale should all have different sales counts


// you may make these counts up and will also need to update where you "select" or "access" your HTML for each store







var tokyo = {locationName: 'tokyo',


 minCustomersPerHour: 23,


 maxCustomersPerHour: 65,


 avgCookiesPerSale: 6.3,


 customersEachHour: [23, 24, 45, 56, 37, 48, 29, 60],


 cookiesEachHour: [],


 totalDailyCookies: 0,


 calcCustomersEachHour: function () {


   for (var i = 0; i < hours.length; i++) {


     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));


   }


 },


 calcCookiesEachHour: function () {


   this.calcCustomersEachHour();


   for (var i = 0; i < hours.length; i++) {


     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);


     this.cookiesEachHour.push(oneHour);


     this.totalDailyCookies += oneHour;


   }


 },


 render() {


   this.calcCookiesEachHour();


   // TODO:  access the seattle store HTML list by it's ID


   // and assign it to the unorderedList variable below


   var unorderedList;
const myElement = document.getElementById('tokyo');






   for (var i = 0; i < hours.length; i++) {


     var listItem = document.createElement('li');


     listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';


     unorderedList.appendChild(listItem);


   }


   listItem = document.createElement('li');


   listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';


   unorderedList.appendChild(listItem);


 }

 };







var dubai = {locationName: 'dubai',


 minCustomersPerHour: 23,


 maxCustomersPerHour: 65,


 avgCookiesPerSale: 6.3,


 customersEachHour: [23, 24, 45, 56, 37, 48, 29, 60],


 cookiesEachHour: [40, 39, 27],


 totalDailyCookies: 0,


 calcCustomersEachHour: function () {


   for (var i = 0; i < hours.length; i++) {


     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));


   }


 },


 calcCookiesEachHour: function () {


   this.calcCustomersEachHour();


   for (var i = 0; i < hours.length; i++) {


     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);


     this.cookiesEachHour.push(oneHour);


     this.totalDailyCookies += oneHour;


   }


 },


 render() {


   this.calcCookiesEachHour();


   // TODO:  access the seattle store HTML list by it's ID


   // and assign it to the unorderedList variable below


   var unorderedList;
const myElement = document.getElementById('dubai');






   for (var i = 0; i < hours.length; i++) {


     var listItem = document.createElement('li');


     listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';


     unorderedList.appendChild(listItem);


   }


   listItem = document.createElement('li');


   listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';


   unorderedList.appendChild(listItem);


 }

 };







var paris = {locationName: 'paris',


 minCustomersPerHour: 23,


 maxCustomersPerHour: 65,


 avgCookiesPerSale: 6.3,


 customersEachHour: [23, 24, 45, 56, 37, 48, 29, 60],


 cookiesEachHour: [40, 39, 27],


 totalDailyCookies: 0,


 calcCustomersEachHour: function () {


   for (var i = 0; i < hours.length; i++) {


     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));


   }


 },


 calcCookiesEachHour: function () {


   this.calcCustomersEachHour();


   for (var i = 0; i < hours.length; i++) {


     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);


     this.cookiesEachHour.push(oneHour);


     this.totalDailyCookies += oneHour;


   }


 },


 render() {


   this.calcCookiesEachHour();


   // TODO:  access the seattle store HTML list by it's ID


   // and assign it to the unorderedList variable below


   var unorderedList;
const myElement = document.getElementById('paris');






   for (var i = 0; i < hours.length; i++) {


     var listItem = document.createElement('li');


     listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';


     unorderedList.appendChild(listItem);


   }


   listItem = document.createElement('li');


   listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';


   unorderedList.appendChild(listItem);


 }

 };







var lima = {locationName: 'lima',


 minCustomersPerHour: 23,


 maxCustomersPerHour: 65,


 avgCookiesPerSale: 6.3,


 customersEachHour: [23, 24, 45, 56, 37, 48, 29, 60],


 cookiesEachHour: [40, 39, 27],


 totalDailyCookies: 0,


 calcCustomersEachHour: function () {


   for (var i = 0; i < hours.length; i++) {


     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));


   }


 },


 calcCookiesEachHour: function () {


   this.calcCustomersEachHour();


   for (var i = 0; i < hours.length; i++) {


     var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);


     this.cookiesEachHour.push(oneHour);


     this.totalDailyCookies += oneHour;


   }


 },


 render() {


   this.calcCookiesEachHour();


   // TODO:  access the seattle store HTML list by it's ID


   // and assign it to the unorderedList variable below


   var unorderedList;
const myElement = document.getElementById('lima');






   for (var i = 0; i < hours.length; i++) {


     var listItem = document.createElement('li');


     listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';


     unorderedList.appendChild(listItem);


   }


   listItem = document.createElement('li');


   listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';


   unorderedList.appendChild(listItem);


 }

 };







function random(min, max) {


 // TODO: "floor" this random number generator


 return Math.random() * (max - min + 1) + min;


}







// TODO: list all shop objects in an array


var allShops = [];







(function renderAllShops() {


 for (var i = 0; i < allShops.length; i++) {


   allShops[i].render();


 }


})();

