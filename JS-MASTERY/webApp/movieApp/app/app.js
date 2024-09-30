let moviesList = document.querySelector('.movieDiv');
let searchInput = document.querySelector('input');
let pageButtons = document.querySelectorAll('.moviePage button:not(#prevPage, #nextPage)'); // Select buttons 1-4
let prevPageBtn = document.querySelector('#prevPage');
let nextPageBtn = document.querySelector('#nextPage');

let debounceTimeout; // To store the debounce timer
let currentPage = 1; // Track the current page number

let moviesNow = async (title = '', page = 1) => {
  let apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`;
  let imageStaticUrl = `https://image.tmdb.org/t/p/w1280`;

  if (title !== '') {
    apiUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${title}&page=${page}`;
  }

  try {
    let apiData = await fetch(apiUrl);
    let dataList = await apiData.json();
    let { results } = dataList;

    // Clear previous movie entries
    moviesList.innerHTML = '';

    results.forEach(element => {
      let { original_title, release_date, poster_path } = element;

      moviesList.innerHTML += `<div class="movieItems">
                <img src="${imageStaticUrl + poster_path}" alt="Movie Poster">
                <div>
                  <h3>${original_title} | ${release_date}</h3>
                </div>
            </div>`;
    });

    // Update the current page state
    currentPage = page;

    // Show/Hide Prev button based on current page
    if (currentPage > 1) {
      prevPageBtn.style.display = 'inline-block'; // Show "Previous" button when on any page other than 1
    } else {
      prevPageBtn.style.display = 'none'; // Hide "Previous" button when on page 1
    }

    // Disable Next button if on the last page
    nextPageBtn.disabled = currentPage === dataList.total_pages;

  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
};

// Handle page button clicks (for buttons 1-4)
pageButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    let page = parseInt(e.target.innerText); // Get the page number from button text
    moviesNow(searchInput.value, page); // Call moviesNow with current search value and page
  });
});

// Handle "Previous" button click
prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    moviesNow(searchInput.value, currentPage - 1); // Go to the previous page
  }
});

// Handle "Next" button click
nextPageBtn.addEventListener('click', () => {
  moviesNow(searchInput.value, currentPage + 1); // Go to the next page
});

// Debounce function to limit API calls when typing in search
searchInput.addEventListener("keyup", () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    moviesNow(searchInput.value, 1); // Reset to page 1 when searching
  }, 300); // 300ms debounce time
});

// Initial load of movies (page 1)
moviesNow();
