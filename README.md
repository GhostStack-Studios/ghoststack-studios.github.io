# 👻 GhostStack Studios

**Invisible Code. Tactical Power.**  
Welcome to the official GitHub Pages repository for **GhostStack Studios**, a South African-based software development studio specializing in tactical airsoft applications, mission deployment, and real-time score tracking.

![GhostStack Logo](assets/logo.png)

---

## 🧠 What We Do

We build mission-ready tools for immersive gameplay, tactical coordination, and multi-device synchronization — engineered for elite airsoft teams and simulation enthusiasts.

### 🔧 Core Features:
- 🎯 **Real-time Score Tracking**
- 📡 **Mission Deployment System**
- 📱 **Multi-Device Synchronization**
- 🛠 **Unity + Firebase Technology Stack**

---

## 🌐 Live Site

Visit the live GhostStack website at:  
➡️ [https://ghoststack-studios.github.io](https://ghoststack-studios.github.io)

---

## 📫 Contact

- 📧 Email: [ghoststackstudios@gmail.com](mailto:ghoststackstudios@gmail.com)  
- 💻 GitHub: [github.com/GhostStack-Studios](https://github.com/GhostStack-Studios)

---

## 🗂 Repository Structure

```

📁 ghoststack-studios.github.io/
├── index.html        # Main landing page
├── style.css         # Styling (dark theme + neon)
└── assets/
└── logo.png      # Logo file for branding

```

---

## 🚀 Technologies Used

- **HTML5 / CSS3**
- **WebStorm (JetBrains IDE)**
- **GitHub Pages (Hosting)**
- **Firebase & Unity (for upcoming app)**

---

## 📌 License

This project is maintained by GhostStack Studios. All rights reserved.  
For usage or collaboration, please contact us via email.

---

> 🧪 _Stay low. Code fast. Deploy tactically.

## Index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GhostStack Studios</title>
    <!-- SEO Meta -->
    <meta name="description" content="GhostStack Studios – Tactical software for airsoft missions, real-time score tracking, and squad-based synchronization." />
    <meta name="keywords" content="GhostStack, Airsoft App, Tactical Software, Firebase, Unity, Mission Control, Score Tracker" />
    <meta name="author" content="GhostStack Studios" />
    <!-- Open Graph -->
    <meta property="og:title" content="GhostStack Studios" />
    <meta property="og:description" content="Invisible Code. Tactical Power. Mission-ready tools for immersive airsoft gameplay." />
    <meta property="og:image" content="assets/preview.png" />
    <meta property="og:url" content="https://ghoststack-studios.github.io" />
    <meta property="og:type" content="website" />
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="GhostStack Studios" />
    <meta name="twitter:description" content="Invisible Code. Tactical Power." />
    <meta name="twitter:image" content="assets/preview.png" />
    <!-- Fonts & Style -->
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Roboto&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <script defer src="script.js"></script>
</head>
<body>
<!-- Preloader -->
<div id="preloader">
    <div class="loader"></div>
</div>
<!-- Navigation -->
<header class="navbar">
    <div class="container">
        <a href="index.html"><img src="assets/logo.png" alt="GhostStack Logo" class="logo"></a>
        <nav class="desktop-nav">
            <a href="about.html">About</a>
            <a href="features.html">Features</a>
            <a href="contact.html">Contact</a>
        </nav>
        <div class="mobile-nav-toggle" id="mobile-toggle">☰</div>
    </div>
    <nav class="mobile-nav" id="mobile-menu">
        <a href="about.html">About</a>
        <a href="features.html">Features</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>
<!-- Hero Section -->
<section class="hero parallax reveal">
    <div class="hero-text">
        <h1>GhostStack Studios</h1>
        <p class="slogan">Invisible Code. Tactical Power.</p>
        <a href="about.html" class="btn">Learn More</a>
    </div>
</section>
<!-- Footer -->
<footer>
    <p>&copy; 2025 GhostStack Studios. All rights reserved.</p>
</footer>
</body>
</html>
```

## About.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About – GhostStack Studios</title>

    <!-- SEO Meta -->
    <meta name="description" content="Learn more about GhostStack Studios – a tactical software team creating immersive mission apps for airsoft, simulation, and real-time operations." />
    <meta name="keywords" content="GhostStack, About GhostStack, Airsoft Development, Tactical App Dev, Mission Systems, Unity Firebase" />
    <meta name="author" content="GhostStack Studios" />

    <!-- Open Graph -->
    <meta property="og:title" content="About – GhostStack Studios" />
    <meta property="og:description" content="Learn more about the team behind GhostStack Studios and our vision for tactical airsoft tools." />
    <meta property="og:image" content="assets/preview.png" />
    <meta property="og:url" content="https://ghoststack-studios.github.io/about.html" />
    <meta property="og:type" content="website" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="About – GhostStack Studios" />
    <meta name="twitter:description" content="Discover GhostStack Studios – Tactical software for airsoft and simulation." />
    <meta name="twitter:image" content="assets/preview.png" />

    <!-- Fonts & Style -->
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Roboto&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <script defer src="script.js"></script>
</head>
<body>

<!-- Preloader -->
<div id="preloader">
    <div class="loader"></div>
</div>

<!-- Navigation -->
<header class="navbar">
    <div class="container">
        <a href="index.html"><img src="assets/logo.png" alt="GhostStack Logo" class="logo"></a>
        <nav class="desktop-nav">
            <a href="about.html">About</a>
            <a href="features.html">Features</a>
            <a href="contact.html">Contact</a>
        </nav>
        <div class="mobile-nav-toggle" id="mobile-toggle">☰</div>
    </div>
    <nav class="mobile-nav" id="mobile-menu">
        <a href="about.html">About</a>
        <a href="features.html">Features</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>

<!-- About Section -->
<section class="section reveal">
    <div class="container">
        <h2>About Us</h2>
        <p>GhostStack Studios is a tactical software team specializing in mission-based airsoft applications. Founded by a team of developers with a passion for immersive gameplay, we aim to bridge real-world operations with digital tools. Our focus is on performance, real-time systems, and next-gen mission control apps.</p>
    </div>
</section>

<!-- Footer -->
<footer>
    <p>&copy; 2025 GhostStack Studios. All rights reserved.</p>
</footer>

</body>
</html>
```

## Features.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Features – GhostStack Studios</title>

    <!-- SEO Meta -->
    <meta name="description" content="Explore the tactical features of GhostStack Studios' airsoft mission tools – including real-time tracking, synchronization, and deployment systems." />
    <meta name="keywords" content="GhostStack, Airsoft Features, Score Tracking, Real-Time App, Unity Firebase, Mission Sync" />
    <meta name="author" content="GhostStack Studios" />

    <!-- Open Graph -->
    <meta property="og:title" content="Features – GhostStack Studios" />
    <meta property="og:description" content="Explore our real-time score tracking, mission deployment engine, and multi-device sync." />
    <meta property="og:image" content="assets/preview.png" />
    <meta property="og:url" content="https://ghoststack-studios.github.io/features.html" />
    <meta property="og:type" content="website" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Features – GhostStack Studios" />
    <meta name="twitter:description" content="GhostStack's core app features include real-time tracking, squad syncing, and mission deployment." />
    <meta name="twitter:image" content="assets/preview.png" />

    <!-- Fonts & Style -->
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Roboto&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <script defer src="script.js"></script>
</head>
<body>

<!-- Preloader -->
<div id="preloader">
    <div class="loader"></div>
</div>

<!-- Navigation -->
<header class="navbar">
    <div class="container">
        <a href="index.html"><img src="assets/logo.png" alt="GhostStack Logo" class="logo"></a>
        <nav class="desktop-nav">
            <a href="about.html">About</a>
            <a href="features.html">Features</a>
            <a href="contact.html">Contact</a>
        </nav>
        <div class="mobile-nav-toggle" id="mobile-toggle">☰</div>
    </div>
    <nav class="mobile-nav" id="mobile-menu">
        <a href="about.html">About</a>
        <a href="features.html">Features</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>

<!-- Features Section -->
<section class="section alt reveal">
    <div class="container">
        <h2>Core Features</h2>
        <ul class="features">
            <li>🎯 Real-time Score Tracking between squads and missions</li>
            <li>📡 Tactical Mission Deployment Engine with live updates</li>
            <li>📱 Cross-device Synchronization for squad leaders</li>
            <li>🛠 Built using Unity, Firebase, and scalable web tools</li>
        </ul>
    </div>
</section>

<!-- Footer -->
<footer>
    <p>&copy; 2025 GhostStack Studios. All rights reserved.</p>
</footer>

</body>
</html>
```

## Contacts.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact – GhostStack Studios</title>

    <!-- SEO Meta -->
    <meta name="description" content="Get in touch with GhostStack Studios – developers of tactical airsoft and mission control applications." />
    <meta name="keywords" content="GhostStack Contact, Contact Tactical Dev Team, GhostStack Studios, Airsoft App Contact" />
    <meta name="author" content="GhostStack Studios" />

    <!-- Open Graph -->
    <meta property="og:title" content="Contact – GhostStack Studios" />
    <meta property="og:description" content="Reach out to GhostStack Studios with questions, collaborations, or business inquiries." />
    <meta property="og:image" content="assets/preview.png" />
    <meta property="og:url" content="https://ghoststack-studios.github.io/contact.html" />
    <meta property="og:type" content="website" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Contact – GhostStack Studios" />
    <meta name="twitter:description" content="Reach out to our development team for collaborations or inquiries." />
    <meta name="twitter:image" content="assets/preview.png" />

    <!-- Fonts & Styles -->
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Roboto&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <script defer src="script.js"></script>
</head>
<body>

<!-- Preloader -->
<div id="preloader">
    <div class="loader"></div>
</div>

<!-- Navigation -->
<header class="navbar">
    <div class="container">
        <a href="index.html"><img src="assets/logo.png" alt="GhostStack Logo" class="logo"></a>
        <nav class="desktop-nav">
            <a href="about.html">About</a>
            <a href="features.html">Features</a>
            <a href="contact.html">Contact</a>
        </nav>
        <div class="mobile-nav-toggle" id="mobile-toggle">☰</div>
    </div>
    <nav class="mobile-nav" id="mobile-menu">
        <a href="about.html">About</a>
        <a href="features.html">Features</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>

<!-- Contact Section -->
<section class="section reveal">
    <div class="container">
        <h2>Contact Us</h2>
        <p>Fill out the form below to get in touch with us directly:</p>
        <form class="contact-form" action="mailto:ghoststackstudios@gmail.com" method="POST" enctype="text/plain">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" class="btn">Send Message</button>
        </form>
    </div>
</section>

<!-- Footer -->
<footer>
    <p>&copy; 2025 GhostStack Studios. All rights reserved.</p>
</footer>

</body>
</html>
```

## 404.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404 – Page Not Found</title>

    <meta name="robots" content="noindex" />
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Roboto&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="assets/favicon.ico" />
</head>
<body>

<div id="preloader">
    <div class="loader"></div>
</div>

<header class="navbar">
    <div class="container">
        <a href="index.html"><img src="assets/logo.png" alt="GhostStack Logo" class="logo" /></a>
        <nav class="desktop-nav">
            <a href="about.html">About</a>
            <a href="features.html">Features</a>
            <a href="contact.html">Contact</a>
        </nav>
        <div class="mobile-nav-toggle" id="mobile-toggle">☰</div>
    </div>
    <nav class="mobile-nav" id="mobile-menu">
        <a href="about.html">About</a>
        <a href="features.html">Features</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>

<section class="section reveal">
    <div class="container" style="text-align: center;">
        <h2 style="font-size: 4rem;">404</h2>
        <p style="font-size: 1.5rem; margin: 20px 0;">Uh-oh! You found a dead zone.</p>
        <p>The page you’re looking for doesn’t exist.</p>
        <a href="index.html" class="btn" style="margin-top: 30px;">Return to Home</a>
    </div>
</section>

<footer>
    <p>&copy; 2025 GhostStack Studios. All rights reserved.</p>
</footer>

<script defer src="script.js"></script>
</body>
</html>
```

## sitemap.xml
```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
        <loc>https://ghoststack-studios.github.io/</loc>
        <priority>1.0</priority>
    </url>

    <url>
        <loc>https://ghoststack-studios.github.io/about.html</loc>
        <priority>0.8</priority>
    </url>

    <url>
        <loc>https://ghoststack-studios.github.io/features.html</loc>
        <priority>0.8</priority>
    </url>

    <url>
        <loc>https://ghoststack-studios.github.io/contact.html</loc>
        <priority>0.8</priority>
    </url>

</urlset>
```

## Extra Holder
```

```

## Extra Holder
```

```