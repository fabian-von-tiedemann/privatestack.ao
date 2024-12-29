import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

const MultiRangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
      <div className="absolute h-full w-full flex">
        <div className="absolute h-full" style={{ width: `${props.value?.[0]}%`, backgroundColor: '#fdc500' }} />
        <div className="absolute h-full" style={{ left: `${props.value?.[0]}%`, width: `${props.value?.[1] - props.value?.[0]}%`, backgroundColor: '#f72585' }} />
        <div className="absolute h-full" style={{ left: `${props.value?.[1]}%`, width: `${100 - props.value?.[1]}%`, backgroundColor: '#7209b7' }} />
      </div>
    </SliderPrimitive.Track>
    {props.value?.map((_, index) => (
      <SliderPrimitive.Thumb
        key={index}
        className="block h-5 w-5 rounded-full border-2 border-primary bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-50"
      />
    ))}
  </SliderPrimitive.Root>
))
MultiRangeSlider.displayName = SliderPrimitive.Root.displayName

export { MultiRangeSlider }