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

