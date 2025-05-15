import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="bg-[var(--color-header-bg)] shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Title */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="p-2 bg-pink/5 rounded-lg shadow-inner transform transition-all duration-300 group-hover:scale-110">
              <RobotAvatar size="md" />
            </div>
            
            <div>
              <h1 className="text-[var(--color-header-text)] font-bold text-xl tracking-wide">GEM-T</h1>
              <p className="text-purple-200/70 text-xs font-light">Diversidade Barra Funda</p>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-purple-200 hover:text-white hover:scale-105 transition-all duration-200 text-sm font-medium">
              Início
            </Link>
            <Link href="/sobre" className="text-purple-200 hover:text-white hover:scale-105 transition-all duration-200 text-sm font-medium">
              Sobre
            </Link>
            <Link href="/contato" className="text-purple-200 hover:text-white hover:scale-105 transition-all duration-200 text-sm font-medium">
              Contato
            </Link>
          </div>
        </nav>
        
        {/* Mobile menu button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-purple-200 hover:text-white hover:bg-white/10 rounded-full">
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#4A148C] border-[#6A1B9A] text-white">
            <div className="flex flex-col space-y-2 mt-8">
              <div onClick={() => setIsOpen(false)}>
                <Link href="/" className="text-purple-200 hover:text-white hover:bg-[#6A1B9A] transition-all duration-200 px-4 py-3 rounded-lg block font-medium">
                  Início
                </Link>
              </div>
              <div onClick={() => setIsOpen(false)}>
                <Link href="/sobre" className="text-purple-200 hover:text-white hover:bg-[#6A1B9A] transition-all duration-200 px-4 py-3 rounded-lg block font-medium">
                  Sobre
                </Link>
              </div>
              <div onClick={() => setIsOpen(false)}>
                <Link href="/contato" className="text-purple-200 hover:text-white hover:bg-[#6A1B9A] transition-all duration-200 px-4 py-3 rounded-lg block font-medium">
                  Contato
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
