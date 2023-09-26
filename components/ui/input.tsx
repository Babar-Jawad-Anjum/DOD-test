import { Label } from '@radix-ui/react-label'
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, title, ...props }, ref) => {
    return (
      <div className="mt-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={id} className="text-[16px]">
          {title}
        </Label>
        <input
          type={type}
          className={cn(
            'flex h-[46px] sm:w-[500px] rounded-xl border border-input bg-background px-4 py-3 text-sm ring-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-none focus-visible:outline-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
