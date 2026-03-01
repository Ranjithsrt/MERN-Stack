// jquery

// Document ready function
$(document).ready(function () {
  // API key
  const api = "JlEQ9iywNK9jk1cio4jyq81fa1SIy3zAR1LdLJCTej4YyF5V4wDkR69p";

  // Render images
  function loadImages(query = "All") {
    // search query
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=100`;

    $.ajax({
      url: url,
      method: "GET",
      headers: {
        Authorization: api,
      },

      // Loading data indicator
      beforeSend: function () {
        $("#box").html(
          `<h3 class="text-center text-danger w-100 fs-6 text-nowrap tracking-wide">Loading data, please wait...</h3>`
        );
      },

      // On success
      success: function (data) {
         console.log(data);
        if (!data.photos || data.photos.length === 0) {
          // If API returns empty results
          $("#box").html(
            `<h3 class="text-center text-danger w-100 fs-6 text-nowrap tracking-wide">No images found</h3>`
          );
          return;
        }

        let html = "";
        data.photos.forEach((photo) => {
          html += `
          <div class="gallery-item" 
               data-large="${photo.src.large}" 
               data-photographer="${photo.photographer}">
            <img src="${photo.src.large}"
                 class="gallery-img"
                 alt="${photo.photographer}" 
                 loading="lazy" />
            <div class="overlay">
              <p class="photographer-name">
                <i class="bi bi-camera-fill me-2"></i>${photo.photographer}
              </p>
            </div>
          </div>
        `;
        });

        $("#box").html(html);
      },

      // On error
      error: function () {
        $("#box").html(
          `<h5 class="text-center text-danger w-100 fs-6">Unable to load images. Please try again later.</h5>`
        );
      },
    });
  }

  // Load initial images
  loadImages("Cinema");

  // Search images
  $("#search").on("keyup", function () {
    let keyword = $(this).val().trim();

    // console.log("Search input:", keyword);

    // VALIDATION: allow letters + numbers + spaces
    const isValid = /^[a-zA-Z0-9\s]+$/.test(keyword);

    if (keyword.length === 0) {
      loadImages("All");
      return;
    }

    if (!isValid) {
      $("#box").html(
        `<h3 class="text-center text-danger w-100 fs-6 text-nowrap tracking-wide">Invalid search input. Please use only letters and numbers.</h3>`
      );
      return;
    }

    loadImages(keyword);
  });

  // Modal viewer
  $(document).on("click", ".gallery-item", function () {
    let url = $(this).data("large");
    let photographer = $(this).data("photographer");

    $("#modal").remove();

    let html = `
      <div class="modal fade" id="modal" tabindex="-1">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0">
              <h1 class="modal-title fs-5 text-black">Captured by ${photographer}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-0 bg-black d-flex justify-content-center align-items-center">
              <img src="${url}" class="img-fluid" style="max-height: 85vh;">
            </div>
          </div>
        </div>
      </div>
    `;

    $("body").append(html);
    $("#modal").modal("show");
  });
});


