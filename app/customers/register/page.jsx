import { create } from "./actions";

export default function RegisterPage() {
  return (
    <main className="signup-page">
      <form action={create} className="signup-card">
        <h1>New Member</h1>
        <p>Create a ReggaeTONED account for free</p>

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
          Email
          <input name="email" type="email" placeholder="me@example.com" required />
        </label>

        <label className="checkbox-row">
          <input type="checkbox" name="wantsUpdates" />
          Send me the newest updates, deals, and special offers
        </label>

        <label>
          Phone
          <input name="phone" placeholder="+1 (123) 555-1234" />
        </label>

        <label>
          Password
          <input name="password" type="password" placeholder="••••••••" required />
        </label>

        <button type="submit">Create Account</button>
      </form>
    </main>
  );
}