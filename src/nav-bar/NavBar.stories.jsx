import { NavBar } from "./NavBar";
import { SearchBar } from "../form-elements/SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BsNavBar from "react-bootstrap/Navbar";
import BsNav from "react-bootstrap/Nav";
import BsNavDropdown from "react-bootstrap/NavDropdown";
import BsButton from "react-bootstrap/Button";
import imageFile from "../../public/logo-desktop-en-2x.png";
import { useEffect } from "react";
import { initNavBar, initVerticalNavBar } from "./nav-bar";

export default {
  title: "Components/Nav Bar",
  component: NavBar,
};

const image = {
  src: imageFile,
  alt: 'infineon-logo',
};

const JsWrapper = ({ children }) => {
  useEffect(() => {
    initNavBar();
    initVerticalNavBar();
  }, [])

  return (
    <>
      {children}
    </>
  );
}

const DefaultTemplate = (args) => {
  return (
    <JsWrapper>
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
                    <BsNavDropdown title="More" id="basic-nav-dropdown" className="active" data-text="More">
                      <BsNavDropdown.Item href="#">Nav Link 3</BsNavDropdown.Item>
                      <BsNavDropdown.Item href="#">Nav Link 4</BsNavDropdown.Item>
                      <BsNavDropdown.Item href="#">Nav Link 5</BsNavDropdown.Item>
                      <BsNavDropdown.Item href="#">Nav Link 6</BsNavDropdown.Item>
                    </BsNavDropdown>
                  </li>
                </ul>
              </div>
            </div>
          </BsNavBar.Collapse>
        </NavBar>
      </div>

      <div style={{height: "200vh"}}></div>
    </JsWrapper>
  );
}

const ExtendedTemplate = (args) => {
  return (
    <JsWrapper>
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
                <BsNavDropdown title="Nav Link 1" id="basic-nav-dropdown" className="active" data-text="Nav Link 1">
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                </BsNavDropdown>
              </li>

              <li>
                <BsNavDropdown title="Nav Link 2" id="basic-nav-dropdown" className="active" data-text="Nav Link 2">
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                </BsNavDropdown>
              </li>

              <li>
                <BsNavDropdown title="Nav Link 3" id="basic-nav-dropdown" className="active" data-text="Nav Link 3">
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                </BsNavDropdown>
              </li>

              <li>
                <BsNavDropdown title="Nav Link 4" id="basic-nav-dropdown" className="active" data-text="Nav Link 4">
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                </BsNavDropdown>
              </li>

              <li>
                <BsNavDropdown title="Nav Link 5" id="basic-nav-dropdown" className="active" data-text="Nav Link 5">
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                  <BsNavDropdown.Item href="#">Action default</BsNavDropdown.Item>
                </BsNavDropdown>
              </li>
            </ul>
          </div>
        </NavBar>
      </div>

      <div style={{height: "200vh"}}></div>
    </JsWrapper>
  );
}

const ExtendedLevel2Template = (args) => {
  return (
    <JsWrapper>
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
                  <div className="ifx__nav-wrapper">
                    <div className="row">
                      <div className="col-3">
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

                      <div className="col-3">
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

                      <div className="col-3">
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

                      <div className="col-3">
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
              </li>

              <li>
                <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 2">
                  Nav Link 2
                </BsNav.Link>
                <div className="w-100 ifx__nav-mega-dropdown">
                  <div className="ifx__nav-wrapper">
                    <div className="row">
                      <div className="col-3">
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

                      <div className="col-3">
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

                      <div className="col-3">
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

                      <div className="col-3">
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
              </li>

              <li>
                <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 3">
                  Nav Link 3
                </BsNav.Link>
                <div className="w-100 ifx__nav-mega-dropdown">
                  <div className="ifx__nav-wrapper">
                    <div className="row">
                      <div className="col-3">
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

                      <div className="col-3">
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

                      <div className="col-3">
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

                      <div className="col-3">
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
              </li>

              <li>
                <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 4">
                  Nav Link 4
                </BsNav.Link>
                <div className="w-100 ifx__nav-mega-dropdown">
                  <div className="ifx__nav-wrapper">
                    <div className="row">
                      <div className="col-3">
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

                      <div className="col-3">
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

                      <div className="col-3">
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

                      <div className="col-3">
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
              </li>

              <li>
                <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 5">
                  Nav Link 5
                </BsNav.Link>
                <div className="w-100 ifx__nav-mega-dropdown">
                  <div className="ifx__nav-wrapper">
                    <div className="row">
                      <div className="col-3">
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

                      <div className="col-3">
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

                      <div className="col-3">
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

                      <div className="col-3">
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
              </li>
            </ul>
          </div>
        </NavBar>
      </div>

      <div style={{height: "200vh"}}></div>
    </JsWrapper>
  );
}

// Mobile
const NavMegaDropdownMobileLayer3 = ({label}) => (
  <div className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
    <div className="ifx__nav-mega-dropdown-mobile-content">
      <div>
      <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="#" data-text="Overview Nav Link">
        <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
          {label}
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
)

