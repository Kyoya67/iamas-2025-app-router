'use client'

import { useWork } from "@/app/_contexts/WorkContext"
import Link from "next/link"

interface StudentLinkProps {
    href: string
    className: string
    name: string
    englishName: string
}

export const StudentLink = ({ href, className, name, englishName }: StudentLinkProps) => {
    const { setCurrentWork } = useWork()

    const handleMouseEnter = () => {
        setCurrentWork(englishName.split(' ').join(''))
    }

    return (
        <Link
            href={href}
            className={className}
            prefetch={true}
            onMouseEnter={handleMouseEnter}
        >
            {name}
        </Link>
    )
} 