
// ==========================================
// Custom Playlists Persistence
// ==========================================
function getStoredCustomPlaylists() {
  try {
    const raw = localStorage.getItem('beatflow_custom_playlists');
    return raw ? JSON.parse(raw) : { "My Favorites": [1, 26, 30, 31] };
  } catch (e) {
    return { "My Favorites": [1, 26, 30, 31] };
  }
}

function saveStoredCustomPlaylists(playlists) {
  try {
    localStorage.setItem('beatflow_custom_playlists', JSON.stringify(playlists));
  } catch (e) {
    console.error(e);
  }
}

function renderSidebarCustomPlaylists() {
  const container = document.getElementById('sidebar-playlists-container');
  if (!container) return;

  container.querySelectorAll('.playlist-custom-item').forEach(el => el.remove());

  const customPlaylists = getStoredCustomPlaylists();
  Object.keys(customPlaylists).forEach((plName, index) => {
    const songCount = (customPlaylists[plName] || []).length;
    const item = document.createElement('a');
    item.href = `#playlist?id=${encodeURIComponent(plName)}`;
    item.className = 'playlist-sidebar-item playlist-custom-item';
    const hue = (index * 67 + 140) % 360;
    item.innerHTML = `
      <div class="sidebar-item-thumb" style="background-color: hsl(${hue}, 50%, 30%); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.75rem;">♪</div>
      <div class="sidebar-item-meta">
        <span class="sidebar-item-title">${plName}</span>
        <span class="sidebar-item-subtitle">Playlist • ${songCount} ${songCount === 1 ? 'song' : 'songs'}</span>
      </div>
    `;
    container.appendChild(item);
  });
}

// ==========================================
// Spotify 20 Dummy Songs Database
// ==========================================

