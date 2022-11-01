import Carousel from "@itseasy21/react-elastic-carousel";
import { GearUpItems } from "./GearUpItems";

const GearUp = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <div className="carousel GearUp_Carousel">
      <h2 className="subject">Gear Up</h2>

      <Carousel itemsToShow={3} breakPoints={breakPoints}>
        {GearUpItems.map((item) => {
          return (
            <div className="box" key={item.id}>
              <img src={item.imgURL} alt={item.title} />
              <div className="text">
                <span className="title">{item.title}</span>
                <span className="price">{item.price}</span>
                <p className="style">{item.style}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default GearUp;
