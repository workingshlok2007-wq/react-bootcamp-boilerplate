function Testimonials() {
  // TODO: add loading state, use useEffect to simulate a 1.5s fetch delay
  const testimonials = [
    "This tool saved us 10 hours a week!",
    "Support team is incredibly responsive.",
    "Best investment we made this year.",
  ];

  return (
    <div>
      {testimonials.map((t, i) => <p key={i}>{t}</p>)}
    </div>
  );
}
export default Testimonials;
