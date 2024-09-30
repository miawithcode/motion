type SectionHeadingProps = {
  title: string;
  subheading?: string;
  pill: string;
};

export default function SectionHeading({
  title,
  subheading,
  pill,
}: SectionHeadingProps) {
  return (
    <section className="flex flex-col items-start justify-center gap-4 md:items-center">
      <article className="dark:to-secondary-blue-500 dark:from-secondary-purple-500 rounded-full p-[1px] text-sm dark:bg-gradient-to-r">
        <div className="rounded-full px-3 py-1 dark:bg-black">{pill}</div>
      </article>
      {subheading ? (
        <>
          <h2 className="text-left text-3xl font-semibold sm:max-w-[750px] sm:text-5xl md:text-center">
            {title}
          </h2>
          <p className="dark:text-secondary-purple-700 text-left sm:max-w-[450px] md:text-center">
            {subheading}
          </p>
        </>
      ) : (
        <h1 className="text-left text-4xl font-semibold sm:max-w-[850px] sm:text-6xl md:text-center">
          {title}
        </h1>
      )}
    </section>
  );
}
