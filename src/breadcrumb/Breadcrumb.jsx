import BsBreadcrumb from "react-bootstrap/Breadcrumb";

export const Breadcrumb = () => {
  return (
    <BsBreadcrumb>
      <BsBreadcrumb.Item href="javascript:void(0)">Home</BsBreadcrumb.Item>
      <BsBreadcrumb.Item href="javascript:void(0)">Library</BsBreadcrumb.Item>
      <BsBreadcrumb.Item href="javascript:void(0)" active>Data</BsBreadcrumb.Item>
    </BsBreadcrumb>
  );
};
