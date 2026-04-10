import { siteConfig } from "src/config";

function Footer() {
  const { fullName } = siteConfig;

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-8 text-center">
      <p className="text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} {fullName}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
