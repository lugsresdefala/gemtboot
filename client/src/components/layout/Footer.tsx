import { Link } from "wouter";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function Footer() {
  return (
    <footer className="bg-[#4A148C] text-purple-200/80 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <div className="p-1.5 bg-white/10 rounded-md shadow-inner">
                <RobotAvatar size="sm" />
              </div>
              <h3 className="text-[#CE93D8] font-bold text-xl tracking-wide">GEM-T</h3>
            </div>
            <p className="text-sm leading-relaxed text-purple-200/80">
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
