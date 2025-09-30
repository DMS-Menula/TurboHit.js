<h1 align="center">
  ⚡ TurboHit.js
  <br>
  <sub>Send 1000+ Requests Like a Pro (Safely!)</sub>
</h1>

<p align="center">
  <img src="https://img.shields.io/github/stars/DMS-Menula/TurboHit.js?style=for-the-badge" />
  <img src="https://img.shields.io/github/forks/DMS-Menula/TurboHit.js?style=for-the-badge" />
  <img src="https://img.shields.io/github/license/DMS-Menula/TurboHit.js?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Made%20By-Menula-blueviolet?style=for-the-badge" />
</p>

<p align="center">
  🚀 A powerful, ethical request refresher tool built with pure Node.js.  
  💥 Hit URLs with confidence, control, and cool customizations.  
</p>

---

## 🔥 What is TurboHit.js?

**TurboHit.js** is a developer-focused utility to **send bursts of GET requests** to any URL — **with full control over delay, total requests, and safety locks.**

✅ Great for:
- Backend performance testing
- Caching warm-ups
- Monitoring reliability
- Localhost server stress tests

❌ Not for:
- DDoS
- Malicious use
- Targeting others’ servers without permission

---

## ✨ Features

- ⚡ 100% Node.js (no dependencies)
- 🔒 Built-in safety guard (prevents abuse)
- ⏱️ Adjustable delay (ms)
- 📈 Real-time logs
- 🌐 Supports HTTPS + HTTP
- 🧪 Works great with `localhost`, `httpbin`, etc.

---

## 🧠 How It Works

```bash
# Basic usage (safe: only 1 request)
node refresh.js
````

```bash
# Power mode (1000+ requests) 🚨 ONLY if you're authorized!
TARGET_URL="https://your-site.com" \
TOTAL=1000 \
DELAY_MS=1000 \
ALLOW_UNSAFE=true \
node refresh.js
```

---

## ⚠️ Use Responsibly

> 🛑 TurboHit.js is for **educational, ethical, and personal testing** only.
> Do **NOT** use it to spam, attack, or harm third-party services.

If you abuse this tool, you're fully responsible for the consequences. I do **not** condone or support any malicious use.

---

## 🌟 Preview

```
Starting. Node v18.17.0
1: 200 OK
2: 200 OK
3: 200 OK
...
1000: 200 OK
✅ Completed 1000 requests.
```

---

## 📦 File Structure

```
TurboHit.js/
├── refresh.js       # Main request loop
├── README.md        # This file ✨
├── LICENSE          # MIT License
```

---

## 🛠 Requirements

* Node.js v14+
* Terminal/CLI access
* Your own or permitted server to test

---

## 💡 Pro Tips

* Test on `http://localhost:3000` or `https://httpbin.org/status/200`
* Log all responses to a file with `>> log.txt`
* Add retries or concurrency for advanced use (coming soon!)

---

## 🤝 Contributing

Love it? Found a bug?
Fork it, star it ⭐, and send a PR or open an issue. Let’s make it even better.

---

## 🧾 License

MIT License © 2025 [Menula De Silva](https://github.com/DMS-Menula)
See [LICENSE](./LICENSE) for details.

---

## 🔗 Connect with Me

<p align="left">
  <a href="https://github.com/DMS-Menula"><img src="https://img.shields.io/badge/GitHub-DMS--Menula-informational?style=for-the-badge&logo=github"></a>
  <a href="https://dms-menula.github.io"><img src="https://img.shields.io/badge/Portfolio-My_Website-critical?style=for-the-badge&logo=firefox-browser"></a>
  <a href="https://www.linkedin.com/in/dmsmenula"><img src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin"></a>
  <a href="https://dev.to/dmsmenula"><img alt="Dev.to" src="https://img.shields.io/badge/Dev.to-0A0A0A.svg?style=for-the-badge&logo=devdotto&logoColor=white"></a>
</p>

---

## 📣 Bonus

> 💬 Want to get featured in the README?
> Use the script, tag me on LinkedIn or GitHub with screenshots — I’ll shout you out! 🔥

---

<p align="center">
  <b>⭐ Star this repo if you love tools that make dev life easier!</b><br><br>
  <img src="https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif" width="300" />
</p>