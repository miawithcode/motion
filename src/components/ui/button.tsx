import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          ' whitespace-nowrap bg-primary-purple-500 text-primary-purple-500-foreground shadow-2xl shadow-primary-purple-600/50 border hover:border-foreground rounded-lg',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary-purple-500 text-secondary-purple-500-foreground hover:bg-secondary-purple-500/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary-purple-500 underline-offset-4 hover:underline',
        'btn-primary':
          'whitespace-nowrap hover:text-primary-purple-500-foreground dark:bg-gradient-to-b dark:from-[#030014] dark:to-[#282637] dark:text-primary-purple-500-foreground border hover:border-primary-purple-500 dark:border-[#464553] dark:hover:bg-accent hover:bg-primary-purple-500 dark:hover:border-muted-foreground',
        'btn-secondary':
          'whitespace-nowrap dark:text-primary-purple-500-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
