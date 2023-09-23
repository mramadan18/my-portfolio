import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 sm:px-20 md:px-32 lg:-h-[690px]">
        <div className="col-span-12 lg:col-span-3 p-4 text-center bg-white rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 lg:col-span-9 bg-white rounded-2xl overflow-hidden dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}
