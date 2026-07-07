import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <header className="top-strip">
        <span>English ▾</span>
        <span>High Contrast</span>
        <span>Customer Support</span>
        <span>Contact Sales</span>
      </header>

      <nav className="navbar">
        <img src="/regLOGOI.png" alt="ReggaeTONED Gym" className="site-logo" />

        <div className="nav-links">
          <a>Workouts</a>
          <a>Programs</a>
          <a>Pricing</a>
          <a>Resources</a>
        </div>

        <div className="nav-buttons">
          <button className="btn primary">Book a class</button>
          <Link href="/customers/register" className="btn outline">
            Join free
          </Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">REGGAETONED FITNESS EXPERIENCE</p>

          <h1>
            Where rhythm, strength, <br />
            and energy go to <span>flow</span>.
          </h1>

          <p>
            Train with tropical energy, reggaeton beats, and focused workouts
            designed to keep you moving.
          </p>

          <div className="hero-buttons">
            <button className="btn primary big">Book a class</button>
            <Link href="/customers/register" className="btn light big">
              Join free
            </Link>
          </div>
        </div>
      </section>

      <section className="customers">
        <p>
          Join a community built around music, movement, motivation, and
          tropical fitness energy.
        </p>

        <div className="brand-row">
          <span>REGGAETON</span>
          <span>FITNESS</span>
          <span>ENERGY</span>
          <span>FOCUS</span>
          <span>FLOW</span>
        </div>
      </section>

      <section className="platform">
        <p className="section-label">Powered by rhythm</p>
        <h2>ReggaeTONED Fitness Platform</h2>
        <p className="section-subtitle">
          ReggaeTONED brings together music, attitude, and focus to create a
          workout experience that feels powerful and fun.
        </p>

        <div className="cards-grid">
          {["Dance Cardio", "Strength Training", "Core Burn", "Reggaeton Flow"].map(
            (item) => (
              <div className="tool-card" key={item}>
                <h4>{item}</h4>
                <p>
                  Music-driven fitness sessions designed to help you move,
                  sweat, and stay motivated.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <footer className="footer">
        <h3>ReggaeTONED</h3>
        <p>Copyright © 2026 ReggaeTONED. Music. Attitude. Focus.</p>
      </footer>
    </main>
  );
}