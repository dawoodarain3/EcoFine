import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full bg-green-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tighter text-green-800 sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mb-8 text-gray-500">Last updated: May 9, 2023</p>

            <div className="space-y-6 text-gray-600">
              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">1. Introduction</h2>
                <p>
                  EcoFine Products ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how your personal information is collected, used, and disclosed by EcoFine Products. This
                  Privacy Policy applies to our website, ecofineproducts.com, and its associated subdomains
                  (collectively, our "Service").
                </p>
                <p className="mt-2">
                  By accessing or using our Service, you signify that you have read, understood, and agree to our
                  collection, storage, use, and disclosure of your personal information as described in this Privacy
                  Policy.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">2. Information We Collect</h2>
                <p>
                  We collect information from you when you visit our website, register on our site, place an order,
                  subscribe to our newsletter, respond to a survey, fill out a form, or otherwise contact us.
                </p>
                <p className="mt-2">The personal information we collect may include:</p>
                <ul className="ml-6 list-disc space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Mailing address</li>
                  <li>Payment information</li>
                  <li>Company information</li>
                  <li>Other information you choose to provide</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">3. How We Use Your Information</h2>
                <p>We may use the information we collect from you for the following purposes:</p>
                <ul className="ml-6 list-disc space-y-1">
                  <li>
                    To personalize your experience and to allow us to deliver the type of content and product offerings
                    in which you are most interested.
                  </li>
                  <li>To improve our website in order to better serve you.</li>
                  <li>To allow us to better service you in responding to your customer service requests.</li>
                  <li>To administer a contest, promotion, survey or other site feature.</li>
                  <li>To quickly process your transactions.</li>
                  <li>To ask for ratings and reviews of services or products.</li>
                  <li>To follow up with you after correspondence (live chat, email or phone inquiries).</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">4. Cookies</h2>
                <p>
                  We use cookies to help us remember and process the items in your shopping cart, understand and save
                  your preferences for future visits, keep track of advertisements, and compile aggregate data about
                  site traffic and site interaction so that we can offer better site experiences and tools in the
                  future.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">5. Third-Party Disclosure</h2>
                <p>
                  We do not sell, trade, or otherwise transfer to outside parties your personally identifiable
                  information unless we provide you with advance notice. This does not include website hosting partners
                  and other parties who assist us in operating our website, conducting our business, or servicing you,
                  so long as those parties agree to keep this information confidential.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at privacy@ecofineproducts.com.
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/">Return to Homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
