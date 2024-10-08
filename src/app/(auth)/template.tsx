type TemplateProps = {
  children: React.ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return <div className="flex h-svh justify-center p-6">{children}</div>;
}
