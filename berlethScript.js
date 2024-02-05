
    document.addEventListener("DOMContentLoaded", function () {
      const imageDirectory = "./images";
      const featuredImageContainer = document.getElementById("featuredImageContainer");
      const featuredImage = document.getElementById("featuredImage");
      const thumbnailBar = document.getElementById("thumbnailBar");
      const captionRightElement = document.getElementById("caption-right");

      let featuredPhotoIndex = 0;
      
      function showThumbnails() {
        console.log("featuredPhotoIndex:", featuredPhotoIndex)
        thumbnailBar.innerHTML = '';
        const startIndex = (featuredPhotoIndex - 6) < 0 ? 0 : featuredPhotoIndex - 6;
        const endIndex = (featuredPhotoIndex + 6) > imageListWithCaptions.length ? imageListWithCaptions.length - 1 : featuredPhotoIndex + 6;

        console.log("startIndex: ", startIndex);
        console.log("endIndex: ", endIndex);


        for (let i = startIndex; i <= endIndex; i++) {
          const imgElement = document.createElement('img');
          imgElement.src = `${imageDirectory}/${imageListWithCaptions[i].image}`;
          imgElement.alt = imageListWithCaptions[i].image.replace(/\.[^/.]+$/, "");
          imgElement.onclick = function () {
            
            updateFeaturedImage(i);
          };

          thumbnailBar.appendChild(imgElement);
        }
      };

      function featuredImageForward() {
        const nextIndex = (featuredPhotoIndex + 1)
        updateFeaturedImage(nextIndex);
        showThumbnails()
      };

      function featuredImageBack() {
        const nextIndex = (featuredPhotoIndex - 1)
        updateFeaturedImage(nextIndex);
        showThumbnails()
      };
      

      function updateFeaturedImage(index) {
        featuredImage.src = `${imageDirectory}/${imageListWithCaptions[index].image}`;
        captionRightElement.textContent = imageListWithCaptions[index].caption;
        featuredPhotoIndex = index
        showThumbnails()
      };
    
      document.addEventListener('keydown', function(event) {
        try {
          if (event.key === 'ArrowRight') {
            featuredImageForward()
          } else if (event.key === 'ArrowLeft') {
            featuredImageBack()
          }
        } catch {console.log("Reached end of photo list")}
      });
      
      featuredImageContainer.addEventListener("click", function () {
        featuredImageForward()
      });

      showThumbnails();
      updateFeaturedImage(0);
      
    });


