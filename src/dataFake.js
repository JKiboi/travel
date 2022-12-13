import { v4 as uuidv4 } from "uuid";
import img1 from "./assets/imgs/mt-kenya0.avif";
import img2 from "./assets/imgs/lake-turkana0.avif";
import img3 from "./assets/imgs/lake-nakuru0.avif";
import img4 from "./assets/imgs/amboseli0.avif";
import img5 from "./assets/imgs/ngong-hills0.jpg";
import img6 from "./assets/imgs/tambach0.jpg";
import img7 from "./assets/imgs/subukia0.avif";
import img8 from "./assets/imgs/ziplining0.avif";
import img9 from "./assets/imgs/maasai-mara0.avif";
import img10 from "./assets/imgs/gastronomy0.avif";
import img11 from "./assets/imgs/wellness0.avif";
import img12 from "./assets/imgs/local-living0.avif";
import img13 from "./assets/imgs/default-image-urubamba.jpg";
import imgDefault from "./assets/imgs/default-image.jpg";


const dataTours = [
  {
    id: uuidv4(),
    categories: ["essential", "cultural"],
    imgs: [`${img1}`, `${imgDefault}`, `${img13}`],
    title: "Kenya Adventure Tour",
    slug: "kenya-adventure-tour",
    days: 9,
    nights: 8,
    price: 0,
    information:
      "Kenya is a country in East Africa with a diverse landscape ranging from its vast savannahs to the snow-capped Mount Kenya. It is home to a wide variety of wildlife, including lions, elephants, and giraffes. The capital city, Nairobi, is a bustling metropolis with a rich history and culture. Join us on this adventure tour of Kenya and explore its stunning landscapes, vibrant cities, and diverse wildlife.",
    includes: {
      include01: "08 nights included",
      include02: "Comfortable accommodation in 3-star hotels",
      include03: "Tourist transportation",
    },
    country: ["kenya"],
    level: ["moderate"],
    itinerary: [
      {
        id: uuidv4(),
        day: 1,
        tramo: "Arrival in Nairobi",
        description:
          "Welcome to Nairobi, the capital and largest city of Kenya. Upon arrival at the airport, you will be greeted by one of our representatives and transferred to your hotel. Spend the rest of the day at leisure, exploring the city on your own or relaxing in your hotel. Nairobi is a vibrant city with a rich history and culture. It is home to a variety of attractions, including the Nairobi National Museum, the Bomas of Kenya, and the Giraffe Centre. In the evening, you can try some of the local cuisine at one of the city's many restaurants.",
      },
      {
        id: uuidv4(),
        day: 2,
        tramo: "Nairobi - Lake Turkana",
        description:
          "Today we will embark on a journey to Lake Turkana, also known as the Jade Sea. Lake Turkana is the largest desert lake in the world and is home to a wide variety of flora and fauna. On the way, we will stop at the Rift Valley viewpoint, where you can admire the stunning views of the Great Rift Valley. We will also visit the Samburu National Reserve, where you can see some of Kenya's iconic wildlife, such as giraffes, zebras, and elephants. In the afternoon, we will arrive at Lake Turkana and check in to our accommodation. The rest of the day is at leisure for you to relax and enjoy the peaceful surroundings.",
      },
      {
        id: uuidv4(),
        day: 3,
        tramo: "Lake Turkana - Isiolo National Park",
        description:
          "After breakfast, we will set off for Isiolo National Park, located in the central region of Kenya. Isiolo National Park is home to a diverse range of flora and fauna, including lions, cheetahs, and leopards. In the afternoon, we will go on a safari through the park and try to spot some of the wildlife. In the evening, we will return to our accommodation for dinner and a well-deserved rest.",
      },
      {
        id: uuidv4(),
        day: 4 - 8,
        tramo: "Isiolo National Park",
        description:
          "Over the next few days, we will spend our time exploring Isiolo National Park and its surrounding areas. We will go on several safaris and hikes, taking in the breathtaking landscapes and trying to spot as much wildlife as possible. In the evenings, we will return to our accommodation for dinner and relaxation. Some of the highlights of our time in Isiolo National Park include a visit to the Namunyak Wildlife Conservancy, a visit to the Laisamis Hot Springs, and a hike up Mount Kulal to admire the stunning views from the top.",
      },
    ],
    banner: true,
    popular: true,
  },

  {
    id: uuidv4(),
    categories: ["cultural"],
    imgs: [`${img2}`, `${imgDefault}`],
    title: "Exploring the Wonders of Kenya",
    slug: "exploring-the-wonders-of-kenya",
    days: 13,
    nights: 12,
    price: 1300,
    information:
      "Kenya is a land of incredible natural beauty and rich cultural heritage. On this tour, we will visit the breathtaking Lake Turkana, the vibrant Samburu region, and the stunning Isiolo National Park. Join us for an unforgettable adventure.",
    country: ["kenya"],
    level: ["moderate"],
    banner: true,
    popular: true,
  },
  {
    id: uuidv4(),
    category: "essential",
    imgs: [`${img3}`, `${imgDefault}`],
    title: "Exploring Kenya's Natural Wonders",
    slug: "exploring-kenya-natural-wonders",
    days: 13,
    nights: 3,
    price: 2400,
    information:
      "Join us on a journey through the stunning landscapes of Kenya. We will visit the famous Lake Nakuru and the Maasai Mara National Reserve, where we will have the opportunity to see a wide variety of wildlife, including the Big Five. We will also visit local villages and learn about the culture and traditions of the Maasai people.",
    banner: false,
    popular: false,
  },

  {
    id: uuidv4(),
    category: "trekking-nature",
    imgs: [`${img4}`, `${imgDefault}`],
    title: "Amboseli National Park Safari",
    slug: "amboseli-national-park-safari",
    days: 4,
    nights: 3,
    price: 200,
    information:
      "Join us on an adventure to Amboseli National Park, located in southern Kenya at the foot of Mount Kilimanjaro. This beautiful park is known for its large herds of elephants and its stunning views of the mountain. We will also have the opportunity to see a variety of other wildlife, including lions, zebras, and giraffes. We will stay in comfortable accommodations near the park and enjoy guided safari drives to see the animals in their natural habitat.",
    banner: false,
    popular: false,
  },

  {
    id: uuidv4(),
    category: "trekking-nature",
    imgs: [`${img5}`, `${imgDefault}`],
    title: "Ngong Hills Trail Hike",
    slug: "ngong-hills-trail-hike",
    days: 4,
    nights: 3,
    information:
      "Join us on a hike through the beautiful Ngong Hills in Kenya. The trail passes through rolling hills and forests, offering stunning views of the surrounding landscape. We will have the opportunity to see a variety of wildlife, including giraffes, zebras, and a wide range of bird species. We will stay in comfortable accommodations near the trail and enjoy guided hikes to explore the area.",
    banner: false,
    popular: false,
  },
  {
    id: uuidv4(),
    category: "trekking-nature",
    imgs: [`${img6}`, `${imgDefault}`],
    title: "Exploring the Tambach Valley",
    slug: "exploring-the-tambach-valley",
    days: 4,
    nights: 3,
    information:
      "Join us on a journey to the beautiful Tambach Valley in Kenya. This peaceful valley is located in the highlands of central Kenya and is known for its stunning views and abundant wildlife. We will have the opportunity to see a variety of animals, including elephants, lions, and a wide range of bird species. We will stay in comfortable accommodations near the valley and enjoy guided hikes and safari drives to explore the area.",
    banner: false,
    popular: false,
  },
  {
    id: uuidv4(),
    category: "spiritual-journeys",
    imgs: [`${img7}`, `${imgDefault}`],
    title: "Exploring the Subukia Shrine",
    slug: "exploring-the-subukia-shrine",
    days: 4,
    nights: 3,
    information:
      "Join us on a spiritual journey to the Subukia Shrine in Kenya. This sacred site is located in the highlands of central Kenya and is known for its beautiful gardens and holy spring. We will have the opportunity to learn about the history and traditions of the shrine and participate in spiritual ceremonies. We will stay in comfortable accommodations near the shrine and enjoy guided tours to explore the area.",
    banner: false,
    popular: false,
  },
];

