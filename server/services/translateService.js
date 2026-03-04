async function translateText(text) {
  // mock ก่อน
  return text;
}

async function translate(topicContent, content) {
  const translatedTopic = await translateText(topicContent);
  const translatedContent = await translateText(content);

  return {
    translatedTopic,
    translatedContent
  };
}

module.exports = {
  translateText,
  translate
};