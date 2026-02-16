import "./globals.css";
import localFont from 'next/font/local';

export const myCustomFont = localFont({
  src: '/fonts/KaBlam.ttf',
  display: 'swap',
  variable: '--font-kablam',
});

export const poppins = localFont({
  src: '/fonts/PoppinsRegular.ttf',
  display: 'swap',
  variable: '--font-poppins',
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
