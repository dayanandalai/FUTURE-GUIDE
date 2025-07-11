// app/signup/page.tsx (or your sign-up route)
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from 'lucide-react'

// --- Left Panel Component (Identical to Sign-In page for consistency) ---
const LeftPanel = () => (
  <div className="relative hidden lg:flex flex-col items-center justify-center min-h-screen bg-black text-white p-12">
    <Image
      src="/images/sign.jpg" // IMPORTANT: Use the same background image
      alt="Abstract tech background"
      fill
      className="object-cover opacity-30"
    />
    <div className="relative z-10 w-full">
      <div className="mb-8 h-10 w-10 rounded-full bg-white" />
      <h1 className="text-4xl font-bold leading-tight mb-4">Design with us</h1>
      <p className="text-lg text-white/80 max-w-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus nunc, ac rhoncus odio congue quis.
      </p>
    </div>
  </div>
);

// --- Main SignUp Page Component ---
export default function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const { toast } = useToast()
  const { setIsAuthenticated, setUserId } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (password !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Please ensure your passwords match.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      toast({
        title: "Account Created!",
        description: "Let's set up your profile.",
      })
      
      setIsAuthenticated(true)
      setUserId(data.userId)
      router.push('/firstpage')

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong'
      toast({
        title: "Sign-up Error",
        description: errorMessage,
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

        {/* Right Panel: Sign-Up Form */}
        <div className="flex flex-col justify-center items-center p-6 sm:p-8">
          <div className="w-full max-w-sm">
            <div className="text-right mb-12">
              <span className="text-sm text-gray-600">Already have an account? </span>
              <Link href="/signin" className="text-sm font-semibold text-black underline hover:text-gray-700">
                Sign in
              </Link>
            </div>

            <h2 className="text-3xl font-bold mb-8">Sign up</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-500">Your name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isLoading}
                  className="mt-1 h-12 rounded-lg"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-500">Email address</Label>
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
                <Label htmlFor="password" className="text-sm font-medium text-gray-500">Password</Label>
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
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-500">Confirm Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={isLoading}
                    className="h-12 rounded-lg pr-12"
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-lg bg-gray-300 text-black font-semibold hover:bg-gray-400 text-base mt-2"
              >
                {isLoading ? "Signing up..." : "Sign up"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}