const SONGS_DATA = [
  {
    "id": 1,
    "title": "Blinding Lights",
    "artist": "The Weeknd",
    "album": "After Hours",
    "duration": "3:20",
    "category": "Pop",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a6/6e/bf/a66ebf79-5008-8948-b352-a790fc87446b/19UM1IM04638.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/17/b4/8f/17b48f9a-0b93-6bb8-fe1d-3a16623c2cfb/mzaf_9560252727299052414.plus.aac.p.m4a",
    "tags": [
      "pop",
      "synthpop",
      "80s",
      "dance",
      "night",
      "charts",
      "retro"
    ]
  },
  {
    "id": 2,
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "album": "÷ (Deluxe)",
    "duration": "3:53",
    "category": "Pop",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/44/c7/4f/44c74f0d-72dc-6143-d4d0-ba14d661ca0d/mzaf_9566898362556366703.plus.aac.p.m4a",
    "tags": [
      "pop",
      "acoustic",
      "dance",
      "upbeat",
      "summer",
      "charts"
    ]
  },
  {
    "id": 3,
    "title": "Bad Guy",
    "artist": "Billie Eilish",
    "album": "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
    "duration": "3:14",
    "category": "Pop",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/37/d1/1a37d1b1-8508-54f2-f541-bf4e437dda76/19UMGIM05028.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c3/87/1f/c3871f7e-3260-d615-1c66-5fdca2c3a48f/mzaf_10721331211699880949.plus.aac.p.m4a",
    "tags": [
      "pop",
      "dark pop",
      "bass",
      "alternative",
      "catchy",
      "billie"
    ]
  },
  {
    "id": 4,
    "title": "Blank Space",
    "artist": "Taylor Swift",
    "album": "1989",
    "duration": "3:51",
    "category": "Pop",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a7/98/d8/a798d867-344d-2bf2-fbfe-d2d1412dcef8/14UMDIM03793.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/79/55/b1/7955b10c-6cb6-462a-861c-8e5cbcacfb76/mzaf_3395570742482345989.plus.aac.p.m4a",
    "tags": [
      "pop",
      "1989",
      "taylor swift",
      "charts",
      "radio",
      "love"
    ]
  },
  {
    "id": 5,
    "title": "Believer",
    "artist": "Imagine Dragons",
    "album": "Evolve",
    "duration": "3:24",
    "category": "Rock",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7b/06/ef/7b06ef0d-9860-2ff6-69be-b847fa274883/17UMGIM16486.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f0/cb/09/f0cb0958-3721-a53c-a968-081498b8be88/mzaf_4726593581729091931.plus.aac.p.m4a",
    "tags": [
      "rock",
      "hype",
      "workout",
      "gym",
      "energy",
      "drums",
      "anthems"
    ]
  },
  {
    "id": 6,
    "title": "In the End",
    "artist": "Linkin Park",
    "album": "Hybrid Theory",
    "duration": "3:36",
    "category": "Rock",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e5/a0/0b/e5a00b8e-e3cf-05be-a83d-3d445af0f124/603497850845.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f7/a9/e4/f7a9e4d6-848c-3e3e-48f8-b3d45efb31bd/mzaf_15077271424759082855.plus.aac.p.m4a",
    "tags": [
      "rock",
      "nu-metal",
      "linkin park",
      "nostalgia",
      "2000s",
      "hype"
    ]
  },
  {
    "id": 7,
    "title": "Another One Bites the Dust",
    "artist": "Queen",
    "album": "The Game",
    "duration": "3:35",
    "category": "Rock",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/10/72/5c/10725c86-13d8-306d-74d3-e793e2b20fb9/00602527265889.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/58/c2/f7/58c2f7b8-6a58-f9b0-9b48-18e47bf0dfaf/mzaf_5813958933391807759.plus.aac.p.m4a",
    "tags": [
      "rock",
      "classic rock",
      "queen",
      "bass",
      "legendary",
      "retro"
    ]
  },
  {
    "id": 8,
    "title": "Lose Yourself",
    "artist": "Eminem",
    "album": "8 Mile",
    "duration": "5:26",
    "category": "Hip-Hop",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/05/cf/8d/05cf8df0-1090-ffb8-ba90-aa7312108502/00602537169474.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/df/db/5b/dfdb5bc1-0bb3-c603-516d-3575607b32c6/mzaf_2080838118047915668.plus.aac.p.m4a",
    "tags": [
      "hip-hop",
      "rap",
      "eminem",
      "hype",
      "workout",
      "gym",
      "8 mile"
    ]
  },
  {
    "id": 9,
    "title": "Sicko Mode",
    "artist": "Travis Scott",
    "album": "ASTROWORLD",
    "duration": "5:12",
    "category": "Hip-Hop",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f5/ec/3b/f5ec3bc0-b5bf-73c3-6b71-11ef88cbfe02/886447285640.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/31/b0/02/31b002c9-6330-9b7e-f63b-63a233486127/mzaf_4723048995392038753.plus.aac.p.m4a",
    "tags": [
      "hip-hop",
      "travis scott",
      "astroworld",
      "trap",
      "bass",
      "party"
    ]
  },
  {
    "id": 10,
    "title": "God's Plan",
    "artist": "Drake",
    "album": "Scary Hours",
    "duration": "3:18",
    "category": "Hip-Hop",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/bd/f6/05/bdf605e5-7a6c-48b4-e406-03c004d4400e/18UMGIM08253.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/80/7e/17/807e174b-c744-cbdf-f44a-ad1b4f49495b/mzaf_8497672227181057404.plus.aac.p.m4a",
    "tags": [
      "hip-hop",
      "drake",
      "rap",
      "chill",
      "charts",
      "vibes"
    ]
  },
  {
    "id": 11,
    "title": "Für Elise",
    "artist": "Ludwig van Beethoven",
    "album": "Piano Masterpieces",
    "duration": "2:50",
    "category": "Classical",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/36/eb/95/36eb95bc-a3f2-a27b-a316-f6d3910c66db/00602537822454.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/c6/29/5a/c6295a02-53b5-31b6-735c-c764e5904d60/mzaf_2615456455246736417.plus.aac.p.m4a",
    "tags": [
      "classical",
      "piano",
      "beethoven",
      "study",
      "focus",
      "instrumental"
    ]
  },
  {
    "id": 12,
    "title": "Spring (Four Seasons)",
    "artist": "Antonio Vivaldi",
    "album": "The Four Seasons",
    "duration": "3:30",
    "category": "Classical",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/c0/83/87/c0838706-e7e6-8c0c-cf23-5e76a6d68bbf/00602527263564.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/f4/19/22/f41922c2-901d-5561-12c6-d922a7f805a5/mzaf_15783262615017165181.plus.aac.p.m4a",
    "tags": [
      "classical",
      "vivaldi",
      "violin",
      "orchestra",
      "focus",
      "calm"
    ]
  },
  {
    "id": 13,
    "title": "Arabic Kuthu (From \"Beast\")",
    "artist": "Anirudh Ravichander & Jonita Gandhi",
    "album": "Arabic Kuthu (From \"Beast\") - Single",
    "duration": "4:39",
    "category": "Tamil",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e9/19/b9/e919b921-d5a8-9e9a-8508-3551da375aee/196626458629.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/0b/83/a7/0b83a7a8-4911-221c-4fa1-ecd4ab7e7750/mzaf_4636221010938715732.plus.aac.p.m4a",
    "tags": [
      "tamil",
      "anirudh",
      "beast",
      "thalapathy",
      "dance",
      "arabic kuthu",
      "party"
    ]
  },
  {
    "id": 14,
    "title": "Naattu Koothu (From \"RRR\")",
    "artist": "Rahul Sipligunj, Yazin Nizar & Maragathamani",
    "album": "Naattu Koothu (From \"RRR\") - Single",
    "duration": "3:34",
    "category": "Tamil",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/91/ac/e9/91ace9d7-879c-7bf7-6333-c3d5d1049f3f/8903431853622_cover.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/ce/2e/07/ce2e076d-2cd5-a14c-78df-ce90efc441b7/mzaf_13021833517357944658.plus.aac.p.m4a",
    "tags": [
      "tamil",
      "rrr",
      "naatu naatu",
      "dance",
      "energy",
      "fast",
      "oscar"
    ]
  },
  {
    "id": 15,
    "title": "Kadhaippoma (From \"Oh My Kadavule\")",
    "artist": "Leon James & Sid Sriram",
    "album": "Kadhaippoma (From \"Oh My Kadavule\") - Single",
    "duration": "4:42",
    "category": "Tamil",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/61/98/08/619808d3-4505-a210-e807-3d7b5d60d7ae/886448214496.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/75/b5/69/75b56906-407f-1664-5711-caf51a8f8bb3/mzaf_1449302892680331174.plus.aac.p.m4a",
    "tags": [
      "tamil",
      "sid sriram",
      "love",
      "melody",
      "romantic",
      "chill"
    ]
  },
  {
    "id": 16,
    "title": "Kesariya",
    "artist": "Arijit Singh",
    "album": "Brahmastra",
    "duration": "4:28",
    "category": "Hindi",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/13/ca/9f13ca3b-e533-03e0-f19a-f0aaa774581d/196589311191.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/38/4c/5c/384c5c8f-3ff8-e457-b2f7-3158ce108649/mzaf_12389299033886433185.plus.aac.p.m4a",
    "tags": [
      "hindi",
      "bollywood",
      "arijit singh",
      "kesariya",
      "romantic",
      "love"
    ]
  },
  {
    "id": 17,
    "title": "Apna Bana Le",
    "artist": "Arijit Singh",
    "album": "Bhediya",
    "duration": "4:24",
    "category": "Hindi",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/2e/0b/c0/2e0bc070-112f-a827-6ad8-6bc64f7caaff/840214460180.png/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/09/51/0d/09510dea-6579-5cd0-b13b-696abc2c520b/mzaf_10718921821360997069.plus.aac.p.m4a",
    "tags": [
      "hindi",
      "bollywood",
      "arijit singh",
      "bhediya",
      "romantic",
      "acoustic"
    ]
  },
  {
    "id": 18,
    "title": "Weightless",
    "artist": "Marconi Union",
    "album": "Ambient Transmissions Vol. 2",
    "duration": "8:00",
    "category": "Focus",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/3a/d6/c33ad6a3-ec91-62e4-0912-d4a873d4fed0/cover.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/95/84/05/95840512-b41d-68e4-e7ff-c8987c9bcceb/mzaf_8934420937865408216.plus.aac.p.m4a",
    "tags": [
      "focus",
      "ambient",
      "meditation",
      "sleep",
      "calm",
      "relax"
    ]
  },
  {
    "id": 19,
    "title": "Clair de Lune",
    "artist": "Claude Debussy",
    "album": "Debussy Suite",
    "duration": "5:05",
    "category": "Focus",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music/5f/f2/dc/mzi.cjpwuohz.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c3/68/35/c36835b6-9cb3-a20a-088b-6c7d39e39636/mzaf_484141242926915999.plus.aac.p.m4a",
    "tags": [
      "focus",
      "classical",
      "debussy",
      "piano",
      "night",
      "relax"
    ]
  },
  {
    "id": 20,
    "title": "Till I Collapse",
    "artist": "Eminem",
    "album": "The Eminem Show",
    "duration": "4:57",
    "category": "Workout",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/dd/5c/e6/dd5ce621-f7d2-f767-7a08-e7a7eaa7870b/00602537526994.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b4/6c/d2/b46cd2fc-0439-2248-6964-179c076476b5/mzaf_8281165515046215092.plus.aac.p.m4a",
    "tags": [
      "workout",
      "eminem",
      "gym",
      "motivation",
      "rap",
      "energy"
    ]
  },
  {
    "id": 21,
    "title": "Hukum",
    "artist": "Anirudh Ravichander",
    "album": "Jailer (Original Motion Picture Soundtrack)",
    "duration": "3:27",
    "category": "Tamil",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/31/7c/09/317c09c3-f739-e348-884e-56f8aa012a04/197189667435.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/84/83/db/8483db5e-190a-7b50-0c84-f499cf0c02b3/mzaf_16480158455239910875.plus.aac.p.m4a",
    "tags": [
      "tamil",
      "anirudh",
      "jailer",
      "rajinikanth",
      "hukum",
      "mass",
      "bass"
    ]
  },
  {
    "id": 22,
    "title": "Vaseegara",
    "artist": "Bombay Jayashri",
    "album": "Minnalae (Original Motion Picture Soundtrack)",
    "duration": "4:59",
    "category": "Tamil",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ea/77/05/ea7705e6-9cbc-2203-286a-0e2d19607500/196006555917.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fd/17/f8/fd17f801-3c7a-26ca-59bb-4fdaa7037cbe/mzaf_11677546305452747754.plus.aac.p.m4a",
    "tags": [
      "tamil",
      "harris jayaraj",
      "vaseegara",
      "classic",
      "melody",
      "romantic"
    ]
  },
  {
    "id": 23,
    "title": "Kannalane",
    "artist": "K.S. Chithra & A.R. Rahman",
    "album": "Bombay (Original Motion Picture Soundtrack)",
    "duration": "5:55",
    "category": "Tamil",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6f/20/05/6f20058c-035e-579b-c811-b4551b94789b/197338031865.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/7c/03/fb/7c03fb15-2a62-42a9-5d6c-cd6196f01a31/mzaf_18268845108248593640.plus.aac.p.m4a",
    "tags": [
      "tamil",
      "ar rahman",
      "bombay",
      "kannalane",
      "classic",
      "melody"
    ]
  },
  {
    "id": 24,
    "title": "Rowdy Baby",
    "artist": "Dhanush & Dhee",
    "album": "Maari 2 (Original Motion Picture Soundtrack)",
    "duration": "4:41",
    "category": "Tamil",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/09/0b/4f/090b4ffb-f4eb-f975-ae79-ce5446eeabc8/718598836276.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/17/90/911790e5-27e3-6021-da30-bddf59576e3d/mzaf_3831305118076812899.plus.aac.p.m4a",
    "tags": [
      "tamil",
      "dhanush",
      "dhee",
      "rowdy baby",
      "dance",
      "viral",
      "party"
    ]
  },
  {
    "id": 25,
    "title": "Kutti Story",
    "artist": "Vijay & Anirudh Ravichander",
    "album": "Master (Original Motion Picture Soundtrack)",
    "duration": "5:00",
    "category": "Tamil",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a3/f2/dc/a3f2dc29-fc54-07bb-8f9c-2a3936d21a5d/886448363347.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ae/12/48/ae12482e-d62a-9013-bdbc-0f0f8f638357/mzaf_5940478263765495268.plus.aac.p.m4a",
    "tags": [
      "tamil",
      "vijay",
      "anirudh",
      "master",
      "kutti story",
      "vibes",
      "chill"
    ]
  },
  {
    "id": 26,
    "title": "Starboy (feat. Daft Punk)",
    "artist": "The Weeknd",
    "album": "Starboy",
    "duration": "3:50",
    "category": "Pop",
    "tags": [
      "pop",
      "r&b",
      "daft punk",
      "synth",
      "party",
      "night",
      "hype",
      "weeknd"
    ],
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/71/d6/1171d6ad-3c96-e027-2af6-58028426588c/mzaf_15137631797407745471.plus.aac.p.m4a"
  },
  {
    "id": 27,
    "title": "Levitating",
    "artist": "Dua Lipa",
    "album": "Future Nostalgia",
    "duration": "3:23",
    "category": "Pop",
    "tags": [
      "pop",
      "dance",
      "disco",
      "upbeat",
      "workout",
      "party",
      "summer"
    ],
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/59/dc/4d/59dc4dda-93ff-8f1c-c536-f005f6ea6af5/mzaf_3066686759813252385.plus.aac.p.m4a"
  },
  {
    "id": 28,
    "title": "Sunflower",
    "artist": "Post Malone & Swae Lee",
    "album": "Spider-Man: Into the Spider-Verse",
    "duration": "2:38",
    "category": "Hip-Hop",
    "tags": [
      "spiderman",
      "chill",
      "hip-hop",
      "vibes",
      "summer",
      "melodic",
      "lofi"
    ],
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/98/f0/d6/98f0d67e-f8bf-762d-cac7-1c6b3b6b35dd/mzaf_4543283896248560946.plus.aac.p.m4a"
  },
  {
    "id": 29,
    "title": "The Humma Song",
    "artist": "A.R. Rahman & Badshah",
    "album": "OK Jaanu",
    "duration": "2:59",
    "category": "Hindi",
    "tags": [
      "bollywood",
      "hindi",
      "ar rahman",
      "dance",
      "remix",
      "party",
      "bass"
    ],
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b0/f7/81/b0f78164-e057-e185-da9d-ea90f7251345/886446309835.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/70/0b/40/700b40b3-5738-fd92-d23b-de20559f0f13/mzaf_15442463782285770616.plus.aac.p.m4a"
  },
  {
    "id": 30,
    "title": "Vaathi Coming",
    "artist": "Anirudh Ravichander",
    "album": "Master (Original Motion Picture Soundtrack)",
    "duration": "3:48",
    "category": "Tamil",
    "tags": [
      "tamil",
      "master",
      "thalapathy",
      "vijay",
      "anirudh",
      "mass",
      "dance",
      "energy"
    ],
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a3/f2/dc/a3f2dc29-fc54-07bb-8f9c-2a3936d21a5d/886448363347.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d7/72/96/d77296ea-677d-45f9-4267-996bbc6801c8/mzaf_2392699048273414940.plus.aac.p.m4a"
  },
  {
    "id": 31,
    "title": "Enna Sona",
    "artist": "A.R. Rahman & Arijit Singh",
    "album": "OK Jaanu",
    "duration": "3:33",
    "category": "Hindi",
    "tags": [
      "hindi",
      "romantic",
      "arijit singh",
      "ar rahman",
      "chill",
      "love",
      "acoustic"
    ],
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b0/f7/81/b0f78164-e057-e185-da9d-ea90f7251345/886446309835.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5b/b6/d7/5bb6d78f-1bba-c0a9-0731-d3286ed06914/mzaf_1092273590896407309.plus.aac.p.m4a"
  },
  {
    "id": 32,
    "title": "As It Was",
    "artist": "Harry Styles",
    "album": "Harry's House",
    "duration": "2:47",
    "category": "Pop",
    "tags": [
      "pop",
      "indie",
      "charts",
      "synth",
      "nostalgia",
      "happy",
      "chill"
    ],
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/67/10/16/67101606-3869-ca44-6c03-e13d6322cb51/mzaf_1135399237022217274.plus.aac.p.m4a"
  },
  {
    "id": 33,
    "title": "INDUSTRY BABY",
    "artist": "Lil Nas X & Jack Harlow",
    "album": "INDUSTRY BABY - Single",
    "duration": "3:32",
    "category": "Hip-Hop",
    "tags": [
      "hip-hop",
      "rap",
      "horns",
      "gym",
      "workout",
      "hype",
      "energy"
    ],
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f7/16/67/f7166746-6299-5e54-8c7c-9535e941a53e/886449403929.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/51/97/7a/51977a71-448a-202a-5e60-756d5dcb6eeb/mzaf_194387576127428058.plus.aac.p.m4a"
  },
  {
    "id": 34,
    "title": "Badass",
    "artist": "Anirudh Ravichander",
    "album": "Leo (Original Motion Picture Soundtrack)",
    "duration": "3:49",
    "category": "Tamil",
    "tags": [
      "tamil",
      "leo",
      "vijay",
      "anirudh",
      "bass",
      "rock",
      "mass",
      "workout",
      "hype"
    ],
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/13/a8/70/13a87001-28ba-1bc7-0ca6-52cf10dd6f52/196871556415.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6c/a2/17/6ca2178b-46ab-9d33-f84c-4c59bf53c73d/mzaf_16544885937595911593.plus.aac.p.m4a"
  },
  {
    "id": 35,
    "title": "Illuminati (From \"Aavesham\")",
    "artist": "Sushin Shyam & Dabzee",
    "album": "Illuminati - Single",
    "duration": "3:32",
    "category": "Indian",
    "tags": [
      "aavesham",
      "fahadh",
      "malayalam",
      "viral",
      "reels",
      "trending",
      "party",
      "rap"
    ],
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/43/a0/da/43a0daa2-504d-6b7c-c63a-0c8864608a6d/mzaf_7754996064757215177.plus.aac.p.m4a"
  },
  {
    "id": 36,
    "title": "Tum Hi Ho",
    "artist": "Arijit Singh",
    "album": "Aashiqui 2",
    "duration": "4:21",
    "category": "Hindi",
    "tags": [
      "hindi",
      "romantic",
      "arijit singh",
      "aashiqui 2",
      "love",
      "sad",
      "soul",
      "bollywood"
    ],
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bb/23/ee/bb23eeed-0c35-4f1d-2b11-485622777ae4/8902894353007_cover.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3a/8c/9b/3a8c9b0b-2def-750a-f615-1555bf941edf/mzaf_17229496441442805917.plus.aac.p.m4a"
  },
  {
    "id": 37,
    "title": "Espresso",
    "artist": "Sabrina Carpenter",
    "album": "Short n' Sweet",
    "duration": "2:55",
    "category": "Pop",
    "tags": [
      "pop",
      "viral",
      "summer",
      "dance",
      "trending",
      "catchy",
      "charts"
    ],
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a1/1c/ca/a11ccab6-7d4c-e041-d028-998bcebeb709/24UMGIM61704.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/99/da/ff/99daffce-cdde-59c6-5ae0-7f922ce411a8/mzaf_5621292401829922816.plus.aac.p.m4a"
  },
  {
    "id": 38,
    "title": "Mockingbird",
    "artist": "Eminem",
    "album": "Curtain Call: The Hits",
    "duration": "4:10",
    "category": "Hip-Hop",
    "tags": [
      "hip-hop",
      "rap",
      "eminem",
      "emotional",
      "nostalgia",
      "classic",
      "chill"
    ],
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/27/79/d5/2779d529-ff10-c15d-1c50-08cd46dd1237/06UMGIM17625.rgb.jpg/600x600bb.jpg",
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b3/c5/39/b3c5394b-cf7a-7114-d938-943c93374fce/mzaf_8824293284590733612.plus.aac.p.m4a"
  }
];

// ==========================================
// Caching & Dynamic Metadata Fetching (iTunes API)
// ==========================================
const metadataCache = new Map();

