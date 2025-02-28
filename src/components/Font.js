import { Geist, Geist_Mono, Montserrat } from "next/font/google";

export const geistSans = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Adjust weights as needed
});
