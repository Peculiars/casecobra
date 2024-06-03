import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc: string
    dark?: boolean
}