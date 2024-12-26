var body = document.querySelector('body')
const users = [
  {
    profilePhoto: "https://images.unsplash.com/photo-1688888745596-da40843a8d45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fitness enthusiast inspiring a healthy lifestyle daily.",
    fullName: "Rohan FitLife",
    mediaUploadedCount: 1500,
    followersCount: 12000,
    followingCount: 180,
    coverPhoto: "https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1529092419721-e78fb7bddfb2?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Bookworm sharing reviews and literary adventures online.",
    fullName: "Bookish Priya",
    mediaUploadedCount: 400,
    followersCount: 3000,
    followingCount: 150,
    coverPhoto: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    profilePhoto: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Photographer capturing moments that tell captivating stories.",
    fullName: "LensCraft Kabir",
    mediaUploadedCount: 2000,
    followersCount: 15000,
    followingCount: 400,
    coverPhoto: "https://images.unsplash.com/photo-1719937206094-8de79c912f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    profilePhoto: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Tech geek and gadget reviewer with honest opinions.",
    fullName: "Gizmo Guru Ishita",
    mediaUploadedCount: 850,
    followersCount: 8700,
    followingCount: 250,
    coverPhoto: "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1660680299120-c7c132df1b1f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Passionate traveler and food lover sharing unique experiences.",
    fullName: "Explorer Aarav",
    mediaUploadedCount: 1200,
    followersCount: 4500,
    followingCount: 320,
    coverPhoto: "https://images.unsplash.com/photo-1729505622656-6da75375c3a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1647684379896-b342fa47bc40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Artist showcasing creativity through vibrant artworks and sketches.",
    fullName: "Creative Ananya",
    mediaUploadedCount: 600,
    followersCount: 6000,
    followingCount: 300,
    coverPhoto: "https://images.unsplash.com/photo-1734077457229-8017ee15c7c7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

// Function to convert numbers into "k" format
function convertToK(count) {
  return (count >= 1000) ? (count / 1000).toFixed(1) + 'k' : count;
}

var sum = '';
users.forEach(function(elem){
  sum = sum + `
  <div class="card">
      <img src=${elem.coverPhoto} alt="">
      <div class="profile">
          <img src= ${elem.profilePhoto} alt="">
          <div class="text">
              <h2>${elem.fullName}</h2>
              <h6>${elem.description}</h6>
          </div>
      </div>
      <div class="social">
          <div class="media">
              <h2>${convertToK(elem.mediaUploadedCount)}</h2>
              <h4>Media</h4>
          </div>
          <div class="media">
              <h2>${convertToK(elem.followersCount)}</h2>
              <h4>Followers</h4>
          </div>
          <div class="media">
              <h2>${convertToK(elem.followingCount)}</h2>
              <h4>Following</h4>
          </div>
      </div>
  </div>
  `;
});

body.innerHTML = sum;
