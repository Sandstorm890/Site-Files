
document.addEventListener("DOMContentLoaded", function () {
  const imageDirectory = "./images";
  const featuredImageContainer = document.getElementById("featuredImageContainer");
  const featuredImage = document.getElementById("featuredImage");
  const thumbnailBar = document.getElementById("thumbnailBar");
  const captionRightElement = document.getElementById("caption-right");
  const ironwoodBtn = document.getElementById("ironwood-btn")

  let featuredPhotoIndex = 0;
  let dropshadowIndex = 0;
  
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
        imgElement.style.boxShadow = "0px 0px 4px 0px rgba(0, 0, 0, 1)"
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

  function updateDropShadow(direction) {
    if (direction == 'up' && dropshadowIndex == 4) {
      dropshadowIndex = 0
    } else if (direction == 'up') {
      dropshadowIndex++
    }

    if (direction == 'down' && dropshadowIndex == 0) {
      dropshadowIndex = 4
    } else if (direction == 'down') {
      dropshadowIndex--
    }

    console.log(dropshadowIndex)
    switch (dropshadowIndex) {
      case 0:
      featuredImage.style.boxShadow = "6px 6px 24px  rgba(0, 0, 0, 0.401)"
      captionRightElement.textContent = "New"
      break;
      case 1:
        featuredImage.style.boxShadow = "0px 6px 24px  rgba(0, 0, 0, 0.401)"
        captionRightElement.textContent = "Original"
      break;
      case 2:
        featuredImage.style.boxShadow = "6px 6px 12px  rgba(0, 0, 0, 0.401)"
        captionRightElement.textContent = "2"
      break;
      case 3:
        featuredImage.style.boxShadow = "6px 6px 8px  rgba(0, 0, 0, 0.401)"
        captionRightElement.textContent = "3"
      break;
      case 4:
        featuredImage.style.boxShadow = "6px 6px 4px  rgba(0, 0, 0, 0.401)"
        captionRightElement.textContent = "4"
      break;
    }
  }

  document.addEventListener('keydown', function(event) {
    
      if (event.key === 'ArrowRight') {
        featuredImageForward()
      } else if (event.key === 'ArrowLeft') {
        featuredImageBack()
      } else if (event.key === "ArrowUp") {
        updateDropShadow("up")
      } else if (event.key === "ArrowDown") {
        updateDropShadow("down")
      }
      
    
  });
  
  featuredImageContainer.addEventListener("click", function () {
    featuredImageForward()
  });

  showThumbnails();
  updateFeaturedImage(0);
  featuredImage.style.boxShadow = "0px 6px 24px  rgba(0, 0, 0, 0.401)"

  
  
});


