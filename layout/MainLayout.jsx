import Header from "./Header";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});

const MainLayout = ({ children }) => {
  return (
    <div
      className={`${nunito.variable} font-sans bg-white-primary p-2 lg:p-6 `}
    >
      <Header />
      <main className="min-h-screen w-full max-w-4xl mx-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
