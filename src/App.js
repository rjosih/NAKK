import React from "react";

import "./App.css";

function App() {
  if (window !== undefined) {
    window.addEventListener("resize", function () {
      const footer = document.querySelector(".homepage-footer");
      const desktopHeight = 758;

      if (this.window.innerHeight < desktopHeight) {
        footer.classList.remove("homepage-footer--desktop");
        footer.classList.add("homepage-footer--mobile");
      } else {
        footer.classList.add("homepage-footer--desktop");
        footer.classList.remove("homepage-footer--mobile");
      }
    });
  }

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="NÄKK - Cocktailbar i Kalmar"
          content="NÄKK - Cocktailbar i Kalmar"
        />
        <meta name="description" content="Kalmars bästa cocktailbar Näkk" />
        <meta
          name="keywords"
          content="Best50, Kalmar, Bar, Postgatan, Näkk, Cocktailbar"
        />
        <meta name="author" content="Rosa Ekström" />
        <link rel="icon" href="%PUBLIC_URL%/Nakk_favicon.png" />
        <title>NÄKK - Kalmar</title>
        <link rel="icon" href="/Nakk_favicon.png" />
      </head>
      <main>
        <div className="homepage-socialmedia">
          <div className="homepage-socialmedia-container">
            <a
              href="https://instagram.com/nakkbar"
              className="homepage-socialmedia--link"
            >
              <img
                src="/Instagram_logo.png"
                alt="Instagram Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://facebook.com/nakkbar"
              className="homepage-socialmedia--link"
            >
              <img
                src="/Facebook_logo.png"
                alt="Facebook Logo"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
        <div className="homepage-container">
          <div className="homepage-wrapper">
            <img
              src="/Nakk_logo.png"
              alt="Nakk Logo"
              width={300}
              height={170}
            />
            <div className="homepage-container--title">
              <h1>NÄKK</h1>
            </div>
            <div className="homepage-container--info">
              <div className="homepage-container--text">OPENING HOURS</div>
              <div>
                <div className="homepage-container--days">Wednesday - Sunday</div>
                <div className="homepage-container--time">17-LATE</div>
                {/* <div className="homepage-container--menu">
                  <a
                    href="https://postgatan.nu/"
                    className="homepage-container--booking"
                  >
                    Menu
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="homepage-footer homepage-footer--desktop">
        <div className="homepage-footer-container">
          <div className="homepage-footer--title">FIND US</div>
          <div className="homepage-footer--address">Postgatan 5</div>
          <div className="homepage-footer--address">Kalmar</div>
        </div>
        <div className="homepage-footer-container">
          <img
            src="/Postgatan_name.png"
            alt="Postgatan logo namn"
            width={350}
            height={30}
          />
          <div className="homepage-footer--creator">
            Skapad med kärlek av Rosa Ekström
          </div>
        </div>
        <div className="homepage-footer-container">
          <div className="homepage-footer--title">CONTACT US </div>
          <div className="homepage-footer-wrapper">
            <a href="tel:0480408690" className="homepage-footer--phone">
              0480 – 40 86 90
            </a>
          </div>
          <div className="homepage-footer-wrapper">
            <a href="mailto:hej@nakk.nu" className="homepage-footer--mail">
              hej@nakk.nu
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
