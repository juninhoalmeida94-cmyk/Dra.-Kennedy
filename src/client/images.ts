import heroMain from "@/assets/hero/main.png";
import aboutPortrait from "@/assets/hero/about.webp";
import galleryPortrait1 from "@/assets/gallery/portrait-1.webp";
import galleryPortrait2 from "@/assets/gallery/portrait-2.webp";
import galleryPortraitLight from "@/assets/gallery/portrait-light.webp";
import galleryProfile from "@/assets/gallery/profile.png";
import galleryResult1 from "@/assets/gallery/result-1.jpg";
import resultVideo1 from "@/assets/videos/result-1.mp4";
import resultVideo2 from "@/assets/videos/result-2.mp4";
import resultVideo3 from "@/assets/videos/result-3.mp4";
import whatsappIcon from "@/assets/icons/whatsapp.png";
import instagramIcon from "@/assets/icons/instagram.png";
import companyLogo from "@/assets/logo/company.png";

export const images = {
  logo: companyLogo,
  hero: {
    main: heroMain,
    about: aboutPortrait,
  },
  gallery: {
    portrait1: galleryPortrait1,
    portrait2: galleryPortrait2,
    portraitLight: galleryPortraitLight,
    profile: galleryProfile,
    result1: galleryResult1,
  },
  videos: {
    result1: resultVideo1,
    result2: resultVideo2,
    result3: resultVideo3,
  },
  icons: {
    whatsapp: whatsappIcon,
    instagram: instagramIcon,
  },
} as const;
