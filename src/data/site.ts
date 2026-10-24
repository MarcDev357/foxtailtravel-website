// All site content lives here. Edit copy, links and photos in this one file.

// Photos live in src/assets/images and are bundled by Vite.
const files = import.meta.glob('../assets/images/**/*.{jpg,png}', { eager: true, import: 'default' }) as Record<string, string>

export const img = (name: string) => {
  const url = files[`../assets/images/${name}`]
  if (!url) throw new Error(`Missing image: ${name}`)
  return url
}

export const business = {
  name: 'Foxtail Travel',
  legalName: 'Foxtail Travel LLC',
  tagline: 'Fuel your soul with travel',
  location: 'Phoenix, AZ',
  email: 'foxtailtravel@gmail.com',
  facebook: 'https://www.facebook.com/foxtailtravel',
  instagram: 'https://www.instagram.com/barbarabradley439/',
  instagramHandle: '@barbarabradley439',
  logo: img('logo.jpg'),
  bookingYear: 2026,
}

export const advisor = {
  name: 'BJ Bradley, CTA',
  shortName: 'BJ',
  role: 'Founder & Lead Travel Designer',
  photo: img('bj-bradley.jpg'),
  ctaLogo: img('cta-logo.png'),
  bio: [
    'BJ Bradley is a compassionate and experienced travel advisor specializing in health and wellness journeys. With a deep understanding of the importance of self-care and relaxation, BJ curates personalized travel experiences that nourish the body, mind, and spirit.',
    "From rejuvenating spa retreats to adventure-filled wellness escapes, BJ's expertise ensures a transformative experience. With a passion for exploring new destinations and uncovering hidden gems, BJ is your trusted guide for a healthy and harmonious journey.",
  ],
}

export const about = {
  intro:
    'At Foxtail Travel we believe in crafting unforgettable experiences that not only transport you to breathtaking destinations but also nurture your mind, body and soul along the way. With a keen focus on health, self-care, and wellness, we are dedicated to curating journeys that leave a lasting impact, fostering rejuvenation and inner balance.',
  mission:
    'At Foxtail Travel, our mission is to create extraordinary journeys that do more than explore new destinations. They rejuvenate and inspire your very being. By weaving wellness into every itinerary, we offer bespoke experiences that cater to your holistic health, from tranquil spa retreats to invigorating outdoor adventures. Our passion lies in designing trips that enrich your soul and refresh your spirit, transforming travel into a truly personal and profound journey.',
  promise:
    'Our primary mission at Foxtail Travel is to cater to your well-being, ensuring every moment is crafted to not only meet but exceed your expectations. Let us anticipate your needs and elevate your travel experience to a journey of tranquility, rejuvenation, and holistic enrichment.',
}

export type Guide = { title: string; url: string }

export type Service = {
  slug: string
  nav: string
  title: string // e.g. "Wellness"
  emphasis: string // italic word, e.g. "Cruises"
  cardTitle: string
  intro: string
  image: string
  imageAlt: string
  highlights: string[]
  guidesHeading?: string
  guides: Guide[]
  extraLink?: { label: string; url: string; note: string }
}

