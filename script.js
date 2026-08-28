const videos = [

  {
    title: "My Latest YouTube Video",
    description: "Watch my latest video.",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    locked: false,
    price: 0
  },

  {
    title: "Exclusive Video",
    description: "Premium content available after unlocking.",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    locked: true,
    price: 49
  },

  {
    title: "Instagram Reel",
    description: "Latest Instagram content.",
    platform: "instagram",
    url: "https://www.instagram.com/reel/XXXXXXXXXXX/",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    locked: false,
    price: 0
  }

];

const grid = document.getElementById("videoGrid");

function renderVideos() {

  grid.innerHTML = "";

  videos.forEach((video, index) => {

    const card = document.createElement("div");

    card.className =
      "video-card " + (video.locked ? "locked" : "");

    card.innerHTML = `

      <div class="thumbnail">

        <img src="${video.thumbnail}" alt="${video.title}">

        ${
          video.locked
          ? `<div class="lock-icon">🔒</div>`
          : ""
        }

      </div>

      <div class="video-info">

        <h3>${video.title}</h3>

        <p>${video.description}</p>

        ${
          video.locked
          ? `<div class="price">₹${video.price} to unlock</div>`
          : `<div class="price">FREE</div>`
        }

        <button
          class="video-button"
          onclick="openVideo(${index})">

          ${
            video.locked
            ? "🔒 Unlock Video"
            : "▶ Watch Video"
          }

        </button>

      </div>

    `;

    grid.appendChild(card);

  });

}

function openVideo(index) {

  const video = videos[index];

  const modal = document.getElementById("videoModal");

  const content = document.getElementById("modalContent");

  if (video.locked) {

    content.innerHTML = `

      <div class="unlock-box">

        <h2>🔒 Premium Video</h2>

        <p>
          Unlock this exclusive video for ₹${video.price}.
        </p>

        <button
          class="video-button"
          onclick="startPayment(${index})">

          Unlock for ₹${video.price}

        </button>

      </div>

    `;

  } else {

    if (video.platform === "youtube") {

      const id = getYouTubeId(video.url);

      content.innerHTML = `

        <iframe
          src="https://www.youtube.com/embed/${id}"
          allowfullscreen>
        </iframe>

      `;

    } else {

      content.innerHTML = `

        <div class="unlock-box">

          <h2>Instagram Video</h2>

          <p>Open this video on Instagram.</p>

          <a
            class="hero-button"
            href="${video.url}"
            target="_blank">

            Open Instagram

          </a>

        </div>

      `;

    }

  }

  modal.style.display = "flex";

}

function closeModal() {

  document.getElementById("videoModal").style.display = "none";

  document.getElementById("modalContent").innerHTML = "";

}

function getYouTubeId(url) {

  try {

    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.substring(1);
    }

    return parsed.searchParams.get("v");

  } catch {

    return "";

  }

}

/*
  PAYMENT PLACEHOLDER

  Do NOT put secret payment keys here.

  For production:
  1. Create an order on your server.
  2. Open the payment gateway.
  3. Verify payment on the server.
  4. Give the customer access only after verification.
*/

function startPayment(index) {

  const video = videos[index];

  alert(
    "Payment system is not connected yet.\n\n" +
    "Price: ₹" + video.price +
    "\n\nConnect a payment gateway + backend before accepting real payments."
  );

}

renderVideos();