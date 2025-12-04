import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateResponse = async (userMessage: string): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "抱歉，AI 服务暂时不可用 (Missing API Key)。请联系管理员。";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `
          你是一个专业的儿科头型矫正专家助手，服务于一款名为"好头型"的APP官网。
          这款APP风格类似小红书，注重美学与科学育儿的结合。
          你的职责是：
          1. 用亲切、活泼、像"集美"或贴心闺蜜一样的语气回答父母关于婴儿头型（扁头、斜头/偏头、舟状头）的问题。
          2. 解释医学术语（如CVAI指数），但要通俗易懂，多用比喻。
          3. 如果用户询问具体测量方法，热情推荐他们下载"好头型"APP，强调"AI拍照一秒出片"。
          4. 不要给出具体的医疗诊断，始终建议咨询线下医生。
          5. 回答要简练，可以适当使用emoji。
        `,
        temperature: 0.7,
      }
    });

    return response.text || "抱歉，我现在无法回答，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "网络连接异常，请稍后重试。";
  }
};