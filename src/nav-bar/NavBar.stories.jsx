import { NavBar } from "./NavBar";
import { SearchBar } from "../form-elements/SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BsNavBar from "react-bootstrap/Navbar";
import BsNav from "react-bootstrap/Nav";
import BsDropdown from "react-bootstrap/Dropdown";
import BsNavItem from 'react-bootstrap/NavItem';
import BsNavLink from 'react-bootstrap/NavLink';

import imageFile from "../../public/Logo.svg";
import { useEffect } from "react";
import { initNavBar, initVerticalNavBar } from "./nav-bar";
import { initMobileNav } from "./mobile-nav";
import { VerticalCollapsibleTemplate } from "./VerticalNavBar";
import { renderToStaticMarkup } from "react-dom/server";

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
    initMobileNav();
    initNavBar();
    initVerticalNavBar();
  }, []);

  return (
    <>
      <template id="ifx__sublvl-link" dangerouslySetInnerHTML={{ __html: renderToStaticMarkup(
        <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="javascript:void(0)">
          <div>
            <span className="ifx__sublvl-link-label"></span>
            <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
          </div>
        </BsNav.Link>
      )}}>
      </template>

      <template id="ifx__link-last-layer" dangerouslySetInnerHTML={{ __html: renderToStaticMarkup(
        <div>
          <BsNav.Link className="ifx__nav-mega-dropdown-last-layer" href="javascript:void(0)">
            <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
            <span className="ifx__link-last-layer-label"></span>
          </BsNav.Link>
        </div>
      )}}>
      </template>
      
      <template id="ifx__sub-lvl-col" dangerouslySetInnerHTML={{ __html: renderToStaticMarkup(
        <div className="col-sm-6">
          <ul>
          </ul>
        </div>
      )}}>
      </template>
      
      <template id="ifx__first-level-nav" dangerouslySetInnerHTML={{ __html: renderToStaticMarkup(
        <ul className="ifx__first-level-nav">
          <li>
            <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="javascript:void(0)" data-text="Nav Link 1">
              Nav Link 1
            </BsNav.Link>
          </li>
        </ul>
      )}}>
      </template>

      <template id="ifx__sub-level-nav" dangerouslySetInnerHTML={{ __html: renderToStaticMarkup(
        <ul className="w-100 ifx__nav-mega-dropdown-mobile ifx__nav-wrapper">
          <div className="ifx__nav-mega-dropdown-mobile-content">
            <div className="row">
            </div>
          </div>
        </ul>
      )}}>
      </template>

      <template id="ifx__nav-wrapper" dangerouslySetInnerHTML={{ __html: renderToStaticMarkup(
        <div className="ifx__mobile-overflow-hidden">
          <div className="ifx__mobile-show ifx__nav-wrapper ifx__mobile-clone ifx__nav-link-wrapper">
            <div class="ifx__menu">Menu</div>
              <div className="row">
              </div>
          </div>
        </div>
      )}}>
      </template>

      {children}
    </>
  );
}

