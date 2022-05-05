import { NavBar } from "./NavBar";
import { SearchBar } from "../form-elements/SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BsNavBar from "react-bootstrap/Navbar";
import BsNav from "react-bootstrap/Nav";
import BsNavDropdown from "react-bootstrap/NavDropdown";
import imageFile from "../../public/logo-desktop-en-2x.png";

export default {
  title: "Components/Nav Bar",
  component: NavBar,
};

const image = {
  src: imageFile,
  alt: 'infineon-logo',
};

const DefaultTemplate = (args) => (
  <div className="ifx__navbar">
    <NavBar {...args}>
      <div className="d-flex">
        <BsNavBar.Toggle aria-controls="basic-navbar-nav" />

        <BsNavBar.Brand href="#home">
          <img src={image.src} alt={image.alt} width="100"/>
        </BsNavBar.Brand>
        <p className="ifx__application-name">Application name</p>
      </div>

      <BsNavBar.Collapse id="basic-navbar-nav">
        <div className="d-lg-flex justify-content-lg-between flex-lg-row-reverse w-100">
          <div className="d-flex align-items-center">
            <SearchBar className="ifx__nav-searchbar" size="s"></SearchBar>

            <div className="ifx__nav-metalink-wrapper d-flex">
              <BsNav.Link className="ifx__nav-metalink" href="#">
                <div className="d-flex align-items-center">
                  <span data-text="Metalink">Metalink</span>
                  <FontAwesomeIcon icon={["fal", "user"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link className="ifx__nav-metalink" href="#">
                <div className="d-flex align-items-center">
                  <span data-text="Metalink">Metalink</span>
                  <FontAwesomeIcon icon={["fal", "globe"]}/>
                </div>
              </BsNav.Link>
            </div>
          </div>

          <div className="align-items-lg-center ifx__nav-link-wrapper ifx__mobile-show">
            <ul>
              <li>
                <BsNav.Link href="#" data-text="Nav Link 1">
                  Nav Link 1
                </BsNav.Link>
              </li>
              <li>
                <BsNav.Link href="#" data-text="Nav Link 2">
                  Nav Link 2
                </BsNav.Link>
              </li>
              <li>
                <BsNav.Link href="#" data-text="Nav Link 3">
                  Nav Link 3
                </BsNav.Link>
              </li>
              <li>
                <BsNav.Link href="#" data-text="Nav Link 4">
                  Nav Link 4
                </BsNav.Link>
              </li>
              <li>
                <BsNav.Link href="#" data-text="Nav Link 5">
                  Nav Link 5
                </BsNav.Link>
              </li>
              <li>
                <BsNav.Link href="#" data-text="Nav Link 6">
                  Nav Link 6
                </BsNav.Link>
              </li>
            </ul>
          </div>

          <div className="d-lg-flex align-items-center ifx__nav-link-wrapper ifx__desktop-show">
            <ul className="d-flex">
              <li>
                <BsNav.Link href="#" data-text="Nav Link 1">
                  Nav Link 1
                </BsNav.Link>
              </li>
              <li>
                <BsNav.Link href="#" data-text="Nav Link 2">
                  Nav Link 2
                </BsNav.Link>
              </li>
              <li>
                <BsNavDropdown title="More +" id="basic-nav-dropdown" className="active" data-text="Action default">
                  <BsNavDropdown.Item href="#action/3.1">Nav Link 3</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#action/3.2">Nav Link 4</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#action/3.3">Nav Link 5</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#action/3.4">Nav Link 6</BsNavDropdown.Item>
                </BsNavDropdown>
              </li>
            </ul>
          </div>
        </div>
      </BsNavBar.Collapse>
    </NavBar>
  </div>
);

const ExtendedTemplate = (args) => (
  <div className="ifx__navbar ifx__navbar-extended">
    <NavBar {...args}>
      <div className="d-flex align-items-center">
        <BsNavBar.Toggle aria-controls="basic-navbar-nav" />

        <BsNavBar.Brand href="#home">
          <img src={image.src} alt={image.alt} width="100"/>
        </BsNavBar.Brand>
        <p className="ifx__application-name">Application name</p>
      </div>

      <BsNavBar.Collapse id="basic-navbar-nav">
        <div className="d-flex justify-content-lg-between align-items-center">
          <SearchBar className="ifx__nav-searchbar" size="s"></SearchBar>

          <div className="ifx__nav-metalink-wrapper d-flex">
            <BsNav.Link className="ifx__nav-metalink" href="#">
              <div className="d-flex align-items-center">
                <span data-text="Metalink">Metalink</span>
                <FontAwesomeIcon icon={["fal", "user"]}/>
              </div>
            </BsNav.Link>
            <BsNav.Link className="ifx__nav-metalink" href="#">
              <div className="d-flex align-items-center">
                <span data-text="Metalink">Metalink</span>
                <FontAwesomeIcon icon={["fal", "globe"]}/>
              </div>
            </BsNav.Link>
            <BsNav.Link className="ifx__nav-metalink" href="#">
              <div className="d-flex align-items-center">
                <span data-text="Metalink">Metalink</span>
                <FontAwesomeIcon icon={["fal", "cart-shopping"]}/>
              </div>
            </BsNav.Link>
          </div>
        </div>

        <div className="ifx__nav-link-wrapper ifx__mobile-show">
          <ul>
            <li>
              <BsNav.Link href="#" data-text="Nav Link 1">
                Nav Link 1
              </BsNav.Link>
            </li>
            <li>
              <BsNav.Link href="#" data-text="Nav Link 2">
                Nav Link 2
              </BsNav.Link>
            </li>
            <li>
              <BsNav.Link href="#" data-text="Nav Link 3">
                Nav Link 3
              </BsNav.Link>
            </li>
            <li>
              <BsNav.Link href="#" data-text="Nav Link 4">
                Nav Link 4
              </BsNav.Link>
            </li>
            <li>
              <BsNav.Link href="#" data-text="Nav Link 5">
                Nav Link 5
              </BsNav.Link>
            </li>
          </ul>
        </div>
      </BsNavBar.Collapse>

      <div className="d-lg-flex ifx__nav-link-wrapper ifx__desktop-show">
        <ul className="d-flex">
          <li>
            <BsNav.Link href="#" data-text="Nav Link 1">
              Nav Link 1
            </BsNav.Link>
          </li>
          <li>
            <BsNav.Link href="#" data-text="Nav Link 2">
              Nav Link 2
            </BsNav.Link>
          </li>
          <li>
            <BsNav.Link href="#" data-text="Nav Link 3">
              Nav Link 3
            </BsNav.Link>
          </li>
          <li>
            <BsNav.Link href="#" data-text="Nav Link 4">
              Nav Link 4
            </BsNav.Link>
          </li>
          <li>
            <BsNav.Link href="#" data-text="Nav Link 5">
              Nav Link 5
            </BsNav.Link>
          </li>
        </ul>
      </div>
    </NavBar>
  </div>
);

const ExtendedLevel2Template = (args) => (
  <div className="ifx__navbar ifx__navbar-extended">
    <NavBar {...args}>
      <div className="d-flex align-items-center">
        <BsNavBar.Toggle aria-controls="basic-navbar-nav" />

        <BsNavBar.Brand href="#home">
          <img src={image.src} alt={image.alt} width="100"/>
        </BsNavBar.Brand>
        <p className="ifx__application-name">Application name</p>
      </div>

      <BsNavBar.Collapse id="basic-navbar-nav">
        <div className="d-flex align-items-center flex-wrap">
          <SearchBar className="ifx__nav-searchbar" size="s"></SearchBar>

          <BsNav.Link className="ifx__nav-metalink" href="#">
            <div className="d-flex align-items-center">
              <span data-text="Metalink">Metalink</span>
              <FontAwesomeIcon icon={["fal", "user"]}/>
            </div>
          </BsNav.Link>
          <BsNav.Link className="ifx__nav-metalink" href="#">
            <div className="d-flex align-items-center">
              <span data-text="Metalink">Metalink</span>
              <FontAwesomeIcon icon={["fal", "globe"]}/>
            </div>
          </BsNav.Link>
          <BsNav.Link className="ifx__nav-metalink" href="#">
            <div className="d-flex align-items-center">
              <span data-text="Metalink">Metalink</span>
              <FontAwesomeIcon icon={["fal", "cart-shopping"]}/>
            </div>
          </BsNav.Link>
        </div>

        <div className="ifx__nav-link-wrapper ifx__mobile-show ifx__nav-wrapper">
          <div>Menu</div>
          <div className="col-6">
            <ul>
              <li>
                <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 1">
                  <div>
                    <span>Nav Link 1</span>
                    <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                  </div>
                </BsNav.Link>

                <div className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
                  <div className="ifx__nav-mega-dropdown-mobile-content">
                    <div>
                    <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="#" data-text="Nav Link 2">
                      <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
                        Nav Link 1
                    </BsNav.Link>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 2">
                  <div>
                    <span>Nav Link 2</span>
                    <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                  </div>
                </BsNav.Link>

                <div className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
                  <div className="ifx__nav-mega-dropdown-mobile-content">
                    <div>
                    <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="#" data-text="Nav Link 2">
                      <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
                        Nav Link 2
                    </BsNav.Link>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 3">
                  <div>
                    <span>Nav Link 3</span>
                    <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                  </div>
                </BsNav.Link>

                <div className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
                  <div className="ifx__nav-mega-dropdown-mobile-content">
                    <div>
                    <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="#" data-text="Nav Link 2">
                      <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
                        Nav Link 3
                    </BsNav.Link>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 4">
                  <div>
                    <span>Nav Link 4</span>
                    <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                  </div>
                </BsNav.Link>

                <div className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
                  <div className="ifx__nav-mega-dropdown-mobile-content">
                    <div>
                    <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="#" data-text="Nav Link 2">
                      <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
                        Nav Link 4
                    </BsNav.Link>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 5">
                  <div>
                    <span>Nav Link 5</span>
                    <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                  </div>
                </BsNav.Link>

                <div className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
                  <div className="ifx__nav-mega-dropdown-mobile-content">
                    <div>
                    <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="#" data-text="Nav Link 2">
                      <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
                        Nav Link 5
                    </BsNav.Link>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </BsNavBar.Collapse>

      <div className="w-100 ifx__nav-link-wrapper ifx__desktop-show">
        <ul className="ifx__nav-list d-flex">
          <li>
            <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 1">
              Nav Link 1
            </BsNav.Link>
            <div className="w-100 ifx__nav-mega-dropdown">
              <div>
                <div className="row">
                  <div className="col-6 col-lg-3">
                    <BsNav.Link href="#" data-text="Overview Nav Link">
                      <div>
                        <span>Overview Nav Link</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                  </div>

                  <div className="col-lg-3">
                    <BsNav.Link href="#" data-text="Overview Nav Link">
                      <div>
                        <span>Overview Nav Link</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                  </div>

                  <div className="col-lg-3">
                    <BsNav.Link href="#" data-text="Overview Nav Link">
                      <div>
                        <span>Overview Nav Link</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                  </div>

                  <div className="col-lg-3">
                    <BsNav.Link href="#" data-text="Overview Nav Link">
                      <div>
                        <span>Overview Nav Link</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <div>
                        <span>Navigationlink</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 2">
              Nav Link 2
            </BsNav.Link>
            <div className="w-100 ifx__nav-mega-dropdown">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>

                <div className="col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>

                <div className="col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>

                <div className="col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 3">
              Nav Link 3
            </BsNav.Link>
            <div className="w-100 ifx__nav-mega-dropdown">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>

                <div className="col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>

                <div className="col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>

                <div className="col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 4">
              Nav Link 4
            </BsNav.Link>
            <div className="w-100 ifx__nav-mega-dropdown">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>

                <div className="col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>

                <div className="col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>

                <div className="col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 5">
              Nav Link 5
            </BsNav.Link>
            <div className="w-100 ifx__nav-mega-dropdown">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>

                <div className="col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>

                <div className="col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>

                <div className="col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </NavBar>
  </div>
);

const NavLinkWithIcon = ({label}) => (
  <div className="ifx__nav-link-with-icon">
  <span>{label}</span>
  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
  </div>
)

const ExtendedLevel3Template = (args) => (
  <div>
  <div className="ifx__navbar ifx__navbar-extended">
    <NavBar {...args}>
      <div className="d-flex align-items-center">
        <BsNavBar.Toggle aria-controls="basic-navbar-nav" />

        <BsNavBar.Brand href="#home">
          <img src={image.src} alt={image.alt} width="100"/>
        </BsNavBar.Brand>
        <p className="ifx__application-name">Application name</p>
      </div>

      <BsNavBar.Collapse id="basic-navbar-nav">
        <div className="d-flex align-items-center flex-wrap">
          <SearchBar className="ifx__nav-searchbar" size="s"></SearchBar>

          <BsNav.Link className="ifx__nav-metalink" href="#">
            <div className="d-flex align-items-center">
              <span data-text="Metalink">Metalink</span>
              <FontAwesomeIcon icon={["fal", "user"]}/>
            </div>
          </BsNav.Link>
          <BsNav.Link className="ifx__nav-metalink" href="#">
            <div className="d-flex align-items-center">
              <span data-text="Metalink">Metalink</span>
              <FontAwesomeIcon icon={["fal", "globe"]}/>
            </div>
          </BsNav.Link>
          <BsNav.Link className="ifx__nav-metalink" href="#">
            <div className="d-flex align-items-center">
              <span data-text="Metalink">Metalink</span>
              <FontAwesomeIcon icon={["fal", "cart-shopping"]}/>
            </div>
          </BsNav.Link>
        </div>

        <div className="ifx__nav-link-wrapper ifx__mobile-show ifx__nav-wrapper">
          <div>Menu</div>
          <div className="col-6">
            <ul>
              <li>
                <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 1">
                  <div>
                    <span>Nav Link 1</span>
                    <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                  </div>
                </BsNav.Link>

                <div className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
                  <div className="ifx__nav-mega-dropdown-mobile-content">
                    <div>
                    <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="#" data-text="Nav Link 1">
                      <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
                        Nav Link 1
                    </BsNav.Link>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>

                            <div className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
                              <div className="ifx__nav-mega-dropdown-mobile-content">
                                <div>
                                <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="#" data-text="Overview Nav Link">
                                  <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
                                    Overview Nav Link
                                </BsNav.Link>
                                </div>
                                <div className="row">
                                  <div className="col-sm-6">
                                    <ul>
                                      <li>
                                        <BsNav.Link href="#" data-text="Overview Nav Link">
                                          Overview Nav Link
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-sm-6">
                                    <ul>
                                      <li>
                                        <BsNav.Link href="#" data-text="Overview Nav Link">
                                          Overview Nav Link
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-sm-6">
                                    <ul>
                                      <li>
                                        <BsNav.Link href="#" data-text="Overview Nav Link">
                                          Overview Nav Link
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="col-sm-6">
                                    <ul>
                                      <li>
                                        <BsNav.Link href="#" data-text="Overview Nav Link">
                                          Overview Nav Link
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                      <li>
                                        <BsNav.Link href="#" data-text="Navigationlink">
                                          Navigationlink
                                        </BsNav.Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 2">
                  <div>
                    <span>Nav Link 2</span>
                    <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                  </div>
                </BsNav.Link>

                <div className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
                  <div className="ifx__nav-mega-dropdown-mobile-content">
                    <div>
                    <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="#" data-text="Nav Link 2">
                      <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
                        Nav Link 2
                    </BsNav.Link>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 3">
                  <div>
                    <span>Nav Link 3</span>
                    <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                  </div>
                </BsNav.Link>

                <div className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
                  <div className="ifx__nav-mega-dropdown-mobile-content">
                    <div>
                    <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="#" data-text="Nav Link 2">
                      <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
                        Nav Link 3
                    </BsNav.Link>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 4">
                  <div>
                    <span>Nav Link 4</span>
                    <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                  </div>
                </BsNav.Link>

                <div className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
                  <div className="ifx__nav-mega-dropdown-mobile-content">
                    <div>
                    <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="#" data-text="Nav Link 2">
                      <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
                        Nav Link 4
                    </BsNav.Link>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 5">
                  <div>
                    <span>Nav Link 5</span>
                    <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                  </div>
                </BsNav.Link>

                <div className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
                  <div className="ifx__nav-mega-dropdown-mobile-content">
                    <div>
                    <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="#" data-text="Nav Link 2">
                      <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
                        Nav Link 5
                    </BsNav.Link>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <BsNav.Link href="#" data-text="Overview Nav Link">
                              Overview Nav Link
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                          <li>
                            <BsNav.Link href="#" data-text="Navigationlink">
                              Navigationlink
                            </BsNav.Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </BsNavBar.Collapse>

      <div className="w-100 ifx__nav-link-wrapper ifx__desktop-show">
        <ul className="ifx__nav-list d-flex">
          <li>
            <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 1">
              Nav Link 1
            </BsNav.Link>

            <div className="w-100 ifx__nav-mega-dropdown">
              <div>
                <div className="row">
                  <div className="col-6 col-lg-3">
                    <BsNav.Link href="#" data-text="Overview Nav Link">
                      <NavLinkWithIcon label="Overview Nav Link"/>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                    </BsNav.Link>
                  </div>

                  <div className="col-lg-3">
                    <BsNav.Link href="#" data-text="Overview Nav Link">
                      <NavLinkWithIcon label="Overview Nav Link"/>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                    </BsNav.Link>
                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                    </BsNav.Link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 2">
              Nav Link 2
            </BsNav.Link>

            <div className="w-100 ifx__nav-mega-dropdown">
              <div className="ifx__nav-wrapper">
                <div className="row">
                  <div className="col-lg-6">
                    <BsNav.Link href="#" data-text="Overview Nav Link">
                      <NavLinkWithIcon label="Overview Nav Link"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>

                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>

                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>

                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>

                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>

                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>

                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>
                  </div>

                  <div className="col-lg-6">
                    <BsNav.Link href="#" data-text="Overview Nav Link">
                      <NavLinkWithIcon label="Overview Nav Link"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>

                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>

                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>

                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>

                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>

                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>

                    <BsNav.Link href="#" data-text="Navigationlink">
                      <NavLinkWithIcon label="Navigationlink"/>
                      <div className="w-100 ifx__nav-mega-dropdown-level-3">
                        <div className="w-100">
                          <div className="row">
                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>

                            <div className="col-lg-6">
                              <BsNav.Link href="#" data-text="Overview Nav Link">
                                Overview Nav Link
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                              <BsNav.Link href="#" data-text="Navigationlink">
                                Navigationlink
                              </BsNav.Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BsNav.Link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 3">
              Nav Link 3
            </BsNav.Link>
            <div className="w-100 ifx__nav-mega-dropdown">
              <div className="row">
                <div className="col-lg-6">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <NavLinkWithIcon label="Overview Nav Link"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                </div>

                <div className="col-lg-6">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <NavLinkWithIcon label="Overview Nav Link"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 4">
              Nav Link 4
            </BsNav.Link>
            <div className="w-100 ifx__nav-mega-dropdown">
              <div className="row">
                <div className="col-lg-6">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <NavLinkWithIcon label="Overview Nav Link"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                </div>

                <div className="col-lg-6">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <NavLinkWithIcon label="Overview Nav Link"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <NavLinkWithIcon label="Navigationlink"/>
                  </BsNav.Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 5">
              Nav Link 5
            </BsNav.Link>
            <div className="w-100 ifx__nav-mega-dropdown">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>

                <div className="col-lg-3">
                  <BsNav.Link href="#" data-text="Overview Nav Link">
                    <div>
                      <span>Overview Nav Link</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                  <BsNav.Link href="#" data-text="Navigationlink">
                    <div>
                      <span>Navigationlink</span>
                      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                    </div>
                  </BsNav.Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </NavBar>
  </div>

  <div style={{height: "200vh", backgroundColor: "red"}}>
        
  </div>
  </div>
);

const VerticalTemplate = (args) => (
  <div className="ifx__nav-bar-vertical" {...args}>
    <div>
      <ul className="flex-column ifx__content-nav__border nav">
        <p className="ifx__content-nav__divider">Category</p>
        <BsNav.Item as="li">
          <BsNav.Link href="#">
            Navigationlink
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link href="#">
            Navigationlink
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link href="#">
            Navigationlink
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link href="#">
            Navigationlink
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link href="#">
            Navigationlink
          </BsNav.Link>
        </BsNav.Item>
      </ul>

      <ul className="flex-column ifx__content-nav__border nav">
        <p className="ifx__content-nav__divider">Category</p>
        <BsNav.Item as="li">
          <BsNav.Link href="#">
            Navigationlink
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link href="#">
            Navigationlink
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link href="#">
            Navigationlink
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link href="#">
            Navigationlink
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link href="#">
            Navigationlink
          </BsNav.Link>
        </BsNav.Item>
      </ul>
    </div>
  </div>
);

const VerticalCollapsibleTemplate = (args) => (
  <div className="d-flex ifx__nav-bar-vertical ifx__nav-bar-vertical-collapsible">
    <div>
      <ul className="flex-column ifx__content-nav__border nav" {...args}>
        <p className="ifx__content-nav__divider">Category</p>
        <BsNav.Item as="li">
          <BsNav.Link href="#">
            <FontAwesomeIcon icon={["fal", "globe"]} />
            Nav link
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link eventKey="link-1">
            <FontAwesomeIcon icon={["fal", "compass"]} />
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link eventKey="link-2">
            <FontAwesomeIcon icon={["fal", "chart-column"]} />
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link eventKey="link-3">
            <FontAwesomeIcon icon={["fal", "house"]} />
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link eventKey="link-4">
            <FontAwesomeIcon icon={["fal", "gauge-min"]} />
          </BsNav.Link>
        </BsNav.Item>
      </ul>

      <ul className="flex-column ifx__content-nav__border nav" {...args}>
        <p className="ifx__content-nav__divider">Category</p>
        <BsNav.Item as="li">
          <BsNav.Link href="#">
            <FontAwesomeIcon icon={["fal", "globe"]} />
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link eventKey="link-1">
            <FontAwesomeIcon icon={["fal", "compass"]} />
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link eventKey="link-2">
            <FontAwesomeIcon icon={["fal", "chart-column"]} />
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link eventKey="link-3">
            <FontAwesomeIcon icon={["fal", "house"]} />
          </BsNav.Link>
        </BsNav.Item>
        <BsNav.Item as="li">
          <BsNav.Link eventKey="link-4">
            <FontAwesomeIcon icon={["fal", "gauge-min"]} />
          </BsNav.Link>
        </BsNav.Item>
      </ul>
    </div>
    <div className="d-inline-flex ifx__content-nav__border ifx__vertical-nav-icons-btn">
      <FontAwesomeIcon icon={["fal", "chevron-right"]} />
    </div>
  </div>
);

export const Default = DefaultTemplate.bind({});

export const Extended = ExtendedTemplate.bind({});

export const ExtendedLevel2 = ExtendedLevel2Template.bind({});

export const ExtendedLevel3 = ExtendedLevel3Template.bind({});

export const Vertical = VerticalTemplate.bind({});

export const VerticalCollapsible = VerticalCollapsibleTemplate.bind({});
