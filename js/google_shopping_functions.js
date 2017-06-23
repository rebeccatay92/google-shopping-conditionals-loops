var data = require('../products.json');

// qns 1 getItems(objectData)
var getItems = function (objectData) {
  return data.items
}
var items = getItems() // creates global var items (an array)

// qns 2 getItemsByBrand(items, brand)
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Test this function by searching for Sony, Canon, Nikon and Panasonic.
var getItemsByBrand = function (items, neededBrand) {
   var arr = []
   for (var i = 0; i < items.length; i++) {
     var brand = items[i].product.brand
     if (brand === neededBrand) { // if item brand name is same as needed
       arr.push(items[i])
     }
   }
   return arr
}
getItemsByBrand(items, 'Sony')

// qns 3 getItemsByAuthor(items, author)
// input: an array of items, a string of an author to filter with
// returns: an array of items (of a specific author)
// Create a function called getItemsByAuthor that takes an item array
// and returns a new array of all items by a specified author.
// Test this function by searching for Target, CDW, eBay
// only ebay has different substring. "ebay - abc" and "ebay - bcd"
var getItemsByAuthor = function (items, neededAuthor) {
  var arr = []
  for (var i = 0; i < items.length; i++) {
    var author = items[i].product.author.name
    // using indexof checks if author name includes ebay
    if (author.indexOf(neededAuthor) > -1) {
      // arr.push(author)
      // uncomment this tgt with console.log to see author filtering
      arr.push(items[i])
    }
  }
  // console.log(arr)
  return arr
}
getItemsByAuthor(items, 'eBay')

// qns 4 getAvailableProducts(items)
// Create function called getAvailableProducts that takes an item array
// and returns an array containing all of the available products
// (an available product is one with at least one availability of
// "inStock" in the inventories array)
var getAvailableProducts = function (items) {
  var arr = []
  for (var i = 0; i < items.length; i++) {
    var product = items[i].product
    var inventory = product.inventories[0]
    var availability = inventory.availability
    if (availability === 'inStock') {
      arr.push(items[i]) //array of item objects
    }
  }
  // console.log(arr)
  return arr
}
getAvailableProducts(items)

// qns 5 Use the functions you created to ouput (console.log) the following
// lists of items.
/*
A) All items made by Sony.
B) All items made by Sony that are available.
C) All available items by the author "Adorama Camera"
D) All items made by Nikon with the author eBay.
*/

// partA
var sonyItems = getItemsByBrand(items, 'Sony')
//console.log(sonyItems)

// partB
// use getAvailableProducts to filter sonyItems by inStock
var sonyAvailable = getAvailableProducts(sonyItems)
//console.log(sonyAvailable)

// partC
// first filter by author
// next check if available
var allAdorama = getItemsByAuthor(items, 'Adorama Camera')
//console.log(allAdorama)
var availableAdorama = getAvailableProducts(allAdorama)
// console.log(availableAdorama)
// shows empty array because there is only 1 adorama which is in backorder

// partD
// all nikon items on ebay
// filter by ebay first as array will be smaller
// then extract only nikon

var allEbay = getItemsByAuthor(items, 'eBay')
//console.log(allEbay)
var nikonEbay = getItemsByBrand(allEbay, 'Nikon')
//console.log(nikonEbay)