async function fetchSongMetadata(song) {
  if (!song) return null;
  
  if (song.cover && song.audio) {
    const meta = { cover: song.cover, audio: song.audio };
    metadataCache.set(song.id, meta);
    return meta;
  }
  
  if (metadataCache.has(song.id)) {
    return metadataCache.get(song.id);
  }

  // Load from localStorage cache to improve performance and work offline
  const cached = localStorage.getItem(`song_metadata_${song.id}`);
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (parsed.cover && parsed.audio) { // Only load if both fields are valid and populated
        metadataCache.set(song.id, parsed);
        song.cover = parsed.cover;
        song.audio = parsed.audio;
        return parsed;
      }
    } catch (e) {
      console.error(e);
    }
  }

  try {
    const query = `${song.artist} ${song.title}`;
    const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=1`);
    if (!response.ok) throw new Error("API network response failed");
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const track = data.results[0];
      // Convert 100x100 to 600x600 for premium visual high-res covers
      const highResCover = track.artworkUrl100 ? track.artworkUrl100.replace('100x100bb.jpg', '600x600bb.jpg') : '';
      const meta = {
        cover: highResCover || '',
        audio: track.previewUrl || ''
      };
      metadataCache.set(song.id, meta);
      localStorage.setItem(`song_metadata_${song.id}`, JSON.stringify(meta));
      song.cover = meta.cover;
      song.audio = meta.audio;
      return meta;
    }
  } catch (e) {
    console.warn(`Failed to fetch live metadata for "${song.title}":`, e);
  }
  return null;
}

async function loadCoverImage(song, imgElement) {
  if (!song || !imgElement) return;
  
  // 1. Immediately set custom SVG vector gradient (Zero latency, works offline)
  const fallbackUrl = getMusicSVG(song.category, song.id);
  imgElement.src = fallbackUrl;
  
  // 2. Fetch official artwork from Apple iTunes API dynamically
  const meta = await fetchSongMetadata(song);
  if (meta && meta.cover) {
    // 3. Smooth fade-in transition (bind onload first to avoid caching race condition)
    imgElement.onload = () => {
      imgElement.style.opacity = '1';
    };
    imgElement.style.opacity = '0.4';
    imgElement.src = meta.cover;
    
    // Safety check: if browser loaded it immediately from cache, set opacity to 1
    if (imgElement.complete) {
      imgElement.style.opacity = '1';
    }
  }
}

// ==========================================
// Global SVG Templates
// ==========================================
const SOLID_HEART_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2a5.5 5.5 0 0 0-5.5 5.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
const OUTLINE_HEART_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2a5.5 5.5 0 0 0-5.5 5.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;

// ==========================================
// Dynamic SVG Album Cover Generator
// ==========================================
function getMusicSVG(category, index) {
  const song = SONGS_DATA.find(s => s.id === parseInt(index));
  if (song && song.cover) return song.cover;
  
  const title = song ? song.title : (category || "Song");
  const artist = song ? song.artist : "BeatFlow";
  
  // Curated premium gradient color pairs
  const colors = [
    ['#ff0844', '#ffb199'], // Warm Red
    ['#f12711', '#f5af19'], // Sunset Orange
    ['#b100ff', '#00e3fd'], // Purple Neon
    ['#11998e', '#38ef7d'], // Emerald
    ['#3a7bd5', '#3a6073'], // Steel Blue
    ['#f857a6', '#ff5858'], // Pink Rose
    ['#1a2a6c', '#b21f1f'], // Dark Cherry
    ['#2193b0', '#6dd5ed'], // Ocean Breeze
    ['#fc00ff', '#00dbde'], // Neon Cyberpunk
    ['#e94e77', '#f4ea56']  // Candy Pop
  ];
  const idx = (parseInt(index) || 0) % colors.length;
  const gradientId = `grad-${index}-${idx}`;
  const [c1, c2] = colors[idx];
  
  // Sleek minimalist overlay vector graphics
  const shapes = [
    `<circle cx="150" cy="150" r="85" fill="none" stroke="white" stroke-width="2" opacity="0.2"/>
     <circle cx="150" cy="150" r="55" fill="none" stroke="white" stroke-width="4" opacity="0.1"/>
     <line x1="50" y1="150" x2="250" y2="150" stroke="white" stroke-dasharray="8 8" opacity="0.2"/>`,
    
    `<rect x="70" y="70" width="160" height="160" rx="16" fill="none" stroke="white" stroke-width="3" opacity="0.15" transform="rotate(45 150 150)"/>
     <circle cx="150" cy="150" r="45" fill="white" opacity="0.1"/>`,
     
    `<polygon points="150,55 245,215 55,215" fill="none" stroke="white" stroke-width="3" opacity="0.15"/>
     <circle cx="160" cy="160" r="35" fill="white" opacity="0.1"/>`,
     
    `<path d="M50 150 C 100 80, 200 220, 250 150" fill="none" stroke="white" stroke-width="4" opacity="0.2"/>
     <circle cx="150" cy="150" r="25" fill="white" opacity="0.15"/>`,
     
    `<circle cx="150" cy="150" r="75" fill="none" stroke="white" stroke-width="6" stroke-dasharray="15 8" opacity="0.2"/>
     <circle cx="150" cy="150" r="35" fill="white" opacity="0.1"/>`
  ];
  
  const shapeIdx = (parseInt(index) || 0) % shapes.length;
  const currentShape = shapes[shapeIdx];
  const firstLetter = (title ? title[0] : 'S').toUpperCase();
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300">
    <defs>
      <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${c1}" />
        <stop offset="100%" stop-color="${c2}" />
      </linearGradient>
    </defs>
    <rect width="300" height="300" fill="url(#${gradientId})" />
    ${currentShape}
    <text x="150" y="130" font-family="'Outfit', 'Inter', sans-serif" font-size="80" font-weight="900" fill="white" text-anchor="middle" dominant-baseline="middle" opacity="0.95">${firstLetter}</text>
    <text x="150" y="200" font-family="'Outfit', 'Inter', sans-serif" font-size="18" font-weight="700" fill="white" text-anchor="middle" opacity="0.9">${title}</text>
    <text x="150" y="225" font-family="'Outfit', 'Inter', sans-serif" font-size="13" font-weight="500" fill="white" text-anchor="middle" opacity="0.7">${artist}</text>
    <text x="150" y="260" font-family="'Outfit', 'Inter', sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle" letter-spacing="4" opacity="0.5">${category.toUpperCase()}</text>
  </svg>`;
  
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// ==========================================
// Demo Lyrics Dictionary
// ==========================================
function getSongLyrics(song) {
  return [
    `[Intro - Instrumental Beats]`,
    `Yeah, you are listening to: ${song.title}`,
    `Brought to you by: ${song.artist}`,
    `From the classic record: ${song.album}`,
    `Feel every beat, let it flow`,
    `Tuning into the rhythm tonight`,
    `Neon skies matching our vibes`,
    `Cruising along the digital highway`,
    `Leave your worries, let them slide`,
    `[Chorus]`,
    `Feel the beat flow in your soul`,
    `Lose all your troubles, take control`,
    `Cruising, riding, keeping it clean`,
    `The finest tunes you've ever seen`,
    `[Guitar Solo - Mock Synth Waves]`,
    `Spotify keeping the tempo high`,
    `Stars align up in the sky`,
    `We feel the pulse, we hear the sound`,
    `Lifting our spirits off the ground`,
    `[Outro - Slow Fade Out]`
  ];
}

// ==========================================
// Global Player State Management & Persistance
// ==========================================
// HTML5 Real Audio Player Integration
const audioPlayer = new Audio();

// Web Audio Fallback Synthesizer Engine (Allows playing offline)
let audioCtx = null;
let synthInterval = null;
let synthTicker = null;
let isSynthRunning = false;
let synthTime = 0;
let synthDuration = 230;

function playTone(freq, type, volume, duration) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  
  const currentVol = (audioPlayer.muted) ? 0 : (audioPlayer.volume || 0.7);
  gainNode.gain.setValueAtTime(volume * currentVol, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
  
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

function playNoise(volume, duration) {
  if (!audioCtx) return;
  const bufferSize = audioCtx.sampleRate * duration;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  
  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;
  
  const gainNode = audioCtx.createGain();
  const currentVol = (audioPlayer.muted) ? 0 : (audioPlayer.volume || 0.7);
  gainNode.gain.setValueAtTime(volume * currentVol, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);
  
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 7500;
  
  noise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  noise.start();
}

function startSynth(songId) {
  if (isSynthRunning) stopSynth();
  isSynthRunning = true;
  
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  
  const activeSong = activePlaylistQueue[currentSongIndex] || SONGS_DATA[currentSongIndex];
  if (activeSong) {
    const parts = activeSong.duration.split(':');
    synthDuration = parseInt(parts[0]) * 60 + parseInt(parts[1]);
  } else {
    synthDuration = 230;
  }
  
  synthTime = (currentProgressPercent / 100) * synthDuration;
  
  const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
  const rootFreq = notes[songId % notes.length];
  
  let step = 0;
  synthInterval = setInterval(() => {
    try {
      if (!isPlaying) return;
      if (step % 4 === 0) {
        playTone(rootFreq / 2, 'sawtooth', 0.12, 1.5);
        playTone(rootFreq * 1.5 / 2, 'sawtooth', 0.06, 1.5);
      }
      if (step % 2 !== 0 || Math.random() > 0.4) {
        const nextNote = notes[(songId + step * 3) % notes.length];
        playTone(nextNote, 'triangle', 0.08, 0.4);
      }
      if (step % 2 === 0) {
        playNoise(0.012, 0.05);
      } else {
        playNoise(0.024, 0.1);
      }
      step++;
    } catch (e) {
      console.error(e);
    }
  }, 250);
  
  synthTicker = setInterval(() => {
    if (!isPlaying) return;
    synthTime += 1;
    if (synthTime >= synthDuration) {
      synthTime = 0;
      currentProgressPercent = 0;
      stopSynth();
      triggerNextTrack();
    } else {
      const percent = (synthTime / synthDuration) * 100;
      currentProgressPercent = percent;
      
      const seekProgress = document.getElementById('player-seek-progress');
      if (seekProgress) seekProgress.style.width = `${percent}%`;
      
      const elapsedLabel = document.getElementById('player-time-elapsed');
      if (elapsedLabel) elapsedLabel.textContent = formatSecondsToTime(Math.floor(synthTime));
      
      const totalLabel = document.getElementById('player-time-total');
      if (totalLabel) totalLabel.textContent = formatSecondsToTime(synthDuration);
      
      if (document.getElementById('lyrics-panel').classList.contains('open')) {
        updateLyricsHighlight();
      }
    }
  }, 1000);
  
  isPlaying = true;
  updateActiveSongUI();
  updateVisualizerState();
}

function stopSynth() {
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
  if (synthTicker) {
    clearInterval(synthTicker);
    synthTicker = null;
  }
  isSynthRunning = false;
}

function getSongAudioUrl(songId) {
  const song = SONGS_DATA.find(s => s.id === parseInt(songId));
  if (song && song.audio) return song.audio;
  
  const trackNum = (parseInt(songId) % 8) + 1;
  return `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${trackNum}.mp3`;
}

let currentSongIndex = 0;
let isPlaying = false;
let seekInterval = null;
let currentProgressPercent = 0;
let activePlaylistQueue = [...SONGS_DATA]; 
let likedSongIds = [1, 5, 13]; 
let isShuffle = false;
let isRepeat = false;
let previousVolumePercent = 70;

// Load and save state to LocalStorage
function savePlayerState() {
  localStorage.setItem('spotify_current_song_idx', currentSongIndex);
  localStorage.setItem('spotify_liked_ids', JSON.stringify(likedSongIds));
  localStorage.setItem('spotify_queue', JSON.stringify(activePlaylistQueue));
  localStorage.setItem('spotify_progress_percent', currentProgressPercent);
  localStorage.setItem('spotify_shuffle', isShuffle);
  localStorage.setItem('spotify_repeat', isRepeat);
}

function loadPlayerState() {
  try {
    const savedIdx = localStorage.getItem('spotify_current_song_idx');
    const savedLiked = localStorage.getItem('spotify_liked_ids');
    const savedQueue = localStorage.getItem('spotify_queue');
    const savedProgress = localStorage.getItem('spotify_progress_percent');
    const savedShuffle = localStorage.getItem('spotify_shuffle');
    const savedRepeat = localStorage.getItem('spotify_repeat');
    
    if (savedLiked) {
      const parsedLiked = JSON.parse(savedLiked);
      if (Array.isArray(parsedLiked)) likedSongIds = parsedLiked;
    }
    if (savedQueue) {
      const parsedQueue = JSON.parse(savedQueue);
      if (Array.isArray(parsedQueue) && parsedQueue.length > 0) activePlaylistQueue = parsedQueue;
    }
    if (savedIdx !== null) {
      const parsedIdx = parseInt(savedIdx);
      if (!isNaN(parsedIdx) && parsedIdx >= 0 && parsedIdx < activePlaylistQueue.length) {
        currentSongIndex = parsedIdx;
      }
    }
    if (savedProgress !== null) {
      const parsedProgress = parseFloat(savedProgress);
      if (!isNaN(parsedProgress)) currentProgressPercent = parsedProgress;
    }
    if (savedShuffle !== null) isShuffle = (savedShuffle === 'true');
    if (savedRepeat !== null) isRepeat = (savedRepeat === 'true');
  } catch (e) {
    console.error("Failed to load player state from localStorage, falling back to default:", e);
    currentSongIndex = 0;
    likedSongIds = [1, 5, 13];
    activePlaylistQueue = [...SONGS_DATA];
  }
}

// ==========================================
// Initialization & Router Setup
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Clear any outdated cached queue or metadata from localStorage to prevent overwriting correct covers/audios
  localStorage.removeItem('spotify_queue');
  for (let key in localStorage) {
    if (key.startsWith('song_metadata_')) {
      localStorage.removeItem(key);
    }
  }

  loadPlayerState();
  
  setupSidebarCollapse();
  setupSettingsLink();
  setupSidePanels();
  setupGlobalPlayerControls();
  setupGlobalCardClicks();
  
  // Sticky header background transition on scroll
  const mainContent = document.querySelector('.app-content');
  const contentHeader = document.getElementById('content-header');
  if (mainContent && contentHeader) {
    mainContent.addEventListener('scroll', () => {
      if (mainContent.scrollTop > 30) {
        contentHeader.classList.add('scrolled');
      } else {
        contentHeader.classList.remove('scrolled');
      }
    });
  }
  
  // Back & Forward Header buttons
  const backBtn = document.getElementById('header-back-btn');
  const forwardBtn = document.getElementById('header-forward-btn');
  if (backBtn) backBtn.addEventListener('click', () => window.history.back());
  if (forwardBtn) forwardBtn.addEventListener('click', () => window.history.forward());

  // HTML5 Audio Event Listeners
  audioPlayer.addEventListener('timeupdate', () => {
    if (!audioPlayer.duration) return;
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    currentProgressPercent = percent;
    
    const seekProgress = document.getElementById('player-seek-progress');
    if (seekProgress) seekProgress.style.width = `${percent}%`;
    
    const elapsedLabel = document.getElementById('player-time-elapsed');
    if (elapsedLabel) elapsedLabel.textContent = formatSecondsToTime(Math.floor(audioPlayer.currentTime));
    
    const totalLabel = document.getElementById('player-time-total');
    if (totalLabel && !isNaN(audioPlayer.duration)) {
      totalLabel.textContent = formatSecondsToTime(Math.floor(audioPlayer.duration));
    }
    
    if (document.getElementById('lyrics-panel').classList.contains('open')) {
      updateLyricsHighlight();
    }
  });

  audioPlayer.addEventListener('ended', () => {
    if (isSynthRunning) stopSynth();
    triggerNextTrack();
  });

  audioPlayer.addEventListener('play', () => {
    if (isSynthRunning) stopSynth();
    isPlaying = true;
    updateActiveSongUI();
    updateVisualizerState();
  });

  audioPlayer.addEventListener('pause', () => {
    if (!isSynthRunning) isPlaying = false;
    updateActiveSongUI();
    updateVisualizerState();
  });

  audioPlayer.addEventListener('error', (e) => {
    console.warn("Audio player errored, falling back to dynamic synthesizer:", e);
    const activeSong = activePlaylistQueue[currentSongIndex] || SONGS_DATA[currentSongIndex];
    if (activeSong && isPlaying) {
      startSynth(activeSong.id);
    }
  });

  // Load initial player state into audioPlayer
  if (activePlaylistQueue[currentSongIndex]) {
    const initSong = activePlaylistQueue[currentSongIndex];
    audioPlayer.src = getSongAudioUrl(initSong.id);
    audioPlayer.load();
    
    // Set volume level to match volume bar
    const volProgress = document.getElementById('player-volume-progress');
    const volPercent = volProgress ? (parseFloat(volProgress.style.width) || 70) : 70;
    audioPlayer.volume = volPercent / 100;

    // Restore seek position once loaded
    audioPlayer.addEventListener('loadedmetadata', () => {
      audioPlayer.currentTime = (currentProgressPercent / 100) * audioPlayer.duration;
    }, { once: true });
  }
  
  // Initialize Liked Count Badge in Sidebar
  const likedCountEl = document.getElementById('sidebar-liked-count');
  if (likedCountEl) {
    likedCountEl.textContent = likedSongIds.length;
  }

  // Load cover arts for hardcoded quick cards in the HTML on DOM load
  const quickCardsList = document.querySelectorAll('.quick-card');
  quickCardsList.forEach(card => {
    const plName = card.getAttribute('data-playlist');
    const img = card.querySelector('.quick-card-img-src');
    if (img && plName) {
      let song = null;
      if (plName === 'Coding Beats') song = SONGS_DATA.find(s => s.id === 5);
      else if (plName === 'Chill Mix') song = SONGS_DATA.find(s => s.id === 2);
      else if (plName === 'Workout Energy') song = SONGS_DATA.find(s => s.id === 20);
      else if (plName === 'Tamil Hits') song = SONGS_DATA.find(s => s.id === 13);
      else if (plName === 'Focus Mode') song = SONGS_DATA.find(s => s.id === 18);
      if (song) loadCoverImage(song, img);
    }
  });

  // Load cover arts for recommended album cards in the HTML on DOM load
  const albumCardsList = document.querySelectorAll('.music-card[data-album]');
  albumCardsList.forEach(card => {
    const albumName = card.getAttribute('data-album');
    const img = card.querySelector('.music-card-img');
    if (img && albumName) {
      let song = null;
      if (albumName === 'City Lights') song = SONGS_DATA.find(s => s.id === 4);
      else if (albumName === 'Retro Future') song = SONGS_DATA.find(s => s.id === 3);
      if (song) loadCoverImage(song, img);
    }
  });

  // Load cover arts for artist cards in the HTML on DOM load
  const artistCardsList = document.querySelectorAll('.music-card[data-artist-profile]');
  artistCardsList.forEach(card => {
    const artistName = card.getAttribute('data-artist-profile');
    const img = card.querySelector('.music-card-img');
    if (img && artistName) {
      let song = null;
      if (artistName === 'Nova Lane') song = SONGS_DATA.find(s => s.id === 1);
      else if (artistName === 'Byte Beat') song = SONGS_DATA.find(s => s.id === 2);
      if (song) loadCoverImage(song, img);
    }
  });
  
  // Load cover arts for sidebar items
  const sidebarItems = document.querySelectorAll('.playlist-sidebar-item');
  sidebarItems.forEach(item => {
    const titleEl = item.querySelector('.sidebar-item-title');
    const title = titleEl ? titleEl.textContent.trim() : '';
    const img = item.querySelector('.sidebar-item-thumb');
    if (img && img.tagName === 'IMG' && title) {
      let song = null;
      if (title === 'Daily Mix') song = SONGS_DATA.find(s => s.id === 1);
      else if (title === 'Chill Evenings') song = SONGS_DATA.find(s => s.id === 2);
      else if (title === 'Focus Mode') song = SONGS_DATA.find(s => s.id === 18);
      else if (title === 'Workout Energy') song = SONGS_DATA.find(s => s.id === 20);
      else if (title === 'Anirudh Ravichander') song = SONGS_DATA.find(s => s.id === 21);
      else if (title === 'A.R. Rahman') song = SONGS_DATA.find(s => s.id === 23);
      if (song) loadCoverImage(song, img);
    }
  });
  
  // Your Library Create Playlist Button Interactivity
  const createPlBtn = document.getElementById('sidebar-create-playlist-btn');
  if (createPlBtn) {
    renderSidebarCustomPlaylists();
    createPlBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const customPlaylists = getStoredCustomPlaylists();
      const nextIndex = Object.keys(customPlaylists).length + 1;
      const plName = prompt("Enter Playlist Name:", `My Playlist #${nextIndex}`)?.trim();
      if (!plName) return;

      if (!customPlaylists[plName]) {
        customPlaylists[plName] = [];
        saveStoredCustomPlaylists(customPlaylists);
      }
      
      renderSidebarCustomPlaylists();
      window.location.hash = `#playlist?id=${encodeURIComponent(plName)}`;
      showToast(`Created "${plName}" 🎵`);
    });
  }

  // Your Library Sidebar Pill Filters Interactivity
  const pillPlaylists = document.getElementById('pill-playlists');
  const pillArtists = document.getElementById('pill-artists');
  const pillAlbums = document.getElementById('pill-albums');
  if (pillPlaylists && pillArtists && pillAlbums) {
    const pills = [pillPlaylists, pillArtists, pillAlbums];
    pills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const wasActive = pill.classList.contains('active');
        pills.forEach(p => p.classList.remove('active'));
        
        if (!wasActive) {
          pill.classList.add('active');
          filterSidebarList(pill.id.replace('pill-', ''));
        } else {
          filterSidebarList('all');
        }
      });
    });
  }

  // Top Navigation & Search Redirection
  const searchInput = document.getElementById('header-search-input');
  if (searchInput) {
    searchInput.addEventListener('focus', () => {
      if (window.location.hash !== '#search') {
        window.location.hash = '#search';
      }
    });
    searchInput.addEventListener('input', () => {
      if (window.location.hash !== '#search') {
        window.location.hash = '#search';
      }
    });
  }

  // SPA Routing Event Listener
  window.addEventListener('hashchange', handleRouting);
  
  // Run initial route
  handleRouting();

  // Load song metadata into player initially without autoplaying
  if (activePlaylistQueue[currentSongIndex]) {
    loadSongIntoPlayer(activePlaylistQueue[currentSongIndex]);
    
    // Resume progress visuals
    const seekProgress = document.getElementById('player-seek-progress');
    if (seekProgress) seekProgress.style.width = `${currentProgressPercent}%`;
    
    const activeSong = activePlaylistQueue[currentSongIndex];
    const totalSecs = parseDurationToSeconds(activeSong.duration);
    const elapsedSecs = Math.floor((currentProgressPercent / 100) * totalSecs);
    
    const elapsedLabel = document.getElementById('player-time-elapsed');
    const totalLabel = document.getElementById('player-time-total');
    if (elapsedLabel) elapsedLabel.textContent = formatSecondsToTime(elapsedSecs);
    if (totalLabel) totalLabel.textContent = activeSong.duration;
  }
});

