import { Key, Mail, MessageCircle, Search, ShoppingCart, User } from "lucide-react";
import { 
  GiDelicatePerfume, GiPerfumeBottle, GiHeartBottle, GiFragrance, GiSpiralBloom 
} from "react-icons/gi";
import { IoDiamond, IoSparklesOutline } from "react-icons/io5";
import { PiFlowerLight, PiFlowerTulip } from "react-icons/pi";
import { FaLeaf, FaCrown } from "react-icons/fa";
import { FaSprayCanSparkles } from "react-icons/fa6";
import { SiDior } from "react-icons/si";
import { TbPerfume } from "react-icons/tb";

export const perfumes = [
  { id: 1, name: "Carolina Herrera", icon: <GiHeartBottle />, description: "Elegancia venezolana", signature: "Good Girl, 212", gradient: "bg-gradient-to-br from-pink-400 to-pink-600" },
  { id: 2, name: "Lancome", icon: <GiFragrance />, description: "Lujo francés", signature: "La Vie Est Belle, Tresor", gradient: "bg-gradient-to-br from-pink-300 to-pink-500" },
  { id: 3, name: "Dior", icon: <SiDior />, description: "Lujo y sofisticación parisina", signature: "Sauvage, J'adore, Miss Dior", gradient: "bg-gradient-to-br from-zinc-800 to-gray-600" },
  { id: 4, name: "Dolce & Gabbana", icon: <GiPerfumeBottle />, description: "Pasión siciliana", signature: "Light Blue, The One", gradient: "bg-gradient-to-br from-neutral-900 to-yellow-700" },
  { id: 5, name: "Tom Ford", icon: <FaSprayCanSparkles />, description: "Modernidad y elegancia contemporánea", signature: "Black Orchid, Tobacco Vanille", gradient: "bg-gradient-to-br from-neutral-950 to-neutral-800" },
  { id: 6, name: "Guerlain", icon: <GiSpiralBloom />, description: "Artesanía francesa de lujo", signature: "Shalimar, Mon Guerlain", gradient: "bg-gradient-to-br from-yellow-300 to-yellow-500" },
  { id: 7, name: "Marc Jacobs", icon: <TbPerfume />, description: "Glamour moderno", signature: "Daisy, Decadence", gradient: "bg-gradient-to-br from-yellow-400 to-yellow-600" },
  { id: 8, name: "Jean Paul Gaultier", icon: <GiPerfumeBottle />, description: "Excentricidad francesa", signature: "Le Male, Classique", gradient: "bg-gradient-to-br from-blue-200 to-blue-400" },
  { id: 9, name: "Saint Laurent", icon: <FaCrown />, description: "Vanguardia francesa", signature: "Black Opium, Libre", gradient: "bg-gradient-to-br from-neutral-950 to-yellow-800" },
  { id: 10, name: "Moschino", icon: <IoSparklesOutline />, description: "Innovación italiana", signature: "Toy 2, Cheap & Chic", gradient: "bg-gradient-to-br from-pink-300 to-pink-500" },
  { id: 11, name: "Versace", icon: <IoDiamond />, description: "Glamour italiano inconfundible", signature: "Bright Crystal, Eros", gradient: "bg-gradient-to-br from-yellow-400 to-yellow-600" },
  { id: 12, name: "Valentino", icon: <PiFlowerTulip />, description: "Estilo italiano elegante", signature: "Valentina, Donna", gradient: "bg-gradient-to-br from-red-400 to-red-600" },
  { id: 13, name: "Prada", icon: <GiDelicatePerfume />, description: "Innovación italiana de lujo", signature: "Luna Rossa, Candy", gradient: "bg-gradient-to-br from-neutral-900 to-neutral-700" },
  { id: 14, name: "Calvin Klein", icon: <GiPerfumeBottle />, description: "Minimalismo estadounidense", signature: "CK One, Eternity", gradient: "bg-gradient-to-br from-gray-400 to-gray-600" },
  { id: 15, name: "Ariana Grande", icon: <PiFlowerLight />, description: "Pop y glamour", signature: "Cloud, Thank U Next", gradient: "bg-gradient-to-br from-pink-300 to-pink-500" },
  { id: 16, name: "Giorgio Armani", icon: <GiPerfumeBottle />, description: "Lujo italiano", signature: "Acqua di Gio, Si", gradient: "bg-gradient-to-br from-blue-950 to-blue-800" },
  { id: 17, name: "Paco Rabanne", icon: <GiFragrance />, description: "Diseño audaz", signature: "1 Million, Lady Million", gradient: "bg-gradient-to-br from-yellow-300 to-yellow-600" },
  { id: 18, name: "DKNY", icon: <FaLeaf />, description: "Frescura urbana", signature: "Be Delicious, Fresh Blossom", gradient: "bg-gradient-to-br from-green-400 to-green-600" },
  { id: 19, name: "Coach", icon: <GiHeartBottle />, description: "Elegancia americana", signature: "Coach Dreams, Floral", gradient: "bg-gradient-to-br from-gray-400 to-gray-600" },
  { id: 20, name: "Nautica", icon: <FaLeaf />, description: "Frescura marina", signature: "Blue, Voyage", gradient: "bg-gradient-to-br from-blue-300 to-blue-500" },
  { id: 21, name: "Gucci", icon: <GiPerfumeBottle />, description: "Excentricidad italiana moderna", signature: "Bloom, Guilty", gradient: "bg-gradient-to-br from-green-800 to-red-700" },
  { id: 22, name: "Burberry", icon: <GiPerfumeBottle />, description: "Clásico británico", signature: "My Burberry, Her", gradient: "bg-gradient-to-br from-yellow-300 to-yellow-600" },
  { id: 23, name: "Hugo Boss", icon: <GiDelicatePerfume />, description: "Estilo alemán", signature: "Boss Bottled, Nuit", gradient: "bg-gradient-to-br from-gray-700 to-gray-900" },
  { id: 24, name: "Lacoste", icon: <GiPerfumeBottle />, description: "Deportivo y fresco", signature: "L.12.12, Eau de Lacoste", gradient: "bg-gradient-to-br from-green-400 to-green-600" },
  { id: 25, name: "Givenchy", icon: <GiDelicatePerfume />, description: "Elegancia francesa", signature: "Irresistible, Gentlemen Only", gradient: "bg-gradient-to-br from-gray-800 to-gray-900" },
  { id: 26, name: "Tommy Hilfiger", icon: <GiFragrance />, description: "Clásico americano", signature: "Tommy, Tommy Girl", gradient: "bg-gradient-to-br from-red-500 to-blue-500" },
  { id: 27, name: "Ralph Lauren", icon: <GiPerfumeBottle />, description: "Estilo elegante", signature: "Romance, Polo Blue", gradient: "bg-gradient-to-br from-blue-700 to-blue-900" },
  { id: 28, name: "Lattafa", icon: <TbPerfume />, description: "Perfumes árabes de lujo", signature: "Raghba, Ana Abiyedh", gradient: "bg-gradient-to-br from-yellow-400 to-yellow-600" }
];


 export const steps = [
    {
      icon: <MessageCircle className="w-10 h-10 stroke-2 text-pink-500 hover:text-pink-600 transition-colors duration-500" />,
      title: "Contacto Inicial",
      description: "El cliente nos contacta vía WhatsApp o llamada telefónica preguntando por perfumes disponibles."
    },
    {
      icon: <Search className="w-10 h-10 stroke-2 text-yellow-400 hover:text-yellow-500 transition-colors duration-500" />,
      title: "Consulta con Proveedor",
      description: "Nuestra administradora verifica disponibilidad y precios directamente con nuestros proveedores."
    },
    {
      icon: <ShoppingCart className="w-10 h-10 stroke-2 text-green-500 hover:text-green-600 transition-colors duration-500" />,
      title: "Confirmación del Pedido",
      description: "Una vez confirmado precio y disponibilidad, el cliente procede con su pedido y proporciona sus datos."
    },
    {
      icon: <Mail className="w-10 h-10 stroke-2 text-indigo-500 hover:text-indigo-600 transition-colors duration-500" />,
      title: "Registro en Plataforma",
      description: "Creamos el perfil del cliente y le enviamos un correo con acceso seguro a nuestra plataforma."
    },
    {
      icon: <Key className="w-10 h-10 stroke-2 text-red-500 hover:text-red-600 transition-colors duration-500" />,
      title: "Configuración de Cuenta",
      description: "El cliente accede mediante un enlace seguro y establece su contraseña personal."
    },
    {
      icon: <User className="w-10 h-10 stroke-2 text-cyan-500 hover:text-cyan-600 transition-colors duration-500" />,
      title: "Acceso Completo",
      description: "Ya puede iniciar sesión para ver detalles de sus pedidos, historial y estado de pagos."
    }
  ];

