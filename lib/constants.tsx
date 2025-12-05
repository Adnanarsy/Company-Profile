export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: EventItem[] = [
    {
        image: "/images/event1.png",
        title: "Jakarta Tech Innovation Summit 2025",
        slug: "jakarta-tech-innovation-summit-2025",
        location: "Jakarta Convention Center, Jakarta",
        date: "2025-11-07",
        time: "09:00 AM",
    },
    {
        image: "/images/event2.png",
        title: "AI & Cybersecurity Expo Indonesia",
        slug: "ai-cybersecurity-expo-indonesia",
        location: "Assembly Hall JCC, Jakarta",
        date: "2025-04-05",
        time: "10:00 AM",
    },
    {
        image: "/images/event3.png",
        title: "Blockchain & Web3 Southeast Asia Conference",
        slug: "blockchain-web3-southeast-asia-conference",
        location: "The Ritz-Carlton Pacific Place, Jakarta",
        date: "2025-05-21",
        time: "08:30 AM",
    },
    {
        image: "/images/event4.png",
        title: "Indo Startup Expo & Investor Summit",
        slug: "indo-startup-expo-investor-summit",
        location: "ICE BSD, Tangerang (Jakarta Greater Area)",
        date: "2025-06-15",
        time: "09:30 AM",
    },
    {
        image: "/images/event5.png",
        title: "E-Commerce & Digital Marketing Festival",
        slug: "ecommerce-digital-marketing-festival",
        location: "Kasablanka Hall, Jakarta",
        date: "2025-07-03",
        time: "01:00 PM",
    },
    {
        image: "/images/event6.png",
        title: "Mobile App & Game Developer Conference Indonesia",
        slug: "mobile-app-game-developer-conference-indonesia",
        location: "Balai Kartini, Jakarta",
        date: "2025-08-24",
        time: "10:00 AM",
    },
    {
        image: "/images/event-full.png",
        title: "Indonesian Data, AI & Cloud World Forum",
        slug: "indonesian-data-ai-cloud-world-forum",
        location: "Pullman Grand Ballroom, Central Park, Jakarta",
        date: "2025-10-11",
        time: "09:00 AM",
    },
]

export default events;