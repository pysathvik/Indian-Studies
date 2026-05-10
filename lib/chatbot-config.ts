// Instant Q&A Responses
export const INSTANT_QNA = [
  {
    id: "1",
    question: "What is this website about?",
    answer:
      "This is the Indian Studies Lab Project website, dedicated to exploring and sharing comprehensive knowledge about Indian culture, history, and studies.",
    keywords: ["about", "website", "indian studies"],
  },
  {
    id: "2",
    question: "How can I contact the team?",
    answer:
      "You can reach out to us through the contact form on our Contact page or email us at contact@indian-studies.com",
    keywords: ["contact", "email", "team", "reach out"],
  },
  {
    id: "3",
    question: "What topics does this site cover?",
    answer:
      "We cover Indian history, culture, languages, traditions, literature, art, philosophy, and contemporary studies.",
    keywords: ["topics", "cover", "what", "subjects"],
  },
  {
    id: "4",
    question: "Is the content free to access?",
    answer:
      "Yes! All our educational content is free and accessible to everyone interested in learning about Indian studies.",
    keywords: ["free", "access", "cost", "paid"],
  },
  {
    id: "5",
    question: "Can I contribute content?",
    answer:
      "We welcome contributions! Please visit our GitHub repository or contact us to learn how you can contribute.",
    keywords: ["contribute", "submit", "write", "content"],
  },
  {
    id: "6",
    question: "How often is content updated?",
    answer:
      "We regularly update our content with new articles, resources, and research. Follow us for the latest updates.",
    keywords: ["update", "new", "latest", "frequency"],
  },
];

// Chatbot personality and system prompt
export const SYSTEM_PROMPT = `You are a helpful assistant for the Indian Studies Lab Project website. 
You provide accurate, informative, and engaging responses about Indian history, culture, languages, traditions, literature, art, and philosophy.
Be friendly, professional, and encouraging. Keep responses concise but informative.
If you don't know something, admit it and suggest where they might find the information.
Always relate answers back to Indian studies when relevant.`;

// Find instant answer by user input
export function findInstantAnswer(userInput: string): string | null {
  const lowerInput = userInput.toLowerCase().trim();

  for (const qa of INSTANT_QNA) {
    for (const keyword of qa.keywords) {
      if (lowerInput.includes(keyword)) {
        return qa.answer;
      }
    }
  }

  return null;
}
