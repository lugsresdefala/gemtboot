import { Link } from "wouter";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Footer() {
  return (
    <footer className="bg-neutral-darkest text-neutral-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <RobotAvatar size="sm" />
              <h3 className="text-primary-light font-semibold">GEM-T</h3>
            </div>
            <p className="text-sm">
              Sistema de informações sobre o Processo Transexualizador no SUS, 
              desenvolvido para facilitar o acesso a orientações e fluxos de cuidado.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.gov.br/saude/pt-br" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-light transition-colors"
                >
                  Ministério da Saúde
                </a>
              </li>
              <li>
                <a 
                  href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-light transition-colors"
                >
                  Secretaria Municipal de Saúde
                </a>
              </li>
              <li>
                <a 
                  href="http://www.saude.sp.gov.br/centro-de-referencia-e-treinamento-dstaids-sp/homepage/destaques/ambulatorio-de-saude-integral-para-travestis-e-transexuais-do-estado-de-sao-paulo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-light transition-colors"
                >
                  Ambulatório de Saúde Integral para Travestis e Transexuais
                </a>
              </li>
              <li>
                <a 
                  href="https://portal.cfm.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-light transition-colors"
                >
                  Conselho Federal de Medicina
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-primary-light"></i>
                <span>asitt@crt.saude.sp.gov.br</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-primary-light"></i>
                <span>Rua Santa Cruz, 81 - São Paulo</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2 text-primary-light"></i>
                <span>Telefone da unidade de saúde local</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-neutral-dark text-center text-xs">
          <p>&copy; {new Date().getFullYear()} GEM-T | Assistente do Processo Transexualizador - Todos os direitos reservados</p>
          <p className="mt-2">
            As informações fornecidas por este assistente não substituem a consulta com profissionais de saúde qualificados.
          </p>
        </div>
      </div>
    </footer>
  );
}
