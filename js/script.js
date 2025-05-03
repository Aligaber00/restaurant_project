const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth scrolling when clicking the "Menus" link in the navbar
document.querySelector('a[href="#food_lover"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior

    const section = document.querySelector('#food_lover');
    section.scrollIntoView({
        behavior: 'smooth', // Enable smooth scrolling
        block: 'start'      // Scroll to the top of the section
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
    img: "images/pizza1.jpg"
  },
  {
    id: 2,
    title: "Super Supreme pizza",
    Category: "Lunch",
    price: "25$",
    img: "images/pizza2.jpg"
  },
  {
    id: 3,
    title: "Cheese burger",
    Category: "Lunch",
    price: "20$",
    img: "images/burger1.jpg"
  },
  {
    id: 4,
    title: "Angus burger",
    Category: "Lunch",
    price: "20$",
    img: "images/burger2.jpg"
  },
  {
    id: 5,
    title: "Pasta",
    Category: "Lunch",
    price: "20$",
    img: "images/pasta.jpg"
  },
  {
    id: 6,
    title: "4 Strips Chicken",
    Category: "Lunch",
    price: "20$",
    img: "images/chicken.jpg"
  },
  {
    id: 7,
    title: "Glazed Donuts",
    Category: "Desserts",
    price: "10$",
    img: "images/dessert2.jpg"
  },
  {
    id: 8,
    title: "Caramel Molten Cake",
    Category: "Desserts",
    price: "12$",
    img: "images/dessert3.jpg"
  },
  {
    id: 9,
    title: "Macrons",
    Category: "Desserts",
    price: "8$",
    img: "images/dessert1.jpg"
  },
  {
    id: 10,
    title: "Cola",
    Category: "Drinks",
    price: "5$",
    img: "images/cola.jpg"
  },
  {
    id: 11,
    title: "Sprite",
    Category: "Drinks",
    price: "5$",
    img: "images/sprite.jpg"
  },
  {
    id: 12,
    title: "Mojito",
    Category: "Drinks",
    price: "8$",
    img: "images/mojito.jpg"
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displayMenusItem(menu); // Initially show all items
});

function displayMenusItem(menuItem) {
  let displayMenusItem = menuItem.map(function (item) {
    return `<div class="img_cards">
      <img src=${item.img} alt="">
      <p class="price">only for ${item.price}</p>
      <p>${item.title}</p>
    </div>`;
  });
  displayMenusItem = displayMenusItem.join("");
  SectionCenter.innerHTML = displayMenusItem;
}