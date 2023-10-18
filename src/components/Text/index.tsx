'use client';
import React, { ReactNode, useEffect } from 'react';

export const Text = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    console.log('Useeffect text compo');
  });
  return <h1>{children}</h1>;
};