export const services: Service[] = [
  {
    slug: 'cruises',
    nav: 'Cruises',
    title: 'Wellness',
    emphasis: 'Cruises',
    cardTitle: 'Wellness Cruises',
    intro:
      'Embark on a wellness cruise with Foxtail Travel, where the gentle sway of the sea harmonizes with expertly curated wellness treatments. Indulge in onboard spas, yoga sessions on deck, and nourishing culinary delights, all designed to rejuvenate your mind, body, and soul. Discover serenity on the high seas and return home completely revitalized.',
    image: img('cruise-ship.jpg'),
    imageAlt: 'Cruise ship at sea',
    highlights: ['Onboard spas and treatments', 'Yoga sessions on deck', 'Nourishing, chef-led cuisine'],
    guidesHeading: 'Explore our ports of call',
    guides: [
      { title: 'Choosing the Right Cruise for You', url: 'https://spark.adobe.com/page/moiKJbHLMLDUL/' },
      { title: 'European River Cruising', url: 'https://spark.adobe.com/page/N0sbliqblZZgX/' },
    ],
    extraLink: {
      label: 'Explora Journeys',
      url: 'https://explorajourneys.com/us/en?insider=rmpkq-b-j-bradley',
      note: 'Browse ocean-state luxury voyages with Explora Journeys, booked through BJ.',
    },
  },
  {
    slug: 'destinations',
    nav: 'Destinations',
    title: 'Wellness & Spa',
    emphasis: 'Destinations',
    cardTitle: 'Spa & Wellness Destinations',
    intro:
      "Explore the world's most tranquil destinations with Foxtail Travel. From the serene beaches of Bali to the peaceful mountains of Switzerland, our wellness-focused itineraries are crafted to provide the ultimate escape. Immerse yourself in local spa traditions, partake in healing rituals, and find your inner balance amidst breathtaking landscapes.",
    image: img('destinations-bali.jpg'),
    imageAlt: 'Travelers relaxing at a resort in Bali',
    highlights: ['Local spa traditions', 'Healing rituals', 'Beaches, mountains and hidden gems'],
    guidesHeading: 'Browse our worldwide guides',
    guides: [
      { title: 'St Lucia: The Helen of the West', url: 'https://express.adobe.com/page/EAktYjiPKQXno/' },
      { title: 'Visiting Reykjavik', url: 'https://express.adobe.com/page/58nlFFATcm9yR/' },
    ],
  },
  {
    slug: 'family',
    nav: 'Family',
    title: 'Family Wellness',
    emphasis: '& Spa',
    cardTitle: 'Family Wellness',
    intro:
      'Foxtail Travel creates wellness vacations that cater to every family member. Enjoy quality time together with tailored activities like family spa treatments, outdoor adventures, and mindfulness sessions. Strengthen your bonds and return home as a rejuvenated, connected family, ready to take on the world with renewed vigor.',
    image: img('gallery/shutterstock-1847668021.jpg'),
    imageAlt: 'Mother and daughter enjoying a spa day',
    highlights: ['Family spa treatments', 'Outdoor adventures', 'Mindfulness sessions for all ages'],
    guidesHeading: 'Family travel guides',
    guides: [
      { title: 'Traveling with Children', url: 'https://spark.adobe.com/page/L6sORb7xHwobK/' },
      { title: 'Planning a Successful Multigenerational Trip', url: 'https://express.adobe.com/page/oL64YOIYAYToo/' },
      { title: 'Yoga Retreats', url: 'https://spark.adobe.com/page/HGA1EddynYBRe/' },
    ],
  },
  {
    slug: 'groups',
    nav: 'Groups',
    title: 'Group Wellness',
    emphasis: '& Spa',
    cardTitle: 'Spa & Wellness Group Excursions',
    intro:
      "Share the journey of wellness with friends and like-minded travelers through Foxtail Travel's group excursions. Experience the joys of collective rejuvenation with group yoga sessions, communal spa experiences, and wellness workshops. Create lasting memories while fostering a shared sense of inner peace and well-being.",
    image: img('groups-spa.jpg'),
    imageAlt: 'Women laughing together at a spa',
    highlights: ['Group yoga sessions', 'Communal spa experiences', 'Wellness workshops'],
    guidesHeading: 'Consider adding a group tour',
    guides: [
      { title: 'Group Travel', url: 'https://spark.adobe.com/page/bPlhcdXQhW0dq/' },
      { title: 'Spa Vacations', url: 'https://spark.adobe.com/page/PkJQl5FqfLgN2/' },
      { title: "Women's Only Travel", url: 'https://spark.adobe.com/page/SeGz2ER89ocGP/' },
    ],
  },
  {
    slug: 'resorts',
    nav: 'Resorts',
    title: 'Wellness & Spa',
    emphasis: 'Resorts',
    cardTitle: 'Wellness & Spa Resorts',
    intro:
      "Discover the pinnacle of luxury and wellness at Foxtail Travel's handpicked resorts. Each destination offers world-class spa facilities, wellness programs, and tranquil environments. Whether you seek relaxation, adventure, or both, our resorts provide the perfect sanctuary for your holistic retreat.",
    image: img('gallery/shutterstock-2100454474-min.jpg'),
    imageAlt: 'Infinity pool and lounge chairs among palm trees',
    highlights: ['World-class spa facilities', 'Structured wellness programs', 'Tranquil, handpicked settings'],
    guides: [],
  },
  {
    slug: 'solo',
    nav: 'Solo',
    title: 'Solo Wellness',
    emphasis: '& Spa',
    cardTitle: 'Spa & Wellness Solo Excursions',
    intro:
      'Nurture your soul with a solo wellness retreat crafted by Foxtail Travel. Embrace the freedom to focus solely on yourself with personalized spa treatments, meditative practices, and wellness activities tailored to your unique needs. Embark on a transformative journey of self-discovery and emerge with a renewed sense of peace and purpose.',
    image: img('solo-facial.jpg'),
    imageAlt: 'Woman smiling during a facial treatment',
    highlights: ['Personalized spa treatments', 'Meditative practices', 'Itineraries built around you'],
    guidesHeading: 'Solo inspiration',
    guides: [{ title: 'Group Travel', url: 'https://spark.adobe.com/page/bPlhcdXQhW0dq/' }],
  },
]

