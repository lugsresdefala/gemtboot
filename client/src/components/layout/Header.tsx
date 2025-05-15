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
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-blue-500 to-teal-500 h-1.5 w-full"></div>
      
      {/* Fundo do cabeçalho com glassmorphism */}
      <div className="relative bg-gradient-to-r from-blue-800 to-teal-800 shadow-xl backdrop-blur-lg border-b border-white/10">
        <div className="container-app py-6 flex-between">
          {/* Logo/Title com design renovado */}
          <Link href="/">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="p-2.5 bg-gradient-to-br from-blue-500 to-teal-600 rounded-2xl shadow-xl animate-floating hover:animate-pulse transition-all duration-500">
                <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-xl">
                  <RobotAvatar size="md" className="transform hover:rotate-12 transition-all duration-300" />
                </div>
              </div>
              
              <div>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-blue-300 font-bold text-2xl tracking-wider">
                  GEM-T
                </h1>
                <p className="text-blue-200/90 text-xs font-light tracking-wide">
                  <span className="bg-gradient-to-r from-orange-500/20 to-teal-500/20 px-2 py-0.5 rounded-full">
                    Diversidade Barra Funda
                  </span>
                </p>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation com botões modernos */}
          <nav className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Link href="/">
                <div className="px-4 py-2 text-blue-100 hover:text-white bg-white/5 hover:bg-blue-500/20 rounded-xl transition-all duration-300 border border-white/5 hover:border-white/20 shadow-lg hover:shadow-blue-500/20 text-sm font-medium">
                  Início
                </div>
              </Link>
              <Link href="/sobre">
                <div className="px-4 py-2 text-blue-100 hover:text-white bg-white/5 hover:bg-blue-500/20 rounded-xl transition-all duration-300 border border-white/5 hover:border-white/20 shadow-lg hover:shadow-blue-500/20 text-sm font-medium">
                  Sobre
                </div>
              </Link>
              <Link href="/contato">
                <div className="px-4 py-2 text-blue-100 hover:text-white bg-white/5 hover:bg-blue-500/20 rounded-xl transition-all duration-300 border border-white/5 hover:border-white/20 shadow-lg hover:shadow-blue-500/20 text-sm font-medium">
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
            <SheetContent className="bg-gradient-to-br from-blue-900 to-teal-900 border-l border-white/10 text-white">
              <div className="flex flex-col space-y-3 mt-10">
                <div onClick={() => setIsOpen(false)} className="mb-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-600 rounded-2xl shadow-xl mb-4">
                      <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl">
                        <RobotAvatar size="lg" />
                      </div>
                    </div>
                  </div>
                  <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-blue-300 font-bold text-xl mb-6">
                    GEM-T
                  </h2>
                </div>
                
                <div onClick={() => setIsOpen(false)}>
                  <Link href="/">
                    <div className="text-blue-100 hover:text-white bg-white/5 hover:bg-blue-500/20 transition-all duration-300 px-4 py-4 rounded-xl block font-medium border border-white/5 hover:border-white/20 shadow-lg">
                      Início
                    </div>
                  </Link>
                </div>
                <div onClick={() => setIsOpen(false)}>
                  <Link href="/sobre">
                    <div className="text-blue-100 hover:text-white bg-white/5 hover:bg-blue-500/20 transition-all duration-300 px-4 py-4 rounded-xl block font-medium border border-white/5 hover:border-white/20 shadow-lg">
                      Sobre
                    </div>
                  </Link>
                </div>
                <div onClick={() => setIsOpen(false)}>
                  <Link href="/contato">
                    <div className="text-blue-100 hover:text-white bg-white/5 hover:bg-blue-500/20 transition-all duration-300 px-4 py-4 rounded-xl block font-medium border border-white/5 hover:border-white/20 shadow-lg">
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
