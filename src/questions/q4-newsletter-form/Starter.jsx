import { useState } from "react";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <p>Thank you for subscribing, {email}!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Subscribe
      </button>
    </form>
  );
}

export default NewsletterForm;