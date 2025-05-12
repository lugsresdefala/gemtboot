import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo/Title */}
        <Link href="/">
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="transform transition-all duration-300 group-hover:scale-105">
              <RobotAvatar size="md" />
            </div>
            
            <div>
              <h1 className="text-[#42a5f5] font-semibold text-xl">GEM-T</h1>
              <p className="text-gray-400 text-xs">Diversidade Barra Funda</p>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-5">
            <Link href="/" className="text-gray-200 hover:text-white transition-colors text-sm font-medium">
              Início
            </Link>
            <Link href="/sobre" className="text-gray-200 hover:text-white transition-colors text-sm font-medium">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-200 hover:text-white transition-colors text-sm font-medium">
              Contato
            </Link>
          </div>
          <Button size="sm" className="text-sm px-5 py-2 rounded-full bg-[#1976d2] hover:bg-[#1565c0] text-white shadow-md transition-colors">
            Acessar Conta
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-gray-900 border-gray-800">
            <div className="flex flex-col space-y-4 mt-8">
              <div onClick={() => setIsOpen(false)}>
                <Link href="/" className="text-gray-200 hover:text-white transition-colors px-3 py-2 rounded block">
                  Início
                </Link>
              </div>
              <div onClick={() => setIsOpen(false)}>
                <Link href="/sobre" className="text-gray-200 hover:text-white transition-colors px-3 py-2 rounded block">
                  Sobre
                </Link>
              </div>
              <div onClick={() => setIsOpen(false)}>
                <Link href="/contato" className="text-gray-200 hover:text-white transition-colors px-3 py-2 rounded block">
                  Contato
                </Link>
              </div>
              <Button onClick={() => setIsOpen(false)} className="mt-4 bg-[#1976d2] hover:bg-[#1565c0] text-white">
                Acessar Conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
