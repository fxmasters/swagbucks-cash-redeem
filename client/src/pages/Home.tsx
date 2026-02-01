import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Apple } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Modern Financial Wellness
 * - Deep teal/blue gradients for trust and financial stability
 * - Large, animated counter as the hero focal point
 * - Clean white cards for signup with social integration
 * - Wave divider to separate sections with organic flow
 */

export default function Home() {
  const [counter, setCounter] = useState(0);
  const targetCounter = 674079338;

  // Animate counter on mount
  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(targetCounter / 100);
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetCounter) {
        setCounter(targetCounter);
        clearInterval(interval);
      } else {
        setCounter(current);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const formatCounter = (num: number) => {
    return num.toLocaleString("en-US");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-lg font-bold text-teal-700">◆</span>
          </div>
          <span className="text-white font-bold text-lg">swagbucks</span>
        </div>
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white/10"
        >
          Log In
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-teal-800 via-teal-700 to-blue-900 overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto w-full">
          {/* Left Side - Hero Text and Counter */}
          <div className="flex-1 text-white z-10 max-w-md">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Save Money.
              <br />
              Make Money.
            </h1>

            <p className="text-sm text-white/80 mb-6">
              Members like you have already cashed out:
            </p>

            {/* Animated Counter */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 mb-4 shadow-2xl">
              <div className="text-4xl md:text-5xl font-bold text-white font-mono tracking-wider">
                $ {formatCounter(counter)}
              </div>
            </div>

            <p className="text-xs text-white/70">
              in cash back from using Swagbucks
            </p>
          </div>

          {/* Right Side - Signup Form Card */}
          <div className="flex-1 z-10 flex justify-end max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Join for free!
              </h2>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 mb-6">
                <Checkbox id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-xs text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Use
                  </a>{" "}
                  and to receive marketing email messages from Swagbucks, and I
                  accept the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* Google Button */}
              <Button
                className="w-full mb-3 bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2"
                variant="outline"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </Button>

              {/* Apple Button */}
              <Button
                className="w-full mb-4 bg-gray-900 text-white hover:bg-gray-800 flex items-center justify-center gap-2"
                variant="default"
              >
                <Apple className="w-5 h-5" />
                Continue with Apple
              </Button>

              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>

              {/* Email Button */}
              <Button
                className="w-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2"
                variant="outline"
              >
                <Mail className="w-5 h-5" />
                Continue with Email
              </Button>

              {/* Login Link */}
              <p className="text-center text-sm text-gray-600 mt-6">
                Already have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline font-medium">
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            How it Works
          </h2>

          <p className="text-center text-gray-600 text-lg leading-relaxed">
            After signing up, tell us about yourself to get personalized offers.
            Redeem gift cards to your favorite retailers like Amazon and Walmart
            or get cash back from PayPal.
          </p>

          {/* Divider */}
          <div className="mt-12 border-t border-gray-200"></div>
        </div>
      </section>
    </div>
  );
}
