const fetch = require('node-fetch');

module.exports = async function generateFromOpenRouter(theme) {
  const prompt = `Tu es un assistant de recherche académique. À partir du mot-clé suivant : "${theme}", génère 3 sujets de recherche avec :
1. Un titre clair
2. Une question de recherche bien formulée
3. Une explication de la pertinence (sociale, scientifique ou mixte)

Format :
- Sujet 1 :
  Titre :
  Question :
  Pertinence :`;

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'openai/gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    })
  });

  const data = await response.json();
  console.log(data);
  if (data.choices && data.choices[0]) {
    return data.choices[0].message.content;
  } else {
    throw new Error("Erreur de génération avec l'API OpenRouter");
  }
};