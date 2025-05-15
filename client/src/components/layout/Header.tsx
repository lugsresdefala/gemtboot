import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="relative z-50">
      {/* Overlay gradiente na parte superior */}
      <div className="absolute inset-[30vh] bg-gradient-to-r from-[#0A3285] via-[#00516C]/70 to-white/20 h-1.5 w-full"></div>
      
      {/* Fundo do cabeçalho com glassmorphism */}
      <div className="relative bg-gradient-to-r from-[#060120] to-[#0A1225] shadow-xl backdrop-blur-lg border-b border-white/10">
        <div className="container-app py-2 flex-between">
          {/* Logo/Title com design renovado */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="rounded-full overflow-hidden">
                <RobotAvatar size="md" className="transform hover:brightness-110 transition-all duration-300" />
              </div>
              
              <div className="flex items-center">
                <span className="text-white text-sm font-medium">
                  Assistente Virtual
                </span>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation com botões modernos */}
          <nav className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Link href="/">
                <div className="px-4 py-2 text-white hover:text-white bg-white/5 hover:bg-[#FFD1DC]/20 rounded-xl transition-all duration-300 border border-white/5 hover:border-white/20 shadow-lg hover:shadow-[#FFD1DC]/20 text-sm font-medium">
                  Início
                </div>
              </Link>
              <Link href="/sobre">
                <div className="px-4 py-2 text-white hover:text-white bg-white/5 hover:bg-[#FFD1DC]/20 rounded-xl transition-all duration-300 border border-white/5 hover:border-white/20 shadow-lg hover:shadow-[#FFD1DC]/20 text-sm font-medium">
                  Sobre
                </div>
              </Link>
              <Link href="/contato">
                <div className="px-4 py-2 text-white hover:text-white bg-white/5 hover:bg-[#FFD1DC]/20 rounded-xl transition-all duration-300 border border-white/5 hover:border-white/20 shadow-lg hover:shadow-[#FFD1DC]/20 text-sm font-medium">
                  Contato
                </div>
              </Link>
            </div>
          </nav>
          
          {/* Mobile menu button com efeito de glassmorphism */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl border border-white/10 shadow-lg">
                <Menu size={20} className="animate-pulse" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gradient-to-br from-[#062140] to-[#0A3255] border-l border-white/10 text-white">
              <div className="flex flex-col space-y-3 mt-10">
                <div onClick={() => setIsOpen(false)} className="mb-4">
                  <div className="flex justify-center">
                    <div className="mb-4">
                      <RobotAvatar size="lg" />
                    </div>
                  </div>
                  <h2 className="text-center text-white font-medium text-lg mb-6">
                    Assistente Virtual
                  </h2>
                </div>
                
                <div onClick={() => setIsOpen(false)}>
                  <Link href="/">
                    <div className="text-white hover:text-white bg-white/5 hover:bg-[#FFD1DC]/20 transition-all duration-300 px-4 py-4 rounded-xl block font-medium border border-white/5 hover:border-white/20 shadow-lg">
                      Início
                    </div>
                  </Link>
                </div>
                <div onClick={() => setIsOpen(false)}>
                  <Link href="/sobre">
                    <div className="text-white hover:text-white bg-white/5 hover:bg-[#FFD1DC]/20 transition-all duration-300 px-4 py-4 rounded-xl block font-medium border border-white/5 hover:border-white/20 shadow-lg">
                      Sobre
                    </div>
                  </Link>
                </div>
                <div onClick={() => setIsOpen(false)}>
                  <Link href="/contato">
                    <div className="text-white hover:text-white bg-white/5 hover:bg-[#FFD1DC]/20 transition-all duration-300 px-4 py-4 rounded-xl block font-medium border border-white/5 hover:border-white/20 shadow-lg">
                      Contato
                    </div>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
