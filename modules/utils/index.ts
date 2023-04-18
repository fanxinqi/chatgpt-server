import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// ChatGPT模型的实现
const chatGPT = async (context = [], input) => {
  if (!Array.isArray(input))
    return {
      context,
      ouput: "我不知道你在说什么",
    };

  // 调用openai的接口
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: context.concat(input),
  });

  if (!completion.data?.choices)
    return {
      context,
      ouput: "我不知道你在说什么",
    };

  // 把当前的输入和输出都加入到context中,供下一次调用
  const ouput = completion.data?.choices.map(
    (item) => item?.message?.content
  )[0];
  context.push({ role: "assistant", content: ouput });
  return { context, ouput };
};

export default chatGPT;
