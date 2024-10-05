let ulElements = document.querySelector("#categoryUl");
let productList = document.querySelector("#productList");
let cart = [];
let currentPage = 1;
let itemsPerPage = 8; // Number of products per page
let productsData = []; // Store fetched products here

// Function to fetch categories
let getCategory = async () => {
  let fetchData = await fetch("https://dummyjson.com/products/category-list");
  let categoryData = await fetchData.json();
  let items = "";
  categoryData.forEach((element) => {
    items += `<li onclick="getProduct('${element}')" class="cursor-pointer hover:text-blue-600 transition">${element}</li>`;
  });
  ulElements.innerHTML = items;
};

// Function to add product to cart
let addToCart = (product) => {
  cart.push(product);
  document.querySelector("#cartCount").textContent = cart.length;
  alert(`${product.title} added to cart!`);
};

// Function to show product in modal (Quick View)
let showProductModal = (product) => {
  document.querySelector("#modalImage").src = product.thumbnail;
  document.querySelector("#modalTitle").textContent = product.title;
  document.querySelector("#modalDescription").textContent = product.description || "No description available";
  document.querySelector("#modalPrice").textContent = `$${product.price}`;
  document.querySelector("#modal").classList.remove("hidden");
};

// Close Modal
document.querySelector("#closeModal").addEventListener("click", () => {
  document.querySelector("#modal").classList.add("hidden");
});

// Loading Spinner
let loadingDiv = `<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
<div class="animate-pulse flex space-x-4">
  <div class="rounded-full bg-slate-700 h-10 w-10"></div>
  <div class="flex-1 space-y-6 py-1">
    <div class="h-2 bg-slate-700 rounded"></div>
    <div class="space-y-3">
      <div class="grid grid-cols-3 gap-4">
        <div class="h-2 bg-slate-700 rounded col-span-2"></div>
        <div class="h-2 bg-slate-700 rounded col-span-1"></div>
      </div>
      <div class="h-2 bg-slate-700 rounded"></div>
    </div>
  </div>
</div>
</div>`;

// Function to fetch products
let getProduct = (categorySlug = "") => {
  productList.innerHTML = loadingDiv;
  let apiUrl = categorySlug === "" ? `https://dummyjson.com/products` : `https://dummyjson.com/products/category/${categorySlug}`;
  
  fetch(apiUrl)
    .then((res) => res.json())
    .then((finalRes) => {
      productsData = finalRes.products; // Save data for search and sorting
      displayProducts(productsData);
    });
};

// Function to display products
let displayProducts = (products) => {
  let startIndex = (currentPage - 1) * itemsPerPage;
  let paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);
  
  let pItems = paginatedProducts.map(product => `
    <div class="rounded-md shadow-md overflow-hidden transition transform hover:scale-105">
      <div class="relative bg-cover bg-center h-56" style="background-image: url('${product.thumbnail}')">
        <button onclick="addToCart(${JSON.stringify(product)})" class="absolute top-2 right-2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500">
          <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </button>
        <button onclick="showProductModal(${JSON.stringify(product)})" class="absolute bottom-2 left-2 p-2 rounded-md bg-gray-700 text-white hover:bg-gray-600">
          Quick View
        </button>
      </div>
      <div class="px-5 py-3">
        <h3 class="text-gray-700 uppercase">${product.title}</h3>
        <div class="flex items-center">
          <span class="text-gray-500 mt-2">$${product.price}</span>
          <span class="ml-2 text-yellow-500">${'★'.repeat(product.rating || 4)}</span>
        </div>
      </div>
    </div>
  `).join('');

  productList.innerHTML = pItems;
};

// Event listener for search input
document.querySelector("#searchInput").addEventListener("input", function() {
  const searchTerm = this.value.toLowerCase();
  const filteredProducts = productsData.filter(product => product.title.toLowerCase().includes(searchTerm));
  displayProducts(filteredProducts);
});

// Event listener for sorting
document.querySelector("#sortPrice").addEventListener("change", function() {
  const sortOrder = this.value;
  const sortedProducts = [...productsData].sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);
  displayProducts(sortedProducts);
});

// Initialize categories and products
getCategory();
getProduct();
