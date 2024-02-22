'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NotificationCard } from './notification-card';

export function Notification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <p>&#128276;</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-max" align="end" forceMount>
        <NotificationCard />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
