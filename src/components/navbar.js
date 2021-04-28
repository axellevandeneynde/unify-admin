import logo from '../assets/unify-admin-logo.svg'

function NavBar() {
    return (
        <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="">
                    <img src={logo} width="112" height="28"></img>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">
                        Add new publication
      </a>

                    <a className="navbar-item">
                        Update publication
      </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
