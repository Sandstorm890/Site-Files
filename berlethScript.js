
    document.addEventListener("DOMContentLoaded", function () {
      const imageDirectory = "./images";
      const featuredImageContainer = document.getElementById("featuredImageContainer");
      const featuredImage = document.getElementById("featuredImage");
      const thumbnailBar = document.getElementById("thumbnailBar");
      const captionRightElement = document.getElementById("caption-right");

      let currentIndex = 0

      const thumbnailsPerPage = 14;
      let currentPage = 0;

      function showThumbnails() {
        const start = currentPage * thumbnailsPerPage;
        const end = start + thumbnailsPerPage;

        thumbnailBar.innerHTML = '';

        for (let i = start; i < end && i < imageListWithCaptions.length; i++) {
          const imgElement = document.createElement("img");
          imgElement.src = `${imageDirectory}/${imageListWithCaptions[i].image}`;
          imgElement.alt = imageListWithCaptions[i].image.replace(/\.[^/.]+$/, "");
          imgElement.onclick = function () {
            currentIndex = i
            updateFeaturedImage(i);
          };

          thumbnailBar.appendChild(imgElement);
        }
      }

      function updateFeaturedImage(index) {
        featuredImage.src = `${imageDirectory}/${imageListWithCaptions[index].image}`;
        captionRightElement.textContent = imageListWithCaptions[index].caption;
      }

      showThumbnails();
      updateFeaturedImage(0);

      const prevButton = document.getElementById("prevButton");
      const nextButton = document.getElementById("nextButton");

      // prevButton.addEventListener("click", function () {
      //   if (currentPage > 0) {
      //     currentPage--;
      //     showThumbnails();
      //   }
      // });

      // nextButton.addEventListener("click", function () {
      //   const totalPages = Math.ceil(imageListWithCaptions.length / thumbnailsPerPage);
      //   if (currentPage < totalPages - 1) {
      //     currentPage++;
      //     showThumbnails();
      //   }
      // });

      document.addEventListener('keydown', function(event) {
        try {
          if (event.key === 'ArrowRight') {
              const nextIndex = (currentIndex + 1)
              updateFeaturedImage(nextIndex);
              currentIndex++
            } else if (event.key === 'ArrowLeft') {
              const nextIndex = (currentIndex - 1)
              updateFeaturedImage(nextIndex);
              currentIndex--
            }
        } catch {console.log("Reached end of photo list")}
        });
      

      // featuredImageContainer.addEventListener("keypress", (event) => {
      //   console.log("Arrow listener function init")
      //   if (event.key === 'ArrowRight') {
      //     const nextIndex = (currentIndex + 1)
      //     currentIndex++
      //     updateFeaturedImage(nextIndex);
      //   }
      // });
      
      featuredImageContainer.addEventListener("click", function () {
        console.log("Click listener init")
        const nextIndex = (currentIndex + 1)
        currentIndex++
        updateFeaturedImage(nextIndex);
      });

    });


