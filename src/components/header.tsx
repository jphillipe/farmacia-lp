'use client'

import { Menu, ClipboardList } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Flag from 'react-world-flags'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-[-1.2px] text-primary leading-8">
            FARMÁ
            <span className="text-black">CIA</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-8 md:flex">
            <Button variant="ghost" size="icon" aria-label="Espanhol">
              <Flag code="ES" style={{ width: '200px', height: '16px' }} />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Português">
              <Flag code="BR" style={{ width: '200px', height: '16px' }} />
              <span className="font-bold text-xs text-[#059669]">PT</span>
            </Button>
            <Button className="font-bold rounded-full">
              <ClipboardList className="mr-2 h-4 w-4" />
              SOLICITAR ORÇAMENTO
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="px-4">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 gap-2 font-bold"
                      aria-label="Espanhol"
                    >
                      <Flag
                        code="ES"
                        style={{ width: '20px', height: '15px' }}
                      />
                      <span>ES</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 gap-2 font-bold border-primary bg-primary/5"
                      aria-label="Português"
                    >
                      <Flag
                        code="BR"
                        style={{ width: '20px', height: '15px' }}
                      />
                      <span className="font-bold text-xs text-[#059669]">
                        PT
                      </span>
                    </Button>
                  </div>
                </div>
                <Button className="w-full font-bold">
                  <ClipboardList className="mr-2 h-4 w-4" />
                  SOLICITAR ORÇAMENTO
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
