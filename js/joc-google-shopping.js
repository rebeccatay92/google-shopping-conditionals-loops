var data = require('../products.json');

// Write your solutions below
//Question 1)
//var count = 0
//for (var i= 0; i<data.items.length; i++){
//  var itemsKind = data.items[i].kind
//  if (itemsKind === "shopping#product"){
//    count++
//  }
// }
//console.log(count) // ---> 25
//Question 2) Print the title all items with a backorder availability in inventories.
//for (var i= 0; i<data.items.length; i++){
//  var itemsProduct = data.items[i].product
//  for (var j= 0; j<itemsProduct.inventories.length; j++){
//    var invenAvail = itemsProduct.inventories[j].availability
//    if (invenAvail === "backorder"){
//      console.log(itemsProduct.brand) // ---> Sony Fuji
//    }
//  }
// }
// Question 3) Print the title all items with more than one image link.
for (var i= 0; i<data.items.length; i++){
  var itemsProduct = data.items[i].product
    if (itemsProduct.images.length > 1){
      console.log(itemsProduct.title) // ---> Nikon D800 ... Canon EOS
    }
 }
// Question 4.) Print all "Canon" products in the items
//for (var i= 0; i<data.items.length; i++){
//  var itemsProduct = data.items[i].product
//    if (itemsProduct.brand === "Canon"){
//      console.log(itemsProduct.title) // ---> Canon Powershot... Canon Eos Rebel
//    }
// }
// Question 5 Print all items that have an author name of "eBay" and are brand "Canon".
// for (var i= 0; i<data.items.length; i++){
//   var itemsProduct = data.items[i].product
//     if ((itemsProduct.brand === "Canon") && (itemsProduct.author.name === 'eBay')){
//       console.log(itemsProduct.title) // ---> Canon Eos M Ultra Compact
//     }
//  }
// Question 6
//   for (var i= 0; i<data.items.length; i++){
//     var itemsProduct = data.items[i].product
//         console.log(itemsProduct.brand)
//         for (var j= 0; j<itemsProduct.inventories.length; j++){
//            var invenPrice = itemsProduct.inventories[j].price
//            console.log(invenPrice)
//          }
//          for (var k= 0; k<itemsProduct.images.length; k++){
//             var imagesLink = itemsProduct.images[k].link
//             console.log(imagesLink)
//          }
//    }
