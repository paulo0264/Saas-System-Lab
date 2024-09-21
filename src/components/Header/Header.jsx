import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const menuItems = ['Inicio', 'Serviços', 'Planos', 'Sobre', 'Contatos'];

  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* <img src="/placeholder.svg" alt="System_Lab Logo" className="h-8 w-8 mr-2" /> */}
          <span className="text-xl font-bold text-white">System - Lab</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition duration-300">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-neon-blue transition duration-300">
          Entrar em Contato <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-800">
            <nav className="flex flex-col space-y-4 mt-8">
              {menuItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition duration-300">
                  {item}
                </a>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-neon-blue transition duration-300 mt-4">
              Entrar em Contato <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;