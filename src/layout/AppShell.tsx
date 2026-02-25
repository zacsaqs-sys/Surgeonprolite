export function AppShell({
  sidebar,
  children
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="appShell">
      <aside className="appSidebar">{sidebar}</aside>

      <main className="appMain">
        {children}
      </main>
    </div>
  );
}