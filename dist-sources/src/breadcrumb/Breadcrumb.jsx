import BsBreadcrumb from "react-bootstrap/Breadcrumb";

export const Breadcrumb = () => {
  return (
    <BsBreadcrumb>
      <BsBreadcrumb.Item href="#">Home</BsBreadcrumb.Item>
      <BsBreadcrumb.Item href="#">Library</BsBreadcrumb.Item>
      <BsBreadcrumb.Item href="#">Data</BsBreadcrumb.Item>
    </BsBreadcrumb>
  );
};
