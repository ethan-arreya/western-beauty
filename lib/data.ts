export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  badge?: string;
  description: string;
  sizes?: string[];
  colors?: string[];
  details?: string[];
}

export const categories = [
  { name: "Boots", slug: "boots", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&q=80" },
  { name: "Denim", slug: "denim", image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
  { name: "Leather", slug: "leather", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80" },
  { name: "Home", slug: "home", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80" },
  { name: "Accessories", slug: "accessories", image: "https://images.unsplash.com/photo-1509941943102-10c232535736?w=400&q=80" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Canyon Suede Fringe Jacket",
    price: 298,
    category: "leather",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
    badge: "Bestseller",
    description: "Hand-cut fringe drapes from the yoke of this buttery suede jacket. Crafted from full-grain hide and finished with antique brass snaps.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Saddle", "Cognac", "Smoke"],
    details: ["Full-grain suede", "Hand-cut fringe", "Antique brass hardware", "Fully lined", "Made in the USA"],
  },
  {
    id: "2",
    name: "Prairie Wind Cowboy Boot",
    price: 395,
    category: "boots",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80",
    badge: "New",
    description: "Pointed toe, stacked heel, and intricate floral stitching — every detail of this boot tells a story. Oil-tanned leather for all-day wear.",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    colors: ["Brown", "Black", "Tan"],
    details: ["Oil-tanned leather upper", "Leather insole", "Stacked wooden heel", "Goodyear welt construction", "Leather outsole"],
  },
  {
    id: "3",
    name: "High Noon Crossbody",
    price: 185,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
    description: "Tooled floral leather meets adjustable braided strap in this compact but capable crossbody. Room for the essentials.",
    colors: ["Cognac", "Chestnut"],
    details: ["Vegetable-tanned leather", "Hand-tooled floral pattern", "Adjustable braided strap", "Interior zip pocket", "Magnetic snap closure"],
  },
  {
    id: "4",
    name: "Wrangler Wide-Brim Hat",
    price: 128,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1603251579431-8041402bdeda?w=600&q=80",
    badge: "Fan Favorite",
    description: "Pressed wool felt, 4-inch brim, and a grosgrain ribbon band. The kind of hat that shapes itself to you over time.",
    sizes: ["S/M", "L/XL"],
    colors: ["Natural", "Pecan", "Black"],
    details: ["100% wool felt", "4-inch brim", "Grosgrain ribbon band", "Crushable construction", "Interior sweatband"],
  },
  {
    id: "5",
    name: "Frontier Denim Shirt",
    price: 148,
    originalPrice: 195,
    category: "denim",
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=600&q=80",
    badge: "Sale",
    description: "A heritage-wash chambray shirt with pearl snap buttons. Tuck it in, leave it out — either way it earns its keep.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Mid Wash", "Light Wash", "Dark Wash"],
    details: ["100% cotton chambray", "Pearl snap buttons", "Embroidered yoke detail", "Machine washable", "Regular fit"],
  },
  {
    id: "6",
    name: "Turquoise Concho Earrings",
    price: 68,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    description: "Sterling silver concho settings cradle genuine Sleeping Beauty turquoise stones. Long enough to make a statement.",
    details: ["Sterling silver", "Genuine Sleeping Beauty turquoise", "2.5 inch drop", "Nickel-free", "Handcrafted"],
  },
  {
    id: "7",
    name: "Homestead Throw Blanket",
    price: 215,
    category: "home",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
    badge: "New",
    description: "Woven on traditional looms in a Zapotec stripe pattern. Pure wool, generously sized — the blanket that becomes heirloom.",
    colors: ["Desert", "Sage", "Indigo"],
    details: ["100% Churro wool", "Traditional loom-woven", "60\" x 80\"", "Dry clean recommended", "Made in New Mexico"],
  },
  {
    id: "8",
    name: "Lasso Leather Belt",
    price: 95,
    category: "leather",
    image: "https://images.unsplash.com/photo-1509941943102-10c232535736?w=600&q=80",
    description: "One-and-a-half inch wide vegetable-tanned belt with a cast brass longhorn buckle. Will outlast any pair of jeans you put it through.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Natural Tan", "Mahogany", "Black"],
    details: ["Vegetable-tanned leather", "Cast brass longhorn buckle", "1.5\" wide", "Single-prong design", "Stitched edges"],
  },
];

export const curatedFavorites = products.filter((p) =>
  ["1", "2", "3", "4"].includes(p.id)
);
