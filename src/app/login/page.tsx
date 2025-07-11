// app/login/page.tsx (or your sign-in route)
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from 'lucide-react'

// --- Icon Components (for social buttons) ---
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" {...props}>
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.223,0-9.657-3.657-11.303-8H6.399C9.656,39.663,16.318,44,24,44z" />
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.089,5.571l6.19,5.238C42.02,35.622,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px" {...props}>
    <path d="M22.46 6c-.77.34-1.6.57-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.27 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.35.6-.55 1.3-.55 2.05 0 1.48.75 2.79 1.9 3.55-.7-.02-1.36-.21-1.94-.54v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.73.15-1.12.15-.27 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97-1.46 1.15-3.3 1.83-5.3 1.83-.34 0-.68-.02-1.02-.06 1.88 1.21 4.12 1.92 6.56 1.92 7.88 0 12.2-6.54 12.2-12.2 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.22z" className="text-[#1DA1F2]" />
  </svg>
);


// --- Left Panel Component ---
const LeftPanel = () => (
  <div className="relative hidden lg:flex flex-col items-center justify-center min-h-screen bg-black text-white p-12">
    {/* Background Image with Red Tint */}
    <Image
      src="/images/image-cta-background.jpg" // IMPORTANT: Replace with your actual image path
      alt="Abstract tech background"
      fill
      className="object-cover opacity-30"
    />
    <div className="relative z-10 w-full">
      <div className="mb-8 h-10 w-10 rounded-full bg-white" />
      <h1 className="text-4xl font-bold leading-tight mb-4">Your Next Chapter Starts Here</h1>
      <p className="text-left text-lg text-white/90 max-w-xl leading-relaxed">
        Finishing high school is a major milestone — and what comes next can feel both exciting and overwhelming.<br /><br />
        Whether you&apos;re a student wondering which path to follow, or a parent looking to support your child in making the right decision, our platform is here to help.<br /><br />
        We provide personalized career guidance, easy-to-understand insights, and expert tools designed for students stepping into the real world.<br /><br />
        From discovering suitable courses and careers to helping you plan your academic and professional future, we make it easier to move forward with confidence.<br /><br />
        <span className="font-semibold text-white">Join us today and take the first step toward building a brighter, more focused tomorrow.</span>
      </p>
    </div>
  </div>
);

// --- Main SignIn Page Component ---
export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      toast({
        title: "Signed in successfully",
        description: "Welcome back!",
      })
      router.push('/firstpage') // Using router.push for client-side navigation
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Something went wrong',
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <LeftPanel />

        {/* Right Panel: Sign-In Form */}
        <div className="flex flex-col justify-center items-center p-6 sm:p-8">
          <div className="w-full max-w-sm">
            <div className="text-right mb-12">
              <span className="text-sm text-gray-600">Don't have an account? </span>
              <Link href="/signup" className="text-sm font-semibold text-black underline hover:text-gray-700">
                Sign up
              </Link>
            </div>

            <h2 className="text-3xl font-bold mb-6">Sign in</h2>

            <div className="flex flex-col space-y-3 mb-6">
              <Button variant="outline" className="w-full justify-center py-6 text-base" disabled={isLoading}>
                <GoogleIcon className="mr-3" /> Continue with Google
              </Button>
              <Button variant="outline" className="w-full justify-center py-6 text-base" disabled={isLoading}>
                <TwitterIcon className="mr-3" /> Continue with Twitter
              </Button>
            </div>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-xs font-medium text-gray-500">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-500">User name or email address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="mt-1 h-12 rounded-lg"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium text-gray-500">Your password</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                    className="h-12 rounded-lg pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    <span className="text-xs font-semibold ml-2">Hide</span>
                  </button>
                </div>
              </div>

              <div className="text-right">
                <Link href="/forgot-password" className="text-sm font-semibold text-black underline hover:text-gray-700">
                  Forget your password
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-lg bg-gray-300 text-black font-semibold hover:bg-gray-400 text-base"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <div className="text-center mt-6">
              <span className="text-sm text-gray-600">Don't have an account? </span>
              <Link href="/signup" className="text-sm font-semibold text-black underline hover:text-gray-700">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}