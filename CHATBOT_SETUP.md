# 🤖 Floating AI Chatbot Setup Guide

Your Indian Studies website now has a **floating AI chatbot** available on every page! Here's everything you need to know.

## ✨ Features

### 🚀 Always Floating
- **Visible on all pages** - The chatbot appears as a floating button in the bottom-right corner
- **Non-intrusive** - Users can open/close it anytime
- **Responsive** - Works perfectly on mobile and desktop

### ⚡ Instant Q&A
- **6 pre-configured instant answers** for common questions
- Responses appear instantly (no API calls needed)
- Examples:
  - "What is this website about?"
  - "How can I contact the team?"
  - "What topics does this site cover?"
  - "Is the content free?"
  - "Can I contribute content?"
  - "How often is content updated?"

### 🧠 AI-Powered Responses
- For questions not in the instant Q&A database
- Uses OpenAI GPT-4o-mini model
- Streams responses like ChatGPT/Gemini
- Specialized in Indian studies, culture, and history

### 💬 Beautiful Chat Interface
- Clean, modern design
- Message history
- Typing indicators
- Dark mode support
- Smooth animations

---

## 🔧 Setup Instructions

### 1. **Install Dependencies** (Already Done)
The project already includes:
```bash
"ai": "^6.0.177",
"@ai-sdk/react": "^3.0.179",
"lucide-react": "^0.564.0",
"tailwindcss": "^4.2.0"
```

### 2. **Add OpenAI API Key**
Add to your `.env.local` file:
```env
OPENAI_API_KEY=your_api_key_here
```

Get your API key from: https://platform.openai.com/api-keys

### 3. **Files Created**

| File | Purpose |
|------|---------|
| `lib/chatbot-config.ts` | Q&A database and system prompt |
| `components/ChatBot.tsx` | Floating chatbot UI component |
| `app/api/chat/route.ts` | Backend API for chat (updated) |
| `app/layout.tsx` | Root layout (updated) |

---

## 📝 Customizing the Chatbot

### Edit Instant Q&A Responses

Open `lib/chatbot-config.ts`:

```typescript
export const INSTANT_QNA = [
  {
    id: "1",
    question: "What is this website about?",
    answer: "Your custom answer here...",
    keywords: ["about", "website", "custom", "keywords"],
  },
  // Add more Q&A pairs...
];
```

**How it works:**
- If user input matches any keyword, the answer is returned instantly
- Keywords are case-insensitive
- Multiple keywords increase matching flexibility

### Change AI Personality

Edit the `SYSTEM_PROMPT` in `lib/chatbot-config.ts`:

```typescript
export const SYSTEM_PROMPT = `You are a helpful assistant...
[Customize this prompt for your brand/tone]
`;
```

### Customize Styling

Edit `components/ChatBot.tsx`:

```typescript
// Change button color
className="... bg-gradient-to-r from-blue-600 to-indigo-600 ..."

// Change chat window colors
className="... bg-white dark:bg-slate-900 ..."

// Adjust window size
className="... w-96 h-[600px] ..."
```

---

## 🎯 How It Works

### User asks a question:

```
User: "How can I contact the team?"
  ↓
System checks INSTANT_QNA for keywords
  ↓
Match found! Keywords: ["contact", "email", "team"]
  ↓
Instant response returned ⚡ (0ms response time)
```

### Out-of-box question:

```
User: "Tell me about Indian philosophy"
  ↓
System checks INSTANT_QNA (no match)
  ↓
Sends to OpenAI API with system prompt
  ↓
Streams response like ChatGPT ✨
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
git push origin main
# Vercel auto-deploys

# Don't forget to add env variable in Vercel dashboard:
OPENAI_API_KEY = your_key_here
```

### Local Testing
```bash
npm run dev
# Open http://localhost:3000
# Click the blue chat button
```

---

## 💡 Pro Tips

1. **Add more instant answers** for better UX and lower API costs
2. **Use specific keywords** to catch variations of questions
3. **Monitor OpenAI usage** - streaming saves costs vs. full completions
4. **Customize the system prompt** to match your brand voice
5. **Test on mobile** - ensure the chat window size works on phones

---

## 🔐 Security

- ✅ API key stored in `.env.local` (never committed)
- ✅ Requests go through your Next.js backend
- ✅ Rate limiting recommended for production
- ✅ Consider adding auth if sensitive info is discussed

---

## 📊 Files Modified

```
pysathvik/Indian-Studies/
├── lib/
│   └── chatbot-config.ts          ✨ NEW
├── components/
│   └── ChatBot.tsx                ✨ NEW
├── app/
│   ├── layout.tsx                 🔄 UPDATED
│   └── api/
│       └── chat/
│           └── route.ts           🔄 UPDATED
└── .env.local                     ⚙️ ADD YOUR KEY
```

---

## 🐛 Troubleshooting

### Chatbot not appearing?
- Check if `ChatBot` is imported in `app/layout.tsx`
- Verify CSS is loaded (Tailwind configured)
- Check browser console for errors

### API errors?
- Verify `OPENAI_API_KEY` is set correctly
- Check API key has access to gpt-4o-mini model
- Review OpenAI rate limits and quota

### Responses are slow?
- This is normal for AI responses (1-3 seconds)
- Instant Q&A returns immediately
- Consider caching frequent questions

### Styling looks off?
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.ts` includes component paths
- Clear `.next` folder and rebuild

---

## 📚 Resources

- **AI SDK Docs**: https://sdk.vercel.ai
- **OpenAI API**: https://platform.openai.com
- **Tailwind CSS**: https://tailwindcss.com
- **Next.js**: https://nextjs.org

---

## ✅ Checklist

- [ ] Add `OPENAI_API_KEY` to `.env.local`
- [ ] Test instant Q&A responses locally
- [ ] Test AI responses with sample questions
- [ ] Customize Q&A answers for your content
- [ ] Verify on mobile devices
- [ ] Deploy to production
- [ ] Monitor API usage
- [ ] Gather user feedback

---

## 🎉 Done!

Your floating chatbot is ready to assist visitors 24/7! 

Questions? Check the code comments or review the AI SDK documentation.

**Happy chatting!** 🚀
