import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="max-w-[110rem] mx-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
