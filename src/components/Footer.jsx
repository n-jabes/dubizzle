import { footerResources } from '../assets/resources';

export function Footer() {
  const ShowFooter = () => {
    let footer = footerResources.map((column) => {
      return (
        <ul key={column.id} className="titles">
          <li className="title fw-600 d-flex flex-direction-column color-darkgray">
            <span className="fz-16 fw-600"> {column.title} </span>
            {column.links.map((link) => {
              return <a className="link mt-10 cursor-pointer"> {link} </a>;
            })}
          </li>
        </ul>
      );
    });

    return footer;
  };
  return (
    <div className="footer ml-10p d-flex justify-content-space-between">
      <ShowFooter />
    </div>
  );
}
