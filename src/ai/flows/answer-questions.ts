// This file is machine-generated - DO NOT EDIT!
'use server';
/**
 * @fileOverview Implements a Genkit flow that answers questions about Bhavuk.
 *
 * - answerQuestions - A function that handles the question answering process.
 * - AnswerQuestionsInput - The input type for the answerQuestions function.
 * - AnswerQuestionsOutput - The return type for the answerQuestions function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const AnswerQuestionsInputSchema = z.object({
  question: z.string().describe('The question to answer about Bhavuk.'),
});
export type AnswerQuestionsInput = z.infer<typeof AnswerQuestionsInputSchema>;

const AnswerQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about Bhavuk.'),
});
export type AnswerQuestionsOutput = z.infer<typeof AnswerQuestionsOutputSchema>;

export async function answerQuestions(input: AnswerQuestionsInput): Promise<AnswerQuestionsOutput> {
  return answerQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerQuestionsPrompt',
  input: {
    schema: z.object({
      question: z.string().describe('The question to answer about Bhavuk.'),
    }),
  },
  output: {
    schema: z.object({
      answer: z.string().describe('The answer to the question about Bhavuk.'),
    }),
  },
  prompt: `You are a helpful AI assistant that answers questions about Bhavuk Adlakha.

  Here is some information about Bhavuk:
  - He is a final-year B.Tech Computer Science student at Amity University, Noida (Batch 2021–2025).
  - He has strong problem-solving skills and a passion for continuous learning.
  - He developed a fully functional Inventory Management System from scratch.
  - He is currently deepening his skills in AI/ML, DSA, and full-stack development.
  - His technical skills include Python, JavaScript, SQLite, Plotly, pandas, Visual Studio Code, Git, GitHub, and Figma.
  - He has built a heart disease prediction model and is working on a sales dashboard website.
  - He has solved 80+ problems on LeetCode and is strengthening his DSA skills.
  - You can contact him at badlakha96@gmail.com or 8851341067.
  - His LinkedIn profile is https://www.linkedin.com/in/bhavuk-adlakha-9b2046239/ and his GitHub profile is https://github.com/Bhavukadlakha.

  Answer the following question about Bhavuk:
  {{question}}`,
});

const answerQuestionsFlow = ai.defineFlow<
  typeof AnswerQuestionsInputSchema,
  typeof AnswerQuestionsOutputSchema
>(
  {
    name: 'answerQuestionsFlow',
    inputSchema: AnswerQuestionsInputSchema,
    outputSchema: AnswerQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
