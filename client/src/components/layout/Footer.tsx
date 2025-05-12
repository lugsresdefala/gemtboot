import { Link } from "wouter";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <RobotAvatar size="sm" />
              <h3 className="text-[#42a5f5] font-semibold">GEM-T</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Sistema de informações sobre o Processo Transexualizador no SUS, 
              desenvolvido para facilitar o acesso a orientações e fluxos de cuidado.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-white text-lg mb-5">Links Úteis</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="https://www.gov.br/saude/pt-br" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#42a5f5] transition-colors"
                >
                  Ministério da Saúde
                </a>
              </li>
              <li>
                <a 
                  href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#42a5f5] transition-colors"
                >
                  Secretaria Municipal de Saúde
                </a>
              </li>
              <li>
                <a 
                  href="http://www.saude.sp.gov.br/centro-de-referencia-e-treinamento-dstaids-sp/homepage/destaques/ambulatorio-de-saude-integral-para-travestis-e-transexuais-do-estado-de-sao-paulo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#42a5f5] transition-colors"
                >
                  Ambulatório de Saúde Integral para Travestis e Transexuais
                </a>
              </li>
              <li>
                <a 
                  href="https://portal.cfm.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#42a5f5] transition-colors"
                >
                  Conselho Federal de Medicina
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white text-lg mb-5">Sobre o Projeto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <i className="fas fa-globe mr-2 text-[#42a5f5]"></i>
                <a 
                  href="https://diversidadebarrafunda.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#42a5f5] transition-colors"
                >
                  diversidadebarrafunda.org
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-info-circle mr-2 text-[#42a5f5]"></i>
                <span className="text-gray-400">Ferramenta do Projeto Diversidade Barra Funda</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-users mr-2 text-[#42a5f5]"></i>
                <span className="text-gray-400">Acesse a UBS mais próxima para informações</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} GEM-T | Processo Transexualizador - Projeto Diversidade Barra Funda</p>
          <p className="mt-2">
            As informações fornecidas por este assistente não substituem a consulta com profissionais de saúde qualificados.
          </p>
        </div>
      </div>
    </footer>
  );
}
