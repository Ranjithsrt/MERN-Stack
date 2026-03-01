// javascript

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  // API key
  const api = "JlEQ9iywNK9jk1cio4jyq81fa1SIy3zAR1LdLJCTej4YyF5V4wDkR69p";

  // Select elements
  const box = document.getElementById("box");
  const searchInput = document.getElementById("search");

  // Load images function
  function loadImages(query = "All") {
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=100`;

    // Loading message
    box.innerHTML = `
      <h3 class="text-center text-danger w-100 fs-6 text-nowrap tracking-wide">
        Loading data, please wait...
      </h3>
    `;

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: api,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.photos || data.photos.length === 0) {
          box.innerHTML = `
            <h3 class="text-center text-danger w-100 fs-6 text-nowrap tracking-wide">
              No images found
            </h3>`;
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

        box.innerHTML = html;
      })
      .catch(() => {
        box.innerHTML = `
          <h5 class="text-center text-danger w-100 fs-6">
            Unable to load images. Please try again later.
          </h5>`;
      });
  }

  // Load initial images
  loadImages("Cinema");

  // Search input event (keyup)
  searchInput.addEventListener("keyup", (e) => {
    const keyword = e.target.value.trim();

    // Allowed text: letters + numbers + spaces
    const isValid = /^[a-zA-Z0-9\s]+$/.test(keyword);

    if (keyword.length === 0) {
      loadImages("All");
      return;
    }

    if (!isValid) {
      box.innerHTML = `
        <h3 class="text-center text-danger w-100 fs-6 text-nowrap tracking-wide">
          Invalid search input. Please use only letters and numbers.
        </h3>`;
      return;
    }

    loadImages(keyword); // Load images with keyword search query
  });

  // Modal viewer - event delegation
  document.addEventListener("click", (e) => {
    const galleryItem = e.target.closest(".gallery-item");

    if (!galleryItem) return;

    const url = galleryItem.dataset.large;
    const photographer = galleryItem.dataset.photographer;

    // Remove existing modal
    const existingModal = document.getElementById("modal");
    if (existingModal) existingModal.remove();

    // Create new modal
    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = "modal";
    modal.tabIndex = -1;

    modal.innerHTML = `
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
    `;

    document.body.appendChild(modal);

    // Show modal (Bootstrap 5)
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
  });

  // Back to top button
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
