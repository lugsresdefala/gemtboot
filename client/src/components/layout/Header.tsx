import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="bg-neutral-darkest shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo/Title */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <RobotAvatar size="md" />
            
            <div>
              <h1 className="text-primary-light font-semibold text-xl">GEM-T</h1>
              <p className="text-neutral-light text-xs">Diversidade Barra Funda</p>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-neutral-lightest hover:text-primary-light transition-colors text-sm px-3 py-1 rounded-full">
              Início
            </Link>
            <Link href="/sobre" className="text-neutral-lightest hover:text-primary-light transition-colors text-sm px-3 py-1 rounded-full">
              Sobre
            </Link>
            <Link href="/contato" className="text-neutral-lightest hover:text-primary-light transition-colors text-sm px-3 py-1 rounded-full">
              Contato
            </Link>
          </div>
          <Button size="sm" className="text-sm px-4 rounded-full bg-primary hover:bg-primary-dark text-neutral-darkest">
            Acessar Conta
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-neutral-light hover:text-primary-light">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-neutral-darkest border-neutral-dark">
            <div className="flex flex-col space-y-4 mt-8">
              <div onClick={() => setIsOpen(false)}>
                <Link href="/" className="text-neutral-lightest hover:text-primary-light transition-colors px-3 py-2 rounded block">
                  Início
                </Link>
              </div>
              <div onClick={() => setIsOpen(false)}>
                <Link href="/sobre" className="text-neutral-lightest hover:text-primary-light transition-colors px-3 py-2 rounded block">
                  Sobre
                </Link>
              </div>
              <div onClick={() => setIsOpen(false)}>
                <Link href="/contato" className="text-neutral-lightest hover:text-primary-light transition-colors px-3 py-2 rounded block">
                  Contato
                </Link>
              </div>
              <Button onClick={() => setIsOpen(false)} className="mt-4 bg-primary hover:bg-primary-dark text-neutral-darkest">
                Acessar Conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
