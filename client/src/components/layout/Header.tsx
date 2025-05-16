import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="bg-black text-white h-36">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-8">
            <RobotAvatar size="md" />
            <h1 className="text-white text-3xl font-bold">Assistente</h1>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center">
          <Link href="/">
            <div className="px-6 py-2 text-white bg-gray-800 mx-2">Início</div>
          </Link>
          <Link href="/sobre">
            <div className="px-6 py-2 text-white bg-gray-800 mx-2">Sobre</div>
          </Link>
          <Link href="/contato">
            <div className="px-6 py-2 text-white bg-gray-800 mx-2">Contato</div>
          </Link>
        </nav>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-black text-white">
            <div className="flex flex-col space-y-6 mt-10">
              <div onClick={() => setIsOpen(false)} className="mb-6">
                <div className="flex justify-center mb-6">
                  <RobotAvatar size="lg" />
                </div>
                <h2 className="text-center text-white text-2xl font-bold">Assistente</h2>
              </div>
              
              <div onClick={() => setIsOpen(false)}>
                <Link href="/">
                  <div className="text-white bg-gray-800 px-4 py-3 block my-2">Início</div>
                </Link>
              </div>
              <div onClick={() => setIsOpen(false)}>
                <Link href="/sobre">
                  <div className="text-white bg-gray-800 px-4 py-3 block my-2">Sobre</div>
                </Link>
              </div>
              <div onClick={() => setIsOpen(false)}>
                <Link href="/contato">
                  <div className="text-white bg-gray-800 px-4 py-3 block my-2">Contato</div>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
