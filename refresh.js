// refresh-fetch.js
// If your Node < v18, install node-fetch: `npm i node-fetch`
// and uncomment the next line:
// globalThis.fetch = require('node-fetch');

const url = "https://camo.githubusercontent.com/c66b385c93d85b80d8c0655fa1e25f9d0b990305e30e8489f1f71d01d751067d/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d444d532d4d656e756c61267374796c653d666f722d7468652d626164676526636f6c6f723d627269676874677265656e"; // <-- replace
const total = 1000;
const delayMs = 1;

async function sleep(ms){ return new Promise(r=>setTimeout(r, ms)); }

(async () => {
  console.log("Node", process.version, "using fetch:", typeof globalThis.fetch !== "undefined");
  for (let i = 1; i <= total; i++) {
    try {
      const res = await fetch(url, { method: "GET", headers: { "User-Agent": "refresh-script/1.0" } });
      // some servers send non-standard codes or redirects; log status or statusText
      console.log(`${i}: ${res.status} ${res.statusText}`);
      // consume body (important for some servers)
      try { await res.arrayBuffer(); } catch(e) {}
    } catch (e) {
      console.log(`${i}: error - ${e && e.message ? e.message : e}`);
    }
    if (i < total) await sleep(delayMs);
  }
  console.log("Completed", total, "requests.");
})();
