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