const DefaultTemplate = (args) => {
  return (
    <JsWrapper>
      <header className="ifx__header-main">
        <div className="ifx__navbar ifx__navbar-default">
          <NavBar {...args}>
            <div className="container-lg ifx__container">
              <div className="d-flex align-items-center ifx__mobile-container">
                <BsNavBar.Toggle data-bs-target="#basic-navbar-nav" data-bs-toggle="collapse" aria-controls="basic-navbar-nav"/>

                <BsNavBar.Brand href="javascript:void(0)">
                  <img src={image.src} alt={image.alt} width="100"/>
                </BsNavBar.Brand>
                <p className="ifx__application-name">Application name</p>
              </div>

              <BsNavBar.Collapse id="basic-navbar-nav">
                <div className="w-100 d-lg-flex align-items-center justify-content-between ifx__nav-link-wrapper ifx__desktop-show">
                  <ul className="ifx__first-level-nav d-flex">
                    <li>
                      <BsNav.Link className="ifx__first-lvl-link" href="javascript:void(0)" data-text="Nav Link 1">
                        Nav Link 1
                      </BsNav.Link>
                    </li>
                    <li>
                      <BsNav.Link className="ifx__first-lvl-link" href="javascript:void(0)" data-text="Nav Link 2">
                        Nav Link 2
                      </BsNav.Link>
                    </li>
                    <li>
                      <BsDropdown as={BsNavItem}>
                        <BsDropdown.Toggle data-bs-toggle="dropdown" as={BsNavLink}>More</BsDropdown.Toggle>
                        <BsDropdown.Menu renderOnMount>
                          <BsDropdown.Item className="ifx__first-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                          <BsDropdown.Item className="ifx__first-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                          <BsDropdown.Item className="ifx__first-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                          <BsDropdown.Item className="ifx__first-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                        </BsDropdown.Menu>
                      </BsDropdown>
                    </li>
                  </ul>
                </div>

                <div className="ifx__mobile-container">
                  <div className="ifx__searchbar-metalink-wrapper d-flex align-items-center">
                    <SearchBar size="s"></SearchBar>

                    <BsNav.Link className="ifx__nav-metalink" href="javascript:void(0)">
                      <div className="d-flex align-items-center">
                        <span data-text="Metalink">Metalink</span>
                        <FontAwesomeIcon icon={["fal", "user"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link className="ifx__nav-metalink" href="javascript:void(0)">
                      <div className="d-flex align-items-center">
                        <span data-text="Metalink">Metalink</span>
                        <FontAwesomeIcon icon={["fal", "globe"]}/>
                      </div>
                    </BsNav.Link>
                  </div>
                </div>
              </BsNavBar.Collapse>
            </div>
          </NavBar>
        </div>
      </header>

      <div style={{height: "200vh"}}></div>
    </JsWrapper>
  );
}

const ExtendedTemplate = (args) => {
  return (
    <JsWrapper>
      <header className="ifx__header-main">
        <div className="ifx__navbar ifx__navbar-extended">
          <NavBar {...args}>
            <div className="container-lg ifx__container">
              <div className="d-flex align-items-center ifx__mobile-container">
                <BsNavBar.Toggle data-bs-target="#basic-navbar-nav" data-bs-toggle="collapse" aria-controls="basic-navbar-nav"/>

                <BsNavBar.Brand href="javascript:void(0)">
                  <img src={image.src} alt={image.alt} width="100"/>
                </BsNavBar.Brand>
                <p className="ifx__application-name">Application name</p>
              </div>

              <BsNavBar.Collapse id="basic-navbar-nav">
                <div className="ifx__mobile-container">
                  <div className="ifx__searchbar-metalink-wrapper d-flex align-items-center flex-wrap">
                    <SearchBar size="s"></SearchBar>

                    <BsNav.Link className="ifx__nav-metalink" href="javascript:void(0)">
                      <div className="d-flex align-items-center">
                        <span data-text="Metalink">Metalink</span>
                        <FontAwesomeIcon icon={["fal", "user"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link className="ifx__nav-metalink" href="javascript:void(0)">
                      <div className="d-flex align-items-center">
                        <span data-text="Metalink">Metalink</span>
                        <FontAwesomeIcon icon={["fal", "globe"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link className="ifx__nav-metalink" href="javascript:void(0)">
                      <div className="d-flex align-items-center">
                        <span data-text="Metalink">Metalink</span>
                        <FontAwesomeIcon icon={["fal", "cart-shopping"]}/>
                      </div>
                    </BsNav.Link>
                  </div>
                </div>
              </BsNavBar.Collapse>
            </div>

            <div className="w-100 position-relative">
              <div className="container-lg">
                <div className="w-100 d-lg-flex ifx__nav-link-wrapper ifx__desktop-show">
                  <ul className="d-flex ifx__first-level-nav ifx__nav-list">
                    <li>
                      <BsDropdown as={BsNavItem}>
                        <BsDropdown.Toggle data-bs-toggle="dropdown" as={BsNavLink} className="ifx__first-lvl-link">Nav Link 1</BsDropdown.Toggle>
                        <BsDropdown.Menu className="ifx__second-level-nav" renderOnMount>
                          <div className="ifx__second-lvl-col">
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                          </div>
                        </BsDropdown.Menu>
                      </BsDropdown>
                    </li>

                    <li>
                      <BsDropdown as={BsNavItem}>
                        <BsDropdown.Toggle data-bs-toggle="dropdown" as={BsNavLink} className="ifx__first-lvl-link">Nav Link 2</BsDropdown.Toggle>
                        <BsDropdown.Menu className="ifx__second-level-nav" renderOnMount>
                          <div className="ifx__second-lvl-col">
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                          </div>
                        </BsDropdown.Menu>
                      </BsDropdown>
                    </li>

                    <li>
                      <BsDropdown as={BsNavItem}>
                        <BsDropdown.Toggle data-bs-toggle="dropdown" as={BsNavLink} className="ifx__first-lvl-link">Nav Link 3</BsDropdown.Toggle>
                        <BsDropdown.Menu className="ifx__second-level-nav" renderOnMount>
                          <div className="ifx__second-lvl-col">
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                          </div>
                        </BsDropdown.Menu>
                      </BsDropdown>
                    </li>

                    <li>
                      <BsDropdown as={BsNavItem}>
                        <BsDropdown.Toggle data-bs-toggle="dropdown" as={BsNavLink} className="ifx__first-lvl-link">Nav Link 4</BsDropdown.Toggle>
                        <BsDropdown.Menu className="ifx__second-level-nav" renderOnMount>
                          <div className="ifx__second-lvl-col">
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                          </div>
                        </BsDropdown.Menu>
                      </BsDropdown>
                    </li>

                    <li>
                      <BsDropdown as={BsNavItem}>
                        <BsDropdown.Toggle data-bs-toggle="dropdown" as={BsNavLink} className="ifx__first-lvl-link">Nav Link 5</BsDropdown.Toggle>
                        <BsDropdown.Menu className="ifx__second-level-nav" renderOnMount>
                          <div className="ifx__second-lvl-col">
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                            <BsDropdown.Item className="ifx__second-lvl-link" href="javascript:void(0)">Action default</BsDropdown.Item>
                          </div>
                        </BsDropdown.Menu>
                      </BsDropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </NavBar>
        </div>
      </header>

      <div style={{height: "200vh"}}></div>
    </JsWrapper>
  );
}

const ExtendedLevel2Template = (args) => {
  return (
    <JsWrapper>
      <header className="ifx__header-main">
        <div className="ifx__navbar ifx__navbar-extended">
          <NavBar {...args}>
            <div className="container-lg ifx__container">
              <div className="d-flex align-items-center ifx__mobile-container">
                <BsNavBar.Toggle data-bs-target="#basic-navbar-nav" data-bs-toggle="collapse" aria-controls="basic-navbar-nav"/>

                <BsNavBar.Brand href="javascript:void(0)">
                  <img src={image.src} alt={image.alt} width="100"/>
                </BsNavBar.Brand>
                <p className="ifx__application-name">Application name</p>
              </div>

              <BsNavBar.Collapse id="basic-navbar-nav">
                <div className="ifx__mobile-container">
                  <div className="ifx__searchbar-metalink-wrapper d-flex align-items-center flex-wrap">
                    <SearchBar size="s"></SearchBar>

                    <BsNav.Link className="ifx__nav-metalink" href="javascript:void(0)">
                      <div className="d-flex align-items-center">
                        <span data-text="Metalink">Metalink</span>
                        <FontAwesomeIcon icon={["fal", "user"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link className="ifx__nav-metalink" href="javascript:void(0)">
                      <div className="d-flex align-items-center">
                        <span data-text="Metalink">Metalink</span>
                        <FontAwesomeIcon icon={["fal", "globe"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link className="ifx__nav-metalink" href="javascript:void(0)">
                      <div className="d-flex align-items-center">
                        <span data-text="Metalink">Metalink</span>
                        <FontAwesomeIcon icon={["fal", "cart-shopping"]}/>
                      </div>
                    </BsNav.Link>
                  </div>
                </div>
              </BsNavBar.Collapse>
            </div>

            <div className="w-100 position-relative">
              <div className="container-lg">
                <div className="w-100 d-lg-flex ifx__nav-link-wrapper ifx__desktop-show">
                  <ul className="ifx__first-level-nav ifx__nav-list d-flex">
                    <li>
                      <BsNav.Link className="ifx__first-lvl-link ifx__nav-link" href="javascript:void(0)" data-text="Nav Link 1">
                        Nav Link 1
                      </BsNav.Link>
                      <ul className="ifx__second-level-nav ifx__nav-mega-dropdown w-100">
                        <li className="container">
                          <ul>
                            <li className="ifx__nav-wrapper">
                              <div className="row">
                                <div className="ifx__second-lvl-col col-3">
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Overview Nav Link">
                                    Overview Nav Link
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                </div>

                                <div className="ifx__second-lvl-col col-3">
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Overview Nav Link">
                                    Overview Nav Link
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                </div>

                                <div className="ifx__second-lvl-col col-3">
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Overview Nav Link">
                                    Overview Nav Link
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                </div>

                                <div className="ifx__second-lvl-col col-3">
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Overview Nav Link">
                                    Overview Nav Link
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <BsNav.Link className="ifx__first-lvl-link ifx__nav-link" href="javascript:void(0)" data-text="Nav Link 2">
                        Nav Link 2
                      </BsNav.Link>
                      <ul className="ifx__second-level-nav ifx__nav-mega-dropdown w-100">
                        <li className="container">
                          <ul>
                            <li className="ifx__nav-wrapper">
                              <div className="row">
                                <div className="ifx__second-lvl-col col-3">
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Overview Nav Link">
                                    Overview Nav Link
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                </div>

                                <div className="ifx__second-lvl-col col-3">
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Overview Nav Link">
                                    Overview Nav Link
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                </div>

                                <div className="ifx__second-lvl-col col-3">
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Overview Nav Link">
                                    Overview Nav Link
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                </div>

                                <div className="ifx__second-lvl-col col-3">
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Overview Nav Link">
                                    Overview Nav Link
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                  <BsNav.Link className="ifx__second-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                                    Navigationlink
                                  </BsNav.Link>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <BsNav.Link className="ifx__first-lvl-link ifx__nav-link" href="javascript:void(0)" data-text="Nav Link 3">
                        Nav Link 3
                      </BsNav.Link>
                    </li>

                    <li>
                      <BsNav.Link className="ifx__first-lvl-link ifx__nav-link" href="javascript:void(0)" data-text="Nav Link 4">
                        Nav Link 4
                      </BsNav.Link>
                    </li>

                    <li>
                      <BsNav.Link className="ifx__first-lvl-link ifx__nav-link" href="javascript:void(0)" data-text="Nav Link 5">
                        Nav Link 5
                      </BsNav.Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </NavBar>
        </div>
      </header>

      <div style={{height: "200vh"}}></div>
    </JsWrapper>
  );
}

// Desktop
const NavLinkWithIcon = ({label}) => (
  <BsNav.Link className="ifx__second-lvl-link ifx__nav-link-with-icon" href="javascript:void(0)">
    <div>
      <span>{label}</span>
      <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
    </div>
  </BsNav.Link>
)

// Desktop
const NavMegaDropdown = () => (
  <ul className="ifx__second-level-nav w-100 ifx__nav-mega-dropdown">
    <li className="container">
      <ul>
        <li className="ifx__nav-wrapper">
          <div className="row">
            <div className="ifx__second-lvl-col col-lg-6">
              <ul>
                <li>
                  <NavLinkWithIcon label="Overview Nav Link"/>
                  <ul className="ifx__third-level-nav ifx__nav-mega-dropdown-level-3 w-100">
                    <li className="w-100">
                      <div className="row">
                        <div className="ifx__third-lvl-col col-lg-6">
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Overview Nav Link">
                            Overview Nav Link
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                        </div>

                        <div className="ifx__third-lvl-col col-lg-6">
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Overview Nav Link">
                            Overview Nav Link
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLinkWithIcon label="Navigationlink"/>
                  <ul className="ifx__third-level-nav ifx__nav-mega-dropdown-level-3 w-100">
                    <li className="w-100">
                      <div className="row">
                        <div className="ifx__third-lvl-col col-lg-6">
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Overview Nav Link">
                            Overview Nav Link
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                        </div>

                        <div className="ifx__third-lvl-col col-lg-6">
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Overview Nav Link">
                            Overview Nav Link
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                          <BsNav.Link className="ifx__third-lvl-link" href="javascript:void(0)" data-text="Navigationlink">
                            Navigationlink
                          </BsNav.Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLinkWithIcon label="Navigationlink"/>
                </li>

                <li>
                  <NavLinkWithIcon label="Navigationlink"/>
                </li>

                <li>
                  <NavLinkWithIcon label="Navigationlink"/>
                </li>

                <li>
                  <NavLinkWithIcon label="Navigationlink"/>
                </li>
              </ul>
            </div>

            <div className="ifx__second-lvl-col col-lg-6">
              <ul>
                <li>
                  <NavLinkWithIcon label="Navigationlink"/>
                </li>

                <li>
                  <NavLinkWithIcon label="Navigationlink"/>
                </li>

                <li>
                  <NavLinkWithIcon label="Navigationlink"/>
                </li>

                <li>
                  <NavLinkWithIcon label="Navigationlink"/>
                </li>

                <li>
                  <NavLinkWithIcon label="Navigationlink"/>
                </li>

                <li>
                  <NavLinkWithIcon label="Navigationlink"/>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </li>
  </ul>
)

const ExtendedLevel3Template = (args) => {
  return (
    <JsWrapper>
      <header className="ifx__header-main">
        <div className="ifx__navbar ifx__navbar-extended ifx__navbar-extended-level3">
          <NavBar {...args}>
            <div className="container-lg ifx__container">
              <div className="d-flex align-items-center ifx__mobile-container">
                <BsNavBar.Toggle data-bs-target="#basic-navbar-nav" data-bs-toggle="collapse" aria-controls="basic-navbar-nav"/>

                <BsNavBar.Brand href="javascript:void(0)">
                  <img src={image.src} alt={image.alt} width="100"/>
                </BsNavBar.Brand>
                <p className="ifx__application-name">Application name</p>
              </div>

              <BsNavBar.Collapse id="basic-navbar-nav">
                <div className="ifx__mobile-container">
                  <div className="ifx__searchbar-metalink-wrapper d-flex align-items-center flex-wrap">
                    <SearchBar size="s"></SearchBar>

                    <BsNav.Link className="ifx__nav-metalink" href="javascript:void(0)">
                      <div className="d-flex align-items-center">
                        <span data-text="Metalink">Metalink</span>
                        <FontAwesomeIcon icon={["fal", "user"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link className="ifx__nav-metalink" href="javascript:void(0)">
                      <div className="d-flex align-items-center">
                        <span data-text="Metalink">Metalink</span>
                        <FontAwesomeIcon icon={["fal", "globe"]}/>
                      </div>
                    </BsNav.Link>
                    <BsNav.Link className="ifx__nav-metalink" href="javascript:void(0)">
                      <div className="d-flex align-items-center">
                        <span data-text="Metalink">Metalink</span>
                        <FontAwesomeIcon icon={["fal", "cart-shopping"]}/>
                      </div>
                    </BsNav.Link>
                  </div>
                </div>
              </BsNavBar.Collapse>
            </div>

            <div className="w-100 position-relative">
              <div className="container-lg">
                <div className="w-100 d-lg-flex ifx__nav-link-wrapper ifx__desktop-show">
                  <ul className="ifx__first-level-nav ifx__nav-list d-flex">
                    <li>
                      <BsNav.Link className="ifx__first-lvl-link ifx__nav-link" href="javascript:void(0)" data-text="Nav Link 1">
                        Nav Link 1
                      </BsNav.Link>

                      <NavMegaDropdown/>
                    </li>

                    <li>
                      <BsNav.Link className="ifx__first-lvl-link ifx__nav-link" href="javascript:void(0)" data-text="Nav Link 2">
                        Nav Link 2
                      </BsNav.Link>

                      <NavMegaDropdown/>
                    </li>

                    <li>
                      <BsNav.Link className="ifx__first-lvl-link ifx__nav-link" href="javascript:void(0)" data-text="Nav Link 3">
                        Nav Link 3
                      </BsNav.Link>
                    </li>

                    <li>
                      <BsNav.Link className="ifx__first-lvl-link ifx__nav-link" href="javascript:void(0)" data-text="Nav Link 4">
                        Nav Link 4
                      </BsNav.Link>
                    </li>

                    <li>
                      <BsNav.Link className="ifx__first-lvl-link ifx__nav-link" href="javascript:void(0)" data-text="Nav Link 5">
                        Nav Link 5
                      </BsNav.Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </NavBar>
        </div>
      </header>

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
              <BsNav.Link href="javascript:void(0)">
                Navigationlink
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
                Navigationlink
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
                Navigationlink
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
                Navigationlink
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
                Navigationlink
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
                Navigationlink
              </BsNav.Link>
            </BsNav.Item>
          </ul>

          <ul className="flex-column ifx__content-nav__border nav">
            <p className="ifx__content-nav__divider">Category</p>
            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
                Navigationlink
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
                Navigationlink
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
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
              <BsNav.Link className="ifx__nav-mega-dropdown-next-layer" href="javascript:void(0)" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
            </BsNav.Item>

            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
                Navigationlink
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
                Navigationlink
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
                Navigationlink
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
                Navigationlink
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
                Navigationlink
              </BsNav.Link>
            </BsNav.Item>
            <BsNav.Item as="li">
              <BsNav.Link href="javascript:void(0)">
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

const VerticalCollapsibleComponent = (args) => {
  return (
    <JsWrapper>
      <VerticalCollapsibleTemplate {...args}/>

      <div style={{height: "200vh"}}></div>
    </JsWrapper>
  );
}

export const Default = DefaultTemplate.bind({});

Default.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const Extended = ExtendedTemplate.bind({});

Extended.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const ExtendedLevel2 = ExtendedLevel2Template.bind({});

ExtendedLevel2.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const ExtendedLevel3 = ExtendedLevel3Template.bind({});

ExtendedLevel3.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const Vertical = VerticalTemplate.bind({});

Vertical.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const VerticalLevel2 = VerticalLevel2Template.bind({});

VerticalLevel2.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const VerticalCollapsible = VerticalCollapsibleComponent.bind({});

VerticalCollapsible.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};
