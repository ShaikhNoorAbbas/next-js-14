import { Montserrat, Lusitana } from "next/font/google";

export const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
