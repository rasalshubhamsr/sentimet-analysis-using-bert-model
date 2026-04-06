
# 🔍 Multilingual BERT Sentiment Analysis Engine

A **production-grade sentiment analysis application** that fuses real-time Google Gemini API simulation to benchmark a fine-tuned BERT architecture against traditional MNB, RN, and LSTM models across multiple languages.

Built as an MTech research initiative, delivering accurate, multi-dimensional sentiment classification with interactive visualizations.

---

## 🏗️ Architecture
```text
User Input Text (Multilingual)
    │
    ▼
┌─────────────────────────────────┐
│          React Frontend         │
│     (Vite + Tailwind CSS)       │
└────────────┬────────────────────┘
             │
    ┌────────▼────────┐
    │  geminiService  │  ← API Integration Layer
    └──┬──────────┬───┘
       │          │
  Prompt Eng.   Validation
       │          │
┌──────▼──────────▼─────┐
│   Google Gemini API   │  ← Inference simulation (gemini-2.5-flash)
│ (Strict JSON Schema)  │
└────────────┬──────────┘
             │
        JSON Payload
             │
┌────────────▼──────────┐
│  State & Hooks Mgmt   │  ← React useState / useCallback
└────────────┬──────────┘
             │
       ┌─────┴─────┐
       ▼           ▼
┌────────────┐ ┌────────────┐
│ Recharts   │ │ Comparison │  ← MNB, RN, LSTM vs BERT
│ Visuals    │ │ Metrics    │
└────────────┘ └────────────┘
```

---

## ✨ Key Features
| Feature | Details |
|---|---|
| **Multilingual Processing** | Analyze text inputs in a wide array of global languages. |
| **Model Benchmarking** | Real-time comparative metrics showing accuracy & distribution. |
| **Simulated Inference** | Uses Gemini to simulate real-world BERT vs LSTM/RN/MNB performance. |
| **Interactive Visualizations** | Built-in charts powered by Recharts (Sentiment distributions). |
| **Enterprise Frontend** | Vite, React 19, Recharts, strictly typed TypeScript. |
| **Cloud AI Ready** | Utilizes @google/genai SDK with exponential backoff mechanisms. |

---

## 📊 Evaluation Results (Simulated Benchmarks)
| Metric / Model | BERT | LSTM | RN | MNB |
|---|---|---|---|---|
| Avg. Accuracy | ~92% | ~85% | ~81% | ~76% |
| Context Nuance | High | Med | Low | Low |

---

## �️ Tech Stack
- **Frontend Framework:** React 19, Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data Visualization:** Recharts
- **AI/ML API:** Google Gemini API (`gemini-2.5-flash`)
- **SDK:** `@google/genai`

---

## 🚀 Quickstart

### 1. Clone & setup
```bash
git clone <repository_url>
cd BERT-BERT-FINAL
cp env.local.example .env.local
# Fill in your Gemini API key in .env.local
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure
```text
BERT-BERT-FINAL/
├── components/              # Reusable UI components
├── services/                # API logic and Gemini integration
├── paper/                   # Reference IEEE papers 
├── project presentation/    # Academic presentation materials
├── types.ts                 # Global TypeScript interfaces
├── constants.ts             # Application configuration constants
├── App.tsx                  # Root application component
├── index.tsx                # Application entrypoint
├── package.json             # NPM dependencies
└── vite.config.ts           # Vite bundler configuration
```

---

## 🔧 Configuration
Copy `env.local.example` to `.env.local` and fill in:

```env
VITE_GEMINI_API_KEY=AIzaSy...
```

---

## 🎓 Academic Context
This project was developed as part of an **MTech Project in Maharashtra, India**. The repository contains corresponding academic materials, including IEEE paper drafts and project presentations.

---

> **Note:** This reflects an academic implementation benchmarking classical models against Transformer architectures. API calls use strict structured JSON schemas to consistently output accurate standard metrics.
