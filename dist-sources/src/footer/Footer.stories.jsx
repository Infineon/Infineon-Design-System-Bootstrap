import { Footer } from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import imageFile from "../../public/logo-desktop-en-2x.png";

export default {
  title: "Components/Footer",
  component: Footer,
};

const image = {
  src: imageFile,
  alt: "infineon-logo",
};

const DefaultTemplate = (args) => (
  <Footer {...args}>
    <footer className="footer">
      <div className="d-md-flex justify-content-between flex-wrap ifx__footer-bottom">
        <ul className="list-unstyled d-sm-flex">
          <li><a href="#">Terms</a></li>
          <li><a href="#">Imprint</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Glossary</a></li>
        </ul>

        <div className="ifx__footer-bottom__copyright">
          © 1999 - 2021 Infineon Technologies AG
        </div>
      </div>
    </footer>
  </Footer>
);

const MediumTemplate = (args) => (
  <Footer {...args}>
    <footer className="footer">
      <div className="d-flex align-items-end ifx__footer-top">
        <div className="d-flex justify-content-between align-items-center flex-wrap w-100">
          <img src={image.src} alt={image.alt} width="110" height="48"/>
          <div className='ifx__footer-top__social-media'>
            <a href="">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "xing"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </a>
          </div>
        </div>
      </div>

      <div className="d-md-flex justify-content-between align-items-center flex-wrap ifx__footer-bottom">
        <ul className="list-unstyled d-sm-flex">
          <li><a href="#">Terms</a></li>
          <li><a href="#">Imprint</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Glossary</a></li>
        </ul>

        <div className="ifx__footer-bottom__copyright">
          © 1999 - 2021 Infineon Technologies AG
        </div>
      </div>
    </footer>
  </Footer>
);

const LargeTemplate = (args) => (
  <Footer {...args}>
    <footer className="footer">
      <div className="ifx__footer-top">
        <div className="ifx__mobile-show flex-column">
          <img src={image.src} alt={image.alt} width="110" height="48"/>

          <div className="row">
            <div className="col-6">
              <p>Mainlink</p>
              <ul className="list-unstyled">
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
              </ul>
            </div>

            <div className="col-6">
              <p>Mainlink</p>
              <ul className="list-unstyled">
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
              </ul>
            </div>

            <div className="col-6">
              <p>Mainlink</p>
              <ul className="list-unstyled">
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
              </ul>
            </div>

            <div className="col-6">
              <p>Mainlink</p>
              <ul className="list-unstyled">
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
              </ul>
            </div>
          </div>

          <div className='ifx__footer-top__social-media'>
            <a href="">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "xing"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </a>
          </div>
        </div>

        <div className="ifx__desktop-show flex-column">
          <div className="row">
            <div className="col-6 col-md-2">
              <p>Mainlink</p>
              <ul className="list-unstyled">
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2">
              <p>Mainlink</p>
              <ul className="list-unstyled">
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2">
              <p>Mainlink</p>
              <ul className="list-unstyled">
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2">
              <p>Mainlink</p>
              <ul className="list-unstyled">
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
                <li><a href="#">Footer Link</a></li>
              </ul>
            </div>
          </div>

          <div className="ifx__desktop-show justify-content-between align-items-center">
            <img src={image.src} alt={image.alt} width="110" height="48"/>

            <div className='ifx__footer-top__social-media'>
              <a href="">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={["fab", "xing"]} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-md-flex justify-content-between flex-wrap ifx__footer-bottom">
        <ul className="list-unstyled d-sm-flex">
          <li><a href="#">Terms</a></li>
          <li><a href="#">Imprint</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Glossary</a></li>
        </ul>

        <div className="ifx__footer-bottom__copyright">
          © 1999 - 2021 Infineon Technologies AG
        </div>
      </div>
    </footer>
  </Footer>
);

export const Default = DefaultTemplate.bind({});

export const Medium = MediumTemplate.bind({});

export const Large = LargeTemplate.bind({});
