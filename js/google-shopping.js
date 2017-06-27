var data = require('../products.json')

// Write your solutions below

// console.log(data.items);
var items = data.items

// var itemCount = 0

// 1 Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

// for (var i = 0; i < items.length; i++) {
//   var eachItem = items[i]
//   itemCount += 1
//   console.log(eachItem.kind)
// }

// 2 Print the title all items with a backorder availability in inventories.

for (var j = 0; j < items.length; j++) {
  var eachItem = items[j]
  var inventories = eachItem.product.inventories[0]
  if (inventories.availability === 'backorder') {
    console.log(eachItem.product.brand)
  }
}