// ==========================================
// SPA Router Handler
// ==========================================
function handleRouting() {
  const hashString = window.location.hash || '#home';
  
  const questionMarkIndex = hashString.indexOf('?');
  let hash = questionMarkIndex !== -1 ? hashString.substring(0, questionMarkIndex) : hashString;
  let searchParams = new URLSearchParams(questionMarkIndex !== -1 ? hashString.substring(questionMarkIndex) : '');

  // Dynamic Theme Gradients on main card container
  const appContent = document.querySelector('.app-content');
  if (appContent) {
    if (hash === '#search') {
      appContent.style.background = 'linear-gradient(to bottom, #1b2029 0%, #121212 350px)';
    } else if (hash === '#library') {
      appContent.style.background = 'linear-gradient(to bottom, #112233 0%, #121212 350px)';
    } else if (hash === '#playlist') {
      const playlistId = searchParams.get('id') || 'Daily Mix';
      let themeColor = '#1e3a8a';
      if (playlistId.includes('Coding')) themeColor = '#701a75';
      else if (playlistId.includes('Chill')) themeColor = '#450a0a';
      else if (playlistId.includes('Workout')) themeColor = '#1e1b4b';
      else if (playlistId.includes('Tamil')) themeColor = '#7c2d12';
      else if (playlistId.includes('Focus')) themeColor = '#115e59';
      else if (playlistId.includes('Liked')) themeColor = '#2d1264';
      appContent.style.background = `linear-gradient(to bottom, ${themeColor} 0%, #121212 350px)`;
    } else if (hash === '#artist') {
      appContent.style.background = 'linear-gradient(to bottom, #2b1c1e 0%, #121212 350px)';
    } else {
      appContent.style.background = 'linear-gradient(to bottom, #241442 0%, #121212 350px)';
    }
  }

  // Clear top search bar input value if returning home
  const topSearchInput = document.getElementById('header-search-input');
  if (hash !== '#search' && topSearchInput) {
    topSearchInput.value = '';
  }

  // Highlight top Home pill button
  const topHomeBtn = document.getElementById('top-nav-home');
  if (topHomeBtn) {
    if (hash === '#home') {
      topHomeBtn.classList.add('active');
    } else {
      topHomeBtn.classList.remove('active');
    }
  }

  // Hide all views
  const views = document.querySelectorAll('.spa-view');
  views.forEach(v => v.style.display = 'none');
  
  // Toggle Home/Library Pills inside sticky content-header
  const headerHomePills = document.getElementById('header-home-pills');
  const headerLibraryTabs = document.getElementById('header-library-tabs');
  
  if (headerHomePills) {
    headerHomePills.style.display = (hash === '#home' || hash === '' || hash === '#') ? 'flex' : 'none';
  }
  if (headerLibraryTabs) {
    headerLibraryTabs.style.display = (hash === '#library') ? 'flex' : 'none';
  }

  if (hash === '#search') {
    const searchView = document.getElementById('search-view');
    if (searchView) searchView.style.display = 'block';
    initSearchPage();
  } else if (hash === '#library') {
    const libraryView = document.getElementById('library-view');
    if (libraryView) libraryView.style.display = 'block';
    
    const tab = searchParams.get('tab') || 'liked';
    initLibraryPage(tab);
  } else if (hash === '#playlist') {
    const playlistView = document.getElementById('playlist-view');
    if (playlistView) playlistView.style.display = 'block';
    
    const playlistId = searchParams.get('id') || 'Daily Mix';
    initPlaylistPage(playlistId);
  } else if (hash === '#artist') {
    const artistView = document.getElementById('artist-view');
    if (artistView) artistView.style.display = 'block';
    
    const artistName = searchParams.get('name') || 'Nova Lane';
    loadArtistData(artistName);
  } else {
    // Default: #home
    const homeView = document.getElementById('home-view');
    if (homeView) homeView.style.display = 'block';
    
    initHomePage();
  }

  // Scroll main view card to top
  const mainContent = document.querySelector('.app-content');
  if (mainContent) mainContent.scrollTop = 0;
  
  updateActiveSongUI();
}

