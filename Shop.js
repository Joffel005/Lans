let cart = [];
let total = 0;

function addToCart(name, price){
  cart.push({ name, price});
  updateCart();
}

function removeFromCart(index){
  cart.splice(index, 1);
  updateCart();
}

function updateCart(){
  const cartItems = 
document.getElementById('cart-items');
  cartItems.innerHTML = '';
  total = 0;

  cart.forEach((item, index)=> {
    const li =
document.createElement('li');
    li.textContent = `${item.name} 
- ₱${item.price.toFixed(2)}`;

    const removeButton =
document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () =>
removeFromCart(index);
    li.appendChild(removeButton);
    cartItems.appendChild(li);
    total += item.price;
  });

document.getElementById('total').textContent = total.toFixed(2);
}

function checkout(){
  if (cart.length === 0){
    alert('Your cart is empty.');
    return;
  }

  alert(`Checking out.... Total amount: ₱${total.toFixed(2)}`);
  cart = [];
  updateCart();
}



 