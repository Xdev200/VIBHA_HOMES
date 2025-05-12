'use client'

import { useState } from 'react'
import { X, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollLink } from '@/components/scroll-link'
import { QuoteModal } from '@/components/quote-modal'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface MobileMenuProps {
  links: {
    href: string
    label: string
  }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 pt-6" hideCloseButton>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-6 mb-6">
            <div className="flex items-center gap-2 pl-2">
              <Building2 className="h-6 w-6 text-amber-600" />
              <span className="text-xl font-bold">VIBHA HOMES</span>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setOpen(false)}
              className="rounded-full border-gray-300 hover:bg-gray-100 hover:text-amber-600"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <nav className="flex flex-col mb-8">
            {links.map((link, index) => (
              <ScrollLink
                key={link.href}
                href={link.href}
                className={`py-3 px-6 text-lg font-medium hover:bg-gray-50 hover:text-amber-600 transition-colors ${
                  index === 0 ? 'text-amber-600' : ''
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>

          <div className="mt-auto px-6 mb-8">
            <QuoteModal
              buttonText="Get a Free Quote"
              buttonClassName="w-full bg-amber-600 hover:bg-amber-700"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
