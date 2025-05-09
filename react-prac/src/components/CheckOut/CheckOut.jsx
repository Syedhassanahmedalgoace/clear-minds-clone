"use client"


import { useState } from "react"
import { ArrowLeft, CreditCard } from "lucide-react"
import Image from "next/image"

interface CheckoutPageProps {
  onSubmit: (billingInfo: any) => void
  onBack: () => void
  selectedPlan: "starter" | "premium" | null
  billingCycle: "monthly" | "annual"
}

export default function CheckoutPage({ onSubmit, onBack, selectedPlan, billingCycle }: CheckoutPageProps) {
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    paymentMethod: "credit-card",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBillingInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(billingInfo)
  }

  const planPrice =
    selectedPlan === "starter" ? (billingCycle === "monthly" ? 6.99 : 69.99) : billingCycle === "monthly" ? 8.99 : 89.99
  const tax = billingCycle === "monthly" ? 3.0 : 10.0
  const total = planPrice + tax

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="flex items-center justify-between mb-12">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=24&width=24"
            alt="Clear Minds Logo"
            width={24}
            height={24}
            className="mr-2"
          />
          <span className="text-teal-600 font-medium">clear minds</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 text-sm">Help</button>
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        </div>
      </header>

      <div className="text-center mb-12">
        <h1 className="text-2xl font-semibold mb-2">Let's finish powering you up!</h1>
        <p className="text-gray-500 text-sm">Please provide your billing info to get started</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <h2 className="font-medium mb-4">Billing Address</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm text-gray-600 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={billingInfo.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm text-gray-600 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={billingInfo.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm text-gray-600 mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={billingInfo.address}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label htmlFor="city" className="block text-sm text-gray-600 mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={billingInfo.city}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm text-gray-600 mb-1">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={billingInfo.state}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm text-gray-600 mb-1">
                  ZIP
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={billingInfo.zip}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={billingInfo.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                required
              />
            </div>

            <h2 className="font-medium mb-4">Payment Method</h2>
            <div className="flex space-x-4 mb-8">
              <div
                className={`flex items-center border rounded-md p-3 cursor-pointer ${
                  billingInfo.paymentMethod === "credit-card" ? "border-teal-500 bg-teal-50" : "border-gray-300"
                }`}
                onClick={() => setBillingInfo((prev) => ({ ...prev, paymentMethod: "credit-card" }))}
              >
                <div className="w-4 h-4 rounded-full border-2 border-teal-500 mr-2 flex items-center justify-center">
                  {billingInfo.paymentMethod === "credit-card" && (
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  )}
                </div>
                <span className="text-sm">Credit Card</span>
              </div>
              <div
                className={`flex items-center border rounded-md p-3 cursor-pointer ${
                  billingInfo.paymentMethod === "paypal" ? "border-teal-500 bg-teal-50" : "border-gray-300"
                }`}
                onClick={() => setBillingInfo((prev) => ({ ...prev, paymentMethod: "paypal" }))}
              >
                <div className="w-4 h-4 rounded-full border-2 border-teal-500 mr-2 flex items-center justify-center">
                  {billingInfo.paymentMethod === "paypal" && <div className="w-2 h-2 bg-teal-500 rounded-full"></div>}
                </div>
                <span className="text-sm">PayPal</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button type="button" onClick={onBack} className="flex items-center text-sm text-gray-500">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </button>
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
              >
                Continue to Payment
              </button>
            </div>
          </form>
        </div>

        <div>
          <h2 className="font-medium mb-4">Summary</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">Plan Details</span>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mr-1">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                </div>
                <div className="w-8 h-4 bg-gray-200 rounded-full relative">
                  <div className="absolute right-0 w-4 h-4 bg-teal-500 rounded-full -top-0"></div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm">{selectedPlan === "starter" ? "Starter Plan" : "Premium Plan"}</span>
                <span className="text-sm">${planPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-500">Tax</span>
                <span className="text-sm">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 mb-4">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Total Billed</span>
                <div>
                  <span className="text-xl font-semibold">${total.toFixed(2)}</span>
                  <span className="text-xs text-gray-500 block text-right">per {billingCycle}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition flex items-center justify-center">
              <CreditCard className="h-4 w-4 mr-2" />
              <span>Proceed with payment</span>
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Your subscription will automatically renew each month
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center">
        <div className="flex items-center mr-4">
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-2">
            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
          </div>
          <span className="text-xs">Trusted by 10,000+ users</span>
        </div>
      </div>
    </div>
  )
}
