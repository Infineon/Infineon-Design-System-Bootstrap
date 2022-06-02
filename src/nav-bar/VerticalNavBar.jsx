import BsNav from "react-bootstrap/Nav";
import BsButton from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const VerticalCollapsibleTemplate = (args) => (
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
    <BsButton className="d-inline-flex ifx__content-nav__border ifx__vertical-nav-icons-btn"></BsButton>
  </div>
)
