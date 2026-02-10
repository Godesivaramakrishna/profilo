# RAG Chatbot Integration Guide

## Overview
A RAG (Retrieval-Augmented Generation) based chatbot has been successfully integrated into your portfolio. The chatbot can answer questions about your skills, projects, experience, and certifications.

## Components Created

### 1. RAG Service (`src/services/ragService.ts`)
- **Document Retrieval**: Uses cosine similarity for semantic search
- **Context Generation**: Builds context from portfolio content
- **Response Generation**: Rule-based responses (can be upgraded to LLM)
- **LLM Integration**: Optional OpenAI API integration

### 2. ChatBot Component (`src/components/portfolio/ChatBot.tsx`)
- **Floating Button**: Bottom-right corner for easy access
- **Chat Interface**: Modern, animated chat window
- **Message History**: Maintains conversation context
- **Suggested Questions**: Quick-start prompts for users
- **Loading States**: Visual feedback during processing

## Features

✅ **Rule-Based RAG**: Intelligent responses without API costs
✅ **Document Retrieval**: Semantic search through portfolio content
✅ **Modern UI**: Gradient design matching your portfolio theme
✅ **Animations**: Smooth transitions using Framer Motion
✅ **Responsive**: Works on all screen sizes
✅ **LLM Ready**: Easy integration with OpenAI or other APIs

## Customization

### Add Your Portfolio Content
Edit `src/services/ragService.ts` and update the `portfolioKnowledge` array:

```typescript
const portfolioKnowledge: Document[] = [
  {
    id: '1',
    content: 'Your actual about section content...',
    metadata: { section: 'about', title: 'About Me' }
  },
  // Add more documents
];
```

### Integrate with LLM API
To use OpenAI or another LLM:

1. Get your API key
2. Set it in your environment variables
3. Use the `queryWithLLM` function instead of `queryRAG`

Example:
```typescript
// In ChatBot.tsx, update handleSendMessage:
const response = await queryWithLLM(inputValue, process.env.OPENAI_API_KEY);
```

### Customize Appearance
- **Colors**: Update gradient classes in `ChatBot.tsx`
- **Size**: Modify width/height in the motion.div
- **Position**: Change bottom/right values for different placement

## How It Works

1. **User Query**: User types a question
2. **Retrieval**: System finds relevant documents using cosine similarity
3. **Context Building**: Creates context from top-K documents
4. **Generation**: Generates response using rules or LLM
5. **Display**: Shows formatted response in chat UI

## Suggested Questions

The chatbot can answer questions about:
- 💼 Skills and technologies
- 🎨 Projects and portfolio work
- 👔 Work experience
- 🎓 Certifications
- 💻 Coding profiles
- 📧 Contact information

## Testing

Try these questions:
- "What are your skills?"
- "Tell me about your projects"
- "What's your experience?"
- "How can I contact you?"

## Future Enhancements

🔮 **Potential Upgrades**:
- Connect to actual LLM (OpenAI, Anthropic, etc.)
- Add voice input/output
- Multi-language support
- Export chat history
- Analytics tracking
- Connect to backend API for dynamic content

## Dependencies

All required packages are already installed:
- `lucide-react` - Icons
- `framer-motion` - Animations
- `@radix-ui/*` - UI components (via shadcn)

## Support

The chatbot is fully functional and ready to use. Simply run your dev server:

```bash
npm run dev
```

Look for the purple chat button in the bottom-right corner!

---

Enjoy your AI-powered portfolio! 🚀
