import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Components/MainPageComponents/Header";
import BannerSection from "@/Components/MainPageComponents/BannerSection";

export default function Home() {
  return (
   <>
    <Header />
    <BannerSection />
   </>
  );
}
