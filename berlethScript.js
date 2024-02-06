
    document.addEventListener("DOMContentLoaded", function () {
      const imageDirectory = "./images";
      const featuredImageContainer = document.getElementById("featuredImageContainer");
      const featuredImage = document.getElementById("featuredImage");
      const thumbnailBar = document.getElementById("thumbnailBar");
      const captionRightElement = document.getElementById("caption-right");

      let featuredPhotoIndex = 0;
      // let numberOfPhotos
      
      function showThumbnails() {
        // console.log("featuredPhotoIndex:", featuredPhotoIndex)
        thumbnailBar.innerHTML = '';
        // const startIndex = (featuredPhotoIndex - 6) < 0 ? 0 : featuredPhotoIndex - 6;
        // const endIndex = (featuredPhotoIndex + 6) > imageListWithCaptions.length ? imageListWithCaptions.length - 1 : featuredPhotoIndex + 6;
        // const startIndex = (featuredPhotoIndex - 6)
        // const endIndex = (featuredPhotoIndex + 6)

        // const startIdx = Math.max(0, featuredPhotoIndex - 6);
        // const endIdx = Math.min(imageListWithCaptions.length, featuredPhotoIndex + 7);

        // console.log("startIdx", startIdx)
        // console.log("endIdx", endIdx)

        // const displayImages = imageListWithCaptions.slice(featuredPhotoIndex - 6).concat(imageListWithCaptions.slice(featuredPhotoIndex + 7))
        // console.log(displayImages)
        // const displayImages = imageListWithCaptions.slice(startIdx, endIdx);
        // numberOfPhotos = displayImages.length
        // console.log("numberOfPhotos", numberOfPhotos)
        // console.log(displayImages[0].caption)

        // console.log("startIndex: ", startIndex);
        // console.log("endIndex: ", endIndex);

        // console.log(displayImages)
        // console.log(imageListWithCaptions.length)
        imageListWithCaptions.forEach(element => {
          // console.log("Index of current element")
          // console.log(imageListWithCaptions.findIndex((image) => image == element))

          const imgElement = document.createElement('img');
          imgElement.src = `${imageDirectory}/${element.image}`
          imgElement.alt = element.caption
          
          imgElement.onclick = function () {
            updateFeaturedImage(imageListWithCaptions.findIndex((image) => image == element))
          }
          // console.log(element, )
          if (element == imageListWithCaptions[featuredPhotoIndex]) {
            imgElement.style.height = "30px"
            imgElement.style.width = "80px"
            // imgElement.style.boxShadow = "0px, 0px, 12px, #F57F17"
          }

          thumbnailBar.appendChild(imgElement);
        });


        // for (let i = startIndex; i <= endIndex; i++) {
        //   const imgElement = document.createElement('img');
        //   imgElement.src = `${imageDirectory}/${imageListWithCaptions.at(i).image}`;
        //   imgElement.alt = imageListWithCaptions.at(i).image.replace(/\.[^/.]+$/, "");
        //   imgElement.onclick = function () {
            
        //     updateFeaturedImage(i);
        //   };
          
        //   if (i == featuredPhotoIndex) {
        //     imgElement.style.height = "30px"
        //     imgElement.style.width = "80px"
        //     imgElement.style.boxShadow = "0px, 0px, 12px, #F57F17"
        //   }

        //   thumbnailBar.appendChild(imgElement);
        // }
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
        featuredImage.src = `${imageDirectory}/${imageListWithCaptions.at(index).image}`;
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


