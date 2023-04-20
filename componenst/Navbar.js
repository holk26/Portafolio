import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Portafolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${router.asPath === "/" ? "active" : ""}`}
                aria-current="page"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  router.asPath.includes("/blog") ? "active" : ""
                }`}
                aria-current="page"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  router.asPath.includes("/github") ? "active" : ""
                }`}
                aria-current="page"
                href="/github"
              >
                Github
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mas
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <h6 class="dropdown-header">Perfil</h6>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Iniciar sesion
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Registrate
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cerrar Sesion
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
