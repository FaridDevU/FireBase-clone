export interface HomePageProps {
  className?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  navigationItems?: NavigationItem[];
  onGetStarted?: () => void;
}