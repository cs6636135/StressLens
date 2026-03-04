const getTopic = require("./topicService");
const { translate } = require("./translateService");
const getEmotion = require("./emotionService");
const stressService = require("./stressService");
const noteModel = require("../models/noteModel");

exports.processNote = async ({topicContent, content}) => {
  // translate
  console.log("service hit");
  const {  translatedTopic, translatedContent } = await translate(topicContent, content);
   console.log("after translate:", {
    translatedTopic,
    translatedContent
  });

  // call ML services
  const topicResult = await getTopic(translatedContent);
   console.log("after topicResult:", {
    topicResult
  });
  const emotionResult = await getEmotion(translatedContent);
   console.log("after emotionResult:", {
    emotionResult
  });
  // calculate stress
  const stressResult = stressService.calculateStress(
    emotionResult,
    content
  );
   console.log("after stressResult:", {
    stressResult
  });

  // combine
  const noteData = {
    content,
    content_topic: topicContent,
    translated_content: translatedContent,
    translated_content_topic: translatedTopic,
    topic: topicResult.topic,
    emotion_json: emotionResult,
    stress_score: stressResult.stress_score,
    stress_level: stressResult.stress_level,
    risk_flag: stressResult.risk_flag,
    model_v: "v1.0",
    user_id: null
  };
  console.log("FINAL NOTE DATA:", noteData);
  // save
  return await noteModel.createNote(noteData);
};