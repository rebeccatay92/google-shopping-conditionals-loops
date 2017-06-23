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
   for (var i = 0; i < 25; i ++) {
     var brand = items[i].product.brand
     if (brand === neededBrand) { //if item brand name is same as needed
       arr.push(items[i])
     }
   }
   return(arr)
}
getItemsByBrand(items, "Sony")

// qns 3 getItemsByAuthor(items, author)
// input: an array of items, a string of an author to filter with
// returns: an array of items (of a specific author)
// Create a function called getItemsByAuthor that takes an item array
// and returns a new array of all items by a specified author.
// Test this function by searching for Target, CDW, eBay
//only ebay has different substring. "ebay - abc" and "ebay - bcd"
var getItemsByAuthor = function (items, neededAuthor) {
  var arr = []
  for (var i = 0; i < 25; i ++) {
    var author = items[i].product.author.name
    if (author.indexOf(needed Author) > -1) { //using indexof checks if author name includes ebay
      //arr.push(author) uncomment this tgt with console.log to see author filtering
      arr.push(items[i])
    }
  }
  //console.log(arr)
  return(arr)
}
getItemsByAuthor(items, "eBay")

//qns 4 getAvailableProducts(items)
// input: an array of items
// returns: an array of items (that are available)
