"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  BookOpenIcon,
  BriefcaseIcon,
  CpuIcon,
  DollarSignIcon,
  FlameIcon,
  HexagonIcon,
  PackageIcon,
  ServerIcon,
  WalletIcon,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  CodeIcon,
  GlobeIcon,
  HamburgerMenuIcon,
  LayersIcon,
  RocketIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeaderLink {
  trigger?: string;
  label?: string;
  href?: string;
  content?: {
    main?: {
      title: string;
      description: string;
      href: string;
    };
    items?: Array<{
      icon: React.ReactNode;
      href: string;
      title: string;
      description: string;
    }>;
  };
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const sticky = useState(true);

  useEffect(() => {
    if (sticky) {
      const handleScroll = () => {
        setHasScrolled(window.scrollY > 20);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [sticky]);

  const headerLinks: HeaderLink[] = [
    {
      trigger: "Products",
      content: {
        items: [
          {
            icon: <CpuIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/products/rpc-infrastructure",
            title: "RPC Infrastructure",
            description:
              "Fuel your Solana project with Solana's Leading RPC Nodes.",
          },
          {
            icon: <CodeIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/products/solana-apis",
            title: "Solana APIs",
            description:
              "Easy-to-use APIs to take your apps to the next level in seconds.",
          },
          {
            icon: <ServerIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/products/webhooks-websockets",
            title: "Webhooks & WebSockets",
            description:
              "Listen to on-chain events and stream them to your applications.",
          },
        ],
      },
    },
    {
      trigger: "Solutions",
      content: {
        items: [
          {
            icon: <WalletIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/solutions/wallets",
            title: "Wallets",
            description:
              "Everything you've ever needed to power up your wallet infrastructure.",
          },
          {
            icon: <DollarSignIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/solutions/defi",
            title: "DeFi",
            description: "Unparalleled performance and reliability for DeFi.",
          },
          {
            icon: <LayersIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/solutions/payments",
            title: "Payments",
            description:
              "Over 90% of all payments activity runs through Helius rails, for a reason.",
          },
          {
            icon: <PackageIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/solutions/depins",
            title: "DePIN",
            description:
              "Bleeding-edge tech for decentralized physical infrastructure.",
          },
          {
            icon: <HexagonIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/solutions/nfts",
            title: "NFTs",
            description:
              "Power up with our minting APIs, NFT indexers, and compression tools.",
          },
          {
            icon: <GlobeIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/solutions/built-with-helius",
            title: "Built with Helius",
            description:
              "Discover some of the innovative teams that trust and utilize our services.",
          },
        ],
      },
    },
    {
      trigger: "Resources",
      content: {
        items: [
          {
            icon: <BookOpenIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/resources/documentation",
            title: "Documentation",
            description:
              "Explore comprehensive guides, tutorials, and insights.",
          },
          {
            icon: <VideoIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/resources/video-tutorials",
            title: "Video Tutorials",
            description: "Get up and running on new features and techniques.",
          },
          {
            icon: <BriefcaseIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/resources/jobs",
            title: "Jobs",
            description: "View our current job openings.",
          },
          {
            icon: <CpuIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/resources/xray",
            title: "XRAY",
            description: "A human-readable Solana block explorer.",
          },
          {
            icon: <RocketIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/resources/test-drive",
            title: "Test Drive",
            description: "The ultimate tool for testing Solana RPCs.",
          },
          {
            icon: <FlameIcon className="w-5 h-5" />,
            href: "https://www.helius.dev/resources/pyre",
            title: "Pyre",
            description:
              "Educational app that teaches users Helius and Solana development.",
          },
        ],
      },
    },
    {
      label: "Blog",
      href: "https://www.helius.dev/blog",
    },
    {
      label: "Pricing",
      href: "https://www.helius.dev/pricing",
    },
  ];

  return (
    <header className="sticky flex justify-center top-0 z-50 py-4 px-2 md:px-4 transition-all bg-background/20 backdrop-blur">
      <div className="px-4 md:px-0 flex justify-between items-center container">
        <Link href="/" className="flex items-center gap-x-2.5">
          <img src="/Helius-Orange.svg" alt="Helius" className="w-36 h-auto" />
        </Link>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {headerLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.trigger ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 transition-all">
                          {link.trigger}
                        </NavigationMenuTrigger>
                        {link.content && (
                          <NavigationMenuContent className="right-0 left-auto">
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] grid-cols-2">
                              {link.content.main && (
                                <li className="col-span-2 row-span-2">
                                  <NavigationMenuLink asChild>
                                    <a
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/20 to-muted/50 hover:bg-accent/50 p-6 no-underline outline-none focus:shadow-md"
                                      href={link.content.main.href}
                                    >
                                      <div className="mb-2 mt-4 text-lg font-medium">
                                        {link.content.main.title}
                                      </div>
                                      <p className="text-sm leading-tight text-muted-foreground">
                                        {link.content.main.description}
                                      </p>
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              )}
                              {link.content.items?.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <NavigationMenuLink asChild>
                                    <a
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                      href={item.href}
                                    >
                                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                        {item.icon}
                                        {item.title}
                                      </div>
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {item.description}
                                      </p>
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        )}
                      </>
                    ) : (
                      link.label &&
                      link.href && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={link.href}
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "px-4 bg-transparent hover:bg-accent/50 transition-all",
                          )}
                        >
                          {link.label}
                        </a>
                      )
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://dashboard.helius.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              onClick={() => setIsOpen(false)}
              variant="secondary"
              className=" bg-orange-600/10 hover:bg-orange-600/20 text-orange-500 border border-orange-500/20"
            >
              Start Building
            </Button>
          </a>
        </div>

        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <HamburgerMenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="w-full min-h-screen space-y-6 pt-7"
            >
              <Link href="/" className="flex items-center">
                <img
                  src="/Helius-Orange.svg"
                  alt="Helius"
                  className="w-36 h-auto"
                />
              </Link>
              <div className="flex flex-col space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  {headerLinks.map((link, index) =>
                    link.label && link.href ? (
                      <Link key={index} href={link.href} className="w-full">
                        <Button
                          onClick={() => setIsOpen(false)}
                          variant="outline"
                          className="mt-4 w-full justify-start gap-2"
                        >
                          {link.label}
                        </Button>
                      </Link>
                    ) : (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>
                          {link.trigger || link.label}
                        </AccordionTrigger>
                        <AccordionContent>
                          {link.content && (
                            <div className="space-y-2">
                              {link.content.main && (
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={link.content.main.href}
                                  className="w-full"
                                >
                                  <Button
                                    onClick={() => setIsOpen(false)}
                                    variant="outline"
                                    className="w-full justify-start gap-2"
                                  >
                                    {link.content.main.title}
                                  </Button>
                                </a>
                              )}
                              {link.content.items?.map((item, idx) => (
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  key={idx}
                                  href={item.href}
                                  className="w-full"
                                >
                                  <Button
                                    onClick={() => setIsOpen(false)}
                                    variant="outline"
                                    className="w-full justify-start gap-2 mb-2"
                                  >
                                    {item.title}
                                  </Button>
                                </a>
                              ))}
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ),
                  )}
                </Accordion>
              </div>
              <a
                href="https://dashboard.helius.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="secondary"
                  className="mt-8 w-full bg-orange-600/10 hover:bg-orange-600/20 text-orange-500 border border-orange-500/20"
                >
                  Start Building
                </Button>
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {sticky && (
        <hr
          className={cn(
            "w-full absolute right-0 bottom-0 left-0 transition-opacity duration-300 ease-in-out",
            hasScrolled ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </header>
  );
}
