import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Nexjs dashboard</title>
      <meta name="description" content="This is a example of a nextjs dashboard" />
      <meta name="keywords" content="keyword1, keyword2, keyword3" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
