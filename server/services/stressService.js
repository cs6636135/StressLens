exports.calculateStress = (emotion, content) => {
  const sadness = emotion.sadness || 0;
  const anger = emotion.anger || 0;

  const stress_score = (sadness * 0.7) + (anger * 0.3);

  let stress_level = "low";
  if (stress_score > 0.7) stress_level = "high";
  else if (stress_score > 0.4) stress_level = "medium";

  const risk_flag = content.includes("อยากตาย");

  return {
    stress_score,
    stress_level,
    risk_flag
  };
};