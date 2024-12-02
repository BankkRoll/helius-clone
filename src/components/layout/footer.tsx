import {
  DiscordLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const footer = {
    socials: [
      {
        href: "https://twitter.com/heliuslabs",
        name: "Twitter",
        icon: <TwitterLogoIcon className="size-4" />,
      },
      {
        href: "https://www.linkedin.com/company/heliusapi",
        name: "LinkedIn",
        icon: <LinkedInLogoIcon className="size-4" />,
      },
      {
        href: "https://discord.gg/aYjmtWsy6b",
        name: "Discord",
        icon: <DiscordLogoIcon className="size-4" />,
      },
    ],
    links: [
      {
        title: "Products",
        links: [
          {
            id: 1,
            title: "Solana RPC Infrastructure",
            url: "https://www.helius.dev/solana-rpc-nodes",
          },
          {
            id: 2,
            title: "Solana APIs",
            url: "https://www.helius.dev/solana-apis",
          },
          {
            id: 3,
            title: "Webhooks & WebSockets",
            url: "https://www.helius.dev/solana-webhooks-websockets",
          },
        ],
      },
      {
        title: "Resources",
        links: [
          {
            id: 4,
            title: "Documentation",
            url: "https://docs.helius.xyz/welcome/what-is-helius",
            external: true,
          },
          { id: 5, title: "Pricing", url: "https://www.helius.dev/pricing" },
          {
            id: 6,
            title: "Built with Helius",
            url: "https://www.helius.dev/built-with-helius",
          },
          {
            id: 7,
            title: "Solana Roadmap",
            url: "https://www.solanaroadmap.com/",
            external: true,
          },
        ],
      },
      {
        title: "Company",
        links: [
          { id: 8, title: "Blog", url: "https://www.helius.dev/blog" },
          {
            id: 9,
            title: "Jobs",
            url: "https://jobs.solana.com/companies/helius",
            external: true,
          },
          {
            id: 10,
            title: "Terms & Conditions",
            url: "https://www.helius.dev/terms",
          },
          {
            id: 11,
            title: "Privacy Policy",
            url: "https://www.helius.dev/privacy-policy",
          },
        ],
      },
    ],
  };

  return (
    <footer className="px-4 pb-6 border-t lg:px-8 sm:px-6 bg-background/20 backdrop-blur">
      <div className="flex flex-col py-10 md:flex-row md:justify-between md:items-start">
        <div className="flex flex-col items-start justify-start gap-y-5 md:w-1/4 md:mt-2.5">
          <div className="flex flex-row items-center gap-6">
            <Link href="/" className="flex items-center gap-x-2.5">
              <img
                src="/Helius-Orange.svg"
                alt="Helius"
                className="w-36 h-auto"
              />
            </Link>
            <div className="flex space-x-5 sm:justify-center sm:mt-0">
              {footer.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted hover:text-primary transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          <p className="text-sm tracking-tight text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Helius. All rights reserved. -
            Community Built Inspiration
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8 md:w-3/5 md:mt-0 sm:grid-cols-3">
          {footer.links.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="mb-3 text-sm font-semibold">{section.title}</h3>
              <ul className="flex flex-col gap-y-2">
                {section.links.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group-hover:text-primary transition-all"
                    >
                      {link.title}
                    </a>
                    <ChevronRightIcon className="transform w-4 h-4 opacity-0 transition-all duration-300 ease-out translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-primary" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
