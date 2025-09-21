"use client";

import * as React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Send, MessageSquare, Bot, User, Loader2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { answerQuestions, AnswerQuestionsInput } from '@/ai/flows/answer-questions'; // Assuming your Genkit flow is here

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export function AiChatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<Message[]>([
    { sender: 'bot', text: "Hi there! Ask me anything about Bhavuk's skills, projects, or how to contact him." }
  ]);
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

   const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if(scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  };

  React.useEffect(() => {
     scrollToBottom();
  }, [messages]);


  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const payload: AnswerQuestionsInput = { question: input };
      const response = await answerQuestions(payload); // Call your Genkit flow
      const botMessage: Message = { sender: 'bot', text: response.answer };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage: Message = { sender: 'bot', text: "Sorry, I encountered an error. Please try again." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSend();
    }
  };

  return (
     <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
             <Button
                 variant="default"
                 size="icon"
                 className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg chatbot-button-glow z-50" // Added glow class
                 aria-label="Toggle AI Chatbot"
             >
                 {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
             </Button>
        </PopoverTrigger>
         <PopoverContent
             side="top"
             align="end"
             className="w-80 md:w-96 p-0 border-none shadow-xl rounded-lg overflow-hidden mr-2 mb-2" // Adjusted margin
             onOpenAutoFocus={(e) => e.preventDefault()} // Prevent focus stealing
         >
             <div className="flex flex-col h-[28rem]"> {/* Fixed height */}
                 <header className="bg-primary text-primary-foreground p-3 flex items-center justify-between">
                     <h3 className="font-semibold flex items-center gap-2"><Bot className="w-5 h-5"/> Ask Me Anything Assistant</h3>
                      <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80 h-7 w-7" onClick={() => setIsOpen(false)}>
                         <X className="h-4 w-4" />
                     </Button>
                 </header>
                 <ScrollArea className="flex-grow p-4 bg-background" ref={scrollAreaRef}>
                    <div className="space-y-4">
                         {messages.map((msg, index) => (
                         <div key={index} className={cn("flex items-start gap-3", msg.sender === 'user' ? 'justify-end' : '')}>
                             {msg.sender === 'bot' && <Bot className="w-6 h-6 text-primary flex-shrink-0 mt-1" />}
                             <div className={cn(
                                 "p-3 rounded-lg max-w-[80%]",
                                 msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                             )}>
                                 <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                             </div>
                             {msg.sender === 'user' && <User className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />}
                         </div>
                         ))}
                         {isLoading && (
                             <div className="flex items-start gap-3">
                                 <Bot className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                 <div className="p-3 rounded-lg bg-secondary">
                                     <Loader2 className="w-5 h-5 animate-spin text-primary" />
                                 </div>
                             </div>
                         )}
                    </div>
                 </ScrollArea>
                  <footer className="p-3 border-t bg-background">
                    <div className="flex items-center gap-2">
                         <Input
                             placeholder="Type your question..."
                             value={input}
                             onChange={handleInputChange}
                             onKeyPress={handleKeyPress}
                             disabled={isLoading}
                         />
                         <Button size="icon" onClick={handleSend} disabled={isLoading || !input.trim()}>
                             {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                         </Button>
                    </div>
                 </footer>
            </div>
         </PopoverContent>
     </Popover>
  );
}
