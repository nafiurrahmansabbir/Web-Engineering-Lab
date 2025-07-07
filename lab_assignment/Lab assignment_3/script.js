const foodItems = [
  {
    name: "Cappuccino",
    currentPrice: 180,
    discount: 80,
    applyDiscount: true,
    image: "img/cappuccino.jpg",
  },
  {
    name: "Chocolate Cake",
    currentPrice: 320,
    discount: 0,
    applyDiscount: false,
    image: "img/cocolate-cake.jpg",
  },
  {
    name: "Iced Latte",
    currentPrice: 200,
    discount: 50,
    applyDiscount: true,
    
    image: "img/coffe_shope.jpg",
  },
  {
    name: "Fresh Garden Salad",
    currentPrice: 150,
    discount: 0,
    applyDiscount: false,
    image: "img/Fruit-salad-recipe.jpg",
  },
  {
    name: "Cheeseburger",
    currentPrice: 450,
    discount: 50,
    applyDiscount: true,
    image: "img/coffe_shope.jpg",
  },
  {
    name: "BBQ Chicken Pizza",
    currentPrice: 700,
    discount: 0,
    applyDiscount: false,
    image: "img/coffe_shope.jpg",
  },
  {
    name: "Club Sandwich",
    currentPrice: 350,
    discount: 25,
    applyDiscount: true,
      image: "img/coffe_shope.jpg",
  },
  {
    name: "Hot Dog",
    currentPrice: 250,
    discount: 0,
    applyDiscount: false,
    image: "img/coffe_shope.jpg",
  },
];
function getDiscountedPrice(item) {
  if (item.applyDiscount) {
    return item.currentPrice - item.discount;
  }
  return item.currentPrice;
}
let cart = [];

function handleAddToCart(food) {
  console.log(`${food.name} added to cart`);

  const existing = cart.find((item) => item.name === food.name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...food, quantity: 1 });
  }

  updateCartUI();
  openCart();
}

function updateCartUI() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");

  cartItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const discountPrice = getDiscountedPrice(item) * item.quantity;
    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="50" />
      <div class="cart-item-details">
        <p>${item.name}</p>
        <p>Qty: ${item.quantity}</p>
        <p>Price: ${item.currentPrice * item.quantity}</p>
        <p>Discount Price: ${discountPrice}</p>
      </div>
      <button class="remove-btn">Remove</button>
      
    `;

    div.querySelector(".remove-btn").addEventListener("click", () => {
      removeFromCart(item.name);
    });

    cartItemsContainer.appendChild(div);
  });

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.innerText = totalQuantity;
}

function removeFromCart(itemName) {
  cart = cart.filter((item) => item.name !== itemName);
  updateCartUI();
}

function openCart() {
  document.getElementById("cartSidebar").style.right = "0";
}

function closeCart() {
  document.getElementById("cartSidebar").style.right = "-350px";
}

function toggleCart() {
  const sidebar = document.getElementById("cartSidebar");
  if (sidebar.style.right === "0px") {
    closeCart();
  } else {
    openCart();
  }
}
const createCard = () => {
  const container = document.getElementsByClassName("card-container")[0];

  foodItems.forEach((food) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const button = document.createElement("button");
    button.innerText = "Add To Cart";
    button.addEventListener("click", () => handleAddToCart(food));

    card.innerHTML = `
      <img src=${food.image} alt="card" />
      <div class="card-body">
        <div class="card-title">${food.name}</div>
        <div class="card-price">${food.currentPrice}</div>
      </div>
    `;

    card.querySelector(".card-body").appendChild(button);
    container.appendChild(card);
  });
};

createCard();
