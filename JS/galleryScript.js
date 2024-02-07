
document.addEventListener("DOMContentLoaded", function () {
  const imageDirectory = "./images";
  const featuredImageContainer = document.getElementById("featuredImageContainer");
  const featuredImage = document.getElementById("featuredImage");
  const thumbnailBar = document.getElementById("thumbnailBar");
  const captionRightElement = document.getElementById("caption-right");
  const ironwoodBtn = document.getElementById("ironwood-btn")

  let featuredPhotoIndex = 0;
  
  function showThumbnails() {

    thumbnailBar.innerHTML = '';

    imageListWithCaptions.forEach(element => {
      const imgElement = document.createElement('img');
      imgElement.src = `${imageDirectory}/${element.image}`
      imgElement.alt = element.caption
      
      imgElement.onclick = function () {
        updateFeaturedImage(imageListWithCaptions.findIndex((image) => image == element))
      }
      if (element == imageListWithCaptions[featuredPhotoIndex]) {
        imgElement.style.height = "30px"
        imgElement.style.width = "80px"
      }

      thumbnailBar.appendChild(imgElement);
    });
  };

  function featuredImageForward() {
    let nextIndex
    if (featuredPhotoIndex == imageListWithCaptions.length - 1) {
      nextIndex = 0
    } else {
      nextIndex = (featuredPhotoIndex + 1)
    }
    updateFeaturedImage(nextIndex);
    showThumbnails()

  };

  function featuredImageBack() {
    if (featuredPhotoIndex == 0) {
      nextIndex = imageListWithCaptions.length - 1
    } else {
      nextIndex = (featuredPhotoIndex - 1)
    }
    updateFeaturedImage(nextIndex);
    showThumbnails()
  };

  function updateFeaturedImage(index) {
    console.log(featuredImage)
    featuredImage.src = `${imageDirectory}/${imageListWithCaptions.at(index).image}`;
    featuredImage.style.animation = "fadeInAnimation ease 1.5s"
    captionRightElement.textContent = imageListWithCaptions.at(index).caption;
    featuredPhotoIndex = index
    showThumbnails()
  };

  document.addEventListener('keydown', function(event) {
    
      if (event.key === 'ArrowRight') {
        featuredImageForward()
      } else if (event.key === 'ArrowLeft') {
        featuredImageBack()
      }
    
  });
  
  featuredImageContainer.addEventListener("click", function () {
    featuredImageForward()
  });

  showThumbnails();
  updateFeaturedImage(0);

  
  
});


