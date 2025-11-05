import { Sentiment } from './types';

export const LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'mr', name: 'Marathi' },
    { code: 'hi', name: 'Hindi' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'ja', name: 'Japanese' },
];

export const SENTIMENT_COLORS: { [key in Sentiment]: string } = {
  [Sentiment.Positive]: '#4ade80', // green-400
  [Sentiment.Negative]: '#f43f5e', // rose-500
  [Sentiment.Neutral]: '#facc15',  // amber-400
  [Sentiment.Mixed]: '#38bdf8',    // sky-400
};

export const SENTIMENT_EXPLANATIONS: { [key in Sentiment]: string } = {
  [Sentiment.Positive]: 'Indicates favorable opinions, satisfaction, or positive emotions.',
  [Sentiment.Negative]: 'Indicates unfavorable opinions, dissatisfaction, or negative emotions.',
  [Sentiment.Neutral]: 'Indicates a lack of strong sentiment, often presenting factual or objective information.',
  [Sentiment.Mixed]: 'Indicates a combination of both positive and negative opinions within the same text.',
};

export const SAMPLE_REVIEWS: { [key: string]: string[] } = {
  en: [
    'The movie was fantastic! The acting was superb and the storyline was captivating.',
    'I am extremely disappointed with this product. It broke after just one use.',
    'The package arrived on the expected delivery date.',
    'While the ambiance was nice, the food was overpriced for the quality.',
  ],
  mr: [
    'उत्कृष्ट चित्रपट! कलाकारांचा अभिनय आणि कथा दोन्ही अप्रतिम होते.',
    'हे उत्पादन खूपच निकृष्ट दर्जाचे आहे. मला अजिबात आवडले नाही.',
    'जेवण ठीक होते, पण सेवा खूप हळू होती.',
    'तुमची सेवा खूप चांगली आहे, मी पुन्हा येईन.',
  ],
  hi: [
    'यह फ़ोन शानदार है! कैमरा क्वालिटी बहुत अच्छी है।',
    'सेवा बहुत धीमी थी और खाना ठंडा था। मैं यहाँ दोबारा नहीं आऊंगा।',
    'फिल्म ठीक-ठाक थी, कहानी में कुछ नया नहीं था।',
    'मुझे यह किताब बहुत पसंद आई, लेखक ने बहुत अच्छा काम किया है।',
  ],
  es: [
    '¡El servicio fue increíble y la comida deliciosa! Definitivamente volveré.',
    'El hotel estaba sucio y el personal fue grosero. No lo recomiendo.',
    'El producto es exactamente como se describe en el sitio web.',
    'La ubicación es excelente, pero la habitación era un poco pequeña.',
  ],
  fr: [
    "Le restaurant offre une vue magnifique et les plats sont exquis.",
    "Je suis très déçu par la qualité de cet article. Il ne fonctionne pas correctement.",
    "Le concert était bien, mais le son n'était pas parfait.",
    "Le personnel est aimable et professionnel. J'ai passé un excellent séjour.",
  ],
  de: [
    'Das Essen war absolut köstlich und der Service war erstklassig.',
    'Leider war das Hotelzimmer nicht sauber und das Frühstück war schlecht.',
    'Die Lieferung kam pünktlich an, das Produkt war wie erwartet.',
    'Die Show war unterhaltsam, obwohl einige Teile etwas langweilig waren.',
  ],
  ja: [
    'このレストランの雰囲気は最高で、料理もとても美味しかったです。',
    '製品がすぐに壊れてしまい、非常にがっかりしました。',
    'サービスは良かったですが、値段が少し高いと感じました。',
    '期待通りでした。特に問題はありません。',
  ],
};