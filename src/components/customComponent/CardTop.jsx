
import React from 'react'
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";


const CardTop = ({title, description, info}) => {
  return (
   <div className="w-full flex flex-col justify-start items-center gap-2 ">
   {/* TITLE */}
   <div className='w-full flex justify-between items-center '>
   <h3 className='text-2xl font-semibold leading-none tracking-tight flex justify-between items-center'>{title}</h3>
   <TooltipProvider>
     <Tooltip>
       <TooltipTrigger asChild={true}>
         <Button variant="outline" size="icon" className="h-4 w-4">
           <Info />
         </Button>
       </TooltipTrigger>
       <TooltipContent side="bottom" align="end" sideOffset={8}>
         <span className="text-sm bg-background p-2 rounded-md border border-border">
           {info}
         </span>
       </TooltipContent>
     </Tooltip>
   </TooltipProvider>
   </div>

   {/* DESCRIPTION */}
   <div className='flex justify-start items-start w-full'>
   <p className='text-sm text-muted-foreground'>{description}</p>
   </div>
      </div>
  )
}

export default CardTop
