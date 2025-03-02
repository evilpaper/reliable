import { Quiz } from "@/features/course/quiz";

type Lesson = {
  lessonNumber: number;
  lessonTitle: string;
  content: string;
  question?: string;
  options?: string[];
  correctAnswer?: string;
  explanation?: string;
};

interface LessonScreenProps {
  lesson: Lesson;
}

export function LessonScreen({ lesson }: LessonScreenProps) {
  const {
    lessonNumber,
    lessonTitle,
    content,
    question,
    options,
    correctAnswer,
    explanation,
  } = lesson;
  return (
    <section className="container flex-1 md:p-0 max-w-md flex flex-col items-start justify-start gap-6 mt-12">
      <span className="text-gray-600 font-medium">
        {lessonNumber}. {lessonTitle}
      </span>
      <p>{content}</p>
      {question && (
        <Quiz
          question={question}
          options={options}
          correctAnswer={correctAnswer}
          explanation={explanation}
        />
      )}
    </section>
  );
}
