import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Carousel visibleItemsCount={3}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i, k) => (
          <div style={{ fontSize: 32 }} key={k}>
            {i}
          </div>
        ))}
      </Carousel> */}

      <Carousel2 visibleItemsCount={3} withIndicator isInfinite>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i, k) => (
          <div style={{ fontSize: 32 }} key={k}>
            {i}
          </div>
        ))}
      </Carousel2>
    </div>
  );
}
