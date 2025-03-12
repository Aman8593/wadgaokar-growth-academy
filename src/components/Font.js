import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";

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

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
