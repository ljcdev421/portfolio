import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

//Component
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], 
  weight:["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Caleb Portfolio",
  description: "Plateforme présentant mes compétences, formations et projets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/>
        <PageTransition>{children}</PageTransition>
        
      </body>
    </html>
  );
}
