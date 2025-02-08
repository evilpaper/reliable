import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Props {
  course: {
    name: string;
    lessons: { id: string; number: number; name: string; content: string }[];
  };
}

export async function CourseScreen({ course }: Props) {
  return (
    <section className="container max-w-3xl flex-1 p-4 md:p-0 mt-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">
        {course.name}
      </h1>
      <div className="grid grid-cols-1 gap-6 mt-8">
        {course.lessons.map(({ id, number, name, content }) => {
          return (
            <Card
              key={id}
              className="bg-gray-50/50 border-0 rounded-2xl h-full"
            >
              <CardHeader>
                <span className="text-gray-600 font-medium">
                  {number} - {name}
                </span>
              </CardHeader>
              <CardContent>
                <blockquote className="text-1xl text-gray-600 font-normal leading-relaxed">
                  {content}
                </blockquote>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