// ==========================================
// Premium UI Toggles (Sidebar & Side Panels)
// ==========================================
function setupSidebarCollapse() {
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  const sidebar = document.getElementById('app-sidebar-element');
  const grid = document.getElementById('app-grid-container');
  
  if (!toggleBtn || !sidebar || !grid) return;
  
  const isCollapsed = localStorage.getItem('spotify_sidebar_collapsed') === 'true';
  if (isCollapsed) {
    sidebar.classList.add('collapsed');
    grid.classList.add('sidebar-collapsed');
  }
  
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    grid.classList.toggle('sidebar-collapsed');
    localStorage.setItem('spotify_sidebar_collapsed', sidebar.classList.contains('collapsed'));
  });
}

function setupSettingsLink() {
  const link = document.getElementById('sidebar-settings-link');
  if (link) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showToast("Audio Quality preset: Studio Hi-Fi 320kbps");
    });
  }
}

function setupSidePanels() {
  const lyricsPanel = document.getElementById('lyrics-panel');
  const queuePanel = document.getElementById('queue-panel');
  const lyricsBtn = document.getElementById('player-lyrics-btn');
  const queueBtn = document.getElementById('player-queue-btn');
  const closeLyrics = document.getElementById('close-lyrics-btn');
  const closeQueue = document.getElementById('close-queue-btn');
  
  if (lyricsBtn) {
    lyricsBtn.addEventListener('click', () => {
      if (queuePanel) {
        queuePanel.classList.remove('open');
        if (queueBtn) queueBtn.classList.remove('active');
      }
      if (lyricsPanel) {
        lyricsPanel.classList.toggle('open');
        lyricsBtn.classList.toggle('active', lyricsPanel.classList.contains('open'));
        if (lyricsPanel.classList.contains('open')) {
          renderLyrics();
        }
      }
    });
  }
  
  if (queueBtn) {
    queueBtn.addEventListener('click', () => {
      if (lyricsPanel) {
        lyricsPanel.classList.remove('open');
        if (lyricsBtn) lyricsBtn.classList.remove('active');
      }
      if (queuePanel) {
        queuePanel.classList.toggle('open');
        queueBtn.classList.toggle('active', queuePanel.classList.contains('open'));
        if (queuePanel.classList.contains('open')) {
          renderQueue();
        }
      }
    });
  }
  
  if (closeLyrics) {
    closeLyrics.addEventListener('click', () => {
      if (lyricsPanel) {
        lyricsPanel.classList.remove('open');
        if (lyricsBtn) lyricsBtn.classList.remove('active');
      }
    });
  }
  
  if (closeQueue) {
    closeQueue.addEventListener('click', () => {
      if (queuePanel) {
        queuePanel.classList.remove('open');
        if (queueBtn) queueBtn.classList.remove('active');
      }
    });
  }
}

// ==========================================
// Shared Helpers & Toast Notifications
// ==========================================
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color:#ffffff; font-weight:bold;">✓</span>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}

function toggleSongLike(songId, heartElement) {
  const idx = likedSongIds.indexOf(songId);
  
  if (idx !== -1) {
    likedSongIds.splice(idx, 1);
    if (heartElement) {
      heartElement.classList.remove('liked');
      heartElement.innerHTML = OUTLINE_HEART_SVG;
    }
    showToast("Removed from Your Library");
  } else {
    likedSongIds.push(songId);
    if (heartElement) {
      heartElement.classList.add('liked');
      heartElement.innerHTML = SOLID_HEART_SVG;
    }
    showToast("Saved to Liked Songs");
  }
  savePlayerState();

  // Update Liked Songs count badge in sidebar in real time
  const likedCountEl = document.getElementById('sidebar-liked-count');
  if (likedCountEl) {
    likedCountEl.textContent = likedSongIds.length;
  }
  
  // Sync global player if currently playing
  const activeSong = activePlaylistQueue[currentSongIndex];
  if (activeSong && activeSong.id === songId) {
    const playerHeart = document.getElementById('player-heart-btn');
    if (playerHeart) {
      if (likedSongIds.includes(songId)) {
        playerHeart.classList.add('liked');
        playerHeart.innerHTML = SOLID_HEART_SVG;
      } else {
        playerHeart.classList.remove('liked');
        playerHeart.innerHTML = OUTLINE_HEART_SVG;
      }
    }
  }
  // Re-render views if currently displayed
  const hash = window.location.hash || '#home';
  if (hash.includes('#library')) {
    const activeTabBtn = document.querySelector('.library-tab-btn.active');
    const tabName = activeTabBtn ? activeTabBtn.getAttribute('id').replace('library-tab-', '') : 'liked';
    initLibraryPage(tabName);
  } else if (hash.includes('#playlist')) {
    const urlParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?')));
    initPlaylistPage(urlParams.get('id') || 'Daily Mix');
  } else if (hash.includes('#artist')) {
    const urlParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?')));
    loadArtistData(urlParams.get('name') || 'Nova Lane');
  } else if (hash.includes('#search')) {
    // Refresh search list
    const searchInput = document.getElementById('header-search-input');
    if (searchInput && searchInput.value) {
      searchInput.dispatchEvent(new Event('input'));
    }
  }
}

// ==========================================
// SPA Navigation & Hover Play Actions
// ==========================================
function setupGlobalCardClicks() {
  document.addEventListener('click', (e) => {
    // 1. Playlists Card routing
    const playlistCard = e.target.closest('[data-playlist]');
    if (playlistCard && !e.target.closest('.play-hover-btn')) {
      const playlistId = playlistCard.getAttribute('data-playlist');
      window.location.hash = `#playlist?id=${encodeURIComponent(playlistId)}`;
      return;
    }
    
    // 2. Album Card routing
    const albumCard = e.target.closest('[data-album]');
    if (albumCard && !e.target.closest('.play-hover-btn')) {
      const albumId = albumCard.getAttribute('data-album');
      window.location.hash = `#playlist?id=${encodeURIComponent(albumId)}`;
      return;
    }
    
    // 3. Artist Card routing
    const artistCard = e.target.closest('[data-artist-profile]');
    if (artistCard && !e.target.closest('.play-hover-btn')) {
      const artistName = artistCard.getAttribute('data-artist-profile');
      window.location.hash = `#artist?name=${encodeURIComponent(artistName)}`;
      return;
    }
  });

  // Green circle play overlay triggers playing the category/playlist
  document.addEventListener('click', (e) => {
    const playHoverBtn = e.target.closest('.play-hover-btn');
    if (playHoverBtn) {
      e.stopPropagation();
      e.preventDefault();
      
      const parentCard = playHoverBtn.closest('[data-playlist]') || playHoverBtn.closest('[data-album]') || playHoverBtn.closest('[data-artist-profile]');
      if (!parentCard) return;
      
      const playlistName = parentCard.getAttribute('data-playlist') || parentCard.getAttribute('data-album') || parentCard.getAttribute('data-artist-profile');
      
      let songs = [...SONGS_DATA];
      if (playlistName === 'Liked Songs') {
        songs = SONGS_DATA.filter(s => likedSongIds.includes(s.id));
      } else if (playlistName === 'Coding Beats' || playlistName === 'Chill Mix' || playlistName === 'Chill Evenings') {
        songs = SONGS_DATA.filter(s => s.category === 'Pop' || s.category === 'Rock');
      } else if (playlistName === 'Workout Energy') {
        songs = SONGS_DATA.filter(s => s.category === 'Workout');
      } else if (playlistName === 'Focus Mode') {
        songs = SONGS_DATA.filter(s => s.category === 'Focus' || s.category === 'Classical');
      } else if (playlistName === 'Tamil Hits') {
        songs = SONGS_DATA.filter(s => s.category === 'Tamil');
      } else if (playlistName === 'Nova Lane' || playlistName === 'Byte Beat') {
        songs = SONGS_DATA.filter(s => s.artist === playlistName);
      }
      
      if (songs.length > 0) {
        // Toggle play state if clicking the same playlist already playing
        if (isCurrentPlaylist(playlistName)) {
          if (isPlaying) {
            pauseMusic();
          } else {
            resumeMusic();
          }
        } else {
          activePlaylistQueue = [...songs];
          currentSongIndex = 0;
          playSong(activePlaylistQueue[0]);
        }
      } else {
        showToast("No songs inside this selection.");
      }
    }
  });
}

// ==========================================
// Dashboard Logic (index.html)
// ==========================================
function initHomePage() {
  // A. Greeting hours
  const greetingEl = document.getElementById('home-greeting');
  if (greetingEl) {
    const hrs = new Date().getHours();
    let greet = "Good evening";
    if (hrs < 12) greet = "Good morning";
    else if (hrs < 18) greet = "Good afternoon";
    greetingEl.textContent = greet;
  }

  // B. Populate Recommended cards (8 cards)
  const recommendedGrid = document.querySelector('.recommended-grid');
  if (recommendedGrid) {
    recommendedGrid.innerHTML = '';
    const slice = SONGS_DATA.slice(0, 8);
    slice.forEach((song, index) => {
      const card = document.createElement('div');
      const activeSong = activePlaylistQueue[currentSongIndex] || SONGS_DATA[currentSongIndex];
      const isActive = activeSong && song.id === activeSong.id;
      card.className = `music-card ${isActive ? 'active' : ''}`;
      card.innerHTML = `
        <div class="music-card-img-wrapper">
          <img alt="${song.title} Cover" class="music-card-img" style="transition: opacity 0.3s ease;">
          <button class="play-hover-btn" aria-label="Play song">▶</button>
        </div>
        <div class="music-card-title">${song.title}</div>
        <div class="music-card-artist">${song.artist}</div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.play-hover-btn')) return;
        activePlaylistQueue = [...SONGS_DATA];
        const idx = activePlaylistQueue.findIndex(s => s.id === song.id);
        if (idx !== -1) currentSongIndex = idx;
        playSong(song);
      });

      recommendedGrid.appendChild(card);
      loadCoverImage(song, card.querySelector('.music-card-img'));
    });
  }
}

// ==========================================
// Search Page Logic (search.html)
// ==========================================
function initSearchPage() {
  const browseGrid = document.querySelector('.browse-grid');
  const resultsSection = document.querySelector('.search-results-section');
  const resultsTable = document.querySelector('.results-table-body');
  const searchInput = document.getElementById('header-search-input');
  const trendingSearches = document.getElementById('trending-searches');
  
  if (searchInput) {
    searchInput.value = '';
  }

  if (!browseGrid || !resultsSection || !resultsTable || !searchInput) return;

  // A. Categories browse cards clicks
  const browseCards = document.querySelectorAll('.browse-card');
  browseCards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-category');
      searchInput.value = category;
      performSearch(category.toLowerCase());
    });
  });

  // B. Chips filter clicks
  const chips = document.querySelectorAll('.search-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const term = chip.textContent.trim().toLowerCase();
      if (term === 'all') {
        performSearch(searchInput.value || '');
      } else {
        performSearch(term);
      }
    });
  });

  // C. Trending Searches clicks
  const trendings = document.querySelectorAll('.trending-item');
  trendings.forEach(item => {
    item.addEventListener('click', () => {
      const query = item.textContent.trim();
      searchInput.value = query;
      performSearch(query.toLowerCase());
    });
  });

  // D. Input key trigger
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim().toLowerCase();
    performSearch(val);
  });

  function performSearch(query) {
    if (!query) {
      resultsSection.classList.remove('active');
      browseGrid.style.display = 'grid';
      if (trendingSearches) trendingSearches.style.display = 'block';
      return;
    }

    browseGrid.style.display = 'none';
    if (trendingSearches) trendingSearches.style.display = 'none';
    resultsSection.classList.add('active');
    resultsTable.innerHTML = '';

    const filtered = SONGS_DATA.filter(song => 
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query) ||
      song.album.toLowerCase().includes(query) ||
      song.category.toLowerCase().includes(query) ||
      (Array.isArray(song.tags) && song.tags.some(tag => tag.toLowerCase().includes(query)))
    );

    if (filtered.length === 0) {
      resultsTable.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem 0; color:var(--text-secondary);"><p>No songs found for "${query}"</p></div>`;
      return;
    }

    activePlaylistQueue = [...filtered];

    filtered.forEach((song, index) => {
      const row = document.createElement('div');
      const activeSong = activePlaylistQueue[currentSongIndex] || SONGS_DATA[currentSongIndex];
      const isActive = activeSong && song.id === activeSong.id;
      row.className = `song-row-item ${isActive ? 'active' : ''}`;
      row.innerHTML = `
        <span class="song-row-number">${index + 1}</span>
        <span class="song-row-play-icon">▶</span>
        <div class="song-row-title-column">
          <img alt="${song.title} Cover" class="song-row-img" style="transition: opacity 0.3s ease;">
          <div class="song-row-meta">
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
          </div>
        </div>
        <span class="song-row-album">${song.album}</span>
        <span class="song-row-duration">
          <button class="row-like-btn ${likedSongIds.includes(song.id) ? 'liked' : ''}">
            ${likedSongIds.includes(song.id) ? SOLID_HEART_SVG : OUTLINE_HEART_SVG}
          </button>
          <span>${song.duration}</span>
          <button class="row-options-btn" title="Options">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
            </svg>
          </button>
        </span>
      `;

      const optionsBtn = row.querySelector('.row-options-btn');
      if (optionsBtn) {
        optionsBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          showToast(`Options: "${song.title}" added to queue`);
        });
      }

      row.addEventListener('click', (e) => {
        if (e.target.closest('.row-like-btn')) return;
        currentSongIndex = index;
        playSong(song);
      });

      const likeBtn = row.querySelector('.row-like-btn');
      likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSongLike(song.id, likeBtn);
      });

      resultsTable.appendChild(row);
      loadCoverImage(song, row.querySelector('.song-row-img'));
    });
  }
}

