const db = require("../config/db");

exports.createNote = async (data) => {
  console.log("notedbhit")
  try{
  const query = `
    INSERT INTO note (
      content,
      translated_content,
      translated_content_topic,
      content_topic,
      topic,
      emotion_json,
      stress_score,
      stress_level,
      risk_flag,
      model_v,
      user_id
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
    RETURNING *
  `;

  const values = [
    data.content,
    data.translated_content,
    data.translated_content_topic,
    data.content_topic,
    data.topic,
    data.emotion_json,
    data.stress_score,
    data.stress_level,
    data.risk_flag,
    data.model_v,
    data.user_id
  ];
  const result = await db.query(query, values);
  console.log(result.rows[0])
  return result.rows[0];
  }catch(error){
   console.error("DB ERROR:", error);
   throw error;
  }
  
};