export const heroSlides = [
  {
    id: 1,
    title: "Fragancias de Lujo",
    subtitle: "Descubre los perfumes más exclusivos del mundo",
    description: "Ofrecemos una selección curada de las mejores fragancias de marcas prestigiosas, garantizando autenticidad y calidad premium.",
    image: "hero-1.jpg",
  },
  {
    id: 2,
    title: "Quiénes Somos",
    subtitle: "Expertos en fragancias con más de 10 años de experiencia",
    description: "Somos una boutique especializada en perfumes de alta gama, comprometidos con brindar una experiencia de compra única y personalizada.",
    image: "/hero-2.jpg",
  },
  {
    id: 3,
    title: "Qué Ofrecemos",
    subtitle: "Servicio personalizado y asesoría experta",
    image: "/hero-3.jpg",
  }
];

export const features = [
  {
    icon: "🔒",
    title: "Datos Seguros",
    description: "Protegemos tu información personal con los más altos estándares de seguridad"
  },
  {
    icon: "✨",
    title: "Autenticidad Garantizada",
    description: "Todos nuestros productos son 100% originales y verificados"
  },
  {
    icon: "🚚",
    title: "Entrega Confiable",
    description: "Seguimiento en tiempo real de tus pedidos hasta tu puerta"
  },
  {
    icon: "💎",
    title: "Experiencia Premium",
    description: "Atención personalizada y asesoría experta en fragancias"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "María González",
    rating: 5,
    comment: "Excelente servicio, encontré el perfume perfecto para mi ocasión especial. La atención fue increíble.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b882?w=60&h=60&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    rating: 5,
    comment: "La calidad de los productos es excepcional y el seguimiento del pedido muy detallado.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Ana Martínez",
    rating: 5,
    comment: "Me encanta la variedad de marcas que manejan y lo fácil que es hacer seguimiento a mis pedidos.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  }
];

// Datos de ejemplo para pedidos
export const sampleOrders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "Entregado",
    total: 2500.00,
    items: [
      {
        id: 1,
        name: "Chanel No. 5 EDP 100ml",
        brand: "Chanel",
        price: 2500.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=100&h=100&fit=crop"
      }
    ],
    payments: [
      {
        id: 1,
        method: "Transferencia Bancaria",
        amount: 2500.00,
        date: "2024-01-15",
        status: "Confirmado",
        reference: "TRF-20240115-001"
      }
    ],
    shipping: {
      address: "Av. Principal 123, Col. Centro, CDMX",
      trackingNumber: "TRK-001-2024"
    }
  },
  {
    id: "ORD-002",
    date: "2024-01-20",
    status: "En Proceso",
    total: 4200.00,
    items: [
      {
        id: 2,
        name: "Dior Sauvage EDT 100ml",
        brand: "Dior",
        price: 2100.00,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=100&h=100&fit=crop"
      }
    ],
    payments: [
      {
        id: 2,
        method: "Depósito Bancario",
        amount: 4200.00,
        date: "2024-01-20",
        status: "Pendiente Verificación",
        reference: "DEP-20240120-002"
      }
    ],
    shipping: {
      address: "Calle Secundaria 456, Col. Roma, CDMX",
      trackingNumber: "TRK-002-2024"
    }
  },
  {
    id: "ORD-003",
    date: "2024-01-25",
    status: "Confirmado",
    total: 3800.00,
    items: [
      {
        id: 3,
        name: "Tom Ford Black Orchid EDP 100ml",
        brand: "Tom Ford",
        price: 3800.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1594736797933-d0a8ba28a0ad?w=100&h=100&fit=crop"
      }
    ],
    payments: [
      {
        id: 3,
        method: "Efectivo (Personal)",
        amount: 3800.00,
        date: "2024-01-25",
        status: "Programado",
        reference: "EFE-20240125-003"
      }
    ],
    shipping: {
      address: "Blvd. Reforma 789, Col. Juárez, CDMX",
      trackingNumber: "TRK-003-2024"
    }
  }
];

