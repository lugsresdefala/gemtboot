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
      {/* Cabeçalho mais alto com fundo sólido */}
      <div className="relative bg-[#0A1C3B] h-28">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo maior sem moldura */}
          <Link href="/">
            <div className="flex items-center gap-6 cursor-pointer">
              <RobotAvatar size="md" />
              
              <div>
                <h1 className="text-white text-2xl font-bold tracking-wide">
                  Assistente Virtual
                </h1>
              </div>
            </div>
          </Link>
          
          {/* Navegação com botões quadrados */}
          <nav className="hidden md:flex items-center">
            <Link href="/">
              <div className="px-8 py-3 text-white bg-[#0F2D54] text-lg font-medium mx-1">
                Início
              </div>
            </Link>
            <Link href="/sobre">
              <div className="px-8 py-3 text-white bg-[#0F2D54] text-lg font-medium mx-1">
                Sobre
              </div>
            </Link>
            <Link href="/contato">
              <div className="px-8 py-3 text-white bg-[#0F2D54] text-lg font-medium mx-1">
                Contato
              </div>
            </Link>
          </nav>
          
          {/* Menu mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#0A1C3B] text-white">
              <div className="flex flex-col space-y-4 mt-10">
                <div onClick={() => setIsOpen(false)} className="mb-6">
                  <div className="flex justify-center mb-3">
                    <RobotAvatar size="lg" />
                  </div>
                  <h2 className="text-center text-white font-bold text-xl">
                    Assistente Virtual
                  </h2>
                </div>
                
                <div onClick={() => setIsOpen(false)}>
                  <Link href="/">
                    <div className="text-white bg-[#0F2D54] px-6 py-3 block font-medium">
                      Início
                    </div>
                  </Link>
                </div>
                <div onClick={() => setIsOpen(false)}>
                  <Link href="/sobre">
                    <div className="text-white bg-[#0F2D54] px-6 py-3 block font-medium">
                      Sobre
                    </div>
                  </Link>
                </div>
                <div onClick={() => setIsOpen(false)}>
                  <Link href="/contato">
                    <div className="text-white bg-[#0F2D54] px-6 py-3 block font-medium">
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
