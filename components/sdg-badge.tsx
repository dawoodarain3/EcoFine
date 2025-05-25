import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"
import Link from "next/link"

interface SDGBadgeProps {
  id: number
  title: string
  small?: boolean
}

export function SDGBadge({ id, title, small = false }: SDGBadgeProps) {
  const size = small ? 24 : 40

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={`/sdg-commitment#sdg-${id}`} className="inline-block">
            <Image
              src={`/placeholder.svg?height=${size}&width=${size}&text=SDG+${id}`}
              alt={`SDG ${id}: ${title}`}
              width={size}
              height={size}
              className="rounded-full"
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">
            SDG {id}: {title}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
