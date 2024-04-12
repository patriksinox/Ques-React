import {   Petrona , DM_Sans  } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";


const petrona = Petrona({
  subsets: ["latin-ext"],
  variable: '--font-petrona',
})

const dmSans = DM_Sans({
  subsets: ["latin-ext"],
 
})

export const metadata = {
  title: "Ques React | Patrik Šubjak",
  description: "Tento projekt som dostal ako skušobnú úlohu od firmy Ques na pozíciu React Developera.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk" className={`${petrona.variable}`}>
      <body className={dmSans.className}>
        <Header/>
        {children}
        <Footer/></body>
    </html>
  );
}