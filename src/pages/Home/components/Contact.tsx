import type { ContactLink } from "src/types";
import { siteConfig } from "src/config";
import Section from "src/components/Section";
import Github from "src/components/icons/Github";
import Linkedin from "src/components/icons/Linkedin";
import Mail from "src/components/icons/Mail";

type ContactProps = {
  links?: ContactLink[];
};

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

function Contact(props: ContactProps) {
  const { links = [] } = props;
  const { title, subTitle } = siteConfig.sections.contact;

  return (
    <Section
      className="bg-zinc-950 text-white"
      title={title}
      subTitle={subTitle}
    >
      <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
        {links.map((link) => {
          const IconComponent = iconMap[link.icon];
          return (
            <a
              key={link.key}
              href={link.url}
              target={link.icon === "mail" ? undefined : "_blank"}
              rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
              className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors duration-200"
            >
              <IconComponent className="w-5 h-5" />
              <span className="text-sm">{link.label}</span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}

export default Contact;
