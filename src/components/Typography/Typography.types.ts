import { ReactNode } from "react";

export type TypographyTypes = 'h1' | 'h2' | 'h3' | 'body-regular' | 'body-semibold';

export default interface TypographyProps {
    type: TypographyTypes;
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'; 
    fontFamily?: 'inter' | 'lilita';
    children: ReactNode;
    className?: string;
}