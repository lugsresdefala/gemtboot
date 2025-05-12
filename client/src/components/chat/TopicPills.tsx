import { useState } from "react";
import { cn } from "@/lib/utils";
import { TopicType, TopicPill } from "@/types";

interface TopicPillsProps {
  onTopicSelect: (topic: TopicType) => void;
}

export default function TopicPills({ onTopicSelect }: TopicPillsProps) {
  const [activeTopic, setActiveTopic] = useState<TopicType>("faq");
  
  const topics: TopicPill[] = [
    { id: "faq", label: "FAQ", icon: "fas fa-question-circle" },
    { id: "fluxos", label: "Fluxos", icon: "fas fa-route" },
    { id: "criterios", label: "Critérios", icon: "fas fa-clipboard-list" },
    { id: "especialistas", label: "Especialistas", icon: "fas fa-user-md" },
    { id: "unidades", label: "Unidades", icon: "fas fa-hospital" }
  ];
  
  const handleTopicClick = (topic: TopicType) => {
    setActiveTopic(topic);
    onTopicSelect(topic);
  };
  
  return (
    <div className="py-4 px-5 bg-slate-50/70 border-b border-slate-100 overflow-x-auto whitespace-nowrap backdrop-blur-sm">
      <div className="flex space-x-3 max-w-4xl mx-auto">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className={cn(
              "px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 flex items-center",
              activeTopic === topic.id
                ? "bg-gradient-to-r from-[#1565c0] to-[#1976d2] text-white shadow-lg hover:shadow-xl scale-105 transform"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
            )}
            onClick={() => handleTopicClick(topic.id)}
          >
            <i className={`${topic.icon} mr-2.5`}></i> {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
}
