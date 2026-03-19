import "../styles/globals.css";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Spinal Cord Assessment",
  description: "Spinal Cord Injury Assessment System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaSans.className}>
        {children}
      </body>
    </html>
  );
}