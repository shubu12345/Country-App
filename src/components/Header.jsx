const Header = ({ theme }) => {
  const [isDark, setisDark] = theme;
  return (
    <>
      <header className={`header-container ${isDark ? "dark" : ""}`}>
        <div className="header-content">
          <h2 className="title">Where in the world?</h2>
          <p
            className="theme-changer"
            onClick={() => {
              setisDark(!isDark);
              localStorage.setItem("isDarkMode", !isDark);
            }}
          >
            <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
            &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
          </p>
        </div>
      </header>
    </>
  );
};
export default Header;
