'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useState,
} from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const routes = [
  { label: 'Resources', href: '#resources' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

export default function Header() {
  const [path, setPath] = useState<string>('#products');

  return (
    <header className="flex items-center justify-center p-4 sm:p-6">
      <Link href={'/'} className="flex w-full items-center gap-2">
        <Image
          src={'/icons/logo.svg'}
          alt="Motion logo"
          width={24}
          height={24}
        />
        <span className="font-semibold dark:text-white">motion.</span>
      </Link>

      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath(routes[0].href)}
              className={cn('dark:text-white/40', {
                'dark:text-white': path === routes[0].href,
              })}
            >
              {routes[0].label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <span className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    Welcome
                  </span>
                </li>
                <ListItem href="#" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="#" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="#" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath(routes[1].href)}
              className={cn('dark:text-white/40', {
                'dark:text-white': path === routes[1].href,
              })}
            >
              {routes[1].label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="Pro Plan" href={'#'}>
                  Unlock full power with collaboration.
                </ListItem>
                <ListItem title="Free Plan" href="#">
                  Great for teams just starting out.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath(routes[2].href)}
              className={cn('dark:text-white/40', {
                'dark:text-white': path === routes[2].href,
              })}
            >
              {routes[2].label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href={routes[3].href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  'dark:text-white/40',
                  navigationMenuTriggerStyle(),
                  {
                    'dark:text-white': path === routes[3].href,
                  },
                )}
              >
                {routes[3].label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <aside className="flex w-full justify-end gap-4">
        <Button
          variant={'btn-secondary'}
          className="hidden items-center p-1 sm:flex"
          asChild
        >
          <Link href={'/login'}>Login</Link>
        </Button>
        <Button asChild variant={'btn-primary'} className="whitespace-nowrap">
          <Link href={'/signup'}>Signup</Link>
        </Button>
      </aside>
    </header>
  );
}

const ListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'group block select-none space-y-1 font-medium leading-none',
              className,
            )}
            {...props}
          >
            <div className="text-sm text-white">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-white/40 group-hover:text-white/70">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';
