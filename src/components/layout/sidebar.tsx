'use client'
import { navItems } from '@/providers/data';
import { cn } from '@/lib/utils';
import { Icons } from '../icons';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav
      className={cn(`relative hidden h-screen border-r pt-16 lg:block w-72`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Edot Dashboard
            </h2>
            <nav className="grid items-start gap-2">
              {navItems.map((item, index) => {
                const Icon = Icons[item.icon || 'arrowRight'];
                return (
                  item.href && (
                    <Link
                      key={index}
                      href={item.disabled ? '/' : item.href}
                      onClick={() => {}}
                    >
                      <span
                        className={cn(
                          'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                          index === 0 ? 'bg-accent' : 'transparent'
                        )}
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </span>
                    </Link>
                  )
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
