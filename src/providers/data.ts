import { Icons } from "@/components/icons";
export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
    description?: string;
}
export const navItems: NavItem[] = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: "dashboard",
        label: "Dashboard",
    },
    {
        title: "User",
        href: "/dashboard/user",
        icon: "user",
        label: "user",
    },
    {
        title: "Employee",
        href: "/dashboard/employee",
        icon: "employee",
        label: "employee",
    },
    {
        title: "Profile",
        href: "/dashboard/profile",
        icon: "profile",
        label: "profile",
    },
];

export interface accountDataProps {
    userName: string,
    email: string,
    menuItem: string[]
}

export const accountData: accountDataProps = {
    userName: 'User Admin',
    email: 'admin@admin.com',
    menuItem: ['Profile', 'Billing', 'Settings', 'Logout']
}

export interface notificationDataProps {
    desc: string,
    hourAgo: number
}
export const notificationData: notificationDataProps[] = [{
    desc: 'Your Call Has Been Confirm',
    hourAgo: 2
},
{
    desc: 'Your Call Has Been Confirm',
    hourAgo: 5
},
{
    desc: 'Your Call Has Been Confirm',
    hourAgo: 7
}]
