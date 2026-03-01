// Fake Music JSON (20 Items)

const musicPlayerItems = [
  {
    id: 1,
    title: "Sky Dreams",
    artist: "Nova",
    image: "https://picsum.photos/seed/music1/200/200",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Ocean Waves",
    artist: "Luna",
    image: "https://picsum.photos/seed/music2/200/200",
    duration: "4:12",
  },
  {
    id: 3,
    title: "Midnight Ride",
    artist: "Zenix",
    image: "https://picsum.photos/seed/music3/200/200",
    duration: "2:58",
  },
  {
    id: 4,
    title: "Electric Heart",
    artist: "Pulse",
    image: "https://picsum.photos/seed/music4/200/200",
    duration: "3:33",
  },
  {
    id: 5,
    title: "Echoes",
    artist: "Reverb",
    image: "https://picsum.photos/seed/music5/200/200",
    duration: "4:01",
  },
  {
    id: 6,
    title: "Dreamcatcher",
    artist: "Aurora",
    image: "https://picsum.photos/seed/music6/200/200",
    duration: "3:15",
  },
  {
    id: 7,
    title: "Neon Nights",
    artist: "SynthMan",
    image: "https://picsum.photos/seed/music7/200/200",
    duration: "4:05",
  },
  {
    id: 8,
    title: "Crystal Sky",
    artist: "Opal",
    image: "https://picsum.photos/seed/music8/200/200",
    duration: "3:28",
  },
  {
    id: 9,
    title: "Vibes",
    artist: "Lo-Fi Star",
    image: "https://picsum.photos/seed/music9/200/200",
    duration: "2:50",
  },
  {
    id: 10,
    title: "Back to You",
    artist: "Echo",
    image: "https://picsum.photos/seed/music10/200/200",
    duration: "3:42",
  },
  {
    id: 11,
    title: "Sunrise Chill",
    artist: "Zenith",
    image: "https://picsum.photos/seed/music11/200/200",
    duration: "3:20",
  },
  {
    id: 12,
    title: "Galaxy Flow",
    artist: "SpaceBoi",
    image: "https://picsum.photos/seed/music12/200/200",
    duration: "3:55",
  },
  {
    id: 13,
    title: "Golden Hour",
    artist: "Solara",
    image: "https://picsum.photos/seed/music13/200/200",
    duration: "4:10",
  },
  {
    id: 14,
    title: "Rainy Beats",
    artist: "MellowMix",
    image: "https://picsum.photos/seed/music14/200/200",
    duration: "3:05",
  },
  {
    id: 15,
    title: "Sunset Drive",
    artist: "Cruise",
    image: "https://picsum.photos/seed/music15/200/200",
    duration: "4:20",
  },
  {
    id: 16,
    title: "Lost Signal",
    artist: "Radioheadz",
    image: "https://picsum.photos/seed/music16/200/200",
    duration: "3:30",
  },
  {
    id: 17,
    title: "Fire Within",
    artist: "Ignite",
    image: "https://picsum.photos/seed/music17/200/200",
    duration: "3:40",
  },
  {
    id: 18,
    title: "Dark Matter",
    artist: "Quantum",
    image: "https://picsum.photos/seed/music18/200/200",
    duration: "4:00",
  },
  {
    id: 19,
    title: "Cloud Walk",
    artist: "Floaty",
    image: "https://picsum.photos/seed/music19/200/200",
    duration: "2:59",
  },
  {
    id: 20,
    title: "Pulse Drive",
    artist: "BeatLab",
    image: "https://picsum.photos/seed/music20/200/200",
    duration: "3:33",
  },
];

const musicPlayerList = document.querySelector("#music-player-list ");

function displyMusicPlayerList() {
  musicPlayerList.innerHTML = "";

  musicPlayerItems.forEach((item) => {
    const musicCard = `
      <div class="col">
        <div class="card shadow-sm h-100">
          <img src="${item.image}" class="card-img-top" 
          alt="${item.title}" />
           <div class="position-absolute fs-3 p-3 text-white " style=" top:30%; left: 50%;
           transform: translate(-50%, -50%);
           
           border-radius: 50%; border: 2px solid white;">
            <i class="bi bi-music-note"></i>
          </div>
           <div class="position-absolute top-50 start-50 translate-middle text-white fs-4 d-flex gap-3">
            <i class="bi bi-skip-backward-fill"></i>
            <i class="bi bi-play-fill"></i>
            <i class="bi bi-skip-forward-fill"></i>
          </div>
          <div class="card-body text-center">
            <h5 class="card-title mb-1">${item.title}</h5>
            <p class="card-text text-muted mb-2">by ${item.artist}</p>
            <div class="d-flex justify-content-between align-items-center px-3">
              <small class="text-muted"><i class="bi bi-clock"></i> ${item.duration}</small>
              <button class="btn btn-sm btn-primary">
                <i class="bi bi-play-fill"></i> Play
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    musicPlayerList.innerHTML += musicCard;
  });
}

displyMusicPlayerList();

