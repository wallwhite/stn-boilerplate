export const getBaseURL = (): string => {
  if (typeof window !== 'undefined') {
    return '/api';
  }

  return `${process.env.APP_HOST ?? ''}/api`;
};
