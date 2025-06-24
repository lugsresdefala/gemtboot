import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Phone, MapPin, Mail, Globe, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Contato() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contatos e Informações</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontre aqui os contatos dos principais serviços de saúde para pessoas trans 
              e informações sobre como acessar o atendimento.
            </p>
          </div>

          {/* Emergency Contact */}
          <Card className="border-0 shadow-lg bg-red-50 border-red-200 mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Phone className="h-8 w-8 text-red-600" />
                <CardTitle className="text-xl text-red-900">Emergência</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">SAMU - Serviço de Atendimento Móvel de Urgência</h4>
                  <p className="text-red-800 text-lg font-bold">192</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Emergência Geral</h4>
                  <p className="text-red-800 text-lg font-bold">193 (Bombeiros) • 190 (Polícia)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">ASITT - CRT/AIDS SP</CardTitle>
                </div>
                <CardDescription>
                  Ambulatório de Saúde Integral para Travestis e Transexuais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-gray-600 text-sm">
                      Rua Santa Cruz, 81 - Vila Mariana<br />
                      São Paulo - SP, CEP: 04121-000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-gray-600 text-sm">(11) 5087-9900</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Horário</p>
                    <p className="text-gray-600 text-sm">
                      Segunda a Sexta: 7h às 19h<br />
                      Sábado: 7h às 13h
                    </p>
                  </div>
                </div>

                <Button variant="outline" size="sm" asChild className="w-full">
                  <a 
                    href="http://www.saude.sp.gov.br/centro-de-referencia-e-treinamento-dstaids-sp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Site Oficial
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-xl">Secretaria Municipal de Saúde</CardTitle>
                </div>
                <CardDescription>
                  Coordenadoria de IST/AIDS - Programa Municipal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">SAC - Ouvidoria</p>
                    <p className="text-gray-600 text-sm">156</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 text-sm">ouvidoria@prefeitura.sp.gov.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Atendimento SAC</p>
                    <p className="text-gray-600 text-sm">
                      24 horas por dia<br />
                      7 dias por semana
                    </p>
                  </div>
                </div>

                <Button variant="outline" size="sm" asChild className="w-full">
                  <a 
                    href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Site Oficial
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Resources */}
          <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Recursos Adicionais</CardTitle>
              <CardDescription>
                Outros contatos e recursos importantes para a comunidade trans
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ministério da Saúde</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Portal oficial com informações sobre políticas de saúde trans
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href="https://www.gov.br/saude/pt-br" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Acessar
                      </a>
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Portal Saúde GOV.BR</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Informações sobre procedimentos e direitos no SUS
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/p/populacao-lgbt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Acessar
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Disque Saúde</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Atendimento telefônico para informações sobre saúde
                    </p>
                    <p className="font-bold text-blue-600">136</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ouvidoria SUS</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Canal para denúncias, reclamações e sugestões
                    </p>
                    <p className="font-bold text-blue-600">136 (opção 7)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Users className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Como Acessar os Serviços</h3>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  Para acessar os serviços especializados em saúde trans:
                </p>
                <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                  <li>Procure a UBS (Unidade Básica de Saúde) mais próxima da sua residência</li>
                  <li>Solicite encaminhamento para os serviços especializados</li>
                  <li>Tenha em mãos: RG, CPF, Cartão SUS e comprovante de residência</li>
                  <li>Não é necessário contatar diretamente o ASITT - o encaminhamento deve ser feito pela UBS</li>
                </ul>
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