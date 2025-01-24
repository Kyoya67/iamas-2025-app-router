'use client'

import Link from "next/link"

interface StudentLinkProps {
    href: string
    className: string
    name: string
    englishName: string
}

export const StudentLink = ({ href, className, name, englishName }: StudentLinkProps) => {
    const handleMouseEnter = () => {
        window.dispatchEvent(new CustomEvent('workHover', {
            detail: englishName.split(' ').join('')
        }))
    }

    const handleMouseLeave = () => {
        window.dispatchEvent(new CustomEvent('workLeave'))
    }

    return (
        <Link
            href={href}
            className={className}
            prefetch={false}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {name}
        </Link>
    )
} 