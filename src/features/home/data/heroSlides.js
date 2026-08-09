const heroSlides = [
  {
    id: 1,
    badge: "🌿 Fresh Indoor Collection",
    title: "Bring Nature Home, One Plant at a Time",
    description:
      "Discover healthy indoor plants that brighten your living space, improve air quality, and create a peaceful atmosphere for every room.",
    image: "https://goodhomes.wwmindia.com/content/2021/may/image7jungle1620882701.jpg",
    primaryButton: {
      text: "Shop Plants",
      type: "route",
      to: "/plants",
    },
    secondaryButton: {
      text: "Plant Care Guide",
      type: "anchor",
      to: "#guides",
    },
  },
  {
    id: 2,
    badge: "💚 Easy Plant Care",
    title: "Healthy Plants Begin with Simple Daily Care",
    description:
      "Learn watering, lighting, and fertilizing techniques through beginner-friendly care guides written by experienced plant enthusiasts.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpgCSqpTLji4qMowcWWyOHrloklpwq8shTgo9YHepQw&s=10",
    primaryButton: {
      text: "Explore Guides",
      type: "anchor",
      to: "#guides",
    },
    secondaryButton: {
      text: "Browse Plants",
      type: "route",
      to: "/plants",
    },
  },
  {
    id: 3,
    badge: "👩‍🌾 Expert Consultation",
    title: "Get Personalized Advice from Plant Care Experts",
    description:
      "Book one-on-one consultations to diagnose plant problems, choose suitable species, and keep your indoor garden thriving all year round.",
    image: "https://img.magnific.com/free-photo/happy-couple-small-business-owners_53876-128889.jpg?semt=ais_hybrid&w=740&q=80",
    primaryButton: {
      text: "Meet Our Experts",
      type: "anchor",
      to: "#experts",
    },
  },
];

export default heroSlides;