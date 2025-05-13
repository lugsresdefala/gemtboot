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
    <div className="py-4 px-5 bg-[#F3E5F5]/70 border-b border-purple-100 overflow-x-auto whitespace-nowrap backdrop-blur-sm">
      <div className="flex space-x-3 max-w-4xl mx-auto">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className={cn(
              "px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 flex items-center",
              activeTopic === topic.id
                ? "bg-gradient-to-r from-[#4A148C] to-[#6A1B9A] text-white shadow-lg hover:shadow-xl scale-105 transform"
                : "bg-white text-[#6A1B9A] border border-purple-200 hover:border-purple-300 hover:bg-purple-50 hover:shadow-md"
            )}
            onClick={() => handleTopicClick(topic.id)}
          >
            <i className={`${topic.icon} mr-2.5 ${activeTopic === topic.id ? 'text-purple-200' : 'text-[#6A1B9A]'}`}></i> {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
}
