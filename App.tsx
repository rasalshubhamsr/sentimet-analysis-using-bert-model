
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { SentimentInput } from './components/SentimentInput';
import { AnalysisResult } from './components/AnalysisResult';
import { analyzeSentiment } from './services/geminiService';
import type { SentimentAnalysisResult } from './types';
import { LANGUAGES } from './constants';

const App: React.FC = () => {
  const [analysisResult, setAnalysisResult] = useState<SentimentAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const handleAnalyze = useCallback(async (text: string, language: string) => {
    if (!text.trim()) {
      setError('Please enter some text to analyze.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);
    setSelectedModel(null); // Reset selection on new analysis

    try {
      const result = await analyzeSentiment(text, language);
      setAnalysisResult(result);
    } catch (e) {
      console.error(e);
      setError('Failed to analyze sentiment. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-background font-sans text-brand-text">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <Header />
        <div className="mt-8 max-w-4xl mx-auto">
          <SentimentInput
            languages={LANGUAGES}
            onAnalyze={handleAnalyze}
            isLoading={isLoading}
          />

          {error && (
            <div className="mt-6 p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg text-center">
              {error}
            </div>
          )}

          {analysisResult && (
            <div className="mt-10">
              <AnalysisResult 
                result={analysisResult} 
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
              />
            </div>
          )}
        </div>
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        <p>MTech Project | Multilingual Sentiment Analysis | Maharashtra, India</p>
      </footer>
    </div>
  );
};

export default App;
