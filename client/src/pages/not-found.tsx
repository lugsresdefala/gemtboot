import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <Header />

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <Card className="w-full max-w-md border-0 shadow-lg bg-white/70 backdrop-blur-sm">
          <CardContent className="pt-8 pb-6 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-100 rounded-full">
                <AlertCircle className="h-12 w-12 text-red-600" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Página não encontrada
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              A página que você está procurando não existe ou foi removida.
            </p>

            <Button asChild variant="default" size="lg" className="w-full">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Voltar ao Início
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
