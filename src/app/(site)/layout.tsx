export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="overflow-hidden px-4 sm:px-6">{children}</main>
    </div>
  );
}
