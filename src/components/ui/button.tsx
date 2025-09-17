import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "text-primary border-2 border-primary hover:text-primary-dark rounded-2xl shadow-card",
        destructive:
          "text-destructive border-2 border-destructive hover:text-destructive/90 rounded-2xl shadow-card",
        outline:
          "border-2 border-primary text-primary hover:text-primary-dark rounded-2xl hover:scale-[1.02] shadow-card hover:shadow-elegant",
        secondary:
          "text-secondary border-2 border-secondary hover:text-secondary-dark hover:scale-[1.02] rounded-2xl shadow-card",
        accent:
          "text-accent border-2 border-accent hover:text-accent-dark hover:scale-[1.02] rounded-2xl shadow-card",
        ghost: "text-foreground hover:text-primary rounded-2xl",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "text-primary border-2 border-primary font-black shadow-card hover:shadow-elegant hover:scale-[1.02] rounded-2xl",
        "cta-outline": "border-2 border-primary text-primary hover:text-primary-dark hover:scale-[1.02] rounded-2xl shadow-card",
        "cta-secondary": "text-secondary border-2 border-secondary font-black shadow-card hover:shadow-elegant hover:scale-[1.02] rounded-2xl",
        "cta-accent": "text-accent border-2 border-accent font-black shadow-card hover:shadow-elegant hover:scale-[1.02] rounded-2xl",
        modern: "text-primary border border-border hover:text-primary-dark shadow-card hover:shadow-elegant rounded-2xl hover:scale-[1.02]",
        hero: "text-accent border-2 border-accent shadow-elegant hover:shadow-glow hover:scale-[1.02] transition-all duration-300 font-black rounded-2xl",
        gradient: "text-primary border-2 border-primary hover:shadow-glow transition-all duration-300 rounded-2xl shadow-card",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        xl: "h-16 px-10 py-5 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
