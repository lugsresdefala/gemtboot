import { Link } from "wouter";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-600 py-6 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <RobotAvatar size="sm" />
              <h3 className="text-[#0F766E] font-medium text-sm">GEM-T</h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              Sistema de informações sobre cuidados em saúde para pessoas trans no SUS, 
              desenvolvido para facilitar o acesso a orientações e fluxos de atendimento.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-slate-700 text-sm mb-3">Links Úteis</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="https://www.gov.br/saude/pt-br" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-500 hover:text-[#0F766E] transition-colors"
                >
                  Ministério da Saúde
                </a>
              </li>
              <li>
                <a 
                  href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-500 hover:text-[#0F766E] transition-colors"
                >
                  Secretaria Municipal de Saúde
                </a>
              </li>
              <li>
                <a 
                  href="http://www.saude.sp.gov.br/centro-de-referencia-e-treinamento-dstaids-sp/homepage/destaques/ambulatorio-de-saude-integral-para-travestis-e-transexuais-do-estado-de-sao-paulo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-500 hover:text-[#0F766E] transition-colors"
                >
                  Ambulatório de Saúde Integral para Travestis e Transexuais
                </a>
              </li>
              <li>
                <a 
                  href="https://portal.cfm.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-500 hover:text-[#0F766E] transition-colors"
                >
                  Conselho Federal de Medicina
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-slate-700 text-sm mb-3">Sobre o Projeto</h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center">
                <i className="fas fa-globe mr-1.5 text-[#0F766E]"></i>
                <a 
                  href="https://diversidadebarrafunda.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-500 hover:text-[#0F766E] transition-colors"
                >
                  diversidadebarrafunda.org
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-info-circle mr-1.5 text-[#0F766E]"></i>
                <span className="text-slate-500">Ferramenta do Projeto Diversidade Barra Funda</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-users mr-1.5 text-[#0F766E]"></i>
                <span className="text-slate-500">Acesse a UBS mais próxima para informações</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-500">
          <p>&copy; {new Date().getFullYear()} GEM-T - Projeto Diversidade Barra Funda</p>
          <p className="mt-1">
            As informações fornecidas por este assistente não substituem a consulta com profissionais de saúde qualificados.
          </p>
        </div>
      </div>
    </footer>
  );
}
