const categorieContainer = document.getElementById('categorie-container');
const cardContainer = document.getElementById('card-container');
const totalPriceContainer = document.getElementById('total-price-container');
const priceCardsContainer = document.getElementById('price-cards-container');
const cartContainer = document.getElementById('cart-container');

// All Fetch is Here =>
// Load Categories Names Data
const categorieNameData = async () => {
  const url = 'https://openapi.programming-hero.com/api/categories';
  const res = await fetch(url);
  const nameData = await res.json();
  displayNameData(nameData.categories);
};
// Home Page All Plants (Choose Your Trees)
const allPlantsData = async () => {
  const url = 'https://openapi.programming-hero.com/api/plants';
  const res = await fetch(url);
  const plantsDataAll = await res.json();
  displayAllPlants(plantsDataAll.plants);
};
allPlantsData();

// Modal Data
const plantDetailsId = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const Modaldata = await res.json();
  displayModalDetails(Modaldata.plants);
};

// All Display Data is Here =>
// Display Names Data (Category Section)
const displayNameData = (categories) => {
  categories.forEach((cat) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="text-black cursor-pointer hover:bg-[#15803d] transition-all duration-500 bg-gray-100 hover:text-white p-2 rounded-sm"><button class="cursor-pointer">${cat.category_name}</button></div>
    `;
    categorieContainer.appendChild(newDiv);
  });
};
categorieNameData();

// Display Home Page All Plants (Choose Your Trees)
const displayAllPlants = (allPlantsData) => {
  allPlantsData.forEach((plant) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div id="div-card" class="bg-white hover:translate-y-1 hover:scale-[1.02] transition-all duration-500 h-full flex flex-col rounded-xl p-4 shadow-sm">
              <div id="img-div" class="h-[178px] overflow-hidden rounded-lg mb-2"><img class="w-full h-full object-cover" src="${plant.image}" alt="" /></div>
              <div class="flex flex-col grow">
                <h2 onclick="plantDetailsId(${plant.id})"  class="font-semibold cursor-pointer">${plant.name}</h2>
                <p class="leading-relaxed nunito-font text-sm my-3 line-clamp-3">
                  ${plant.description}</p>
                <div class="flex justify-between items-center">
                  <button id="category-btn" class="text-[#15803d] text-sm bg-[#dcfce7] px-3 py-1 rounded-full mb-3">${plant.category}</button>
                  <p class="font-semibold text-sm">
                    ৳<span>${plant.price}</span>
                  </p>
                </div>
                <button data-product-id="${plant.id}" id="cart-btn" class="btn w-full text-white rounded-full mt-auto bg-[#15803d]">Add to Cart</button>
              </div>
    </div>`;
    cardContainer.appendChild(newDiv);
  });
};

// Display Modal
const displayModalDetails = (mData) => {
  const modalContainer = document.getElementById('modal-details-container');
  modalContainer.innerHTML = `
            <div
              id="div-card"
              class="bg-white flex flex-col rounded-xl">
              <h2 class="font-semibold mb-2">${mData.name}</h2>
              <div id="img-div" class="shadow-xl h-[300px] overflow-hidden rounded-lg mb-2">
                <img class=" w-full h-full object-cover" src="${mData.image}" alt="" />
              </div>
              <h2 id="tree-category" class="text-sm mb-3">
                <span class="font-semibold text-black">Category :</span>
                <span class="text-[#15803d]">${mData.category}</span>
              </h2>
              <p class="text-sm">
                <span class="font-semibold">Price :</span>
                <span class= "text-[#15803d]">${mData.price} Tk</span>
              </p>
              <div>
                <p class="leading-relaxed nunito-font text-sm my-3">
                  <span class="font-semibold">Description :</span>
                  ${mData.description}
                </p>
              </div>
            </div>`;
  document.getElementById('my_modal_5').showModal();
};

// Add to Cart Button to Your Cart Functions
cardContainer.addEventListener('click', (e) => {
  const cartBtn = e.target.closest('#cart-btn');
  if (cartBtn) {
    const name = cartBtn.parentNode.children[0].textContent;
    const price = Number(cartBtn.parentNode.children[2].children[1].children[0].textContent);
    totalPriceContainer.classList.remove('hidden');
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `
                <div id="price-card" class="flex items-center justify-between rounded-lg bg-[#F0FDF4] py-2 px-3 my-2">
              <div id="price-card-text" class="">
                <p class="leading-relaxed font-semibold">${name}</p>
                <p class = "text-[#1f2937] opacity-50">
                  ৳
                  <span>${price}</span>
                  x
                  <span class="quantity">1</span>
                </p>
              </div>
              <div id="price-card-btn">
                <i class="text-[#1f2937] opacity-50 fa-solid fa-xmark cursor-pointer"></i>
              </div>
            </div>`;
    priceCardsContainer.appendChild(newDiv);
    priceTotal(price);
  }
});

// Total Price Sum
const priceTotal = (prices) => {
  const totalPrice = document.getElementById('total-price');
  const totalPriceNum = Number(totalPrice.textContent);
  totalPrice.textContent = totalPriceNum + prices;
};

// Remove Cart
priceCardsContainer.addEventListener('click', (e) => {
  const deleteBtn = e.target.closest('i');
  if (deleteBtn) {
    const deleteCart = deleteBtn.parentNode.parentNode.parentNode;

    const cartPrice = deleteBtn.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0].textContent;
    const cartPriceNum = Number(cartPrice);

    const totalPrice = document.getElementById('total-price');
    const totalPriceNum = Number(totalPrice.textContent);
    totalPrice.textContent = totalPriceNum - cartPriceNum;
    deleteCart.remove();
  }
});
