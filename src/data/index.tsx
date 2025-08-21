import { Key, Mail, MessageCircle, Search, ShoppingCart, User } from "lucide-react";

export const brands = [
  {
    id: 1,
    name: "Chanel",
    icon: "C̄C̄",
    description: "Elegancia francesa desde 1910",
    signature: "No. 5, Coco Mademoiselle",
    colors: {
      primary: "0 0% 8%", // Negro elegante Chanel
      secondary: "0 0% 95%", // Blanco perla
      accent: "45 90% 55%" // Dorado elegante
    },
    gradient: "linear-gradient(135deg, hsl(0, 0%, 8%) 0%, hsl(0, 0%, 18%) 100%)"
  },
  {
    id: 2,
    name: "Dior",
    icon: "DIOR",
    description: "Lujo y sofisticación parisina",
    signature: "Sauvage, J'adore, Miss Dior",
    colors: {
      primary: "0 0% 97%", // Blanco premium Dior
      secondary: "210 15% 85%", // Plata premium
      accent: "220 30% 25%" // Azul marino elegante
    },
    gradient: "linear-gradient(135deg, hsl(0, 0%, 97%) 0%, hsl(210, 20%, 92%) 100%)"
  },
  {
    id: 3,
    name: "Versace",
    icon: "⚡",
    description: "Glamour italiano inconfundible",
    signature: "Bright Crystal, Eros",
    colors: {
      primary: "45 95% 48%", // Dorado Versace auténtico
      secondary: "0 0% 8%", // Negro profundo
      accent: "0 0% 95%" // Blanco elegante
    },
    gradient: "linear-gradient(135deg, hsl(45, 95%, 48%) 0%, hsl(45, 85%, 38%) 100%)"
  },
  {
    id: 4,
    name: "Tom Ford",
    icon: "TF",
    description: "Modernidad y elegancia contemporánea",
    signature: "Black Orchid, Tobacco Vanille",
    colors: {
      primary: "0 0% 3%", // Negro profundo Tom Ford
      secondary: "45 85% 45%", // Dorado rico
      accent: "0 0% 97%" // Blanco puro
    },
    gradient: "linear-gradient(135deg, hsl(0, 0%, 3%) 0%, hsl(0, 0%, 12%) 100%)"
  },
  {
    id: 5,
    name: "Armani",
    icon: "GA",
    description: "Refinamiento italiano",
    signature: "Acqua di Gio, Code",
    colors: {
      primary: "220 55% 18%", // Azul marino Armani
      secondary: "220 25% 85%", // Azul claro elegante
      accent: "0 0% 95%" // Blanco premium
    },
    gradient: "linear-gradient(135deg, hsl(220, 55%, 18%) 0%, hsl(220, 45%, 28%) 100%)"
  },
  {
    id: 6,
    name: "Hermès",
    icon: "H",
    description: "Artesanía francesa de lujo",
    signature: "Terre d'Hermès, Twilly",
    colors: {
      primary: "20 95% 45%", // Naranja Hermès icónico
      secondary: "20 85% 25%", // Naranja profundo
      accent: "0 0% 95%" // Blanco elegante
    },
    gradient: "linear-gradient(135deg, hsl(20, 95%, 45%) 0%, hsl(20, 85%, 35%) 100%)"
  },
  {
    id: 7,
    name: "Creed",
    icon: "⚔️",
    description: "Perfumería artesanal británica",
    signature: "Aventus, Silver Mountain",
    colors: {
      primary: "140 45% 25%", // Verde británico elegante
      secondary: "140 25% 15%", // Verde profundo
      accent: "45 85% 48%" // Dorado refinado
    },
    gradient: "linear-gradient(135deg, hsl(140, 45%, 25%) 0%, hsl(140, 35%, 20%) 100%)"
  },
  {
    id: 8,
    name: "Yves Saint Laurent",
    icon: "YSL",
    description: "Vanguardia francesa",
    signature: "Black Opium, Libre",
    colors: {
      primary: "0 0% 5%", // Negro YSL icónico
      secondary: "45 85% 45%", // Dorado YSL
      accent: "0 0% 95%" // Blanco elegante
    },
    gradient: "linear-gradient(135deg, hsl(0, 0%, 5%) 0%, hsl(45, 75%, 25%) 100%)"
  },
  {
    id: 9,
    name: "Prada",
    icon: "△",
    description: "Innovación italiana de lujo",
    signature: "Luna Rossa, Candy",
    colors: {
      primary: "0 0% 8%", // Negro Prada
      secondary: "0 0% 88%", // Plata Prada
      accent: "0 85% 45%" // Rojo Prada
    },
    gradient: "linear-gradient(135deg, hsl(0, 0%, 8%) 0%, hsl(0, 0%, 22%) 100%)"
  },
  {
    id: 10,
    name: "Gucci",
    icon: "🐉",
    description: "Excentricidad italiana moderna",
    signature: "Bloom, Guilty",
    colors: {
      primary: "140 65% 22%", // Verde Gucci auténtico
      secondary: "0 85% 38%", // Rojo Gucci
      accent: "45 85% 48%" // Dorado Gucci
    },
    gradient: "linear-gradient(135deg, hsl(140, 65%, 22%) 0%, hsl(0, 85%, 38%) 100%)"
  },
  {
    id: 11,
    name: "Carolina Herrera",
    icon: "CH",
    description: "Elegancia venezolana",
    signature: "Good Girl, 212",
    colors: {
      primary: "320 85% 88%", // Rosa elegante
      secondary: "320 45% 18%", // Rosa profundo
      accent: "45 85% 48%" // Dorado refinado
    },
    gradient: "linear-gradient(135deg, hsl(320, 85%, 88%) 0%, hsl(320, 55%, 75%) 100%)"
  },
  {
    id: 12,
    name: "Dolce & Gabbana",
    icon: "D&G",
    description: "Pasión siciliana",
    signature: "Light Blue, The One",
    colors: {
      primary: "0 0% 8%", // Negro elegante
      secondary: "45 85% 45%", // Dorado siciliano
      accent: "200 85% 45%" // Azul mediterráneo
    },
    gradient: "linear-gradient(135deg, hsl(0, 0%, 8%) 0%, hsl(45, 75%, 28%) 100%)"
  }
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
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=600&fit=crop",
    cta: "Explorar Colección"
  },
  {
    id: 2,
    title: "Quiénes Somos",
    subtitle: "Expertos en fragancias con más de 10 años de experiencia",
    description: "Somos una boutique especializada en perfumes de alta gama, comprometidos con brindar una experiencia de compra única y personalizada.",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&h=600&fit=crop",
    cta: "Nuestra Historia"
  },
  {
    id: 3,
    title: "Qué Ofrecemos",
    subtitle: "Servicio personalizado y asesoría experta",
    description: "Brindamos consultoría especializada para encontrar la fragancia perfecta, con servicio de apartado y seguimiento personalizado de pedidos.",
    image: "https://images.unsplash.com/photo-1594736797933-d0a8ba28a0ad?w=800&h=600&fit=crop",
    cta: "Nuestros Servicios"
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
    phone: "+52 55 1234 5678",
    email: "info@essenceboutique.mx",
    whatsapp: "+52 55 1234 5678",
    address: "Av. Presidente Masaryk 123, Polanco, CDMX"
  },
  social: {
    instagram: "@essenceboutique",
    facebook: "Essence Boutique MX",
    tiktok: "@essenceboutique"
  }
};