// ==========================================
// Library Page Logic (library.html)
// ==========================================
function initLibraryPage(defaultTab = 'liked') {
  const container = document.getElementById('library-music-grid');
  const countLabel = document.getElementById('library-count-label');
  const sortSelect = document.getElementById('library-sort-select');
  const tabs = document.querySelectorAll('.library-tab-btn');
  
  if (!container) return;

  let activeTab = defaultTab;
  
  // Listen tabs clicks
  tabs.forEach(tab => {
    // Set initial active state based on tab name
    const id = tab.getAttribute('id');
    tab.classList.remove('active');
    if (id === `library-tab-${activeTab}`) {
      tab.classList.add('active');
    }
    
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const clickedId = tab.getAttribute('id');
      if (clickedId === 'library-tab-playlists') activeTab = 'playlists';
      else if (clickedId === 'library-tab-albums') activeTab = 'albums';
      else if (clickedId === 'library-tab-artists') activeTab = 'artists';
      else if (clickedId === 'library-tab-downloads') activeTab = 'downloads';
      else activeTab = 'liked';
      
      renderLibraryGrid();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      renderLibraryGrid();
    });
  }

  function getSortedList(list, type) {
    const sortBy = sortSelect ? sortSelect.value : 'recent';
    if (sortBy === 'alphabetical') {
      return [...list].sort((a, b) => (a.title || a.name || '').localeCompare(b.title || b.name || ''));
    } else if (sortBy === 'artist') {
      return [...list].sort((a, b) => (a.artist || '').localeCompare(b.artist || ''));
    }
    return list;
  }

  function renderLibraryGrid() {
    container.innerHTML = '';
    
    if (activeTab === 'liked') {
      const liked = SONGS_DATA.filter(s => likedSongIds.includes(s.id));
      const sorted = getSortedList(liked, 'songs');
      
      if (countLabel) countLabel.textContent = `${sorted.length} songs`;
      if (sorted.length === 0) {
        container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:4rem 0; color:var(--text-secondary);"><p>No liked songs in library yet.</p></div>`;
        return;
      }
      
      activePlaylistQueue = [...sorted];
      sorted.forEach((song) => {
        const card = document.createElement('div');
        const activeSong = activePlaylistQueue[currentSongIndex] || SONGS_DATA[currentSongIndex];
        const isActive = activeSong && song.id === activeSong.id;
        card.className = `music-card ${isActive ? 'active' : ''}`;
        card.innerHTML = `
          <div class="music-card-img-wrapper">
            <img alt="${song.title} Cover" class="music-card-img" style="transition: opacity 0.3s ease;">
            <button class="play-hover-btn" aria-label="Play song">▶</button>
          </div>
          <div class="music-card-title">${song.title}</div>
          <div class="music-card-artist">${song.artist}</div>
        `;
        card.addEventListener('click', (e) => {
          if (e.target.closest('.play-hover-btn')) return;
          const idx = activePlaylistQueue.findIndex(s => s.id === song.id);
          if (idx !== -1) currentSongIndex = idx;
          playSong(song);
        });
        container.appendChild(card);
        loadCoverImage(song, card.querySelector('.music-card-img'));
      });
      
    } else if (activeTab === 'playlists') {
      const lists = [
        { name: "Daily Mix", count: "10 songs", category: "Pop" },
        { name: "Coding Beats", count: "14 songs", category: "Focus" },
        { name: "Chill Evenings", count: "8 songs", category: "Tamil" },
        { name: "Workout Energy", count: "12 songs", category: "Workout" }
      ];
      const sorted = getSortedList(lists, 'playlists');
      if (countLabel) countLabel.textContent = `${sorted.length} playlists`;
      
      sorted.forEach(pl => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.setAttribute('data-playlist', pl.name);
        card.innerHTML = `
          <div class="music-card-img-wrapper">
            <img src="${getMusicSVG(pl.category, 5)}" alt="Cover" class="music-card-img">
            <button class="play-hover-btn">▶</button>
          </div>
          <div class="music-card-title">${pl.name}</div>
          <div class="music-card-artist">Playlist • ${pl.count}</div>
        `;
        container.appendChild(card);
      });
      
    } else if (activeTab === 'albums') {
      const albums = [
        { title: "City Lights", artist: "Nova Lane", category: "Pop" },
        { title: "Retro Future", artist: "Byte Beat", category: "Pop" },
        { title: "Serene Waves", artist: "Aria Classical", category: "Classical" }
      ];
      if (countLabel) countLabel.textContent = `${albums.length} albums`;
      albums.forEach(al => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.setAttribute('data-album', al.title);
        card.innerHTML = `
          <div class="music-card-img-wrapper">
            <img src="${getMusicSVG(al.category, 12)}" alt="Cover" class="music-card-img">
            <button class="play-hover-btn">▶</button>
          </div>
          <div class="music-card-title">${al.title}</div>
          <div class="music-card-artist">${al.artist}</div>
        `;
        container.appendChild(card);
      });
      
    } else if (activeTab === 'artists') {
      const artists = ["Anirudh Ravichander", "A.R. Rahman", "Imagine Dragons", "Eminem"];
      if (countLabel) countLabel.textContent = `${artists.length} artists`;
      artists.forEach(art => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.setAttribute('data-artist-profile', art);
        card.innerHTML = `
          <div class="music-card-img-wrapper" style="border-radius:50%;">
            <svg class="music-card-img" viewBox="0 0 200 200" style="background-color:#1e3a8a;"><text x="100" y="110" fill="white" font-size="28" font-weight="bold" text-anchor="middle">${art[0]}</text></svg>
            <button class="play-hover-btn">▶</button>
          </div>
          <div class="music-card-title" style="text-align:center;">${art}</div>
          <div class="music-card-artist" style="text-align:center;">Artist</div>
        `;
        container.appendChild(card);
      });
      
    } else if (activeTab === 'downloads') {
      const dls = SONGS_DATA.slice(0, 2);
      if (countLabel) countLabel.textContent = `${dls.length} downloads offline`;
      dls.forEach(song => {
        const card = document.createElement('div');
        const activeSong = activePlaylistQueue[currentSongIndex] || SONGS_DATA[currentSongIndex];
        const isActive = activeSong && song.id === activeSong.id;
        card.className = `music-card ${isActive ? 'active' : ''}`;
        card.innerHTML = `
          <div class="music-card-img-wrapper">
            <img alt="Cover" class="music-card-img" style="transition: opacity 0.3s ease;">
            <button class="play-hover-btn" aria-label="Play song">▶</button>
          </div>
          <div class="music-card-title">${song.title}</div>
          <div class="music-card-artist">${song.artist} • Offline</div>
        `;
        card.addEventListener('click', (e) => {
          if (e.target.closest('.play-hover-btn')) return;
          playSong(song);
        });
        container.appendChild(card);
        loadCoverImage(song, card.querySelector('.music-card-img'));
      });
    }
    updateActiveSongUI();
  }

  renderLibraryGrid();
}

// ==========================================
// Playlist Page Logic (playlist.html)
// ==========================================
const PLAYLIST_COVERS = {
  "Liked Songs": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg",
  "Daily Mix": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg",
  "Coding Beats": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c1/2d/fe/c12dfe8f-cdf6-e179-d69a-8ec35f760266/00602537248681.rgb.jpg/600x600bb.jpg",
  "Coding Beast": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c1/2d/fe/c12dfe8f-cdf6-e179-d69a-8ec35f760266/00602537248681.rgb.jpg/600x600bb.jpg",
  "Chill Mix": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4a/d7/38/4ad738d9-6978-ca6b-c2da-500cf0915204/4550758373889_cover.png/600x600bb.jpg",
  "Chill Evenings": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4a/d7/38/4ad738d9-6978-ca6b-c2da-500cf0915204/4550758373889_cover.png/600x600bb.jpg",
  "Workout Energy": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/dd/5c/e6/dd5ce621-f7d2-f767-7a08-e7a7eaa7870b/00602537526994.rgb.jpg/600x600bb.jpg",
  "Focus Mode": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/66/38/c4/6638c4b9-8e43-f111-97b7-5a1fae0172e2/886447820155.jpg/600x600bb.jpg",
  "Tamil Hits": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/1e/8a/0a/1e8a0ad1-3eb2-19e4-4ff5-f67b4ec8b276/cover.jpg/600x600bb.jpg"
};

