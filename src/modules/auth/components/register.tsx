'use client';

import React, { FC } from 'react';
import { AuthRegisterForm } from '@stn-ui/forms';
import { useAuthorize } from '../hooks';

export const Register: FC = () => {
  const { handleFormSubmit } = useAuthorize('register');

  return <AuthRegisterForm onSubmit={handleFormSubmit} />;
};
