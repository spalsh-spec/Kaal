import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:  'border-transparent bg-primary text-primary-foreground',
        secondary:'border-transparent bg-secondary text-secondary-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        outline:  'text-foreground',
        volta:    'border-volta-500/30 bg-volta-500/10 text-volta-300',
        emerge:   'border-emerge-500/30 bg-emerge-500/10 text-emerge-400',
        amber:    'border-amber-500/30 bg-amber-500/10 text-amber-300',
        live:     'border-emerge-500/40 bg-emerge-500/15 text-emerge-400 animate-pulse',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