// Mobile
const NavMegaDropdownMobile = ({label}) => (
  <div className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
    <div className="ifx__nav-mega-dropdown-mobile-content">
      <div>
      <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="#" data-text="Nav Link 1">
        <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
          {label}
      </BsNav.Link>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <ul>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Overview Nav Link">
                <div>
                  <span>Overview Nav Link</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Overview Nav Link"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
          </ul>
        </div>

        <div className="col-sm-6">
          <ul>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Overview Nav Link">
                <div>
                  <span>Overview Nav Link</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Overview Nav Link"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
          </ul>
        </div>

        <div className="col-sm-6">
          <ul>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Overview Nav Link">
                <div>
                  <span>Overview Nav Link</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Overview Nav Link"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
          </ul>
        </div>

        <div className="col-sm-6">
          <ul>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Overview Nav Link">
                <div>
                  <span>Overview Nav Link</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Overview Nav Link"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
            <li>
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>

              <NavMegaDropdownMobileLayer3 label="Navigationlink"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

// Desktop
const NavLinkWithIcon = ({label}) => (
  <div className="ifx__nav-link-with-icon">
    <span>{label}</span>
    <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
  </div>
)

// Desktop
const NavMegaDropdown = () => (
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
)

const ExtendedLevel3Template = (args) => {
  return (
    <JsWrapper>
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

                    <NavMegaDropdownMobile label="Nav Link 1"/>
                  </li>

                  <li>
                    <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 2">
                      <div>
                        <span>Nav Link 2</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>

                    <NavMegaDropdownMobile label="Nav Link 2"/>
                  </li>

                  <li>
                    <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 3">
                      <div>
                        <span>Nav Link 3</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>

                    <NavMegaDropdownMobile label="Nav Link 3"/>
                  </li>

                  <li>
                    <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 4">
                      <div>
                        <span>Nav Link 4</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>

                    <NavMegaDropdownMobile label="Nav Link 4"/>
                  </li>

                  <li>
                    <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Nav Link 5">
                      <div>
                        <span>Nav Link 5</span>
                        <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                      </div>
                    </BsNav.Link>

                    <NavMegaDropdownMobile label="Nav Link 5"/>
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

                <NavMegaDropdown/>
              </li>

              <li>
                <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 2">
                  Nav Link 2
                </BsNav.Link>

                <NavMegaDropdown/>
              </li>

              <li>
                <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 3">
                  Nav Link 3
                </BsNav.Link>

                <NavMegaDropdown/>
              </li>

              <li>
                <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 4">
                  Nav Link 4
                </BsNav.Link>

                <NavMegaDropdown/>
              </li>

              <li>
                <BsNav.Link className="ifx__nav-link" href="#" data-text="Nav Link 5">
                  Nav Link 5
                </BsNav.Link>

                <NavMegaDropdown/>
              </li>
            </ul>
          </div>
        </NavBar>
      </div>
      
      <div style={{height: "200vh"}}></div>
    </JsWrapper>
  );
}

const VerticalTemplate = (args) => {
  return (
    <JsWrapper>
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
          </ul>
        </div>
      </div>

      <div style={{height: "200vh"}}></div>
    </JsWrapper>
  );
}

const VerticalLevel2Template = (args) => {
  return (
    <JsWrapper>
      <div className="ifx__nav-bar-vertical" {...args}>
        <div>
          <ul className="flex-column ifx__content-nav__border nav">
            <p className="ifx__content-nav__divider">Category</p>

            <BsNav.Item as="li">
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
                <NavMegaDropdownMobileLayer3/>
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

      <div style={{height: "200vh"}}></div>
    </JsWrapper>
  );
}

const VerticalCollapsibleTemplate = (args) => {
  return (
    <JsWrapper>
      <div className="d-flex ifx__navbar ifx__nav-bar-vertical ifx__nav-bar-vertical-collapsible">
        <div>
          <ul className="flex-column ifx__content-nav__border nav" {...args}>
            <p className="ifx__content-nav__divider">Category</p>
            <BsNav.Item as="li">
              <BsNav.Link href="#">
                <FontAwesomeIcon icon={["fal", "globe"]} />
                <span>Nav link</span>
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="#">
                <FontAwesomeIcon icon={["fal", "compass"]} />
                <span>Nav link</span>
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="#">
                <FontAwesomeIcon icon={["fal", "chart-column"]} />
                <span>Nav link</span>
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="#">
                <FontAwesomeIcon icon={["fal", "house"]} />
                <span>Nav link</span>
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="#">
                <FontAwesomeIcon icon={["fal", "gauge-min"]} />
                <span>Nav link</span>
              </BsNav.Link>
            </BsNav.Item>
          </ul>

          <ul className="flex-column ifx__content-nav__border nav" {...args}>
            <p className="ifx__content-nav__divider">Category</p>
            <BsNav.Item as="li">
              <BsNav.Link href="#">
                <FontAwesomeIcon icon={["fal", "globe"]} />
                <span>Nav link</span>
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="#">
                <FontAwesomeIcon icon={["fal", "compass"]} />
                <span>Nav link</span>
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="#">
                <FontAwesomeIcon icon={["fal", "chart-column"]} />
                <span>Nav link</span>
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="#">
                <FontAwesomeIcon icon={["fal", "house"]} />
                <span>Nav link</span>
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="#">
                <FontAwesomeIcon icon={["fal", "gauge-min"]} />
                <span>Nav link</span>
              </BsNav.Link>
            </BsNav.Item>
          </ul>
        </div>
        <BsButton className="d-inline-flex ifx__content-nav__border ifx__vertical-nav-icons-btn">
          <FontAwesomeIcon icon={["fal", "chevron-right"]} />
        </BsButton>
      </div>

      <div style={{height: "200vh"}}></div>
    </JsWrapper>
  );
}

export const Default = DefaultTemplate.bind({});

export const Extended = ExtendedTemplate.bind({});

export const ExtendedLevel2 = ExtendedLevel2Template.bind({});

export const ExtendedLevel3 = ExtendedLevel3Template.bind({});

export const Vertical = VerticalTemplate.bind({});

export const VerticalLevel2 = VerticalLevel2Template.bind({});

export const VerticalCollapsible = VerticalCollapsibleTemplate.bind({});
