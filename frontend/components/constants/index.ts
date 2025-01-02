import {
  Github,
  Facebook,
  Instagram,
  Linkedin,
  Code2,
  Database,
  Wrench,
  Server,
  Flame,
  CloudCog,
} from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiDaisyui,
  SiExpress,
  SiMui,
  SiDotnet,
  SiDevexpress,
  SiRender,
  SiVercel,
  SiCloudflare,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql, GrGraphQl } from "react-icons/gr";

// --------------------Experience-Contants--------------------

export const workExperience = [
  {
    id: 1,
    title: "Desktop App Developer - Smart Logic",
    desc: "Developed desktop applications using C#, SQL, and .NET Framework.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Developer - Smart Logic",
    desc: "Built mobile applications for iOS and Android platforms using Xamarin Framework.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web App Developer - Pinecone Academy",
    desc: "Developed web applications using HTML, CSS, JavaScript, React, Next.js, and Node.js.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

// --------------------Projects-Contants--------------------

export const projects = [
  // {
  //   id: "1",
  //   title: "E-Commerce Platform",
  //   desc: "MERN Stack ашиглан хийсэн бүрэн функционалтай онлайн худалдааны платформ. Redux, Stripe payment, админ хянах самбар",
  //   thumbnail: "/images/projects/bg-software.jpg",
  //   tech: ["React", "Node.js", "MongoDB", "Express"],
  //   link: "#",
  //   color: "from-purple-600 to-blue-500",
  // },
  {
    id: "2",
    title: "Food Delivery",
    desc: "Онлайн хоол хүргэлтын веб сайт. Хоол сагслах, захиалах боломжтой мөн админ талаас захиалгын явцыг хянах боломжтой.",
    thumbnail: "/images/projects/food-delivery.png",
    tech: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Node js",
      "Express js",
      "MongoDB",
      "Cloudinary",
    ],
    link: "https://frontend-woad-seven-44.vercel.app/",
    color: "from-pink-600 to-purple-500",
  },
  {
    id: "3",
    title: "ArtFilm",
    desc: "Кино сонирхогчидод зориулсан кинотой холбоотой мэдээл, нийтлэл, арга хэмжээ гэх мэт мэдээ мэдээлэл авах боломжтой сайт юм.",
    thumbnail: "/images/projects/art-film.png",
    tech: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Node js",
      "Express js",
      "MongoDB",
      "Cloudinary",
    ],
    link: "https://artfilm-dun.vercel.app/",
    color: "from-orange-600 to-pink-500",
  },
  {
    id: "4",
    title: "Meta Blog",
    desc: "14 хоногийн хугацаанд хийсэн жижиг төсөл. Blog-уудаас шүүлт хийх, voice-оор хайлт хийх боломжтой",
    thumbnail: "/images/projects/meta-blog.png",
    tech: ["Next.js", "Javascript", "Daisy UI", "Tailwind"],
    link: "https://meta-blog-ecru.vercel.app/",
    color: "from-green-600 to-teal-500",
  },
  {
    id: "5",
    title: "SmartPOS Mobile Android",
    desc: "Бизнесийн борлуулалт болон агуулахын удирдлагад зориулсан Android аппликэйшн. Хэрэглэгчидтэй харилцах хялбар интерфэйстэй.",
    thumbnail: "/images/projects/smartpos-mobile.webp",
    tech: ["C#", "Xamarin.Android", "MSSQL"],
    link: "https://play.google.com/store/apps/details?id=mn.smartlogic.micropos",
    color: "from-green-600 to-teal-500",
  },
  {
    id: "6",
    title: "SmartPOS Mobile iOS",
    desc: "iOS төхөөрөмжид зориулсан борлуулалт, агуулахын удирдлагын аппликэйшн. Хэрэглэгчийн датаг бодит цагийн горимоор удирдах боломжтой.",
    thumbnail: "/images/projects/smartpos-mobile-ios.png",
    tech: ["C#", "Xamarin.iOS", "MSSQL"],
    link: "https://apps.apple.com/mn/app/smart-pos-mobile/id1573346048",
    color: "from-green-600 to-teal-500",
  },
  {
    id: "7",
    title: "SmartPOS",
    desc: "ЖДҮ-т зориулсан POS систем. Бараа материалын орлого, зарлага, худалдан авалт, борлуулалт, тооллого, тайлангийн цогц шийдэл.",
    thumbnail: "/images/projects/smartpos.png",
    tech: ["C#", ".NET", "ASP.NET", "Devexpress", "WinForms", "MSSQL"],
    link: "https://www.facebook.com/smartposmn/",
    color: "from-green-600 to-teal-500",
  },
];

// --------------------HeroContent-Contants--------------------

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

// --------------------Navbar-Contants--------------------

export const navItems = [
  { id: "about-me", label: "About me" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  {
    Icon: Facebook,
    color: "#1877F2",
    href: "https://www.facebook.com/profile.php?id=61557231467926",
    hoverBg: "hover:bg-[#1877F2]",
  },
  {
    Icon: Instagram,
    color: "#E4405F",
    href: "https://www.instagram.com/obikaze/",
    hoverBg:
      "hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]",
  },
  {
    Icon: Linkedin,
    color: "#0A66C2",
    href: "https://www.linkedin.com/in/otgonbaatar-battumur-bab7032b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    hoverBg: "hover:bg-[#0A66C2]",
  },
  {
    Icon: Github,
    color: "#333",
    href: "https://github.com/Otgonbaatar-B",
    hoverBg: "hover:bg-[#333]",
  },
];

export const socialIconVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.2,
      delay: (socialLinks.length - i) * 0.1,
    },
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      delay: i * 0.1,
    },
  }),
};

// --------------------Skills-Contants--------------------

export const skillsData = [
  {
    title: "Programming Languages & Deploymend Tools",
    icon: Code2,
    items: [
      "JavaScript",
      "TypeScript",
      "C#",
      "Git",
      "Render",
      "Vercel",
      "Cloudflare",
    ],
  },
  {
    title: "Frameworks & Technologies",
    icon: Wrench,
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Daisy UI",
      "Node.js",
      "Material UI",
      ".NET",
      "DevExpress",
    ],
  },
  {
    title: "Databases & APIs",
    icon: Database,
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Express JS",
      "GraphQL",
      "REST",
      "Firebase",
      "AWS",
    ],
  },
];

// --------------------SkillCard-Contants--------------------

export const TECH_ICONS: { [key: string]: React.ElementType } = {
  // Programming Languages
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "C#": TbBrandCSharp,
  Git: FaGithub,
  Render: SiRender,
  Vercel: SiVercel,
  Cloudflare: SiCloudflare,

  // Frameworks & Technologies
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": RiTailwindCssFill,
  "Daisy UI": SiDaisyui,
  "Node.js": FaNodeJs,
  "Material UI": SiMui,
  ".NET": SiDotnet,
  DevExpress: SiDevexpress,

  // Databases & APIs
  MongoDB: SiMongodb,
  PostgreSQL: BiLogoPostgresql,
  MySQL: GrMysql,
  "Express JS": SiExpress,
  GraphQL: GrGraphQl,
  REST: Server,
  Firebase: Flame,
  AWS: CloudCog,
};
