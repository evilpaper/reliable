"use client";

import React from "react";
import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/common/components/ui/card";

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
    <Card className="bg-gray-50/50 border-0 rounded-2xl h-full w-full">
      <CardHeader>
        <span className="text-gray-600 font-medium">Quiz</span>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
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
      {isAnswered && (
        <CardFooter>
          <div className="flex w-full rounded-md border border-stone-400 p-4">
            {selectedAnswer === lesson.correctAnswer ? (
              <p>
                Correct! <br /> {lesson.explanation}
              </p>
            ) : (
              <p>
                Incorrect! <br /> The correct answer is: {lesson.correctAnswer}{" "}
                <br />
                {lesson.explanation}
              </p>
            )}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
