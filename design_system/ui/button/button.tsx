import React from 'react';

export type ButtonProps = {
  text: string;
  loading: boolean;
};

export function Button({ text, loading }: ButtonProps) {
  return (
    <button data-test="ui-button">
      {loading ? '...': text}
    </button>
  );
}

Button.defaultProps = {
  loading: false
}
