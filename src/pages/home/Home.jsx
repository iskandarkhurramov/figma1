import "./Home.css";
const data = [
  {
    url: "public/assets/home/desktop/image-gran-espresso.png",
    title: "Gran Espresso",
    discription:
      "Light and flavorful blend with cocoa and black pepper for an intense experience.",
  },
  {
    url: "public/assets/home/desktop/image-planalto.png",
    title: "Planalto",
    discription:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
  },
  {
    url: "public/assets/home/desktop/image-piccollo.png",
    title: "Piccollo",
    discription:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
  },
  {
    url: "public/assets/home/desktop/image-danche.png",
    title: "Danche",
    discription:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
  },
];
const data1 = [
  {
    url: "public/assets/home/desktop/icon-coffee-bean.svg",
    title: "Best quality",
    discription:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    url: "public/assets/home/desktop/icon-gift.svg",
    title: "Exclusive benefits",
    discription:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    url: "public/assets/home/desktop/icon-truck.svg",
    title: "Free shipping",
    discription:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];
const data2 = [
  {
    number: "01",
    title: "Pick your coffee",
    discription:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    number: "02",
    title: "Choose the frequency",
    discription:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    number: "03",
    title: "Receive and enjoy!",
    discription:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];
function Home() {
  return (
    <div className="home">
      <div className="container home-main">
        <section className="home-main_section">
          
          <div className="home-info">
            <div className="home-discription">
              <h1>Great coffee made simple.</h1>
              <div className="home-discription-info">
                <p>
                  Start your mornings with the world’s best coffees. Try our
                  expertly curated artisan coffees from our best roasters
                  delivered directly to your door, at your schedule.
                </p>
              </div>
            </div>
            <div className="button">
              <button>Create your plan</button>
            </div>
          </div>
        </section>
        <section className="collection-section">
          <div className="collection-container">
            <div className="collection-title">
              <span>our collection</span>
            </div>
            <div className="collection-items">
              {data &&
                data.map((item) => {
                  return (
                    <div key={item.title} className="collection-item">
                      <div className="collection-item-image">
                        <img src={item.url} alt="image" />
                      </div>
                      <div className="collection-item-info">
                        <div className="collection-item-title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="collection-item-discription">
                          <p>{item.discription}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
        <section className="choose-use-section">
          <div className="container">
            <div className="choose">
              <div className="choose-info">
                <h2>Why choose us?</h2>
                <p>
                  A large part of our role is choosing which particular coffees
                  will be featured in our range. This means working closely with
                  the best coffee growers to give you a more impactful
                  experience on every level.
                </p>
              </div>
            </div>
            <div className="choose-cards">
              {data1.map((item) => {
                return (
                  <div key={item.title} className="choose-card">
                    <div className="choose-card-img">
                      <img src={item.url} alt="icon" />
                    </div>
                    <div className="choose-card-info">
                      <div className="choose-card-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="choose-card-discription">
                        <p>{item.discription}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="works-section">
          <div className="container works">
            <div className="works-title">
              <h3>How it works</h3>
            </div>
            <div className="works-line">
              <div className="timeline">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </div>
            <div className="works-cards">
              {data2.map((item) => {
                return (
                  <div key={item.title} className="works-card">
                    <div className="works-card-number">
                      <h1>{item.number}</h1>
                    </div>
                    <div className="works-card-title">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="works-card-discription">
                      <p>{item.discription}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="button">
              <button>Create your plan</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
