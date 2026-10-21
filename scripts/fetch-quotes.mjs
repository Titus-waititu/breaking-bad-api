const FIVE_MINUTES = 5 * 60 * 1000;
const quoteUrl =
  process.env.QUOTE_API_URL ?? "http://localhost:3001/v1/quotes";

async function fetchQuotes() {
  const response = await fetch(quoteUrl, {
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error(`Quote API returned HTTP ${response.status}`);
  }

  const payload = await response.json();
  const quotes = Array.isArray(payload) ? payload : [payload];
  const validQuotes = quotes.filter(
    (item) =>
      item &&
      typeof item.quote === "string" &&
      typeof item.author === "string",
  );

  if (validQuotes.length === 0) {
    throw new Error("Quote API returned no quotes in the expected format");
  }

  console.log(`[${new Date().toLocaleString()}] Fetched ${validQuotes.length} quote(s):`);
  for (const { quote, author } of validQuotes) {
    console.log(`"${quote}" — ${author}`);
  }
}

async function run() {
  while (true) {
    try {
      await fetchQuotes();
    } catch (error) {
      console.error(
        `[${new Date().toLocaleString()}] Quote fetch failed:`,
        error,
      );
    }

    await new Promise((resolve) => setTimeout(resolve, FIVE_MINUTES));
  }
}

run();
