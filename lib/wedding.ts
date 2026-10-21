
/**
 * Central wedding configuration.
 *
 * Every name, date, time and link shown on the site comes from this file,
 * so details can be updated here without touching any component.
 */

export type WeddingEvent = {
  id: string;
  day: string;
  weekday: string;
  date: string;
  isoDate: string;
  title: string;
  ceremony: string;
  time: string;
  location: string;
};

export const weddingEvents = [
  
  {
    id: "mehndi",
    day: "Day II",
    weekday: "Wednesday",
    date: "18 November",
    isoDate: "2026-11-18",
    title: "Mehndi",
    ceremony: "A Celebration of Tradition",
    time: "3:00 PM",
    location: "Home (Saharanpur)",
  },
  {
    id: "ring-ceremony",
    day: "Day III",
    weekday: "Thursday",
    date: "19 November",
    isoDate: "2026-11-19",
    title: "The Royal Beginning",
    ceremony: "Ring Ceremony",
    time: "7:30 PM",
    location: "Patram Haveli (Roorkee)",
  },
  {
    id: "haldi",
    day: "Day IV",
    weekday: "Friday",
    date: "20 November",
    isoDate: "2026-11-20",
    title: "Haldi Utsav",
    ceremony: "Haldi Ceremony",
    time: "11:00 AM",

    location: "Patram Haveli (Roorkee)",
  },
  {
    id: "after-party",
    day: "Day IV",
    weekday: "Friday",
    date: "20 November",
    isoDate: "2026-11-20",
    title: "After Hours",
    ceremony: "After Party",
    time: "8:00 PM",
    location: "Patram Haveli (Roorkee)",
  },
  {
    id: "wedding",
    day: "Day V",
    weekday: "Saturday",
    date: "21 November",
    isoDate: "2026-11-21",
    title: "The Big day",
    ceremony: "Wedding Ceremony",
    time: "7:00 PM",
    location: "Patram Haveli (Roorkee)",
  },
] as const satisfies readonly WeddingEvent[];

export const wedding = {
  couple: {
    partnerOne: "Ansh",
    partnerTwo: "Vanshika",
    monogram: ["A", "V"] as const,
  },

  date: {
    display: "21 November 2026",
    weekday: "Saturday",
    numeric: "21 · 11 · 2026",
    isoDate: "2026-11-21",
    iso: "2026-11-21T19:00:00+05:30",
  },

  events: weddingEvents,

  families: {
  title: "Our Families",
  eyebrow: "With love & blessings from",
  
  list: [
    {
      name: "The Punjani Family",
      members: [
        //{
          //role: "In Loving Memory",
          //names:
            // "In loving memory of our beloved grandparents, whose blessings, values, and love will forever remain a part of this family's journey.",
        //}
        //}
        {
          role: "Grandparents",
          names: "Late Smt. Raj Rani & Late Sh. Jay Dyal Punjani",
        }, 
        {
          role: "Parents",
          names: "Mrs. Suman & Mr. Naresh Punjani",
        },   
        {
          role: "Brothers",
          names: "Puneet & Harivansh Punjani",
        },
      ],
    },
  ],
  note: "Seeking the blessings of our elders and awaiting the presence of our beloved family and friends.",
},

  venue: {
    name: "Patram Haveli",
    locality: "Roorkee, Uttarakhand",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Patram+Haveli%2C+Badheri+Rajputan%2C+Haridwar%2C+Uttarakhand",
  },

  site: {
    title: "Ansh & Vanshika | Wedding Invitation",
    description:
      "Join Ansh & Vanshika as they celebrate their wedding on 21 November 2026.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  },
} as const;
