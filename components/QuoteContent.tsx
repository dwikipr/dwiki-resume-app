import React from "react";

interface QuotesProps {
  quotes: QuoteOfTheDay[];
}

const getDailyQuote = (quotes: QuoteOfTheDay[]): QuoteOfTheDay => {
  const today = new Date();
  const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();
  const index = seed % quotes.length;
  return quotes[index];
};

const Quote: React.FC<QuotesProps> = ({ quotes }) => {
  const dailyQuote = getDailyQuote(quotes);

  return (
    <div className="text-left space-y-4">
      <p className="text-xl mb-4">"{dailyQuote.text}"</p>
      <p className="text-sm italic">— {dailyQuote.author}</p>
    </div>
  );
};

export default Quote;
