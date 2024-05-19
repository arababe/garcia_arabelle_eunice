let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: ' #111 Dramatically Different™ Hydrating Jelly Anti-Pollution',
        image: 'c1.png',
        price: 33.00
    },    
    {
        id: 2,
        name: '#123 Take The Day Off cleansing Oil Power Solution',
        image: 'c2.png',
        price: 41
    },
    {
        id: 3,
        name: '#143 Even Better Clinical™ Radical Dark Spot Corrector',
        image: 'c3.png',
        price: 70
    },
    {
        id: 4,
        name: '#178 Clarifying Lotion 2',
        image: 'c4.png',
        price: 40
    },
    {
        id: 5,
        name: '#129 Exfoliating Scrub',
        image: 'e1.png',
        price: 24
    },
    {
        id: 6,
        name: ' #456 7 Day Scrub Cream Rinse-Off',
        image: 'e2.png',
        price: 21
    },
    {
        id: 7,
        name: '#342 Pep-Start™ Double Purifying',
        image: 'e3.png',
        price: 19
    },
    {
        id: 8,
        name: '#907 Turnaround Instant Facial',
        image: 'e4.png',
        price: 30
    },
    {
        id: 9,
        name: '#778 Moisture Surge Overnight',
        image: 'e5.png',
        price: 40
    },
    {
        id: 10,
        name: '#521 Exfoliating Scrub Instant Hydrating Power',
        image: 'w5.png',
        price: 24
    },
    {
        id: 11,
        name: '#865 Pep-Start™ Pout Restoring Night Mask',
        image: 'w2.png',
        price: 21
    },
    {
        id: 12,
        name: '#725 Moisture Surge™ Eye 96-Hour Hydro-Filler',
        image: 'w3.png',
        price: 17
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = "Checkout: " + totalPrice.toLocaleString();
    quantity.innerText = count;
    
    
    
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

// Get the modal
let modal = document.getElementById("confirmationModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the total, open the modal 
total.addEventListener('click', () => {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the buttons
let confirmBtn = document.getElementById("confirmBtn");
let cancelBtn = document.getElementById("cancelBtn");

// Handle confirmation
confirmBtn.addEventListener('click', () => {
  // Get user input values
  let name = document.getElementById("name").value;
  let contact = document.getElementById("contact").value;
  let address = document.getElementById("address").value;
  let paymentMethod = document.getElementById("paymentMethod").value;

  // Perform validation if needed

  let confirmation = confirm("Are you sure you want to proceed to checkout?");
    if (confirmation) {
        // Code to proceed with checkout
        alert("Your order has been confirmed. Thank you for shopping with us!");
    } else {
        alert("You cancelled your purchase.");
    }
    
  // Close modal
  modal.style.display = "none";
});

// Handle cancellation
cancelBtn.addEventListener('click', () => {
  // Code if user cancels checkout
  // Optional: Provide feedback or take necessary action
  modal.style.display = "none";
});
