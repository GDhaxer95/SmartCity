import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <AuthProvider>
          <Navbar />
          <main className="container mx-auto p-4">{children}</main>
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
