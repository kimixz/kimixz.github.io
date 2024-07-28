import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname

const navItems = {
  '/': {
    name: 'Home',
  },
  '/work': {
    name: 'Work Experience',
  },
  '/publications': {
    name: 'Publications',
  },
};

export function Navbar() {
  const pathname = usePathname(); // Use the usePathname hook

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path; // Determine if the link is active
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 ${
                    isActive ? 'underline' : ''
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}