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
    { id: "unidades", label: "Unidades", icon: "fas fa-hospital" },
  ];

  const handleTopicClick = (topic: TopicType) => {
    setActiveTopic(topic);
    onTopicSelect(topic);
  };

  return (
    <div className="py-3 px-4 bg-[#F8F9FA] border-b border-gray-200 overflow-x-auto whitespace-nowrap">
      <div className="flex space-x-2 max-w-4xl mx-auto">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded transition-all duration-150 flex items-center",
              activeTopic === topic.id
                ? "bg-gradient-to-r from-[#FFD1DC] to-[#0A3255] text-white shadow-sm"
                : "bg-white text-[#062140] border border-gray-300 hover:border-[#FFD1DC] hover:bg-white",
            )}
            onClick={() => handleTopicClick(topic.id)}
          >
            <i
              className={`${topic.icon} mr-2 ${activeTopic === topic.id ? "text-white" : "text-[#0A3255]"}`}
            ></i>{" "}
            {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
}