function initPlaylistPage(playlistName = "Daily Mix") {
  const headerTitle = document.getElementById('playlist-header-title');
  const headerImg = document.getElementById('playlist-header-img');
  const headerCount = document.getElementById('playlist-songs-count');
  const tableBody = document.getElementById('playlist-tracks-table-body');
  const playBtn = document.getElementById('playlist-play-main');
  const shuffleAction = document.getElementById('playlist-shuffle-action');
  const saveAction = document.getElementById('playlist-save-action');

  if (!headerTitle || !headerImg || !tableBody) return;

  headerTitle.textContent = playlistName;

  let filteredSongs = [...SONGS_DATA];
  const customPlaylists = getStoredCustomPlaylists();
  if (customPlaylists[playlistName]) {
    const ids = customPlaylists[playlistName];
    filteredSongs = SONGS_DATA.filter(s => ids.includes(s.id));
    if (filteredSongs.length === 0) {
      // Default sample tracks for newly created custom playlists
      filteredSongs = [SONGS_DATA[0], SONGS_DATA[1]];
    }
  } else if (playlistName === 'Coding Beats' || playlistName === 'Chill Mix' || playlistName === 'Chill Evenings') {
    filteredSongs = SONGS_DATA.filter(s => s.category === 'Pop' || s.category === 'Rock');
  } else if (playlistName === 'Workout Energy') {
    filteredSongs = SONGS_DATA.filter(s => s.category === 'Workout');
  } else if (playlistName === 'Focus Mode') {
    filteredSongs = SONGS_DATA.filter(s => s.category === 'Focus' || s.category === 'Classical');
  } else if (playlistName === 'Tamil Hits') {
    filteredSongs = SONGS_DATA.filter(s => s.category === 'Tamil');
  }

  const customCover = PLAYLIST_COVERS[playlistName];
  if (customCover) {
    headerImg.src = customCover;
  } else {
    const leadSong = filteredSongs[0];
    if (leadSong) {
      loadCoverImage(leadSong, headerImg);
    } else {
      headerImg.src = getMusicSVG(playlistName, 99);
    }
  }
  headerCount.textContent = `${filteredSongs.length} songs`;

  activePlaylistQueue = [...filteredSongs];

  tableBody.innerHTML = '';
  filteredSongs.forEach((song, index) => {
    const row = document.createElement('div');
    const activeSong = activePlaylistQueue[currentSongIndex] || SONGS_DATA[currentSongIndex];
    const isActive = activeSong && song.id === activeSong.id;
    row.className = `song-row-item ${isActive ? 'active' : ''}`;
    row.innerHTML = `
      <span class="song-row-number">${index + 1}</span>
      <span class="song-row-play-icon">▶</span>
      <div class="song-row-title-column">
        <img alt="${song.title} Cover" class="song-row-img" style="transition: opacity 0.3s ease;">
        <div class="song-row-meta">
          <h4>${song.title}</h4>
          <p>${song.artist}</p>
        </div>
      </div>
      <span class="song-row-album">${song.album}</span>
      <span class="song-row-duration">
        <button class="row-like-btn ${likedSongIds.includes(song.id) ? 'liked' : ''}">
          ${likedSongIds.includes(song.id) ? SOLID_HEART_SVG : OUTLINE_HEART_SVG}
        </button>
        <span>${song.duration}</span>
        <button class="row-options-btn" title="Options">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
          </svg>
        </button>
      </span>
    `;

    const optionsBtn = row.querySelector('.row-options-btn');
    if (optionsBtn) {
      optionsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showToast(`Options: "${song.title}" added to queue`);
      });
    }

    row.addEventListener('click', (e) => {
      if (e.target.closest('.row-like-btn')) return;
      currentSongIndex = index;
      playSong(song);
    });

    const likeBtn = row.querySelector('.row-like-btn');
    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSongLike(song.id, likeBtn);
    });

    tableBody.appendChild(row);
    loadCoverImage(song, row.querySelector('.song-row-img'));
  });

  if (playBtn) {
    // Clear old listeners
    const newPlayBtn = playBtn.cloneNode(true);
    playBtn.parentNode.replaceChild(newPlayBtn, playBtn);
    newPlayBtn.addEventListener('click', () => {
      if (isCurrentPlaylist(playlistName)) {
        if (isPlaying) pauseMusic();
        else resumeMusic();
      } else {
        currentSongIndex = 0;
        playSong(filteredSongs[0]);
      }
    });
  }

  if (shuffleAction) {
    const newShuffle = shuffleAction.cloneNode(true);
    shuffleAction.parentNode.replaceChild(newShuffle, shuffleAction);
    newShuffle.addEventListener('click', () => {
      isShuffle = true;
      const btn = document.getElementById('player-shuffle-btn');
      if (btn) btn.classList.add('active');
      
      activePlaylistQueue.sort(() => Math.random() - 0.5);
      currentSongIndex = 0;
      playSong(activePlaylistQueue[0]);
      showToast("Shuffled playlist queue");
      
      if (document.getElementById('queue-panel').classList.contains('open')) {
        renderQueue();
      }
    });
  }

  if (saveAction) {
    const newSave = saveAction.cloneNode(true);
    saveAction.parentNode.replaceChild(newSave, saveAction);
    newSave.addEventListener('click', () => {
      showToast(`Saved playlist "${playlistName}" to Your Library`);
      newSave.textContent = '♥';
      newSave.style.color = 'var(--accent)';
    });
  }
  
  updateActiveSongUI();
}

// ==========================================
// Artist Page Logic (artist.html)
// ==========================================
function loadArtistData(artistName) {
  const title = document.getElementById('artist-title-name');
  if (!title) return;
  
  title.textContent = artistName;
  
  const listeners = document.querySelector('.artist-listeners');
  const bio = document.querySelector('.artist-about-text p');
  const banner = document.getElementById('artist-banner-cover');
  
  let bioText = `${artistName} is a leading producer and composer in the modern streaming scene, crafting ambient soundscapes and retro rhythm fields.`;
  let count = "1,102,401 monthly listeners";
  let coverBg = '#1e3a8a';
  
  if (artistName === 'Nova Lane') {
    bioText = "Nova Lane is a synth-pop and electronic production project. Characterized by lush retro analog synthesizer filters, organic driving rhythm sections, and moody atmospheric skylines.";
    count = "1,248,312 monthly listeners";
    coverBg = '#1e3a8a';
  } else if (artistName === 'Byte Beat') {
    bioText = "Byte Beat is an 8-bit retro gaming and synthwave enthusiast based in Tokyo, weaving nostalgia and future rhythms into pixel-perfect beats.";
    count = "982,410 monthly listeners";
    coverBg = '#3f0712';
  } else if (artistName === 'Pulse Lab') {
    bioText = "Pulse Lab is an experimental house and techno collective from Berlin, specializing in high-voltage club rhythms and modular modular synthesizer soundscapes.";
    count = "754,129 monthly listeners";
    coverBg = '#450a0a';
  }
  
  if (listeners) listeners.textContent = count;
  if (bio) bio.textContent = bioText;
  
  if (banner) {
    banner.style.backgroundImage = `linear-gradient(rgba(15, 17, 21, 0.1), rgba(15, 17, 21, 0.95)), url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20300%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22${encodeURIComponent(coverBg)}%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22150%22%20r%3D%22200%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20opacity%3D%220.1%22%2F%3E%3C%2Fsvg%3E')`;
  }
  
  const filtered = SONGS_DATA.filter(s => s.artist === artistName || s.category === 'Pop');
  activePlaylistQueue = [...filtered];
  
  const listContainer = document.getElementById('artist-popular-tracks-list');
  if (listContainer) {
    listContainer.innerHTML = '';
    filtered.slice(0, 5).forEach((song, index) => {
      const row = document.createElement('div');
      const activeSong = activePlaylistQueue[currentSongIndex] || SONGS_DATA[currentSongIndex];
      const isActive = activeSong && song.id === activeSong.id;
      row.className = `song-row-item ${isActive ? 'active' : ''}`;
      row.innerHTML = `
        <span class="song-row-number">${index + 1}</span>
        <span class="song-row-play-icon">▶</span>
        <div class="song-row-title-column">
          <img src="${getMusicSVG(song.category, song.id)}" alt="${song.title} Cover" class="song-row-img">
          <div class="song-row-meta">
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
          </div>
        </div>
        <span class="song-row-album">${song.album}</span>
        <span class="song-row-duration">
          <button class="row-like-btn ${likedSongIds.includes(song.id) ? 'liked' : ''}">
            ${likedSongIds.includes(song.id) ? SOLID_HEART_SVG : OUTLINE_HEART_SVG}
          </button>
          <span>${song.duration}</span>
          <button class="row-options-btn" title="Options">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
            </svg>
          </button>
        </span>
      `;

      const optionsBtn = row.querySelector('.row-options-btn');
      if (optionsBtn) {
        optionsBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          showToast(`Options: "${song.title}" added to queue`);
        });
      }
      
      row.addEventListener('click', (e) => {
        if (e.target.closest('.row-like-btn')) return;
        currentSongIndex = index;
        playSong(song);
      });
      
      const likeBtn = row.querySelector('.row-like-btn');
      likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSongLike(song.id, likeBtn);
      });
      
      listContainer.appendChild(row);
      loadCoverImage(song, row.querySelector('.song-row-img'));
    });
  }
  
  const albumsGrid = document.getElementById('artist-albums-grid');
  if (albumsGrid) {
    albumsGrid.innerHTML = `
      <article class="music-card" data-playlist="Best of ${artistName}">
        <div class="music-card-img-wrapper">
          <img src="${getMusicSVG('Pop', 99)}" alt="Best of Album" class="music-card-img">
          <button class="play-hover-btn">▶</button>
        </div>
        <div class="music-card-title">Best of ${artistName}</div>
        <div class="music-card-artist">Compilation Album</div>
      </article>
    `;
  }
  
  const relatedGrid = document.getElementById('artist-related-grid');
  if (relatedGrid) {
    relatedGrid.innerHTML = '';
    const otherArtists = ['Byte Beat', 'Pulse Lab', 'Iris Vance'].filter(x => x !== artistName);
    otherArtists.forEach(art => {
      const card = document.createElement('article');
      card.className = 'music-card';
      card.setAttribute('data-artist-profile', art);
      card.innerHTML = `
        <div class="music-card-img-wrapper" style="border-radius: 50%;">
          <svg class="music-card-img" viewBox="0 0 200 200" style="background-color:#171a21;"><text x="100" y="110" fill="white" font-size="28" font-weight="bold" text-anchor="middle">${art[0]}</text></svg>
          <button class="play-hover-btn">▶</button>
        </div>
        <div class="music-card-title" style="text-align: center;">${art}</div>
        <div class="music-card-artist" style="text-align: center;">Artist</div>
      `;
      relatedGrid.appendChild(card);
    });
  }
  updateActiveSongUI();
}

