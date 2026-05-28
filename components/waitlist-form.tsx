'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

interface WaitlistFormProps {
  className?: string
  size?: 'sm' | 'default'
  placeholder?: string
  cta?: string
}

export function WaitlistForm({
  className,
  size = 'default',
  placeholder = 'Enter your email',
  cta = 'Join Waitlist',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) {
      toast.error('Please enter a valid email.')
      return
    }
    setLoading(true)

    // Stub — replace with Supabase insert or API route
    await new Promise((r) => setTimeout(r, 1200))

    setLoading(false)
    setDone(true)
    toast.success('You\'re on the list! We\'ll be in touch soon.', {
      description: 'We\'ll notify you when your device is ready to configure.',
    })
  }

  if (done) {
    return (
      <div className={cn('flex items-center gap-3 py-2', className)}>
        <CheckCircle2 className="h-5 w-5 text-emerge-400 flex-shrink-0" />
        <div>
          <p className="text-sm font-medium text-foreground">You&apos;re on the list!</p>
          <p className="text-xs text-muted-foreground">We&apos;ll email you when it&apos;s time.</p>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('flex gap-2', size === 'sm' ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row', className)}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className={cn(
          'flex-1 bg-white/5 border border-border rounded-lg px-4 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-volta-500/50 focus:border-volta-500/50 transition-all',
          size === 'default' ? 'h-12' : 'h-10'
        )}
      />
      <Button
        type="submit"
        variant="volta"
        size={size === 'default' ? 'lg' : 'default'}
        disabled={loading}
        className="shrink-0"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {cta}
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
