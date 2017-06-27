var data = require('../products.json')

// Write your solutions below
// console.log(data.items)
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

// Q4
// for (var i = 0; i < 25; i ++) {
//   var item = data.items[i]
//   var product = item.product
//   var brand = product.brand
//   if (brand === 'Canon') {
//     console.log(product)
//   }
// }

// Q5
// for (var i = 0; i < items.length; i++) {
//   var products = items[i].product
//   if (products.author.name === 'eBay' && products.brand === 'Canon') {
//     console.log(products.author)
// to print something else, just change this
//   }
// }

// Q6
// for (var i = 0; i < items.length; i++) {
//   var products = items[i].product
//   console.log('The brand is ' + products.brand + 'with a price of ' + products.inventories[0].price + ' dollars with an image link of ' + products.images[0].link)
// }
