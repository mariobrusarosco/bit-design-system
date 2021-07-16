import React from 'react';
import { Button } from '@mariobrusarosco/design_system.ui.button';
console.log("Button ", Button)

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * a text to be rendered in the component.
   */
  text: string
};



export function Card({ text, ...rest }: CardProps) {
  return (
    <div {...rest} style={{ borderRadius: "8px", border: "1px solid red"}}>
      <Button text="hello from Button" />
      {text}
    </div>
  );
}
