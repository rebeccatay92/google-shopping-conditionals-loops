document.addEventListener('DOMContentLoaded', function () {
  // THIS LINE STARTS THE PARSING OF THE JSON
  var json = {}

  fetch('../products.json')
  .then(res => res.json())
  .then((data) => {
    // DO NOT REMOVE ANYTHING BEFORE THIS LINE
    console.log('Checkout this JSON! ', data)

    // START YOUR CODE FROM HERE AND HERE ONLY
    // ALL YOUR INTERNAL FUNCTIONS SHOULD START FROM HERE AND HERE ONLY TOO

    var items = data.items

    var shoppingList = document.querySelector('.shoppingList')
    var cartList = document.querySelector('.cartList')
    // Starter code. List out items' name into the shopping list
    // HINT: EVERY FUNCTIONS HERE WILL BE ABLE TO ACCESS THE items VARIABLE

    // items.forEach(function (item) {
    //   var listItem = document.createElement('li')
    //   listItem.textContent = item.product.title
    //   shoppingList.appendChild(listItem)
    // })
    //refactored to:
    function listGenerator(item) {
      var listItem = document.createElement('li')
      listItem.textContent = item.product.title
      shoppingList.appendChild(listItem)
    }
    items.forEach(listGenerator)

    function getItemsByBrand (items, str) {
      var brandItems = []
      for (var i = 0; i < items.length; i++) {
        if (items[i].product.brand.toLowerCase().indexOf(str.toLowerCase()) > -1) {
          brandItems.push(items[i])
        }
      }
      return brandItems
    }

    var brandButton = document.querySelector('.brandButton')
    brandButton.addEventListener('click', function() {
      shoppingList.innerHTML = ""
      var brandStr = document.querySelector('.brandInput').value
      var filteredObjects = getItemsByBrand(items, brandStr)
      filteredObjects.forEach(listGenerator)
    })


    function getItemsByAuthor (items, str) {
      var authorArr = []
      for (var i = 0; i < items.length; i++) {
        if (items[i].product.author.name.toLowerCase().indexOf(str.toLowerCase()) > - 1) {
          authorArr.push(items[i])
        }
      }
      return authorArr
    }

    var authorButton = document.querySelector('.authorButton')
    authorButton.addEventListener('click', function() {
      shoppingList.innerHTML = ""
      var authorStr = document.querySelector('.authorInput').value
      var filteredObjects = getItemsByAuthor(items, authorStr)
      filteredObjects.forEach(listGenerator)
    })

    var resetButton = document.querySelector('.resetButton')
    resetButton.addEventListener('click', function() {
      shoppingList.innerHTML = ""
      items.forEach(listGenerator)
    })

    var clearCart = document.querySelector('.clearCart')
    clearCart.addEventListener('click', function() {
      cartList.innerHTML = ""
      shoppingList.innerHTML = ""
      items.forEach(listGenerator)
    })

    // targeting addlast button
    var addLast = document.querySelector('.addLast')
    addLast.addEventListener('click', function() {
      var shoppingListLI = document.querySelectorAll('.shoppingList li')
      if (shoppingListLI.length) {
        var lastItem = shoppingListLI[shoppingListLI.length - 1]
        cartList.appendChild(lastItem)
      }
    })

    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})
