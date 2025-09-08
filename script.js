const categorieContainer = document.getElementById('categorie-container');
const cardContainer = document.getElementById('card-container');

// All Fetch is Here =>
// Load Categories Names Data
const categorieNameData = async () => {
  const url = 'https://openapi.programming-hero.com/api/categories';
  const res = await fetch(url);
  const nameData = await res.json();
  displayNameData(nameData.categories);
};

const allPlantsData = async () => {
  const url = 'https://openapi.programming-hero.com/api/plants';
  const res = await fetch(url);
  const plantsDataAll = await res.json();
  displayAllPlants(plantsDataAll.plants);
};
allPlantsData();



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

const displayAllPlants = (allPlantsData) => {
  allPlantsData.forEach((plant) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div id="div-card" class="bg-white hover:translate-y-1 hover:scale-[1.02] transition-all duration-500 h-full flex flex-col rounded-xl p-4 shadow-sm">
              <div id="img-div" class="h-[178px] overflow-hidden rounded-lg mb-2"><img class="w-full h-full object-cover" src="${plant.image}" alt="" /></div>
              <div class="flex flex-col grow">
                <h2 onclick="plantDetailsId(${plant.id})" class="font-semibold cursor-pointer">${plant.name}</h2>
                <p class="leading-relaxed nunito-font text-sm my-3 line-clamp-3">
                  ${plant.description}</p>
                <div class="flex justify-between items-center">
                  <button id="category-btn" class="text-[#15803d] text-sm bg-[#dcfce7] px-3 py-1 rounded-full mb-3">${plant.category}</button>
                  <p class="font-semibold text-sm">
                    ৳<span>${plant.price}</span>
                  </p>
                </div>
                <button id="cart-btn" class="btn w-full text-white rounded-full mt-auto bg-[#15803d]">Add to Cart</button>
              </div>
    </div>`;
    cardContainer.appendChild(newDiv);
  });
};

