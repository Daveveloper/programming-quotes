const API_BASE = 'https://programming-quotes-api.herokuapp.com';
const ALL_QUOTES = `${API_BASE}/quotes`;
const RANDOM_QUOTE = `${API_BASE}/quotes/random`;

export async function getAll() {
  const response = await fetch(ALL_QUOTES);
  const quotes = await response.json();
  return quotes;
}

export async function getRandomQuote() {
  const response =  await fetch(RANDOM_QUOTE);
  const quote = await response.json();
  return quote;
}
