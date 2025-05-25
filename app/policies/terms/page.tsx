import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full bg-green-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tighter text-green-800 sm:text-4xl md:text-5xl">
              Terms and Conditions
            </h1>
            <p className="mb-8 text-gray-500">Last updated: May 9, 2023</p>

            <div className="space-y-6 text-gray-600">
              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">1. Introduction</h2>
                <p>
                  Welcome to EcoFine Products ("Company", "we", "our", "us"). These Terms and Conditions govern your use
                  of our website located at www.ecofineproducts.com (together or individually "Service") operated by
                  EcoFine Products.
                </p>
                <p className="mt-2">
                  Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and
                  disclose information that results from your use of our web pages. Your agreement with us includes
                  these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood
                  Agreements, and agree to be bound by them.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">2. Communications</h2>
                <p>
                  By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and
                  other information we may send. However, you may opt out of receiving any, or all, of these
                  communications from us by following the unsubscribe link or by emailing at info@ecofineproducts.com.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">3. Purchases</h2>
                <p>
                  If you wish to purchase any product or service made available through Service ("Purchase"), you may be
                  asked to supply certain information relevant to your Purchase including, without limitation, your
                  credit card number, the expiration date of your credit card, your billing address, and your shipping
                  information.
                </p>
                <p className="mt-2">
                  You represent and warrant that: (i) you have the legal right to use any credit card(s) or other
                  payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is
                  true, correct and complete.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">4. Product Descriptions</h2>
                <p>
                  We endeavor to describe our products as accurately as possible. However, we do not warrant that
                  product descriptions or other content of our Service is accurate, complete, reliable, current, or
                  error-free. If a product offered by us is not as described, your sole remedy is to return it in unused
                  condition.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">5. Returns and Refunds</h2>
                <p>
                  Please review our Return Policy posted on our Service prior to making any purchases. Our Return Policy
                  is incorporated into these Terms and Conditions by reference.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">6. Intellectual Property</h2>
                <p>
                  Service and its original content (excluding Content provided by users), features and functionality are
                  and will remain the exclusive property of EcoFine Products and its licensors. Service is protected by
                  copyright, trademark, and other laws of the United States. Our trademarks and trade dress may not be
                  used in connection with any product or service without the prior written consent of EcoFine Products.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">7. Contact Us</h2>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at
                  legal@ecofineproducts.com.
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
