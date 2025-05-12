import { useEffect } from "react";

interface ScriptProps {
  children: string;
}

export function Script({ children }: ScriptProps) {
  useEffect(() => {
    try {
      // Create a script element
      const scriptEl = document.createElement("script");
      scriptEl.type = "text/javascript";
      scriptEl.text = children;
      
      // Append to document
      document.body.appendChild(scriptEl);
      
      // Clean up
      return () => {
        document.body.removeChild(scriptEl);
      };
    } catch (error) {
      console.error("Error executing script:", error);
    }
  }, [children]);
  
  return null;
}
