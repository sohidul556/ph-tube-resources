

function loadCategories() {
    // 1 - Fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        // 2 - Convert promise to JSON
        .then((res) => res.json())
        // 3 - Send data to display
        .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
    // Get the container
    const categoryContainer = document.getElementById("category-container");
   

    // Loop operation on array of objects
    for (let cat of categories) {
        console.log(cat);

        // Create element
        const categoryDiv= document.createElement("div");
        categoryDiv.innerHTML = `<button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>`;

        // Append the element
        categoryContainer.appendChild(categoryDiv);
    }
}

loadCategories();


// function loadCategories() {
//     // 1- fetch the data
//     fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
//         // 2 - convert promise to json 
//         .then((res) => res.json())
//         // 3- send data to display
//         .then((data) => displayCategories(data.categories));
// }

// function displayCategories(categories) {
//     console.log(categories)
//     // get the container
//   //  const categoryContainer = document.getElementById("category-container");
    
//     // loop through each category in the array of object
//     categories.forEach(cat => {
//         console.log(cat);
        
//         // create button element for each category
//         const categoryButton = document.createElement("button");
//         categoryButton.className = "btn btn-sm hover:";
//         categoryButton.textContent = cat.category;
        
//         // append the button to the container
//         categoryContainer.appendChild(categoryButton);
//     });
// }

// loadCategories();