/* =====================================================================
   SITE SETTINGS — this is the only file you edit for each domain.
   index.html stays the same on every site.

   Rules:
   - Change only the text inside the quotes "like this".
   - Every line in a list ends with a comma, except the last one.
   - Images: put the file in the same folder and write its name ("banner.jpg"),
     or paste a full https:// link. Leave "" for a placeholder.
   - private: true = blurred photo with a lock (works on stories and grid).
   - If you make a mistake, the page shows a red bar telling you the line.
   ===================================================================== */

var CONFIG = {

  // ---------- BASICS ----------
  name: "ALICE BAKER",
  tagline: "Your favorite creator for exclusive content, live shows & more",
  avatar: "1photo.jpg",
  online: true,                     // true = green "Online" badge, false = hidden
  eyebrow: "Live creator access",
  accentColor: "#ff3d8b",           // main color (buttons, highlights)

  // ---------- THE ONE LINK ----------
  // Every button opens the popup; the popup button goes here.
  link: "https://t.ajrkmx11.com/399195/8780/32514?po=6533&aff_sub5=SF_006OG000004lmDN",

  // ---------- STATS UNDER THE NAME ----------
  stats: [
    { value: "120", label: "Videos" },
    { value: "340", label: "Photos" },
    { flag: "us", label: "USA creator" }
  ],

  // ---------- BUTTON LABELS ----------
  buttons: {
    watch: "Watch now",
    exclusive: "Exclusive content",
    viewAll: "View all content"
  },

  // ---------- LIVE STRIP ----------
  live: {
    title: "Live shows this week",
    subtitle: "Join live sessions and connect in real time."
  },

  // ---------- CONTENT SECTION ----------
  content: {
    eyebrow: "Latest from Creator",
    title: "340 Photos",
    updated: "Updated today"
  },

  // ---------- STORIES (tap the profile picture) ----------
  // They never expire. button: "" = no button on that story.
  stories: [
    { image: "1photo.jpg", caption: "Story 1", button: "", seconds: 2 },
    { image: "2photo.jpg", caption: "Story 2", button: "", seconds: 2 },
    { image: "3photo.jpg", caption: "New set is up", button: "See it", seconds: 3, private: true }
  ],

  // ---------- PREVIEW GRID (4 photos) ----------
  grid: [
    { image: "1photo.jpg" },
    { image: "2photo.jpg" },
    { image: "3photo.jpg" },
    { image: "1photo.jpg", private: true, title: "Private drop", subtitle: "Tap to unlock" }
  ],

  // ---------- POPUP ----------
  popup: {
    eyebrow: "Exclusive access",
    headline: "Watch my content for free on Jerkmate",
    steps: [
      "Create a free account",
      "Get the Lifetime membership",
      "Find me and start watching"
    ],
    banner: "https://www.imglnky.com/8780/PMKT-1157_DESIGN-16618_BannersWebinar_HBD_300100.gif",
    buttonText: "Join for free now!"
  },

  // ---------- FOOTER ----------
  dmcaEmail: "furtherinfos@gov.usa",
  footerNote: "18+ only. All creators are 18 or older."
};
