import { Text, clx } from "@medusajs/ui";
import { getCategoriesList, getCollectionsList } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";
import { Label } from "@medusajs/ui"
import { Input } from "@medusajs/ui"
import { Textarea } from "@medusajs/ui"
import { Button, Heading } from "@medusajs/ui"
export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6);
  const { product_categories } = await getCategoriesList(0, 6);

  return (
 <div>
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
              <div className="container px-4 md:px-6">
  <div className="flex flex-col items-center justify-center space-y-4 text-center">
    <div className="space-y-2">
      <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
        Get in Touch
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Have a question or want to collaborate? Fill out the form below and our team will get back to you as
        soon as possible.
      </p>
    </div>
  </div>
  <div className="mx-auto w-full max-w-md space-y-2 py-12">
    <form className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" placeholder="John Doe" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="How can we help you?" rows={4} required />
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  </div>
</div>
</section>




    <footer className="border-t border-ui-border-base w-full ">
      <div className="content-container flex flex-col w-full py-8">
        <div className="flex flex-col gap-y-6 sm:flex-row items-start justify-between">
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            <div className="flex flex-col gap-y-2">
              <span className="txt-large-plus txt-ui-fg-base">Online Shop</span>
              <ul className="grid gap-2">
                <li>Curtains</li>
                <li>Lights</li>
                <li>Mirrors</li>
                <li>Paintings</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-large-plus txt-ui-fg-base">Company</span>
              <ul className="grid gap-2">
                <li>About Us</li>
                <li>Our Services</li>
                <li>Privacy Policy</li>
                <li>Payment Option</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-large-plus txt-ui-fg-base">Get Help</span>
              <ul className="grid gap-2">
                <li>FAQ</li>
                <li>Shipping</li>
                <li>Terms of Services</li>
                <li>Refund Policy</li>
                <li>Shipping Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center">
          <span className="text-xs text-gray-500">
            © 2024 Space X Interiors. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
    </div>
  );
}

