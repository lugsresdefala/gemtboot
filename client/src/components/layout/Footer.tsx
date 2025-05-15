import { Link } from "wouter";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-indigo-950 to-indigo-900 text-white/80 pt-20 pb-10 overflow-hidden">
      {/* Efeitos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50"></div>
      
      <div className="container-app relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="relative p-px rounded-xl bg-gradient-to-r from-pink-500 to-indigo-600 mb-6 inline-block">
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl">
                <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-700 rounded-lg shadow-xl">
                  <div className="bg-white/10 backdrop-blur-md p-1 rounded-md">
                    <RobotAvatar size="sm" />
                  </div>
                </div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300 font-bold text-xl tracking-wide">GEM-T</h3>
              </div>
            </div>
            
            <div className="glass-dark p-5 rounded-xl backdrop-blur-md">
              <p className="text-sm leading-relaxed text-indigo-200/90">
                Sistema de informações sobre cuidados em saúde para pessoas trans no SUS, 
                desenvolvido para facilitar o acesso a orientações e fluxos de atendimento.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300 font-bold text-lg mb-5">Links Úteis</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.gov.br/saude/pt-br" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass px-4 py-2 rounded-lg flex items-center hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 group"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-indigo-600 p-2 rounded-md mr-3 text-white">
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                  <span className="text-indigo-200 group-hover:text-white transition-colors">Ministério da Saúde</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass px-4 py-2 rounded-lg flex items-center hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 group"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-indigo-600 p-2 rounded-md mr-3 text-white">
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                  <span className="text-indigo-200 group-hover:text-white transition-colors">Secretaria Municipal de Saúde</span>
                </a>
              </li>
              <li>
                <a 
                  href="http://www.saude.sp.gov.br/centro-de-referencia-e-treinamento-dstaids-sp/homepage/destaques/ambulatorio-de-saude-integral-para-travestis-e-transexuais-do-estado-de-sao-paulo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass px-4 py-2 rounded-lg flex items-center hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 group"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-indigo-600 p-2 rounded-md mr-3 text-white">
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                  <span className="text-indigo-200 group-hover:text-white transition-colors">Ambulatório de Saúde Integral para Pessoas Trans</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300 font-bold text-lg mb-5">Sobre o Projeto</h3>
            <div className="glass-dark p-5 rounded-xl backdrop-blur-md">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-gradient-to-r from-pink-500 to-indigo-600 p-2 rounded-md mr-3 text-white">
                    <i className="fas fa-globe"></i>
                  </div>
                  <a 
                    href="https://diversidadebarrafunda.org" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-indigo-200 hover:text-white transition-colors"
                  >
                    diversidadebarrafunda.org
                  </a>
                </li>
                <li className="flex items-center">
                  <div className="bg-gradient-to-r from-pink-500 to-indigo-600 p-2 rounded-md mr-3 text-white">
                    <i className="fas fa-info-circle"></i>
                  </div>
                  <span className="text-indigo-200">Ferramenta do Projeto Diversidade Barra Funda</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-gradient-to-r from-pink-500 to-indigo-600 p-2 rounded-md mr-3 text-white">
                    <i className="fas fa-hospital-user"></i>
                  </div>
                  <span className="text-indigo-200">Acesse a UBS mais próxima para informações</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 glass-dark py-6 px-8 rounded-xl backdrop-blur-md text-center">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300 font-medium">&copy; {new Date().getFullYear()} GEM-T - Projeto Diversidade Barra Funda</p>
          <p className="mt-2 text-indigo-200/80 text-sm">
            As informações fornecidas por este assistente não substituem a consulta com profissionais de saúde qualificados.
          </p>
        </div>
      </div>
    </footer>
  );
}
