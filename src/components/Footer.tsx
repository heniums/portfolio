import Github from "src/components/icons/Github";
import Linkedin from "src/components/icons/Linkedin";
import { siteConfig } from "src/config";

function Footer() {
  const { fullName, social } = siteConfig;

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-8 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors duration-200"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors duration-200"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
      <p className="text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} {fullName}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
