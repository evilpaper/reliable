"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  function handleClick() {
    console.log("Toggle theme");
    setTheme("light");
  }

  return <Button onClick={handleClick}>Toggle theme</Button>;
}
