export const courses = [
  {
    title: "Grundkurs i livsmedelshygien",
    courseSlug: "food-hygiene-foundations",
    lessons: [
      {
        id: crypto.randomUUID(),
        lessonNumber: 1,
        lessonTitle: "Why bother",
        synopsis: "Lay out the landscape. Introduce key player.",
        content:
          "This module outlines your responsibilities and the actions you must take to ensure you comply with food safety law. It explains what you can expect from your employer, HACCP and the purpose of food safety management systems and the role of enforcement officers.",
        question: "Why should you bother",
        options: [
          "No clue",
          "To not kill the guest",
          "Ro save money",
          "To make my boss happy",
        ],
        correctAnswer: "To not kill the guest",
        explanation:
          "The law is there to protect the person who purchase and consume your food, that is, the guest.",
      },
      {
        id: crypto.randomUUID(),
        lessonNumber: 2,
        lessonTitle: "The bugs",
        synopsis: "Going deep into our major enemies.",
        content:
          "This module covers the various microbial hazards you may encounter in food handling and how to prevent them. It also explains how to prevent cross-contamination and the differences between low-risk and high-risk foods.",
      },
      {
        id: crypto.randomUUID(),
        lessonNumber: 3,
        lessonTitle: "The rest",
        synopsis:
          "Learn about the other bunch, that is physical, chemical and allergenic hazards.",
        content:
          "This module details physical, chemical and allergenic hazards, the risks they pose to food safety and the ways in which you can prevent contamination from occurring.",
      },
      {
        id: crypto.randomUUID(),
        lessonNumber: 4,
        lessonTitle: "Storage",
        synopsis: "How to store food to keep it away from our enemies.",
        content:
          "This module explains the importance of storing foods at the correct temperatures. It covers deliveries, how to correctly store different types of food, best before and use-by dates, stock rotation systems and food labelling requirements.",
      },
      {
        id: crypto.randomUUID(),
        lessonNumber: 5,
        lessonTitle: "Preperation",
        synopsis: "Rules for preparting any food in a safe way.",
        content:
          "This module explains how to safely prepare food, including proper thawing, cooking and reheating methods. It also covers safe practices for hot and cold holding and managing hazards during food service.",
      },
      {
        id: crypto.randomUUID(),
        lessonNumber: 6,
        lessonTitle: "Personal hygiene",
        synopsis:
          "What you need to do to keep yourself from being a vechicle for our enemies.",
        content:
          "This module highlights the importance of maintaining high personal hygiene standards. It includes the importance of effective hand washing procedures, protective clothing, reporting illness and managing wounds and sores.",
      },
      {
        id: crypto.randomUUID(),
        lessonNumber: 7,
        lessonTitle: "Clean as you go",
        synopsis: "How to keep our space free from enemies.",
        content:
          "This module highlights the importance of effective cleaning and disinfection. It explores how premises design can affect food safety, how to identify and control pests and the correct waste management procedures.",
      },
    ],
  },
];
