import { footerResources } from '../assets/resources';

export function Footer() {
  const ShowFooter = () => {
    let footer = footerResources.map((column) => {
      return (
        <li
          key={column.id}
          className="title fw-600 d-flex flex-direction-column color-darkgray"
        >
          <span className="fz-16 fw-600"> {column.title} </span>
          {column.links.map((link) => {
            return <a className="link mt-10 cursor-pointer"> {link} </a>;
          })}
        </li>
      );
    });

    return footer;
  };
  return (
    <div className="footer ml-10p">
      <ul className="titles d-flex justify-content-space-between">
        <ShowFooter />
      </ul>

      <div className="copyright mt-2p ">
        <div className="logo color-blue fw-600 fz-24">dubizzle</div>
        <p>&#169; dubizzle-rwanda.com 2023 || All Rights Reserved.</p>
      </div>
    </div>
  );
}