export function getAllTours() {
  return dataTours;
}

export function getTourById(id) {
  return dataTours.find((item) => item.id === id);
}

export function getTourBySlug(slug) {
  return dataTours.find((item) => item.slug === slug);
}

export function getToursByPopularity() {
  return dataTours.filter((item) => item.popular);
}

export function getToursByBanner() {
  return dataTours.filter((item) => item.banner);
}

const dataTypeTours = [
  {
    id: uuidv4(),
    img: `${img8}`,
    title: "Adventure",
    cat: "adventure",
    description:
      "Whether you prefer horse riding, birdwatching, hiking, or ziplining, we have the perfect adventure travel package for you! If that entails getting totally off the beaten track in the Amazon, or visiting remote, far off communities in The Andes, there are an abundance of adventure tours available in Peru.",
  },
  {
    id: uuidv4(),
    img: `${img9}`,
    title: "Cultural",
    cat: "cultural",
    description:
      "Kenya is a country with a rich and diverse culture, with over 40 different ethnic groups each with their own unique customs and traditions. From the Maasai people's distinct dress and music, to the Swahili Coast's vibrant art and architecture, there is much to discover and experience in Kenya's cultural landscape.",
  },
  {
    id: uuidv4(),
    img: `${img10}`,
    title: "Gastronomy",
    cat: "gastronomy",
    description:
      "Kenya is a food lover's paradise, with a rich and varied culinary tradition influenced by its diverse cultures and natural abundance. From spicy stews and fresh seafood dishes to fragrant curries and delicious grilled meats, there is something to satisfy every palate in Kenya's diverse gastronomy scene.",
  },

  {
    id: uuidv4(),
    img: `${img11}`,
    title: "Wellness",
    cat: "wellness",
    description:
      "Kenya offers a wide range of wellness experiences, from luxurious spa treatments and wellness retreats to more traditional practices such as yoga and meditation. The country's stunning natural beauty and diverse culture provide the perfect backdrop for a rejuvenating and restorative wellness holiday.",
  },
  {
    id: uuidv4(),
    img: `${img12}`,
    title: "Local Living",
    cat: "local-living",
    description:
      "Experience the true heart of Kenya by immersing yourself in the local way of life. From staying with a traditional Maasai family in the Maasai Mara, to visiting rural villages and participating in community projects, a local living experience in Kenya will give you a unique and authentic insight into the country's diverse culture and traditions.",
  },
  {
    id: uuidv4(),
    img: "https://i.ibb.co/L52MdQ3/psycoterapy-img.png",
    title: "Luxury",
    cat: "luxury",
    description:
      "Kenya offers a range of luxury travel experiences, from lavish safari lodges and private beach villas, to gourmet dining and exclusive experiences such as hot air balloon rides over the Maasai Mara. Whether you're looking for adventure or relaxation, Kenya's luxury offerings provide the perfect blend of luxury and authenticity.",
  },
  {
    id: uuidv4(),
    img: "https://i.ibb.co/L52MdQ3/psycoterapy-img.png",
    title: "Essential",
    cat: "essential",
    description:
      "Experience the essential sights and sounds of Kenya with our essential travel packages. From safari tours in the Maasai Mara to cultural experiences in vibrant Nairobi, our essential packages offer a taste of the best that Kenya has to offer.",
  },
];
export function getAllTypeTours() {
  return dataTypeTours;
}
