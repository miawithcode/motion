import CustomCard from '@/components/landing-page/custom-card';
import SectionHeading from '@/components/landing-page/section-heading';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { randomUUID } from 'crypto';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <section className="mt-24 gap-4 overflow-hidden px-4 sm:flex sm:flex-col sm:px-6 md:items-center md:justify-center">
        <SectionHeading
          pill="✨ Your Workspace Perfected"
          title="All-in-One Collaboration and
Productivity Platform"
        />
        <div className="mt-6 rounded-xl bg-white bg-gradient-to-r from-primary-purple-500 to-primary-blue-500 p-[2px] sm:w-[200px]">
          <Button
            variant={'secondary'}
            className="w-full rounded-[10px] bg-background p-6 text-xl text-foreground sm:p-2 sm:text-base"
          >
            Get Motion Free
          </Button>
        </div>

        <div className="relative ml-[-50px] mt-[-40px] flex aspect-video w-[750px] items-center justify-center overflow-hidden sm:ml-0 sm:w-full md:mt-[-90px]">
          <Image
            src="/images/banner.png"
            fill
            alt="Application Banner"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 top-[50%] z-10 bg-gradient-to-t dark:from-background"></div>
        </div>
      </section>
      <section className="relative">
        <div className="after:content[''] before:content[''] flex overflow-hidden before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-20 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-20 after:bg-gradient-to-l after:from-background after:to-transparent before:dark:from-dark after:dark:from-dark">
          {[...Array(2)].map((arr) => (
            <div key={arr} className="animate-slide flex flex-nowrap">
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className="relative m-12 flex h-8 w-[100px] shrink-0 items-center sm:h-14 sm:w-[200px]"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    fill
                    className="max-w-none object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="relative mt-16 flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="top-22 absolute -z-10 h-32 w-[30%] rounded-full bg-primary-purple-500/50 blur-[120px]" />
        <SectionHeading
          title="Keep track of your meetings
all in one place"
          pill="Features"
          subheading="Capture your ideas, thoughts, and meeting notes in a
structured and organized manner."
        />
        <div className="relative mt-10 flex aspect-[1.0422535211] w-full max-w-[450px] items-center justify-center overflow-hidden rounded-2xl border-8 border-secondary-purple-300/10 sm:ml-0">
          <Image
            src="/images/calendar.png"
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="relative">
        <div className="absolute top-56 -z-10 h-32 w-full rounded-full bg-primary-purple-500/50 blur-[120px]" />
        <div className="mt-16 flex flex-col items-center justify-center overflow-visible overflow-x-hidden px-4 sm:px-6">
          <SectionHeading
            title="Trusted by all"
            pill="Testimonials"
            subheading="Join thousands of satisfied users who rely on our platform for their
personal and professional productivity needs."
          />

          {[...Array(2)].map((_, arraryIndex) => (
            <div
              key={randomUUID()}
              className={cn(
                'mt-10 flex flex-nowrap gap-6 self-start hover:paused',
                {
                  'flex-row-reverse': arraryIndex === 1,
                  'animate-[slide_400s_linear_infinite]': true,
                  'animate-[slide_400s_linear_infinite_reverse]':
                    arraryIndex === 1,
                  'ml-[100vw]': arraryIndex === 1,
                },
              )}
            >
              {(arraryIndex === 0 ? USERS : [...USERS].reverse()).map(
                (testimonial, index) => (
                  <CustomCard
                    key={testimonial.name}
                    className="w-[500px] shrink-0 rounded-xl to-background dark:bg-gradient-to-t dark:from-border"
                    cardHeader={
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={
                              arraryIndex === 0
                                ? `/images/avatars/${index + 1}.png`
                                : `/images/avatars/${USERS.length - index}.png`
                            }
                          />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-foreground">
                            {testimonial.name}
                          </CardTitle>
                          <CardDescription className="dark:text-secondary-purple-800">
                            @{testimonial.name.toLowerCase()}
                          </CardDescription>
                        </div>
                      </div>
                    }
                    cardContent={
                      <p className="dark:text-secondary-purple-800">
                        {testimonial.message}
                      </p>
                    }
                  ></CustomCard>
                ),
              )}
            </div>
          ))}

          {/* <div
            key={randomUUID()}
            className="mt-10 flex animate-[slide_250s_linear_infinite] flex-nowrap gap-6 self-start hover:paused"
          ></div> */}
        </div>
      </section>
      <section className="mt-16 flex flex-col items-center justify-center px-4 sm:px-6">
        <SectionHeading
          title="The Perfect Plan For You"
          pill="Pricing"
          subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
        />
        <div className="mt-10 flex flex-col-reverse items-center justify-center gap-4 sm:flex-row sm:items-stretch">
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card.planType}
              className={cn('relative w-[300px] rounded-2xl dark:bg-black/40', {
                'border-primary-purple-500/70':
                  card.planType === PRICING_PLANS.proplan,
              })}
              cardHeader={
                <CardTitle className="text-2xl font-semibold">
                  {card.planType === PRICING_PLANS.proplan && (
                    <>
                      <div className="absolute top-0 -z-10 hidden h-32 w-full rounded-full bg-primary-purple-500/80 blur-[120px] dark:block" />
                      <Image
                        src="/icons/diamond.svg"
                        width={24}
                        height={24}
                        alt="Pro plan icon"
                        className="absolute right-6 top-6"
                      />
                    </>
                  )}
                  {card.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span className="text-2xl font-semibold">${card.price}</span>
                  {+card.price > 0 && (
                    <span className="ml-1 dark:text-secondary-purple-800">
                      /mo
                    </span>
                  )}
                  <p className="dark:text-secondary-purple-800">
                    {card.description}
                  </p>
                  <Button
                    variant={'btn-primary'}
                    className="mt-4 w-full whitespace-nowrap capitalize"
                  >
                    {card.planType === PRICING_PLANS.proplan
                      ? 'Go Pro'
                      : 'Get Started'}
                  </Button>
                </CardContent>
              }
              cardFooter={
                <ul className="mb-2 flex flex-col gap-4 font-normal">
                  <small>{card.highlightFeature}</small>
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Image
                        src="/icons/check.svg"
                        alt="Check icon"
                        width={16}
                        height={16}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </section>
    </>
  );
}
