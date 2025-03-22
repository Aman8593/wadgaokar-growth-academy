import "../../styles/About.scss";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to Wadgaonkar Trading Academy's a behind-the-scenes glimpse at
          the individuals, initiatives, and viewpoints that drive the business.
          Get inspired by our incredible faculty, staff, and students as well as
          their efforts. You will discover that we place love at the centre of
          all we do, from assisting our students in becoming self-assured
          merchants to our motivating teachers, our network of centres, our
          contented staff, the community, and more. Thank you for finding us.
        </p>
        <p>
          We are all steadfastly dedicated to changing the world and
          improving people's lives!
        </p>
      </div>
      <div className="about-image">
        <img src="/images/about.jpg" alt="Trading Tools" />
      </div>
    </div>
  );
};

export default About;
