const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth scrolling to #food_lover
document.querySelector('a[href="#food_lover"]').addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector('#food_lover');
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Smooth scrolling to #about
document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector('#about');
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});


//dynmaic images

const SectionCenter = document.querySelector(".menus_items_container");
const filterbtns = document.querySelectorAll(".btn_cat"); // Fixed class name

filterbtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const Category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      return Category === "all" || menuItem.Category === Category; // Handles "all" category
    });

    displayMenusItem(menuCategory); // Display filtered items
  });
});

const menu = [
    {
      id: 1,
      title: "Pepperoni pizza",
      Category: "Lunch",
      price: "25$",
      img: "images/pizza1.jpg",
      description: "Crispy crust topped with spicy pepperoni and mozzarella cheese.",
      rating: "⭐ 4.5"
    },
    {
      id: 2,
      title: "Super Supreme pizza",
      Category: "Lunch",
      price: "25$",
      img: "images/pizza2.jpg",
      description: "Loaded with pepperoni, beef, mushrooms, onions, and peppers.",
      rating: "⭐ 4.7"
    },
    {
      id: 3,
      title: "Cheese burger",
      Category: "Lunch",
      price: "20$",
      img: "images/burger1.jpg",
      description: "Juicy beef patty with cheddar cheese and classic toppings.",
      rating: "⭐ 4.3"
    },
    {
      id: 4,
      title: "Angus burger",
      Category: "Lunch",
      price: "20$",
      img: "images/burger2.jpg",
      description: "Premium Angus beef burger with gourmet toppings.",
      rating: "⭐ 4.6"
    },
    {
      id: 5,
      title: "Pasta",
      Category: "Lunch",
      price: "20$",
      img: "images/pasta.jpg",
      description: "Creamy Alfredo pasta with mushrooms and parmesan.",
      rating: "⭐ 4.4"
    },
    {
      id: 6,
      title: "4 Strips Chicken",
      Category: "Lunch",
      price: "20$",
      img: "images/chicken.jpg",
      description: "Crispy golden chicken strips served with dipping sauce.",
      rating: "⭐ 4.2"
    },
    {
      id: 7,
      title: "Glazed Donuts",
      Category: "Desserts",
      price: "10$",
      img: "images/dessert2.jpg",
      description: "Sweet and fluffy donuts with a sugary glaze.",
      rating: "⭐ 4.8"
    },
    {
      id: 8,
      title: "Caramel Molten Cake",
      Category: "Desserts",
      price: "12$",
      img: "images/dessert3.jpg",
      description: "Warm chocolate cake with gooey caramel center.",
      rating: "⭐ 4.9"
    },
    {
      id: 9,
      title: "Macrons",
      Category: "Desserts",
      price: "8$",
      img: "images/dessert1.jpg",
      description: "Colorful French macarons with creamy filling.",
      rating: "⭐ 4.6"
    },
    {
      id: 10,
      title: "Cola",
      Category: "Drinks",
      price: "5$",
      img: "images/cola.jpg",
      description: "Classic fizzy cola served cold.",
      rating: "⭐ 4.0"
    },
    {
      id: 11,
      title: "Sprite",
      Category: "Drinks",
      price: "5$",
      img: "images/sprite.jpg",
      description: "Refreshing lemon-lime soda.",
      rating: "⭐ 4.1"
    },
    {
      id: 12,
      title: "Mojito",
      Category: "Drinks",
      price: "8$",
      img: "images/mojito.jpg",
      description: "Minty mojito mocktail with lime and soda.",
      rating: "⭐ 4.7"
    }
  ];
  

window.addEventListener("DOMContentLoaded", function () {
  displayMenusItem(menu); // Initially show all items
});

function displayMenusItem(menuItem) {
    let displayMenusItem = menuItem.map(function (item) {
      return `
      <div class="img_cards" data-id="${item.id}">
        <div class="card_inner">
          <div class="card_front">
            <img src="${item.img}" alt="${item.title}" data-id="${item.id}">
            <p class="price">only for ${item.price}</p>
            <p>${item.title}</p>
          </div>
          <div class="card_back">
            <p><strong>${item.title}</strong></p>
            <p>${item.description}</p>
            <p>Rating: ${item.rating}</p>
          </div>
        </div>
      </div>`;
    });
    SectionCenter.innerHTML = displayMenusItem.join("");
  
    // Add flip effect on click
    document.querySelectorAll(".img_cards").forEach(card => {
      card.addEventListener("click", function () {
        card.classList.toggle("flipped");
      });
    });
}

document.getElementById('reviewForm').addEventListener('submit', function (rev) {
    rev.preventDefault();

    const name = this.querySelector('input').value;
    const review = this.querySelector('textarea').value;
    const rand_img = `./images/customer${Math.floor(Math.random() * 3) + 1}.jpg`;

    const newReview = `
    <div class="customer_card">
        <img src="${rand_img}" alt="pfp">
        <p>"${review}"</p>
        <p class="name">${name}</p>
    </div>`;

    document.querySelector('.customer_cards_container').prepend(newReview);
    this.reset();
});