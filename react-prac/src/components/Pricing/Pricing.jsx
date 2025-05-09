"use client"

import { Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface PricingPageProps {
  onSelectPlan: (plan: "starter" | "premium", billingCycle: "monthly" | "annual") => void
}

export default function PricingPage({ onSelectPlan }: PricingPageProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

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
        <h1 className="text-2xl font-semibold mb-2">Flexible plans for your community's size and needs</h1>
        <p className="text-gray-500 text-sm">Select a plan that works best for you</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="flex items-center bg-gray-100 p-1 rounded-full">
          <button
            className={`px-4 py-1 rounded-full text-sm ${billingCycle === "monthly" ? "bg-white text-gray-800 font-medium shadow-sm" : "text-gray-500"}`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-1 rounded-full text-sm ${billingCycle === "annual" ? "bg-white text-gray-800 font-medium shadow-sm" : "text-gray-500"}`}
            onClick={() => setBillingCycle("annual")}
          >
            Annual
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 relative">
          <div className="absolute -top-3 left-6 bg-teal-500 text-white text-xs px-3 py-1 rounded-full">POPULAR</div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
              </div>
              <h2 className="font-medium">Starter</h2>
              <p className="text-xs text-gray-500">Great for small use</p>
            </div>
            <div className="text-right">
              <div className="flex items-start">
                <span className="text-sm mt-1">$</span>
                <span className="text-3xl font-semibold">{billingCycle === "monthly" ? "6.99" : "69.99"}</span>
              </div>
              <p className="text-xs text-gray-500">per {billingCycle === "monthly" ? "month" : "year"}</p>
              {billingCycle === "annual" && <p className="text-xs text-teal-600 font-medium">Save $13.89</p>}
            </div>
          </div>

          <div className="border-t border-b py-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-xs text-gray-500">Included</span>
              <span className="text-xs font-medium">27</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start text-sm">
                <Check className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                <span>Access to all basic features</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                <span>Basic reporting and analytics</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                <span>Up to 10 individual users</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                <span>20GB individual data</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onSelectPlan("starter", billingCycle)}
            className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            Choose Starter
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
              </div>
              <h2 className="font-medium">Premium</h2>
              <p className="text-xs text-gray-500">Great for big teams</p>
            </div>
            <div className="text-right">
              <div className="flex items-start">
                <span className="text-sm mt-1">$</span>
                <span className="text-3xl font-semibold">{billingCycle === "monthly" ? "8.99" : "89.99"}</span>
              </div>
              <p className="text-xs text-gray-500">per {billingCycle === "monthly" ? "month" : "year"}</p>
              {billingCycle === "annual" && <p className="text-xs text-teal-600 font-medium">Save $17.89</p>}
            </div>
          </div>

          <div className="border-t border-b py-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-xs text-gray-500">Included</span>
              <span className="text-xs font-medium">32</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start text-sm">
                <Check className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                <span>Access to all premium features</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                <span>Advanced reporting and analytics</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                <span>Up to 20 individual users</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                <span>40GB individual data</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                <span>Priority customer support</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onSelectPlan("premium", billingCycle)}
            className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            Choose Premium
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="text-xs text-gray-500 border-b border-gray-300 pb-0.5">Compare all features</button>
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
