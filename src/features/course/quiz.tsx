"use client";

import React from "react";
import { Button } from "@/common/components/ui/button";
import { Card, CardContent, CardHeader } from "@/common/components/ui/card";

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
    <Card className="bg-gray-50/50 border-0 rounded-2xl h-full">
      <CardHeader>
        <span className="text-gray-600 font-medium">Quiz</span>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
