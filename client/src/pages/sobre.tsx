import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Heart, Users, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg">
                <RobotAvatar size="lg" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre o GEM-T</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Assistente virtual do Projeto Diversidade Barra Funda para informações 
              sobre cuidados em saúde para pessoas trans no SUS.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Nossa Missão</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Facilitar o acesso a informações sobre cuidados em saúde para pessoas trans 
                  no Sistema Único de Saúde (SUS), fornecendo orientações claras sobre fluxos, 
                  critérios e procedimentos disponíveis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-pink-600" />
                  <CardTitle className="text-xl">Nossos Valores</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Compromisso com a dignidade, respeito à diversidade e garantia de 
                  acesso equitativo aos serviços de saúde. Trabalhamos pela inclusão 
                  e pelo direito universal à saúde.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features Section */}
          <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm mb-12">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-indigo-600" />
                <CardTitle className="text-2xl">Como Podemos Ajudar</CardTitle>
              </div>
              <CardDescription>
                O GEM-T oferece informações sobre diversos aspectos dos cuidados em saúde trans
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Critérios e Requisitos</h4>
                      <p className="text-gray-600 text-sm">
                        Informações sobre critérios para acesso a procedimentos e tratamentos
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <ExternalLink className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fluxos de Atendimento</h4>
                      <p className="text-gray-600 text-sm">
                        Orientações sobre como navegar pelos serviços de saúde
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Rede de Especialistas</h4>
                      <p className="text-gray-600 text-sm">
                        Informações sobre profissionais e serviços especializados
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Heart className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Unidades de Saúde</h4>
                      <p className="text-gray-600 text-sm">
                        Informações sobre unidades especializadas em cuidados trans
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Info */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Projeto Diversidade Barra Funda</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Este assistente virtual faz parte do Projeto Diversidade Barra Funda, 
                uma iniciativa dedicada a promover a inclusão e o acesso equitativo 
                aos serviços de saúde para a população LGBTQIA+.
              </p>
              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  Para mais informações sobre o projeto, entre em contato através das unidades de saúde parceiras.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Importante</h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                  As informações fornecidas por este assistente têm caráter informativo e 
                  não substituem a consulta com profissionais de saúde qualificados. 
                  Sempre consulte uma unidade de saúde para orientações específicas sobre seu caso.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Button asChild variant="default" size="lg">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Chat
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}