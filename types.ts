export enum Sentiment {
  Positive = "Positive",
  Negative = "Negative",
  Neutral = "Neutral",
  Mixed = "Mixed",
}

export interface ModelComparison {
  model: string;
  sentiment: Sentiment;
  accuracy: number;
}

export interface ModelDetail {
  model: string;
  explanation: string;
}

export interface SentimentDistribution {
  sentiment: Sentiment;
  count: number;
  percentage: number;
}

export interface SentimentAnalysisResult {
  overall_sentiment: Sentiment;
  overall_accuracy: number;
  sentiment_distribution: SentimentDistribution[];
  comparisons: ModelComparison[];
  model_details: ModelDetail[];
  metrics_explanation: string;
}