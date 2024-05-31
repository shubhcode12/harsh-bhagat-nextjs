import Link from "next/link";

export default function Demo() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}>
          <h1>my channel</h1>
          <span className="sr-only">Youtuber's Channel</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Videos
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Gallery
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Exploring the World with [Youtuber's Name]
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Join me on my adventures as I share my unique perspective on
                    travel, culture, and life. Subscribe to stay up-to-date with
                    my latest videos.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}>
                    Subscribe
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                alt="Youtuber"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Most Popular Videos
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out some of my most viewed and engaging videos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Video Thumbnail"
                  className="aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Exploring the Serengeti</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Join me on a safari through the Serengeti National Park in
                    Tanzania.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Video Thumbnail"
                  className="aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">
                    Cooking Traditional Dishes in Italy
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Learn how to make authentic Italian cuisine in the heart of
                    Rome.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Video Thumbnail"
                  className="aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">
                    Hiking the Inca Trail to Machu Picchu
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Experience the breathtaking journey to one of the New Seven
                    Wonders of the World.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Gallery
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore a collection of my favorite moments captured on
                  camera.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <img
                src="/placeholder.svg"
                alt="Gallery Image"
                className="rounded-xl object-cover"
              />
              <img
                src="/placeholder.svg"
                alt="Gallery Image"
                className="rounded-xl object-cover"
              />
              <img
                src="/placeholder.svg"
                alt="Gallery Image"
                className="rounded-xl object-cover"
              />
              <img
                src="/placeholder.svg"
                alt="Gallery Image"
                className="rounded-xl object-cover"
              />
              <img
                src="/placeholder.svg"
                alt="Gallery Image"
                className="rounded-xl object-cover"
              />
              <img
                src="/placeholder.svg"
                alt="Gallery Image"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Connect with Me
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Follow me on social media to stay up-to-date with my latest
                adventures and behind-the-scenes content.
              </p>
            </div>
            <div className="mx-auto flex flex-wrap justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2"
                prefetch={false}>
                <span>YouTube</span>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2"
                prefetch={false}>
                <span>Instagram</span>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2"
                prefetch={false}>
                <span>Twitter</span>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2"
                prefetch={false}>
                <span>Facebook</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2024 [Youtuber's Name]. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
