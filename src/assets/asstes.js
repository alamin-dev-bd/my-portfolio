import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/profile2.avif'
import { FaProjectDiagram } from 'react-icons/fa'



export const assets = {
    profileImg,
}


export const navMenu = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'capabilities', name: 'Capabilities' },
    { id: 'contact', name: 'Contact' }
]

export const skillsData = [
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Python', 'Postgres', 'Django', 'Rest-Api']
    },
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['React', 'Html', 'Css', 'Tailwindcss']
    },
    {
        icon: FaDesktop,
        title: 'Web',
        technologies: ['Nginx', 'Linux', 'Wsgi', 'Server']
    },
    {
        icon: FaCode ,
        title: 'DevOps',
        technologies: ['Linux', 'Git', 'Github', 'Docker', 'Jenkins', 'CI/CD']
    },
    {
        icon: FaMobile,
        title: 'Mobile',
        technologies: ['React Native', 'Android', 'Flutter', 'Java']
    },
]


export const projectData = [
  {
    title: "TaskFlow",
    description: "A full-stack task management app with user auth, real-time updates, and role-based access control.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop&q=60",
    tech: ["React", "Django", "DRF", "PostgreSQL", "Tailwind"]
  },
  {
    title: "ShopKart",
    description: "E-commerce platform with product management, cart system, order tracking, and secure payments.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=60",
    tech: ["React", "Django", "REST API", "PostgreSQL", "Tailwind"]
  },
  {
    title: "DevBlog",
    description: "A blogging platform where users can create, edit, and publish posts with rich text editor and comments.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60",
    tech: ["React", "Django", "DRF", "SQLite", "Tailwind"]
  },
  {
    title: "FitTrack",
    description: "Fitness tracking application with workout logs, progress charts, and personalized dashboard.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=60",
    tech: ["React", "Django", "Chart.js", "PostgreSQL", "Tailwind"]
  }
];

export const profileData = [
    {
        icon: FaCode ,
        title: 'Language',
        description : ['Python', 'Django', 'Rest', 'React', 'Tailwindcss']
    },
    {
        icon: FaSchool ,
        title: 'Education',
        description : ['Honours 2nd year Accounting Department ']
    },
    {
        icon: FaProjectDiagram ,
        title: 'Projects',
        description : ['Built more than 5+']
    },
]