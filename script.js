// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let imageURLDiv = document.querySelector(".display-image");
let songNameDiv = document.querySelector(".display-song");
let artistDiv = document.querySelector(".display-artist");
let songLinkDiv = document.querySelector(".display-link");
let numberDiv = document.querySelector(".numberInputs");


// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
imageArray = [
  "https://cdn11.bigcommerce.com/s-j3ptcnmq25/images/stencil/1280x1280/products/3803/6363/3c8990b5-3adc-40f5-8045-321c8211955c__99453.1653417336.jpg?c=2",

  "https://www.skillet.com/sites/g/files/g2000015186/files/2022-09/Skillet_Site_NewSite_Assets_2560_PressShot3.jpg",

"https://www.skillet.com/sites/g/files/g2000015186/files/2022-09/Skillet_Site_NewSite_Assets_2560_PressShot3.jpg",

"https://i.scdn.co/image/ab67616d0000b273288b8595213e38d99b6f9d6c"
];
songNameArray = [
  "Purple Rain", 
  "Feel Invincible",
  "The Resistance",
  "Runnin Wild"
]
artistArray = [
  "Prince",
  "Skillet",
  "Skillet",
  "Airboune"
]
songLinkArray = [
  "https://open.spotify.com/track/54X78diSLoUDI3joC2bjMz?si=96a083c8b24243e4",
  "https://open.spotify.com/track/0i8JFpqe9cKwnrcvoNgl1L?si=LOR5k2WcQ32iL-b3Cq339A",
  "https://open.spotify.com/track/5O9Dz0h08LuBi0aVvDcylh?si=HMwkFbSHQP-q7byIryzXqw",
  "https://open.spotify.com/track/71fSn6OIF7HnCbgCzOBqpj?si=bf42123a8d4e4bf1"
]

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
let songOne = {
  Image: "https://cdn11.bigcommerce.com/s-j3ptcnmq25/images/stencil/1280x1280/products/3803/6363/3c8990b5-3adc-40f5-8045-321c8211955c__99453.1653417336.jpg?c=2",
  Name: "Purple Rain",
  Artist: "Prince",
  Link: "https://open.spotify.com/track/54X78diSLoUDI3joC2bjMz?si=96a083c8b24243e4"
}
let songTwo = {
  Image: "https://www.skillet.com/sites/g/files/g2000015186/files/2022-09/Skillet_Site_NewSite_Assets_2560_PressShot3.jpg",
  Name: "Feel Invisible",
  Artist: "Skillet",
  Link: "https://open.spotify.com/track/0i8JFpqe9cKwnrcvoNgl1L?si=LOR5k2WcQ32iL-b3Cq339A"
}
let songThree = {
  Image: "https://www.skillet.com/sites/g/files/g2000015186/files/2022-09/Skillet_Site_NewSite_Assets_2560_PressShot3.jpg",
  Name: "The Resistance",
  Artist: "Skillet",
  Link: "https://open.spotify.com/track/5O9Dz0h08LuBi0aVvDcylh?si=HMwkFbSHQP-q7byIryzXqw"
}
let songFour = {
  Image: "https://i.scdn.co/image/ab67616d0000b273288b8595213e38d99b6f9d6c",
  Name: "Runnin Wild",
  Artist: "Airboune",
  Link: "https://open.spotify.com/track/71fSn6OIF7HnCbgCzOBqpj?si=bf42123a8d4e4bf1"
}

// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
let playlist = [songOne, songTwo, songThree, songFour]


//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let inputImage = image.value;
  let inputName = songName.value;
  let inputArtist = artist.value;
  let inputSongLink = songLink.value;

  let newSong = {
    Image: inputImage,
    Name: inputName,
    Artist: inputArtist,
    Link: inputSongLink
}
  // task 10: use `.push()` to add each input value to the correct array.
  playlist.push(newSong);
  console.log(newSong.Image)
  console.log(nameArray)
  console.log(artistArray)
  console.log(linkArray)

  console.log(playlist)
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
for (let i = 0; i < imageArray.length; i++) {
    imageURLDiv.insertAdjacentHTML("beforeend", `<img src= ${imageArray[i]}>`)
  }
  for (let i = 0; i < songNameArray.length; i++) {
    songNameDiv.insertAdjacentHTML("beforeend", `<p>${songNameArray[i]}</p>`)
  }
  for (let i = 0; i < artistArray.length; i++) {
    artistDiv.insertAdjacentHTML("beforeend", `<p>${artistArray[i]}</p>`)
  }
  for (let i = 0; i < songLinkArray.length; i++) {
    songLinkDiv.insertAdjacentHTML("beforeend", `<a href="${songLinkArray[i]}" target="_blank">Link</a>`)
  }
}








// click event to add and display songs
add.onclick = function() {
  emptyDisplay();
  addSongInfo();
  displaySongInfo();
  let songAmount = playlist.length
  numberDiv.innerHTML = songAmount
  console.log(songAmount)
};

// function call to display stored songs
displaySongInfo();
