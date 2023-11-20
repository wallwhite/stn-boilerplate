'use client';

import React, { FC } from 'react';
import { AuthLoginForm } from '@stn-ui/forms';
import { useAuthorize } from '../hooks';

export const Login: FC = () => {
  const { handleFormSubmit } = useAuthorize('login');

  return <AuthLoginForm onSubmit={handleFormSubmit} />;
};
