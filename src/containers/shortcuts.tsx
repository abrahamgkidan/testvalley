
import React, { useEffect, useState } from "react";
import ShortcutList from "@/components/shortcut-list";
import { Shortcut } from "@/types";

const Shortcuts: React.FC = () => {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);

  useEffect(() => {
    const fetchShortcuts = async () => {
      try {
        const response = await fetch("https://api.testvalley.kr/main-shortcut/all");
        const data = await response.json();
        setShortcuts(data);
      } catch (error) {
        // console.error("Error fetching shortcuts:", error);
      }
    };
    fetchShortcuts();
  }, []);

  return <ShortcutList shortcuts={shortcuts} />;
};

export default Shortcuts;
