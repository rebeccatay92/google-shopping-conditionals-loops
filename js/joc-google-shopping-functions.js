var data = require('../products.json');

// 1.) getItems(objectData)
function getItems (data) {
  return data.items
}

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

// 3.) getItemsByAuthor(items, author)
function getItemsByAuthor (items, author) {
  var authorItems = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name === author) {
      authorItems.push(items[i])
    }
  }
  return authorItems
}

// 4.) getAvailableProducts(items)
function getAvailableProducts (items) {
  var avaItems = []
  for (var i = 0; i < items.length; i++) {
    var itemsProduct = items[i].product
    for (var j = 0; j < itemsProduct.inventories.length; j++) {
      var invenAvail = itemsProduct.inventories[j].availability
      if (invenAvail === 'inStock') {
        avaItems.push(items[i])
      }
    }
  }
  return avaItems
}

// 5.) Use your functions
var allItems = getItems(data)
var availItems = getAvailableProducts(allItems)
console.log(getItemsByBrand(getItems, 'Sony'))
console.log(getItemsByBrand(availItems, 'Sony'))
console.log(getItemsByAuthor(availItems, 'Adorama Camera'))
console.log(getItemsByAuthor(getItemsByBrand(getItems(data), 'Nikon'), 'eBay'))