// ==========================================
// Bottom Music Player Controls Interactivity
// ==========================================
function setupGlobalPlayerControls() {
  const playBtn = document.getElementById('player-play-btn');
  const prevBtn = document.getElementById('player-prev-btn');
  const nextBtn = document.getElementById('player-next-btn');
  const heartBtn = document.getElementById('player-heart-btn');
  const shuffleBtn = document.getElementById('player-shuffle-btn');
  const repeatBtn = document.getElementById('player-repeat-btn');
  const muteBtn = document.getElementById('player-mute-btn');
  
  const volumeSlider = document.getElementById('player-volume-slider');
  const volumeProgress = document.getElementById('player-volume-progress');
  const seekSlider = document.getElementById('player-seek-slider');
  const seekProgress = document.getElementById('player-seek-progress');

  if (!playBtn) return;

  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      resumeMusic();
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex - 1 + activePlaylistQueue.length) % activePlaylistQueue.length;
      playSong(activePlaylistQueue[currentSongIndex]);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      triggerNextTrack();
    });
  }

  if (heartBtn) {
    heartBtn.addEventListener('click', () => {
      const activeSong = activePlaylistQueue[currentSongIndex];
      if (!activeSong) return;
      toggleSongLike(activeSong.id, heartBtn);
    });
  }

  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      isShuffle = !isShuffle;
      if (isShuffle) {
        shuffleBtn.classList.add('active');
        showToast("Shuffle: ON");
      } else {
        shuffleBtn.classList.remove('active');
        showToast("Shuffle: OFF");
      }
      localStorage.setItem('spotify_shuffle', isShuffle);
      updateActiveSongUI();
    });
  }

  if (repeatBtn) {
    repeatBtn.addEventListener('click', () => {
      isRepeat = !isRepeat;
      if (isRepeat) {
        repeatBtn.classList.add('active');
        showToast("Repeat: ON");
      } else {
        repeatBtn.classList.remove('active');
        showToast("Repeat: OFF");
      }
      localStorage.setItem('spotify_repeat', isRepeat);
      updateActiveSongUI();
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      const currentVol = parseFloat(volumeProgress.style.width) || 70;
      if (currentVol > 0) {
        previousVolumePercent = currentVol;
        volumeProgress.style.width = '0%';
        audioPlayer.muted = true;
        muteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="2" y2="22"/><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
        showToast("Muted");
      } else {
        volumeProgress.style.width = `${previousVolumePercent}%`;
        audioPlayer.muted = false;
        audioPlayer.volume = previousVolumePercent / 100;
        muteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
        showToast(`Volume: ${Math.round(previousVolumePercent)}%`);
      }
    });
  }

  if (seekSlider && seekProgress) {
    seekSlider.addEventListener('click', (e) => {
      const rect = seekSlider.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percent = (clickX / rect.width) * 100;
      currentProgressPercent = Math.max(0, Math.min(100, percent));
      seekProgress.style.width = `${currentProgressPercent}%`;
      
      const activeSong = activePlaylistQueue[currentSongIndex];
      if (activeSong) {
        const totalSecs = parseDurationToSeconds(activeSong.duration);
        const elapsedSecs = Math.floor((currentProgressPercent / 100) * totalSecs);
        
        document.getElementById('player-time-elapsed').textContent = formatSecondsToTime(elapsedSecs);
        
        // Seek the actual HTML5 audio player
        if (audioPlayer && audioPlayer.duration) {
          audioPlayer.currentTime = (currentProgressPercent / 100) * audioPlayer.duration;
        }
      }
      
      if (document.getElementById('lyrics-panel').classList.contains('open')) {
        updateLyricsHighlight();
      }
    });
  }

  if (volumeSlider && volumeProgress) {
    volumeSlider.addEventListener('click', (e) => {
      const rect = volumeSlider.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
      volumeProgress.style.width = `${percent}%`;
      
      // Update audio player volume
      audioPlayer.muted = false;
      audioPlayer.volume = percent / 100;
      
      if (muteBtn) {
        muteBtn.innerHTML = percent === 0 ? 
          `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="2" y2="22"/><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>` : 
          `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
      }
    });
  }
}

function triggerNextTrack() {
  if (isRepeat) {
    playSong(activePlaylistQueue[currentSongIndex]);
    return;
  }
  
  if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * activePlaylistQueue.length);
  } else {
    currentSongIndex = (currentSongIndex + 1) % activePlaylistQueue.length;
  }
  playSong(activePlaylistQueue[currentSongIndex]);
}

// ==========================================
// Player Rendering & Audio Tick Simulation
// ==========================================
function loadSongIntoPlayer(song) {
  const title = document.getElementById('player-song-title');
  const artist = document.getElementById('player-song-artist');
  const cover = document.getElementById('player-song-img');
  const durationLabel = document.getElementById('player-time-total');
  const heartBtn = document.getElementById('player-heart-btn');

  if (title) title.textContent = song.title;
  if (artist) artist.textContent = song.artist;
  if (cover) loadCoverImage(song, cover);
  if (durationLabel) durationLabel.textContent = song.duration; // Spotify standard
  
  if (heartBtn) {
    if (likedSongIds.includes(song.id)) {
      heartBtn.classList.add('liked');
      heartBtn.innerHTML = SOLID_HEART_SVG;
    } else {
      heartBtn.classList.remove('liked');
      heartBtn.innerHTML = OUTLINE_HEART_SVG;
    }
  }

  // Update audio source
  const targetUrl = getSongAudioUrl(song.id);
  if (audioPlayer.src !== targetUrl) {
    if (isSynthRunning) stopSynth();
    audioPlayer.src = targetUrl;
    audioPlayer.load();
    
    // Set volume level to match volume bar
    const volProgress = document.getElementById('player-volume-progress');
    const volPercent = volProgress ? (parseFloat(volProgress.style.width) || 70) : 70;
    audioPlayer.volume = volPercent / 100;
  }

  savePlayerState();
}

function playSong(song) {
  loadSongIntoPlayer(song);
  resumeMusic();
  showToast(`Now Playing: ${song.title}`);
}

function resumeMusic() {
  isPlaying = true;
  const activeSong = activePlaylistQueue[currentSongIndex];
  if (!activeSong) return;

  const targetUrl = getSongAudioUrl(activeSong.id);
  if (audioPlayer.src !== targetUrl) {
    if (isSynthRunning) stopSynth();
    audioPlayer.src = targetUrl;
    audioPlayer.load();
  }

  // Fallback to synth if offline or blocked
  if (isSynthRunning) {
    startSynth(activeSong.id);
  } else {
    audioPlayer.play()
      .then(() => {
        if (isSynthRunning) stopSynth();
        isPlaying = true;
        updateVisualizerState();
        updateActiveSongUI();
      })
      .catch(e => {
        console.warn("Audio play failed/blocked, falling back to Web Audio Synth:", e);
        startSynth(activeSong.id);
      });
      
    if (audioPlayer.error) {
      console.warn("AudioPlayer has active error, forcing synth fallback");
      startSynth(activeSong.id);
    }
  }

  updateVisualizerState();
}

function pauseMusic() {
  isPlaying = false;
  audioPlayer.pause();
  if (isSynthRunning) {
    stopSynth();
  } else {
    updateActiveSongUI();
    updateVisualizerState();
  }
}

function updateVisualizerState() {
  const bars = document.querySelectorAll('.visualizer-bar');
  bars.forEach(bar => {
    if (isPlaying) {
      bar.classList.add('animating');
    } else {
      bar.classList.remove('animating');
    }
  });

  const discContainer = document.getElementById('player-song-img-container');
  if (discContainer) {
    if (isPlaying) {
      discContainer.classList.add('playing');
    } else {
      discContainer.classList.remove('playing');
    }
  }
}

// ==========================================
// Drawer panels population
// ==========================================
function renderLyrics() {
  const lyricsContent = document.getElementById('lyrics-content');
  if (!lyricsContent) return;
  
  const currentSong = activePlaylistQueue[currentSongIndex];
  if (!currentSong) {
    lyricsContent.innerHTML = '<p style="color:var(--text-secondary);">Select a song to view lyrics.</p>';
    return;
  }
  
  const lines = getSongLyrics(currentSong);
  lyricsContent.innerHTML = '';
  
  lines.forEach((line, index) => {
    const div = document.createElement('div');
    div.className = 'lyrics-line';
    div.id = `lyrics-line-${index}`;
    div.textContent = line;
    lyricsContent.appendChild(div);
  });
  
  updateLyricsHighlight();
}

function updateLyricsHighlight() {
  const currentSong = activePlaylistQueue[currentSongIndex];
  if (!currentSong) return;
  
  const lines = getSongLyrics(currentSong);
  const totalSecs = parseDurationToSeconds(currentSong.duration);
  const elapsedSecs = Math.floor((currentProgressPercent / 100) * totalSecs);
  
  const lineIndex = Math.min(
    lines.length - 1,
    Math.floor((elapsedSecs / totalSecs) * lines.length)
  );
  
  const allLines = document.querySelectorAll('.lyrics-line');
  allLines.forEach((lineEl, idx) => {
    if (idx === lineIndex) {
      lineEl.classList.add('active');
      lineEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      lineEl.classList.remove('active');
    }
  });
}

function renderQueue() {
  const queueContent = document.getElementById('queue-content');
  if (!queueContent) return;
  
  queueContent.innerHTML = '';
  
  const currentSong = activePlaylistQueue[currentSongIndex];
  if (currentSong) {
    const playingBox = document.createElement('div');
    playingBox.className = 'queue-item';
    playingBox.style.borderColor = 'var(--accent)';
    playingBox.innerHTML = `
      <div class="queue-item-meta">
        <div class="queue-item-title" style="color:var(--accent);">${currentSong.title}</div>
        <div class="queue-item-artist">${currentSong.artist}</div>
      </div>
      <span style="font-size:0.75rem; color:var(--accent); font-weight:700;">NOW PLAYING</span>
    `;
    queueContent.appendChild(playingBox);
  }
  
  const nextHeader = document.createElement('h4');
  nextHeader.textContent = "Next Up";
  nextHeader.style.margin = "1rem 0 0.5rem 0";
  nextHeader.style.fontSize = "0.85rem";
  nextHeader.style.textTransform = "uppercase";
  nextHeader.style.color = "var(--text-secondary)";
  queueContent.appendChild(nextHeader);
  
  let count = 0;
  for (let i = 0; i < activePlaylistQueue.length; i++) {
    if (i === currentSongIndex) continue;
    
    const song = activePlaylistQueue[i];
    const item = document.createElement('div');
    item.className = 'queue-item';
    item.innerHTML = `
      <div class="queue-item-meta">
        <div class="queue-item-title">${song.title}</div>
        <div class="queue-item-artist">${song.artist}</div>
      </div>
      <div class="queue-item-actions">
        <button class="queue-action-btn play-now" data-index="${i}" title="Play Now">▶</button>
        <button class="queue-action-btn play-next" data-index="${i}" title="Play Next">↑</button>
        <button class="queue-action-btn remove-queue" data-index="${i}" title="Remove">✕</button>
      </div>
    `;
    
    item.querySelector('.play-now').addEventListener('click', () => {
      currentSongIndex = i;
      playSong(activePlaylistQueue[currentSongIndex]);
      renderQueue();
    });
    
    item.querySelector('.play-next').addEventListener('click', () => {
      const movedSong = activePlaylistQueue.splice(i, 1)[0];
      activePlaylistQueue.splice(currentSongIndex + 1, 0, movedSong);
      showToast(`"${movedSong.title}" will play next`);
      renderQueue();
      savePlayerState();
    });
    
    item.querySelector('.remove-queue').addEventListener('click', () => {
      const removedSong = activePlaylistQueue.splice(i, 1)[0];
      showToast(`Removed "${removedSong.title}" from queue`);
      if (i < currentSongIndex) currentSongIndex--;
      renderQueue();
      savePlayerState();
    });
    
    queueContent.appendChild(item);
    count++;
  }
  
  if (count === 0) {
    const emptyMsg = document.createElement('p');
    emptyMsg.textContent = "Queue is empty.";
    emptyMsg.style.color = "var(--text-secondary)";
    emptyMsg.style.fontSize = "0.85rem";
    queueContent.appendChild(emptyMsg);
  }
}

// ==========================================
// Parsing helpers
// ==========================================
function parseDurationToSeconds(durationStr) {
  const parts = durationStr.split(':');
  if (parts.length === 2) {
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  }
  return 180;
}

function formatSecondsToTime(secs) {
  const mins = Math.floor(secs / 60);
  const remainingSecs = secs % 60;
  return `${mins}:${remainingSecs.toString().padStart(2, '0')}`;
}

// ==========================================
// SPA Active UI Sync Functions
// ==========================================
function updateActiveSongUI() {
  const activeSong = activePlaylistQueue[currentSongIndex];
  if (!activeSong) return;
  
  // 1. Update play/pause button in bottom player
  const playBtn = document.getElementById('player-play-btn');
  if (playBtn) {
    playBtn.innerHTML = isPlaying ? 
      `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>` : 
      `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="play-svg-indicator"><polygon points="6 3 20 12 6 21 6 3"/></svg>`;
  }
  
  // 2. Update song row active highlight & play state indicator
  const rows = document.querySelectorAll('.song-row-item');
  rows.forEach((row, index) => {
    const titleCol = row.querySelector('.song-row-meta h4');
    const rowNumEl = row.querySelector('.song-row-number');
    const playIconEl = row.querySelector('.song-row-play-icon');
    
    const rowSongTitle = titleCol ? titleCol.textContent.trim() : '';
    
    if (rowSongTitle === activeSong.title) {
      row.classList.add('active');
      if (titleCol) titleCol.style.color = 'var(--accent)';
      
      // Update numbers to playing wave animation
      if (rowNumEl) {
        rowNumEl.innerHTML = isPlaying ? 
          `<div class="playing-wave"><div class="playing-wave-bar"></div><div class="playing-wave-bar"></div><div class="playing-wave-bar"></div></div>` : 
          `<span style="color:var(--accent); font-weight:700;">${index + 1}</span>`;
      }
    } else {
      row.classList.remove('active');
      if (titleCol) titleCol.style.color = 'var(--text-main)';
      if (rowNumEl) rowNumEl.textContent = index + 1;
    }
  });

  // 3. Update play buttons inside Home & Library grids
  const quickCards = document.querySelectorAll('.quick-card');
  quickCards.forEach(card => {
    const plName = card.getAttribute('data-playlist');
    const playBtn = card.querySelector('.play-hover-btn');
    if (playBtn) {
      if (isPlaying && isCurrentPlaylist(plName)) {
        playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>`;
      } else {
        playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>`;
      }
    }
  });
  
  const musicCards = document.querySelectorAll('.music-card');
  musicCards.forEach(card => {
    const name = card.getAttribute('data-playlist') || card.getAttribute('data-album') || card.getAttribute('data-artist-profile');
    const playBtn = card.querySelector('.play-hover-btn');
    if (playBtn) {
      if (isPlaying && isCurrentPlaylist(name)) {
        playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>`;
      } else {
        playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>`;
      }
    }
  });

  updateVisualizerState();
}

function isCurrentPlaylist(name) {
  if (!name) return false;
  const currentSong = activePlaylistQueue[currentSongIndex];
  if (!currentSong) return false;
  
  if (name === 'Liked Songs') return likedSongIds.includes(currentSong.id);
  if (name === 'Coding Beats' || name === 'Chill Mix') return currentSong.category === 'Pop' || currentSong.category === 'Rock';
  if (name === 'Workout Energy') return currentSong.category === 'Workout';
  if (name === 'Focus Mode') return currentSong.category === 'Focus' || currentSong.category === 'Classical';
  if (name === 'Tamil Hits') return currentSong.category === 'Tamil';
  if (name === 'Nova Lane' || name === 'Byte Beat') return currentSong.artist === name;
  return false;
}

// ==========================================
// Your Library Sidebar Filter Playlists
// ==========================================
function filterSidebarList(type) {
  const items = document.querySelectorAll('.playlist-sidebar-item');
  items.forEach(item => {
    if (item.id === 'sidebar-liked-songs-item') {
      item.style.display = (type === 'all' || type === 'playlists') ? 'flex' : 'none';
      return;
    }
    
    const subtitleEl = item.querySelector('.sidebar-item-subtitle');
    const subtitle = subtitleEl ? subtitleEl.textContent.toLowerCase() : '';
    
    if (type === 'all') {
      item.style.display = 'flex';
    } else if (type === 'playlists') {
      item.style.display = (subtitle.includes('playlist') || subtitle.includes('custom')) ? 'flex' : 'none';
    } else if (type === 'artists') {
      item.style.display = subtitle.includes('artist') ? 'flex' : 'none';
    } else if (type === 'albums') {
      item.style.display = subtitle.includes('album') ? 'flex' : 'none';
    }
  });
}
