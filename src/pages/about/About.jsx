import SectionMain from "../../components/SectionMain";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="container">
        <section className="aboute-main-section all-main_section">
          <SectionMain />
        </section>
        <section className="commit-section">
          <div className="commit-container">
            <div className="commit-info">
              <div className="commit-image">
                <img alt="logo" />
              </div>
              <div className="commit-discription">
                <h3>Our commitment</h3>
                <p>
                  We’re built on a simple mission and a commitment to doing good
                  along the way. We want to make it easy for you to discover and
                  brew the world’s best coffee at home. It all starts at the
                  source. To locate the specific lots we want to purchase, we
                  travel nearly 60 days a year trying to understand the
                  challenges and opportunities in each of these places. We
                  collaborate with exceptional coffee growers and empower a
                  global community of farmers through with well above fair-trade
                  benchmarks. We also offer training, support farm community
                  initiatives, and invest in coffee plant science. Curating only
                  the finest blends, we roast each lot to highlight tasting
                  profiles distinctive to their native growing region.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
