

function loadCategories() {
    // 1 - Fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        // 2 - Convert promise to JSON
        .then((res) => res.json())
        // 3 - Send data to display
        .then((data) => displayCategories(data.categories));
}


function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
         .then((res) => res.json())
        // 3 - Send data to display
        .then((data) => displayVideos(data.videos));
}



const loadCategooryVideo = (id)=>{
    console.log(id);
}

function displayCategories(categories) {
    // Get the container
    const categoryContainer = document.getElementById("category-container");
   

    // Loop operation on array of objects
    for (let cat of categories) {
        console.log(cat);

        // Create element
        const categoryDiv= document.createElement("div");
        categoryDiv.innerHTML = `<button onclick="loadCategooryVideo()" class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>`;

        // Append the element
        categoryContainer.appendChild(categoryDiv);
    }
}

const displayVideos=(videos)=>{
    console.log(videos);
      
    const videoContainer= document.getElementById("video-container");
    videos.forEach((video) => {
        console.log(video);
        const videoCard = document.createElement("div");

        videoCard.innerHTML=`<div class="card bg-base-100">

    <figure class="relative"><img  class="w-full h-[150px] object-cover" src="${video.thumbnail}"/>
    <span class="absolute bottom-2 right-2 text-white bg-black text-sm">3hrs 56 min ago</span>
    </figure>

     <div class=" flex gap-3 px-0 py-5"> 
      <div class="profile">
        <div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
    <img src="${video.authors[0].profile_picture}" />
  </div>
</div>
      </div>
      <div class="intro">
        <h2 class="text-sm font-semibold">${video.title}</h2>
        <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name}<img class="w-5 h-5" src=" https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt=""></p>
        <p class="text-sm text-gray-400">${video.others.views}</p>
      </div>

  
      </div>
  </div>`;
        //append
        videoContainer.append(videoCard);
    });
}

loadCategories();
// loadVideos();

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }


//  Two are function is right.

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
//     const categoryContainer = document.getElementById("category-container");
    
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