import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="paddings innerWidth h-container">
        <div className="artistName">
          <a href="#">SOUMYA</a>
        </div>

        <div className="flexCenter h-menu">
          <a href="#">EXPERIENCE</a>
          <a href="#">MENU</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
