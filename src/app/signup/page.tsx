'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState<string | null>(null) // Removed UI error state
  const router = useRouter()
  const { setIsAuthenticated, setUserId } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // setError(null) // No longer needed

    if (password !== confirmPassword) {
      console.error("Passwords do not match. Please ensure your passwords match.") // Log error to terminal
      setIsLoading(false)
      return
    }

    try {
      console.log('Sending signup request...')
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      const data = await res.json()
      console.log('Signup response:', data)

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setIsAuthenticated(true)
      setUserId(data.userId)

      console.log("Account created successfully. Let's set up your profile!") // Log to console

      router.push('/profile/edit')

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong'
      console.error('Signup error:', errorMessage) // Log full error to terminal
      // setError(errorMessage) // No longer setting UI error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <main className="flex-grow flex items-center justify-center w-full">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Create your SkillSwap account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {/* Removed error display block */}
              {/*
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}
              */}
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button className="w-full mt-6" type="submit" disabled={isLoading}>
                {isLoading ? 'Signing up...' : 'Sign Up'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/signin" className="text-sm text-muted-foreground hover:text-primary">
              Already have an account? Sign in
            </Link>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}