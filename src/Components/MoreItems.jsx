const MoreItems = () => {
  return (
    <div className="more-items">
      <div className="box">
        <h2 className="subject">More Nike</h2>

        <div className="responsive">
          <div className="gallery">
            <img src="img/OtherNike/menPoster.jpg" alt="menPoster" />
            <div className="content">
              <a href="#" className="shop">
                Men's
              </a>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img src="img/OtherNike/kidPoster.jpg" alt="kidPoster" />
            <div className="content">
              <a href="#" className="shop">
                Kid's
              </a>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <img src="img/OtherNike/womenPoster.jpg" alt="womenPoster" />
            <div className="content">
              <a href="#" className="shop">
                Women's
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreItems;
