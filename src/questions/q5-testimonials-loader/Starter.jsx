import { useState, useEffect } from "react";

function Testimonials() {
  const [loading, setLoading] = useState(true);

  const testimonials = [
    "This tool saved us 10 hours a week!",
    "Support team is incredibly responsive.",
    "Best investment we made this year.",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <p className="loading-text">Loading testimonials...</p>;
  }

  return (
    <div>
      {testimonials.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </div>
  );
}

export default Testimonials;