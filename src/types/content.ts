export type ChoiceId = "a" | "b" | "c" | "d";

export type MCQ = {
  id: string;
  question: string;
  choices: { id: ChoiceId; text: string }[];
  answerId: ChoiceId;
  explanation: string;
};

export type Section = {
  id: string;
  title: string;
  content: string[];
  qna: MCQ[];
};

export type Topic = {
  id: string;
  title: string;
  subtitle?: string;
  sections: Section[];
};