var data = require('../products.json');

// question 1
// var counter = 0;
// for (var i = 0; i < 25; i ++) {
//   var item = data.items[i]
//   var kind = item.kind
//   if (kind === 'shopping#product') {
//     counter ++;
//   }
// }
//   console.log(counter)
// count is 25. also found in currentItemsCount in json

// question 2
// for (var i = 0; i < 25; i ++) {
//   var item = data.items[i]
//   var product = item.product
//   var inventory = product.inventories[0]
//   var availability = inventory.availability
//   var title = item.product.title
//   if (availability === 'backorder') {
//       console.log(title)
//   }
// }

//question 3
// for (var i = 0; i < 25; i ++) {
//   var item = data.items[i]
//   var product = item.product
//   var images = product.images
//   //images is an array with each img being an obj
//   var title = item.product.title
//   if (images.length > 1) {
//     console.log(title)
//   }
// }

//question 4
// for (var i = 0; i < 25; i ++) {
//   var item = data.items[i]
//   var product = item.product
//   var brand = product.brand
//   if (brand === 'Canon') {
//     console.log(product)
//   }
// }

//question 5
// for (var i = 0; i < 25; i ++) {
//   var item = data.items[i]
//   var product = item.product
//   var brand = product.brand
//   var authorName = product.author.name
//   if (brand === 'Canon' && authorName === 'eBay') {
//     console.log(item)
//   }
// }


//question 6. do we print the entire product?.
//right now only printing brand, price, imagelink
// for (var i = 0; i < 25; i ++) {
//   var item = data.items[i]
//   var product = item.product
//   var inventory = product.inventories[0]
//   var price = inventory.price
//   var brand = product.brand
//   var images = product.images //an array of objects
//   var oneImageLink = images[0].link
//   console.log(brand)
//   console.log(price)
//   console.log(oneImageLink)
// }
