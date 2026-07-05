// src/data/short-links.ts
export const shortLinks = {
  linkedin: "https://www.linkedin.com/in/antonlnz",
  github: "https://github.com/antonlnz",
  x: "https://x.com/antonlnz",
  twitter: "https://x.com/antonlnz",
  certificates: "https://drive.google.com/drive/folders/1ucMTDYGI_Hhc5FpU8qxuKrPvQCgpCSUE?usp=share_link"
} as const;

export type ShortLinkKey = keyof typeof shortLinks;