function listItemCreator(neededText) {
  //create new li element and change innertext
  var newListItem = document.createElement('li')
  newListItem.textContent = neededText
  //select the cart and add the new li
  var cart = document.querySelector('.cart')
  cart.appendChild(newListItem)
}

// targeting button
var button = document.querySelector('.addLast')
button.addEventListener('click', function() {
  var shoppingList = document.querySelectorAll('.shoppingList li')
  var cartList = document.querySelector('.cartList')
  if (shoppingList.length) {
    var lastItem = shoppingList[shoppingList.length - 1]
    cartList.appendChild(lastItem)
  }
})
