import Carousel from "@itseasy21/react-elastic-carousel";
import { TrendItems } from "./TrendItems";

const Trend = () => {
   const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <div className="carousel trending_carousel">
      <h2 className="subject">Trending Now</h2>

      <Carousel itemsToShow={3} breakPoints={breakPoints}>
        {TrendItems.map((i) => {
          return (
            <div className="box" key={i.id}>
              <img src={i.imgURL} alt={i.title} />
              <div className="text">
                <span className="title">{i.title}</span>
                <span className="price">{indexedDB.price}</span>
                <p className="style">{i.style}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Trend;
