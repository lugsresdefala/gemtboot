import { Link } from "wouter";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-footer-bg)] text-purple-200/80 py-10">
      <div className="container-app">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <div className="p-1.5 bg-white/10 rounded-md shadow-inner">
                <RobotAvatar size="sm" />
              </div>
              <h3 className="text-purple-300 font-bold text-xl tracking-wide">GEM-T</h3>
            </div>
            <p className="text-sm leading-relaxed text-purple-200/80">
              Sistema de informações sobre cuidados em saúde para pessoas trans no SUS, 
              desenvolvido para facilitar o acesso a orientações e fluxos de atendimento.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-white text-lg mb-5">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.gov.br/saude/pt-br" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-200/80 hover:text-white transition-colors flex items-center"
                >
                  <i className="fas fa-external-link-alt mr-2 text-purple-300"></i>
                  Ministério da Saúde
                </a>
              </li>
              <li>
                <a 
                  href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-200/80 hover:text-white transition-colors flex items-center"
                >
                  <i className="fas fa-external-link-alt mr-2 text-purple-300"></i>
                  Secretaria Municipal de Saúde
                </a>
              </li>
              <li>
                <a 
                  href="http://www.saude.sp.gov.br/centro-de-referencia-e-treinamento-dstaids-sp/homepage/destaques/ambulatorio-de-saude-integral-para-travestis-e-transexuais-do-estado-de-sao-paulo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-200/80 hover:text-white transition-colors flex items-center"
                >
                  <i className="fas fa-external-link-alt mr-2 text-purple-300"></i>
                  Ambulatório de Saúde Integral para Pessoas Trans
                </a>
              </li>
              <li>
                <a 
                  href="https://portal.cfm.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-200/80 hover:text-white transition-colors flex items-center"
                >
                  <i className="fas fa-external-link-alt mr-2 text-purple-300"></i>
                  Conselho Federal de Medicina
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white text-lg mb-5">Sobre o Projeto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fas fa-globe mr-3 text-purple-300"></i>
                <a 
                  href="https://diversidadebarrafunda.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-200/80 hover:text-white transition-colors"
                >
                  diversidadebarrafunda.org
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-info-circle mr-3 text-purple-300"></i>
                <span className="text-purple-200/80">Ferramenta do Projeto Diversidade Barra Funda</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-hospital-user mr-3 text-purple-300"></i>
                <span className="text-purple-200/80">Acesse a UBS mais próxima para informações</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-purple-900 text-center text-sm text-purple-200/60">
          <p>&copy; {new Date().getFullYear()} GEM-T - Projeto Diversidade Barra Funda</p>
          <p className="mt-2">
            As informações fornecidas por este assistente não substituem a consulta com profissionais de saúde qualificados.
          </p>
        </div>
      </div>
    </footer>
  );
}
