import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import InputBox from './Input';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_API_KEY_GEMINI;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const generationConfig = {
  temperature: 1,
  topK: 0,
  topP: 0.95,
  maxOutputTokens: 8192,
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const Header = () => {
  return (
    <div className="container mx-auto text-black pt-[141px]">
      <h1 className="text-center font-semibold text-3xl">Hello Financial Enthusiasts</h1>
      <p className="text-center font-medium text-lg">Ask Me Anything About Finance</p>
    </div>
  );
};

export default function ChatWindow() {
  const chatContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Auto-scroll to the bottom of the chat container when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async (inputText) => {
    if (!inputText) {
      return;
    }

    // Update messages with the user message
    setMessages((prevMessages) => [...prevMessages, { text: inputText, sender: 'user', timestamp: new Date() }]);

    setLoading(true);

    try {
      let response = null;

      // Check if the user message is related to finance
      if (inputText.toLowerCase().includes('finance') || inputText.toLowerCase().includes('keuangan') || inputText.toLowerCase().includes('uang')) {
        const chat = model.startChat({
          generationConfig,
          safetySettings,
          history: [
            {
              role: 'user',
              parts: [
                {
                  text: 'You are an AI assistant named FinanceGenius with extensive knowledge about finance. I want you to introduce yourself when users ask you or start a conversation for the first time. Your role is to provide accurate and detailed information to users regarding all aspects of finance, including personal finance, investment, budgeting, saving, stocks, bonds, and any other finance-related topics. You should have in-depth expertise in this domain.\n\nWhen answering questions, provide comprehensive responses drawing from reliable sources and your broad understanding of finance. If a user asks about something unrelated to finance, politely explain that your knowledge is limited to finance topics. Encourage the user to rephrase their query in a finance context if possible. Your calm, informative, and passionate finance-centric persona should shine through in all responses.',
                },
              ],
            },
            {
              role: 'model',
              parts: [
                {
                  text: "(Smiling) Hello there! My name is FinanceGenius, and I'm thrilled to meet you. Finance is my passion, and I've dedicated myself to learning everything there is to know about this complex field. From personal finance to investment strategies, I'm here to guide and inform you on your financial journey. So, tell me, what's your name, and what would you like to discover about the world of finance today?",
                },
              ],
            },
          ],
        });
        const result = await chat.sendMessage(inputText);
        response = result.response.text();
      } else {
        // If the user message is not related to finance, inform the user
        response = "I'm sorry, but my knowledge is limited to finance topics. Could you please ask me something related to finance?";
      }

      // Update messages with the AI response
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: response,
          sender: 'ai',
          timestamp: new Date(),
        },
      ]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('generateContent error: ', error);
    }
  };

  return (
    <div className="bg-white h-screen flex flex-col justify-between px-4">
      <Header />
      <div className="container mx-auto flex-grow overflow-y-auto pt-4" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'user' ? 'self-end bg-gray-300 text-black' : 'self-start bg-green-500 text-white'} p-3 mb-4 rounded-lg`}>
            <p className="message-text">{message.text}</p>
            <span className={`time ${message.sender === 'user' ? 'text-black' : 'text-white'} text-xs`}>{message.timestamp ? dayjs(message.timestamp).format('DD MMMM YYYY') : ''}</span>
          </div>
        ))}
      </div>
      <InputBox sendMessage={sendMessage} loading={loading} />
    </div>
  );
}
