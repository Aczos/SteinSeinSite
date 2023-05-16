import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "300",
  subsets: ["greek"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={roboto.className}>
      <body className=" bg-black text-gray-300 max-w-[1600px] mx-auto  ">
        {children}
      </body>
    </html>
  );
}
