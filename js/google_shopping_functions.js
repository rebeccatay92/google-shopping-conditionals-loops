var data = require('../products.json')

// 1.) getItems(objectData)
function getItems (data) {
  return data.items
}
var items = getItems(data)

// 2.) getItemsByBrand(items, brand)
function getItemsByBrand (items, brand) {
  var brandItems = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.brand === brand) {
      brandItems.push(items[i])
    }
  }
  return brandItems
}
getItemsByBrand(items, 'Nikon')

// Q3)
function getItemsByAuthor (items, author) {
  var authorArr = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name === author) {
      authorArr.push(items[i])
    }
  }
  return authorArr
}
// console.log(getItemsByAuthor(getItems(data), 'Target'))

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
      arr.push(items[i]) // array of item objects
    }
  }
  // console.log(arr)
  return arr
}

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
// console.log(sonyItems)

// partB
// use getAvailableProducts to filter sonyItems by inStock
var sonyAvailable = getAvailableProducts(sonyItems)
// console.log(sonyAvailable)

// partC
// first filter by author
// next check if available
var allAdorama = getItemsByAuthor(items, 'Adorama Camera')
// console.log(allAdorama)
var availableAdorama = getAvailableProducts(allAdorama)
// console.log(availableAdorama)
// shows empty array because there is only 1 adorama which is in backorder

// partD
// all nikon items on ebay
// filter by ebay first as array will be smaller
// then extract only nikon

var allEbay = getItemsByAuthor(items, 'eBay')
// console.log(allEbay)
var nikonEbay = getItemsByBrand(allEbay, 'Nikon')
// console.log(nikonEbay)
