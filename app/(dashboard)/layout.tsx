interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <main className="h-full max-w-6xl mx-auto ">{children}</main>;
};

export default DashboardLayout;
