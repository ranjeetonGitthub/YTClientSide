import Image from "next/image";
import {VideoCard} from "../components/VideoCard";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
     
     <VideoCard 
     title= {"How to learn coding in 30 days | 30 days plan | Code with ranjeet"}
     image = {"photo.png"}
     thumbImage={"thumb.jpg"}
     author = { "Ranjeet yadav "}
     views ={"46 millions"}
     timestamp = {"4 days ago"}
     
      ></VideoCard>


    </div>
  );
}
