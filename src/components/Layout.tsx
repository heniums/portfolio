import { Outlet } from "react-router";

import type { TopbarMenuLinkConfig } from "src/types";
import { TopBar } from "src/components/TopBar";
import Footer from "src/components/Footer";

type LayoutProps = {
  links?: TopbarMenuLinkConfig[];
};

function Layout(props: LayoutProps) {
  const { links } = props;

  return (
    <div>
      <TopBar links={links} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
