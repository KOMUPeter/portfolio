// ... (your existing imports)

export default function HeaderNavigation() {
    const [activeLink, setActiveLink] = useState("accueil");
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Add state for menu toggle
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
      closeMenu(); // Close the menu when a link is clicked
    };
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  
    return (
      <div
        className={`${scrolled ? styles.scrolled : ""} ${styles.navContainer}`}
      >
        <header>
          {/* ... (your existing code) */}
  
          {/* Add a button for the menu toggle */}
          <button className={styles.menuToggle} onClick={toggleMenu}>
            Menu
          </button>
  
          {/* ... (your existing code) */}
  
          {/* Conditionally render the menu based on isMenuOpen state */}
          {isMenuOpen && (
            <nav>
              <ul>
                <li>
                  <Link
                    to="/"
                    className={activeLink === "accueil" ? styles.active : ""}
                    onClick={() => onUpdateActiveLink("accueil")}
                  >
                    Accueil
                  </Link>
                </li>
  
                <li>
                  <Link
                    to="/competences"
                    className={activeLink === "competences" ? styles.active : ""}
                    onClick={() => onUpdateActiveLink("competences")}
                  >
                    Compétences
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projets"
                    className={activeLink === "projets" ? styles.active : ""}
                    onClick={() => onUpdateActiveLink("projets")}
                  >
                    Projets
                  </Link>
                </li>
              </ul>
  
              {/* ... (your existing code) */}
            </nav>
          )}
        </header>
      </div>
    );
  }
  