const images = [
  "/cake1.jpg", "/cake2.jpg", "/cake3.jpg", "/cake4.jpg",
];

function Carousel() {
  // TODO: track current index with useState
  // TODO: auto-advance every 3s with useEffect + setInterval
  // TODO: Prev/Next buttons to manually change index
  return (
    <div>
      <img src={images[0]} alt="cake" />
    </div>
  );
}
export default Carousel;
