const fetch = require("node-fetch");

async function fetchGoogleHomePage() {
  try {
    const response = await fetch("https://www.google.com", {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const html = await response.text();
    console.log(html);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

fetchGoogleHomePage();
