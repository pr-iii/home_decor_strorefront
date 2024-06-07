import { Text, clx } from "@medusajs/ui";
import { getCategoriesList, getCollectionsList } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6);
  const { product_categories } = await getCategoriesList(0, 6);

  return (
    <footer className="border-t border-ui-border-base w-full">
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
            © 2024 Home decor. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