export const retreats = {
  label: 'Retreats',
  url: 'https://bookretreats.com/s/wellness-retreats?a=cqvwu',
  note: 'Hundreds of yoga, meditation and wellness retreats worldwide.',
}

export const resortGallery: { src: string; alt: string }[] = [
  { src: img('gallery/shutterstock-2329484357.jpg'), alt: 'Two people in an indoor infinity pool overlooking mountains' },
  { src: img('gallery/shutterstock-1507518005-min.jpg'), alt: 'Resort terrace in Bali' },
  { src: img('gallery/shutterstock-1058846174-min.jpg'), alt: 'Spa resort setting' },
  { src: img('gallery/roberto-nickson-ycw4behkluw-unsplash.jpg'), alt: 'Woman in a bathtub with a view of the landscape' },
  { src: img('gallery/shutterstock-1847668021.jpg'), alt: 'Mother and daughter spa day' },
  { src: img('gallery/shutterstock-1620815548.jpg'), alt: 'Spa towels and candles' },
  { src: img('gallery/shutterstock-1716125659-min.jpg'), alt: 'Woman on a platform over the water' },
  { src: img('gallery/erol-ahmed-aiyfr0vbadk-unsplash.jpg'), alt: 'Succulent close-up' },
  { src: img('gallery/shutterstock-1525422071-min.jpg'), alt: 'Women in a private pool' },
  { src: img('gallery/shutterstock-2100454474-min.jpg'), alt: 'Infinity pool and resort chairs with palm trees' },
  { src: img('gallery/shutterstock-2049979190.jpg'), alt: 'Floating breakfast at a resort' },
  { src: img('gallery/shutterstock-2230546651-min.jpg'), alt: 'Balinese infinity pool' },
]

export const heroImages = {
  home: img('hero-lagoon.jpg'),
  about: img('gallery/shutterstock-2329484357.jpg'),
  contact: img('gallery/shutterstock-1716125659-min.jpg'),
}

export const blogPosts = [
  {
    slug: 'why-work-with-a-travel-advisor',
    title: 'Why work with a travel advisor?',
    date: '2024-06-05',
    summary:
      'What a dedicated advisor handles for you, from matching the right trip to your goals to managing the details and advocating for you if plans change.',
    url: 'https://spark.adobe.com/page/SwOWjrUHJmIYu/',
  },
]

export const partners: { name: string; detail: string; url: string; logo?: string }[] = [
  {
    name: 'BBB Accredited Business',
    detail: 'Foxtail Travel LLC',
    url: 'https://www.bbb.org/us/az/phoenix/profile/travel-agency/foxtail-travel-llc-1126-1000155971/#sealclick',
  },
  {
    name: 'Leave a BBB review',
    detail: 'Share your experience',
    url: 'https://www.bbb.org/pacific-southwest/customer-reviews/travel-agency/foxtail-travel-llc-in-phoenix-az-1000155971/add/',
  },
  {
    name: 'Global Rescue',
    detail: 'Travel security & evacuation',
    logo: img('global-rescue-logo.png'),
    url: 'https://partner.globalrescue.com/foxtailtravel/index.html',
  },
  {
    name: 'Virgin Voyages',
    detail: 'First Mate partner',
    url: 'https://www.virginvoyages.com/',
    logo: img('virgin-first-mate.png'),
  },
  { name: 'Certified Travel Associate', detail: 'The Travel Institute', url: 'https://www.thetravelinstitute.com/' },
]
