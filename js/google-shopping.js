var data = require('../products.json')

// Write your solutions below

var items = data.items

// Q1)
// var itemCount = 0
// for (var i = 0; i < items.length; i++) {
//   var eachItem = items[i]
//   itemCount += 1
//   console.log(eachItem.kind)
// }

// Q2)
// for (var j = 0; j < items.length; j++) {
//   var eachItem = items[j]
//   var inventories = eachItem.product.inventories[0]
//   if (inventories.availability === 'backorder') {
//     console.log(eachItem.product.brand)
//   }
// }

// Q3
// for (var i = 0; i < data.items.length; i++) {
//   var itemsProduct = data.items[i].product
//   if (itemsProduct.images.length > 1) {
//     console.log(itemsProduct.title) // ---> Nikon D800 ... Canon EOS
//   }
// }
