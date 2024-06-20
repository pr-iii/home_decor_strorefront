import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"
import pexels from "../hero/pexels.jpg"
import { Label } from "@medusajs/ui"
import { Input } from "@medusajs/ui"
import { Textarea } from "@medusajs/ui"
import meet from "../featured-products/meet.jpg"

const Hero = () => {
  return (
    <main>
<section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/973/1004/995/interior-design-room-carpets-couch-wallpaper-preview.jpg"
              width="800"
              height="600"
              alt="Hero Product"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Elevate Your Home with Space X Interiors
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover our curated collection of high-quality interior design products to transform your living
                  space.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Shop Now
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Explore Categories
                </Link>
              </div>
            </div>
          </div>
        </section>

<section id="games" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
<div className="container px-4 md:px-6">
  <div className="flex flex-col items-center justify-center space-y-4 text-center">
    <div className="space-y-2">
      <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Trending Collections</div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Diverse Interior Styling Catalog</h2>
      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        From a Beautiful old Vintage theme collection to the latest Italiano collection
      </p>
    </div>
  </div>
  <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
    <img
      src="https://c4.wallpaperflare.com/wallpaper/59/97/72/design-sofa-furniture-watch-wallpaper-preview.jpg"
      width="550"
      height="310"
      alt="Game Screenshot"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
    />
    <div className="flex flex-col justify-center space-y-4">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold"> “Contemporary Urban Oasis”</h3>
        <p className="text-gray-500 dark:text-gray-400">
        This image captures the essence of modern urban living with a seamless blend of comfort and style. The living area, with its plush sofa and vibrant cushions, invites relaxation, while the adjoining kitchen area, featuring sleek appliances and wooden accents, epitomizes functional elegance. The large wall clock adds a touch of sophistication, making this space a perfect representation of contemporary urban home design.
        </p>
      </div>
      <Link
        href="#"
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        prefetch={false}
      >
        Learn More
      </Link>
    </div>
  </div>
  <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
    <img
      src="https://w0.peakpx.com/wallpaper/31/188/HD-wallpaper-living-room-furniture-home-interior.jpg"
      width="550"
      height="310"
      alt="Game Screenshot"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
    />
    <div className="flex flex-col justify-center space-y-4">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">“Tranquil Modern Retreat”</h3>
        <p className="text-gray-500 dark:text-gray-400">
        The image presents a modern living room that marries sleek design with the tranquility of nature. The room is bathed in natural light streaming through expansive glass doors, offering views of verdant greenery. Inside, the neutral-toned furnishings, including a cozy sofa set and a chic coffee table, create an inviting atmosphere for relaxation or social gatherings.
        </p>
      </div>
      <Link
        href="#"
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        prefetch={false}
      >
        Learn More
      </Link>
    </div>
  </div>
</div>
</section>
<section id="about" className="w-full py-12 md:py-24 lg:py-32">
<div className="container px-4 md:px-6">
  <div className="flex flex-col items-center justify-center space-y-4 text-center">
    <div className="space-y-2">
      <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
        About Space X Interiors
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        Crafting Stylish Home Interiors
      </h2>
      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        At Space X Interiors (A Unit of Hackatoons) , we are a passionate team of developers, designers, and storytellers dedicated to
        creating innovative and immersive Home Interiors. Our mission is to push the boundaries of what
        possible in the world of Interiors, and to bring joy and excitement to family worldwide.
      </p>
    </div>
  </div>
  <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
    <img
      src="https://digitalagencynetwork.com/wp-content/uploads/2022/11/top-inspiring-digital-agency-meet-the-team-page-examples-major-tom-jpg.webp"
      width="550"
      height="310"
      alt="Team Photo"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
    />
    <div className="flex flex-col justify-center space-y-4">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Meet the Team</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Our team is made up of industry veterans and rising talents, all united by a passion for creating
          unforgettable gaming experiences. From our skilled programmers to our visionary designers, we work
          collaboratively to bring our ideas to life.
        </p>
      </div>
      <Link
        href="#"
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        prefetch={false}
      >
        Learn More
      </Link>
    </div>
  </div>
</div>
</section>

</main>
  )
}

export default Hero
