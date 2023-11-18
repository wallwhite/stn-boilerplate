export const CHATS_CREATIVITY = {
  low: {
    temperature: 0.7,
    max_tokens: 230,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0.5,
    model: 'gpt-3.5-turbo',
  },
  medium: {
    temperature: 0.7,
    max_tokens: 320,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0.5,
    model: 'gpt-3.5-turbo',
  },
  high: {
    temperature: 0.7,
    max_tokens: 640,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0.5,
    model: 'gpt-3.5-turbo',
  },
  super: {
    model: 'gpt-4',
    max_tokens: 1200,
    temperature: 1.3,
  },
};
