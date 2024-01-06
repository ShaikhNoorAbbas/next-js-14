import '@/app/ui/global.css';
import { montserratFont } from "@/app/ui/fonts/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={`${montserratFont.className} antialiased`}>
          {children}
        </main>
      </body>
    </html>
  );
} 