export const paymentMethods = [
  {
    id: "transfer",
    name: "Transferencia Bancaria",
    description: "BBVA Bancomer: 0123456789",
    icon: "💳"
  },
  {
    id: "deposit",
    name: "Depósito Bancario",
    description: "Envía tu comprobante por WhatsApp",
    icon: "🏦"
  },
  {
    id: "cash",
    name: "Efectivo Personal",
    description: "Pago en persona al recibir el producto",
    icon: "💵"
  }
];

export const companyInfo = {
  name: "PerfumeXpress",
  description: "Tu destino para las fragancias más exclusivas del mundo",
  mission: "Brindar acceso a fragancias de lujo auténticas con un servicio personalizado excepcional",
  vision: "Ser la boutique de perfumes más confiable y reconocida en México",
  values: [
    "Autenticidad garantizada",
    "Atención personalizada",
    "Experiencia de lujo",
    "Confianza y transparencia"
  ],
  contact: {
    phone: "+523787313902",
    email: "info@essenceboutique.mx",
    whatsapp: "+523787313902",
    address: "Av. Presidente Masaryk 123, Polanco, CDMX"
  },
  social: {
    instagram: "@essenceboutique",
    facebook: "Essence Boutique MX",
    tiktok: "@essenceboutique"
  }
};

