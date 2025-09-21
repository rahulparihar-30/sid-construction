import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ConstructionIcon from '@mui/icons-material/Construction';
export const services = [
  {
    name: "Civil & Structured Work",
    description:
      "We provide complete architectural and interior design solutions tailored to your needs. From creating detailed layouts and 3D visualizations to obtaining necessary permits, our team ensures your home’s design is both functional and aesthetically pleasing while meeting all legal requirements.",
    image: "architecture-5585737_1280.jpg",
  },
  {
    name: "Renovation & Remodeling",
    description:
      "We provide complete architectural and interior design solutions tailored to your needs. From creating detailed layouts and 3D visualizations to obtaining necessary permits, our team ensures your home’s design is both functional and aesthetically pleasing while meeting all legal requirements.",
    image: "city-5974876_1280.jpg",
  },
  {
    name: "Design & Planning",
    description:
      "We provide complete architectural and interior design solutions tailored to your needs. From creating detailed layouts and 3D visualizations to obtaining necessary permits, our team ensures your home’s design is both functional and aesthetically pleasing while meeting all legal requirements.",
    image: "istockphoto-1035152900-1024x1024.jpg",
  },
];

export const projects = [
  {
    id: 1,
    name: "Skyline Heights",
    location: "Pune, Maharashtra",
    image: "villa-borghese-537944_1280.jpg", // ✅ your local image
    category: "Residential",
  },
  {
    id: 2,
    name: "Ferns",
    location: "Bengaluru, Karnataka",
    image: "villa-3454616_1280.jpg", // ✅ your local image
    category: "Commercial",
  },
  {
    id: 3,
    name: "Green Meadows",
    location: "Mumbai, Maharashtra",
    image: "villa-7303286_1280.jpg", // ✅ your local image
    category: "Residential",
  },
  {
    id: 4,
    name: "Tech Park One",
    location: "Hyderabad, Telangana",
    image: "https://picsum.photos/600/400?random=4", // 🖼 sample placeholder
    category: "Commercial",
  },
  {
    id: 5,
    name: "Sunrise Villas",
    location: "Chennai, Tamil Nadu",
    image: "/villa-2342131_1280.jpg", // ✅ if you have it, else fallback below
    // image: "https://picsum.photos/600/400?random=5", // fallback placeholder
    category: "Residential",
  },
  {
    id: 6,
    name: "MegaMall Central",
    location: "Delhi NCR",
    image: "https://picsum.photos/600/400?random=6", // 🖼 sample placeholder
    category: "Commercial",
  },
  {
    id: 7,
    name: "Steel Plant Expansion",
    location: "Bhilai, Chhattisgarh",
    image: "https://picsum.photos/600/400?random=7", // 🖼 sample placeholder
    category: "Industrial",
  },
  {
    id: 8,
    name: "Metro Rail Project",
    location: "Lucknow, Uttar Pradesh",
    image: "https://picsum.photos/600/400?random=8", // 🖼 sample placeholder
    category: "Infrastructure",
  },
  {
    id: 9,
    name: "Harbor Bridge",
    location: "Kochi, Kerala",
    image: "https://picsum.photos/600/400?random=9", // 🖼 sample placeholder
    category: "Infrastructure",
  },
];



export const reasons = [
  {
    id:1,
    reason:"Proven Track Record",
    description:"Over the years, we have successfully completed a wide range of projects, from elegant residences to large-scale commercial complexes. Each project reflects our ability to adapt to different client needs while maintaining consistent quality and reliability.",
    logo:EmojiEventsIcon,
  },{
    id:2,
    reason:"Innovation and Technology",
    description:"By integrating modern design tools, sustainable building practices, and smart construction techniques, we deliver projects that are not only functional and beautiful but also future-ready.",
    logo:LightbulbIcon
  },{
    id:3,
    reason:"Uncompromising Quality",
    description:"We use only the finest materials and employ skilled craftsmen who take pride in their work. Every stage of construction undergoes strict quality checks to ensure durability, safety, and aesthetics that stand the test of time.",
    logo:ConstructionIcon
  },{
    id:4,
    reason:"On-Time Delivery",
    description:"We understand that time is a critical factor in construction. Through efficient project planning, effective coordination, and streamlined processes, we consistently deliver projects within the agreed timeframe  without cutting corners.",
    logo:AccessTimeFilledIcon
  }
]

export const comments=[
  {
    "id": 1,
    "name": "Aarav Mehta",
    "location": "Mumbai, India",
    "comment": "The team was highly professional and delivered our project on time with outstanding quality. Truly impressed!",
    "pic": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "id": 2,
    "name": "Priya Sharma",
    "location": "Pune, India",
    "comment": "They understood our requirements perfectly and turned our vision into reality. Highly recommend their services!",
    "pic": "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    "id": 3,
    "name": "Rohit Khanna",
    "location": "Bengaluru, India",
    "comment": "Amazing experience! The quality of work and attention to detail were beyond our expectations.",
    "pic": "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    "id": 4,
    "name": "Sneha Patel",
    "location": "Ahmedabad, India",
    "comment": "They not only delivered on time but also suggested innovative ideas that improved the overall design. Great job!",
    "pic": "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    "id": 5,
    "name": "Karan Verma",
    "location": "Delhi, India",
    "comment": "The dedication and professionalism shown by the team are commendable. Would definitely work with them again.",
    "pic": "https://randomuser.me/api/portraits/men/74.jpg"
  }
]

export const quickLinks = [
   {
      name: "Siddharth Groups",
      href: "https://sidharthgroup.in",
    },
    {
      name: "Agritech",
      href: "https://agritech.sidharthgroup.in",
    },
    {
      name: "Finbridge",
      href: "https://finbridgeadvisor.com",
      external: true,
    },
    {
      name: "Mehtagroup",
      href: "https://mehtagroup.in",
      external: true,
    },
    {
      name: "Lalit Films",
      href: "https://latlitfilms.sidharthgroup.in",
    },
    {
      name: "Pharmaceutical",
      href: "sidharthgroup.in/pharmacy",
    },
  ];