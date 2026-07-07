import { create } from "./actions";
import "./register.css";

export default function RegisterPage() {
  return (
    <main className="register-page">
      <form action={create} className="register-card">
        <h1>New Member</h1>
        <p className="register-subtitle">
          Create a ReggaeTONED account for free
        </p>

        <div className="form-row">
          <label>
            First Name
            <input name="firstName" placeholder="John" required />
          </label>

          <label>
            Last Name
            <input name="lastName" placeholder="Smith" required />
          </label>
        </div>

        <label>
          E-mail
          <input name="email" type="email" placeholder="me@example.com" required />
        </label>

        <label className="checkbox-row">
          <input type="checkbox" name="wantsUpdates" />
          <span>Send me new workouts, events, deals, and special offers</span>
        </label>

        <label>
          Phone Number
          <input name="phone" placeholder="+1 (123) 555-1234" />
        </label>

        <label>
          Password
          <input name="password" type="password" placeholder="••••••••" required />
        </label>

        <button className="create-btn" type="submit">
          Create Account
        </button>

        <div className="divider">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        <button type="button" className="social-btn">
          <span className="google-icon">G</span>
          Continue with Google
        </button>

        <button type="button" className="social-btn">
          <span className="facebook-icon">f</span>
          Continue with Facebook
        </button>
      </form>
    </main>
  );
}