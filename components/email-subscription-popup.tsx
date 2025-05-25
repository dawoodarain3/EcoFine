"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EmailSubscriptionPopup({ onClose }) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    // Clear any previous errors
    setError("")

    // Simulate submission success
    setSubmitted(true)

    // Close popup after 3 seconds on success
    setTimeout(() => {
      onClose()
    }, 3000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6 text-center">
              <div className="mb-2 inline-block rounded-full bg-green-100 p-2">
                <div className="rounded-full bg-green-600 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-1 text-2xl font-bold">Get 15% Off Your First Order</h3>
              <p className="text-gray-600">
                Subscribe to our newsletter for exclusive B2B wholesale offers on microfiber products
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full ${error ? "border-red-500" : ""}`}
                />
                {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Subscribe Now
              </Button>

              <p className="text-center text-xs text-gray-500">
                By subscribing, you agree to receive marketing emails from EcoFine Products. You can unsubscribe at any
                time.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full bg-green-100 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold">Thank You for Subscribing!</h3>
            <p className="text-gray-600">Your 15% discount code has been sent to your email. Check your inbox!</p>
          </div>
        )}
      </div>
    </div>
  )
}
