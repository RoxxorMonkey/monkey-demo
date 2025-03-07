export async function GET() {
  const API_URL = process.env.URL;
  const API_KEY = process.env.API_KEY;
  console.log(API_URL);

  try {
    const response = await fetch(API_URL, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch monkey data");
    }

    const data = await response.json();
    return Response.json({ fact: data.fact, image: data.image });
  } catch (error) {
    return Response.json({ error: "Failed to fetch monkey data" }, { status: 500 });
  }
}

