import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Title */}
        <Link href="/">
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div>
              <RobotAvatar size="sm" />
            </div>
            
            <div>
              <h1 className="text-[#0F766E] font-medium text-base">GEM-T</h1>
              <p className="text-slate-500 text-[11px]">Diversidade Barra Funda</p>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-slate-600 hover:text-[#0F766E] transition-colors text-sm">
              Início
            </Link>
            <Link href="/sobre" className="text-slate-600 hover:text-[#0F766E] transition-colors text-sm">
              Sobre
            </Link>
            <Link href="/contato" className="text-slate-600 hover:text-[#0F766E] transition-colors text-sm">
              Contato
            </Link>
          </div>
        </nav>
        
        {/* Mobile menu button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-slate-700 hover:text-[#0F766E] hover:bg-slate-100 h-8 w-8">
              <Menu size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white border-slate-200">
            <div className="flex flex-col space-y-1 mt-6">
              <div onClick={() => setIsOpen(false)}>
                <Link href="/" className="text-slate-700 hover:text-[#0F766E] hover:bg-slate-50 transition-colors px-3 py-2 rounded block text-sm">
                  Início
                </Link>
              </div>
              <div onClick={() => setIsOpen(false)}>
                <Link href="/sobre" className="text-slate-700 hover:text-[#0F766E] hover:bg-slate-50 transition-colors px-3 py-2 rounded block text-sm">
                  Sobre
                </Link>
              </div>
              <div onClick={() => setIsOpen(false)}>
                <Link href="/contato" className="text-slate-700 hover:text-[#0F766E] hover:bg-slate-50 transition-colors px-3 py-2 rounded block text-sm">
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
