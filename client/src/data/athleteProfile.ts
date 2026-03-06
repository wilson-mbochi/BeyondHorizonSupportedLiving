export type SocialPlatform =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "x"
  | "hudl"
  | "maxpreps"
  | "email"
  | "phone"
  | "website";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface HeroData {
  name: string;
  nickname?: string;
  position: string;
  number?: string;
  graduationYear: string;
  clubTeam: string;
  school: string;
  location: string;
  heroImage: string;
  heroImageAlt: string;
  socials: SocialLink[];
  tagline: string;
}

export interface StatItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface PressItem {
  id: string;
  outlet: string;
  title: string;
  description: string;
  date: string;
  url: string;
  thumbnail?: string;
  tag?: string;
}

export interface VideoItem {
  id: string;
  platform: "youtube" | "vimeo";
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  featured?: boolean;
}

export interface TikTokClip {
  id: string;
  title: string;
  caption: string;
  url: string;
  thumbnail?: string;
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  logo?: string;
  url?: string;
  description?: string;
}

export interface AcademicInfo {
  gpa: string;
  graduationYear: string;
  intendedMajor?: string;
  standardizedTests?: string;
  honors?: string[];
}

export interface RankingInfo {
  nationalRank?: string;
  regionalRank?: string;
  stateRank?: string;
  positionRank?: string;
  notes?: string;
}

