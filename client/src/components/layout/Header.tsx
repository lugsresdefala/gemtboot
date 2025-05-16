import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="bg-[#0A1225] h-36">
      <div className="container mx-auto h-full px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-6">
            <RobotAvatar size="md" />
            <div>
              <h1 className="text-white text-2xl font-bold">
                GEM-T
              </h1>
              <p className="text-gray-300 text-base">
                Assistente Virtual
              </p>
            </div>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center">
          <Link href="/">
            <div className="px-6 py-2 bg-[#152040] text-white mx-2">Início</div>
          </Link>
          <Link href="/sobre">
            <div className="px-6 py-2 bg-[#152040] text-white mx-2">Sobre</div>
          </Link>
          <Link href="/contato">
            <div className="px-6 py-2 bg-[#152040] text-white mx-2">Contato</div>
          </Link>
        </nav>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#0A1225] text-white">
            <div className="flex flex-col mt-10">
              <div className="mb-8 flex flex-col items-center">
                <RobotAvatar size="lg" />
                <h2 className="text-white text-xl font-bold mt-4">
                  GEM-T
                </h2>
              </div>
              
              <div className="space-y-2">
                <Link href="/">
                  <div className="px-4 py-3 bg-[#152040] text-white">Início</div>
                </Link>
                <Link href="/sobre">
                  <div className="px-4 py-3 bg-[#152040] text-white">Sobre</div>
                </Link>
                <Link href="/contato">
                  <div className="px-4 py-3 bg-[#152040] text-white">Contato</div>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}