export const customerOrders = {
  "data": [
    {
      "id": 1,
      "is_paid": true,
      "total": "1500.00",
      "amount_paid": "1500.00",
      "createdAt": "2025-09-01T10:15:00.000Z",
      "updatedAt": "2025-09-01T10:15:00.000Z",
      "order_status": { "name": "Completado" }
    },
    {
      "id": 2,
      "is_paid": false,
      "total": "4200.00",
      "amount_paid": "0.00",
      "createdAt": "2025-09-02T12:45:00.000Z",
      "updatedAt": "2025-09-02T12:45:00.000Z",
      "order_status": { "name": "Pendiente" }
    },
    {
      "id": 3,
      "is_paid": true,
      "total": "2500.00",
      "amount_paid": "2500.00",
      "createdAt": "2025-09-02T18:30:00.000Z",
      "updatedAt": "2025-09-02T18:30:00.000Z",
      "order_status": { "name": "Completado" }
    },
    {
      "id": 4,
      "is_paid": false,
      "total": "3600.00",
      "amount_paid": "1200.00",
      "createdAt": "2025-09-03T09:20:00.000Z",
      "updatedAt": "2025-09-03T09:20:00.000Z",
      "order_status": { "name": "Pendiente" }
    },
    {
      "id": 5,
      "is_paid": true,
      "total": "5100.00",
      "amount_paid": "5100.00",
      "createdAt": "2025-09-03T14:10:00.000Z",
      "updatedAt": "2025-09-03T14:10:00.000Z",
      "order_status": { "name": "Completado" }
    },
    {
      "id": 6,
      "is_paid": false,
      "total": "2100.00",
      "amount_paid": "0.00",
      "createdAt": "2025-09-04T11:05:00.000Z",
      "updatedAt": "2025-09-04T11:05:00.000Z",
      "order_status": { "name": "Pendiente" }
    },
    {
      "id": 7,
      "is_paid": true,
      "total": "3300.00",
      "amount_paid": "3300.00",
      "createdAt": "2025-09-04T19:45:00.000Z",
      "updatedAt": "2025-09-04T19:45:00.000Z",
      "order_status": { "name": "Completado" }
    },
    {
      "id": 8,
      "is_paid": false,
      "total": "2700.00",
      "amount_paid": "0.00",
      "createdAt": "2025-09-05T08:00:00.000Z",
      "updatedAt": "2025-09-05T08:00:00.000Z",
      "order_status": { "name": "Pendiente" }
    },
    {
      "id": 9,
      "is_paid": true,
      "total": "4800.00",
      "amount_paid": "4800.00",
      "createdAt": "2025-09-05T15:25:00.000Z",
      "updatedAt": "2025-09-05T15:25:00.000Z",
      "order_status": { "name": "Completado" }
    },
    {
      "id": 10,
      "is_paid": false,
      "total": "1900.00",
      "amount_paid": "0.00",
      "createdAt": "2025-09-06T09:10:00.000Z",
      "updatedAt": "2025-09-06T09:10:00.000Z",
      "order_status": { "name": "Pendiente" }
    },
    {
      "id": 11,
      "is_paid": true,
      "total": "2500.00",
      "amount_paid": "2500.00",
      "createdAt": "2025-09-06T16:40:00.000Z",
      "updatedAt": "2025-09-06T16:40:00.000Z",
      "order_status": { "name": "Completado" }
    },
    {
      "id": 12,
      "is_paid": false,
      "total": "3200.00",
      "amount_paid": "800.00",
      "createdAt": "2025-09-07T11:15:00.000Z",
      "updatedAt": "2025-09-07T11:15:00.000Z",
      "order_status": { "name": "Pendiente" }
    },
    {
      "id": 13,
      "is_paid": true,
      "total": "6100.00",
      "amount_paid": "6100.00",
      "createdAt": "2025-09-07T20:00:00.000Z",
      "updatedAt": "2025-09-07T20:00:00.000Z",
      "order_status": { "name": "Completado" }
    },
    {
      "id": 14,
      "is_paid": false,
      "total": "2300.00",
      "amount_paid": "0.00",
      "createdAt": "2025-09-08T08:30:00.000Z",
      "updatedAt": "2025-09-08T08:30:00.000Z",
      "order_status": { "name": "Pendiente" }
    },
    {
      "id": 15,
      "is_paid": true,
      "total": "4400.00",
      "amount_paid": "4400.00",
      "createdAt": "2025-09-08T18:15:00.000Z",
      "updatedAt": "2025-09-08T18:15:00.000Z",
      "order_status": { "name": "Completado" }
    },
    {
      "id": 16,
      "is_paid": false,
      "total": "2800.00",
      "amount_paid": "0.00",
      "createdAt": "2025-09-09T10:20:00.000Z",
      "updatedAt": "2025-09-09T10:20:00.000Z",
      "order_status": { "name": "Pendiente" }
    },
    {
      "id": 17,
      "is_paid": true,
      "total": "3700.00",
      "amount_paid": "3700.00",
      "createdAt": "2025-09-09T17:45:00.000Z",
      "updatedAt": "2025-09-09T17:45:00.000Z",
      "order_status": { "name": "Completado" }
    },
    {
      "id": 18,
      "is_paid": false,
      "total": "2950.00",
      "amount_paid": "0.00",
      "createdAt": "2025-09-10T09:55:00.000Z",
      "updatedAt": "2025-09-10T09:55:00.000Z",
      "order_status": { "name": "Pendiente" }
    },
    {
      "id": 19,
      "is_paid": true,
      "total": "5200.00",
      "amount_paid": "5200.00",
      "createdAt": "2025-09-10T18:25:00.000Z",
      "updatedAt": "2025-09-10T18:25:00.000Z",
      "order_status": { "name": "Completado" }
    },
    {
      "id": 20,
      "is_paid": false,
      "total": "3100.00",
      "amount_paid": "0.00",
      "createdAt": "2025-09-11T11:10:00.000Z",
      "updatedAt": "2025-09-11T11:10:00.000Z",
      "order_status": { "name": "Pendiente" }
    }
  ],
  "meta": {
    "total": 20,
    "per_page": 10,
    "current_page": 1,
    "last_page": 2,
    "from": 1,
    "to": 10
  }
}