export interface SchoolInfo {
  schoolName: string;
  clubName: string;
  coachName: string;
  coachEmail?: string;
  coachPhone?: string;
  leagueOrConference?: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export interface Award {
  id: string;
  year: string;
  title: string;
  details?: string;
}

export interface AthleteProfile {
  hero: HeroData;
  stats: StatItem[];
  pressItems: PressItem[];
  videos: VideoItem[];
  tiktokClips: TikTokClip[];
  partners: Partner[];
  academics: AcademicInfo;
  rankings: RankingInfo;
  schoolInfo: SchoolInfo;
  timelineEvents: TimelineEvent[];
  testimonials: Testimonial[];
  awards: Award[];
}

export const athleteProfile: AthleteProfile = {
  hero: {
    name: "Jordan Williams",
    nickname: "J-Will",
    position: "Attacking Midfielder",
    number: "#10",
    graduationYear: "Class of 2027",
    clubTeam: "Seattle Elite FC U17",
    school: "Roosevelt High School",
    location: "Seattle, WA",
    heroImage:"/athlete-hero.png",
    heroImageAlt: "Jordan Williams celebrating after scoring a goal under stadium lights",
    tagline: "Creative playmaker with next-level vision, work rate, and character.",
    socials: [
      {
        platform: "instagram",
        label: "@jordanwilliams10",
        url: "https://instagram.com/",
      },
      {
        platform: "tiktok",
        label: "@jwill10",
        url: "https://www.tiktok.com/",
      },
      {
        platform: "youtube",
        label: "Highlight Reel",
        url: "https://youtube.com/",
      },
      {
        platform: "hudl",
        label: "Full Game Film",
        url: "https://www.hudl.com/",
      },
    ],
  },
  stats: [
    { label: "Height", value: "5'10\"", highlight: true },
    { label: "Weight", value: "160 lbs" },
    { label: "Dominant Foot", value: "Right" },
    { label: "Secondary Foot", value: "Left (comfortable)" },
    { label: "Primary Position", value: "CAM / Winger" },
    { label: "Club Team", value: "Seattle Elite FC U17" },
    { label: "School Team", value: "Roosevelt High School Varsity" },
    { label: "GPA", value: "3.8 (unweighted)", highlight: true },
    { label: "Graduation", value: "2027" },
  ],
  pressItems: [
    {
      id: "press-1",
      outlet: "Seattle Times High School Sports",
      title: "Williams Leads Roosevelt to State Quarterfinals",
      description:
        "The sophomore midfielder recorded 2 goals and 3 assists across the regional playoff run.",
      date: "Nov 2025",
      url: "https://example.com/press/state-quarterfinals",
      thumbnail:
        "https://via.placeholder.com/600x360.png?text=Press+Feature+1",
      tag: "Feature",
    },
    {
      id: "press-2",
      outlet: "PNW Soccer Report",
      title: "Top 10 Class of 2027 Playmakers in the Northwest",
      description:
        "Jordan Williams stands out for his creativity in the final third and relentless pressing.",
      date: "Sep 2025",
      url: "https://example.com/press/top-10-playmakers",
      thumbnail:
        "https://via.placeholder.com/600x360.png?text=Press+Feature+2",
      tag: "Ranking",
    },
    {
      id: "press-3",
      outlet: "Club Spotlight Podcast",
      title: "Developing the Modern Attacking Midfielder",
      description:
        "An in-depth interview with Jordan and his club coach on training habits and mindset.",
      date: "Jun 2025",
      url: "https://example.com/press/podcast-interview",
      thumbnail:
        "https://via.placeholder.com/600x360.png?text=Press+Feature+3",
      tag: "Podcast",
    },
  ],
  videos: [
    {
      id: "video-highlight-reel",
      platform: "youtube",
      title: "2024–25 Season Highlight Reel",
      description:
        "Attacking highlights featuring goals, assists, chance creation, and defensive work rate.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      featured: true,
    },
    {
      id: "video-game1",
      platform: "youtube",
      title: "Full Match vs. Lakeside HS (District Semifinal)",
      description: "90-minute full match film with timestamped key moments.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    },
    {
      id: "video-game2",
      platform: "youtube",
      title: "Tournament Final vs. Westside FC",
      description:
        "Jordan contributes 1 goal and 2 assists in a high-intensity championship match.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    },
  ],
  tiktokClips: [
    {
      id: "tt-1",
      title: "Matchday Warm-Up Routine",
      caption: "Dynamic stretches and ball work before kickoff.",
      url: "https://www.tiktok.com/",
      thumbnail:
        "https://via.placeholder.com/400x700.png?text=TikTok+Clip+1",
    },
    {
      id: "tt-2",
      title: "1v1 Finishing Drill",
      caption: "Working on explosiveness and composure in front of goal.",
      url: "https://www.tiktok.com/",
      thumbnail:
        "https://via.placeholder.com/400x700.png?text=TikTok+Clip+2",
    },
    {
      id: "tt-3",
      title: "Behind the Scenes: Tournament Weekend",
      caption: "Travel, team talks, and big-game energy.",
      url: "https://www.tiktok.com/",
      thumbnail:
        "https://via.placeholder.com/400x700.png?text=TikTok+Clip+3",
    },
  ],
  partners: [
    {
      id: "partner-1",
      name: "Seattle Performance Academy",
      role: "Strength & Conditioning",
      description:
        "Year-round performance training focused on speed, agility, and injury prevention.",
      url: "https://example.com/partners/seattle-performance",
    },
    {
      id: "partner-2",
      name: "Northwest Elite Soccer",
      role: "Technical Training",
      description:
        "Small-group technical sessions emphasizing first touch, vision, and decision-making.",
      url: "https://example.com/partners/northwest-elite",
    },
  ],
  academics: {
    gpa: "3.8 (unweighted)",
    graduationYear: "2027",
    intendedMajor: "Sports Medicine / Kinesiology",
    standardizedTests: "PSAT: 1290 (projected SAT: 1350–1400 range)",
    honors: [
      "Honors Algebra II",
      "AP English Language",
      "AP U.S. History",
      "National Honor Society (candidate)",
    ],
  },
  rankings: {
    regionalRank: "Top 25 – Pacific Northwest (Class of 2027, Midfielders)",
    stateRank: "Top 10 – Washington (All Positions, Class of 2027)",
    positionRank: "Top 5 Attacking Midfielders – Washington",
    notes:
      "Rankings based on regional scouting reports and tournament performances; formal national rankings pending.",
  },
  schoolInfo: {
    schoolName: "Roosevelt High School",
    clubName: "Seattle Elite FC",
    coachName: "Coach Taylor Smith",
    coachEmail: "taylor.smith@rhs.edu",
    coachPhone: "(206) 555-0123",
    leagueOrConference: "Metro League – 3A",
  },
  timelineEvents: [
    {
      id: "timeline-1",
      year: "2016",
      title: "Fell in Love with the Game",
      description:
        "Started playing organized soccer at age 8 and quickly gravitated toward the midfield.",
    },
    {
      id: "timeline-2",
      year: "2022",
      title: "Joined Seattle Elite FC",
      description:
        "Selected for the club’s U15 squad and began competing in regional tournaments.",
    },
    {
      id: "timeline-3",
      year: "2024",
      title: "Varsity Starter as a Sophomore",
      description:
        "Earned starting role at Roosevelt High and helped lead the team to the state quarterfinals.",
    },
    {
      id: "timeline-4",
      year: "2025",
      title: "Regional Tournament MVP",
      description:
        "Named MVP after recording 4 goals and 6 assists in 5 matches.",
    },
  ],
  testimonials: [
    {
      id: "testimonial-1",
      quote:
        "Jordan is the kind of player every coach wants—coachable, relentless, and always lifting the level of everyone around him.",
      name: "Coach Taylor Smith",
      role: "Head Coach, Roosevelt High School",
    },
    {
      id: "testimonial-2",
      quote:
        "His vision in the final third is special. He reads the game two steps ahead and works just as hard defensively.",
      name: "Coach Miguel Alvarez",
      role: "Technical Director, Seattle Elite FC",
    },
    {
      id: "testimonial-3",
      quote:
        "In the classroom, Jordan is disciplined, respectful, and a quiet leader. He balances academics and athletics exceptionally well.",
      name: "Ms. Olivia Chen",
      role: "Academic Advisor, Roosevelt High School",
    },
  ],
  awards: [
    {
      id: "award-1",
      year: "2024",
      title: "All-Metro League First Team",
      details: "Selected as one of the top midfielders in the conference.",
    },
    {
      id: "award-2",
      year: "2024",
      title: "Team Offensive Player of the Year",
      details:
        "Led the team in combined goals and assists during the varsity season.",
    },
    {
      id: "award-3",
      year: "2023",
      title: "Regional Showcase All-Star XI",
      details:
        "Chosen for the all-star team at the Pacific Northwest College ID Showcase.",
    },
  ],
};

