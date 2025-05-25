import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full bg-green-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tighter text-green-800 sm:text-4xl md:text-5xl">
              Cookie Policy
            </h1>
            <p className="mb-8 text-gray-500">Last updated: May 9, 2023</p>

            <div className="space-y-6 text-gray-600">
              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">1. What Are Cookies</h2>
                <p>
                  Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is
                  stored in your web browser and allows the Service or a third-party to recognize you and make your next
                  visit easier and the Service more useful to you.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">2. How EcoFine Products Uses Cookies</h2>
                <p>
                  When you use and access the Service, we may place a number of cookie files in your web browser. We use
                  cookies for the following purposes:
                </p>
                <ul className="ml-6 list-disc space-y-1">
                  <li>To enable certain functions of the Service</li>
                  <li>To provide analytics</li>
                  <li>To store your preferences</li>
                  <li>To enable advertisements delivery, including behavioral advertising</li>
                </ul>
                <p className="mt-2">
                  We use both session and persistent cookies on the Service and we use different types of cookies to run
                  the Service:
                </p>
                <ul className="ml-6 list-disc space-y-1">
                  <li>
                    <strong>Essential cookies.</strong> We may use essential cookies to authenticate users and prevent
                    fraudulent use of user accounts.
                  </li>
                  <li>
                    <strong>Preferences cookies.</strong> We may use preferences cookies to remember information that
                    changes the way the Service behaves or looks, such as the "remember me" functionality of a
                    registered user or a user's language preference.
                  </li>
                  <li>
                    <strong>Analytics cookies.</strong> We may use analytics cookies to track information how the
                    Service is used so that we can make improvements.
                  </li>
                  <li>
                    <strong>Advertising cookies.</strong> We may use advertising cookies to deliver advertisements that
                    may be relevant to you and your interests.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">3. Third-Party Cookies</h2>
                <p>
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics
                  of the Service, deliver advertisements on and through the Service, and so on.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">4. What Are Your Choices Regarding Cookies</h2>
                <p>
                  If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit
                  the help pages of your web browser. Please note, however, that if you delete cookies or refuse to
                  accept them, you might not be able to use all of the features we offer, you may not be able to store
                  your preferences, and some of our pages might not display properly.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">5. Contact Us</h2>
                <p>
                  If you have any questions about our Cookie Policy, please contact us at privacy@ecofineproducts.com.
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
