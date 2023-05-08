/* eslint-disable import/no-anonymous-default-export */
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: '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',
})
const openai = new OpenAIApi(configuration)
export default async (req, res) => {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: req.body,
    })
    res.state(200).json({
      code: 0,
      mes: '请求成功',
      data: {
        text: completion.data.choices[0].text,
      },
    })
  } catch (error) {
    res.status(401).json({ data: '不晓得啥错误' })
  }
}

// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
//   }
