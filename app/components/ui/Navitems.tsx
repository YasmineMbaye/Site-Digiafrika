import { NavLink } from "react-router";

export default function Navitems({
  pageProps, border,borderbold
}: {
  pageProps: NavigationProps, border:string, borderbold:string;
}) {
  return (
    <NavLink
      to={pageProps.url}
      className={  ({ isActive }) =>
        `   ${
          isActive && `  border-t-0 border-l-0 border-r-0 ${border || ""} ${borderbold || ""}`
        }`
      }
    >
      {pageProps.name}
    </NavLink>
  );
}
