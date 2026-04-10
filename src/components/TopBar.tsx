import { Menu, X } from "lucide-react";
import { DialogHTMLAttributes, useState } from "react";

import type { TopbarMenuLinkConfig } from "src/types";
import { siteConfig } from "src/config";
import { clsx } from "src/utils/css";

type TopBarProps = {
  links?: TopbarMenuLinkConfig[];
};

type TopbarMenuLinkProps = {
  linkConfig: TopbarMenuLinkConfig;
  toggleMenu: (value: boolean) => void;
};

export function TopbarMenuLink(props: TopbarMenuLinkProps) {
  const { linkConfig, toggleMenu } = props;
  const { label, link } = linkConfig;

  return (
    <a
      href={link}
      className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider"
      onClick={() => toggleMenu(false)}
    >
      {label}
    </a>
  );
}

type ModalProps = {
  title?: string;
  onModalClose?: () => void;
} & DialogHTMLAttributes<HTMLDialogElement>;

export function Modal(props: ModalProps) {
  const { children, onModalClose, className, title, ...rest } = props;

  return (
    <dialog
      {...rest}
      className={clsx(
        className,
        "inset-0 w-screen h-screen bg-zinc-950 p-6 transition-transform duration-300 transform scale-100 text-white",
      )}
    >
      <div className="flex justify-between items-center">
        {!!title && (
          <span className="text-2xl font-bold text-white">{title}</span>
        )}
        <button className="cursor-pointer text-zinc-400 hover:text-white transition-colors" onClick={onModalClose}>
          <X size={28} />
        </button>
      </div>
      <div>{children}</div>
    </dialog>
  );
}

export function TopBar(props: TopBarProps) {
  const { links = [] } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu(open?: boolean) {
    if (typeof open === "boolean") {
      setMenuOpen(open);
    } else {
      setMenuOpen((prev) => !prev);
    }
  }

  return (
    <header className="px-8 py-5 flex flex-row justify-between items-center bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50">
      <a href="#" className="text-white text-xl font-bold font-mr-dafoe">
        {siteConfig.logoText}
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8">
        {links.map((link) => (
          <a
            key={link.link}
            href={link.link}
            className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-zinc-400 hover:text-white transition-colors"
        onClick={() => toggleMenu()}
      >
        <Menu size={24} />
      </button>

      <Modal
        open={menuOpen}
        title="Menu"
        onModalClose={() => toggleMenu(false)}
        className="md:hidden"
      >
        <nav className="pt-8">
          <ul className="space-y-4">
            {links.map(({ label, link }) => (
              <li key={link}>
                <a
                  href={link}
                  className="block text-lg text-zinc-300 hover:text-white transition-colors duration-200 py-2 border-b border-zinc-800"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Modal>
    </header>
  );
}
