"use client";

import React from "react";
import { Button } from "@/common/components/ui/button";

export function Quiz(lesson: {
  question?: string;
  options?: string[];
  correctAnswer?: string;
  explanation?: string;
}) {
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
  const [isAnswered, setIsAnswered] = React.useState(false);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === lesson.correctAnswer) {
      // setScore(score + 1);
    }
  };
  return (
    <div className="w-full space-y-2">
      {lesson.options?.map((option, index) => (
        <Button
          key={index}
          variant={selectedAnswer === option ? "default" : "outline"}
          className="text-balance h-auto w-full justify-start text-left"
          onClick={() => handleAnswer(option)}
          disabled={isAnswered}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}
