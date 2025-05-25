"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCard3DProps {
  id: number
  name: string
  description: string
  image: string
  price: string
  href: string
  badges?: string[]
  sdgBadges?: number[]
}

export function ProductCard3D({
  id,
  name,
  description,
  image,
  price,
  href,
  badges = [],
  sdgBadges = [],
}: ProductCard3DProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={cardRef}
      className="group relative h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <div className={`h-full w-full transition-transform duration-300 ${isHovered ? "scale-105" : "scale-100"}`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {badges.map((badge, index) => (
            <Badge key={index} className="bg-green-600">
              {badge}
            </Badge>
          ))}
        </div>
        {sdgBadges && sdgBadges.length > 0 && (
          <div className="absolute bottom-2 right-2 flex space-x-1">
            {sdgBadges.map((sdg) => (
              <div
                key={sdg}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white"
              >
                {sdg}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mb-2 text-sm text-gray-500">{description}</p>
        <p className="mb-4 font-bold text-green-600">{price}</p>
        <Button asChild className="w-full bg-green-600 hover:bg-green-700">
          <Link href={href}>View Details</Link>
        </Button>
      </div>
    </div>
  )
}
