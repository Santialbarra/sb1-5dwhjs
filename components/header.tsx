import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Droplet } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Droplet className="h-6 w-6" />
          <span className="font-bold">Water Cooperative</span>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}