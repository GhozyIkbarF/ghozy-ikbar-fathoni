import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ghozy Ikbar Fathoni",
  initials: "GIF",
  url: "https://dillion.io",
  location: "Boyolali, Central Java, Indonesia",
  locationLink: "http://maps.google.com/maps/@-7.516667,110.600000,17z?source=sh%2Fx%2Fsrp%2Fwr%2Fm1%2F1&kgs=2fe6cb3d35335923",
  description: "I love building things and helping people. Very active on Twitter.",
  summary: "As a graduate from Computer Science at Muhammadiyah University of Surakarta, I am passionate about web development with strong skills in HTML, CSS, JavaScript, TypeScript, and various front-end frameworks like React JS and Laravel. I specialize in crafting visually appealing and user-friendly websites, backed by a deep understanding of web design principles, responsive design, and best practices in web development. Eager to contribute my skills to innovative projects and continue growing in the ever-evolving tech landscape.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Express JS",
    "Laravel",
    "Postgres",
    "MySQL",
    "TailwindCSS",
    "Git",
    "Figma",
    "Microsoft Office",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ghozyikbarf@gmail.com",
    linkEmail: "https://mail.google.com/mail/u/0/#inbox?compose=jrjtXPVgpXkknzKWDHLGjDcGXgJDsqssHqhmdHTvjCcMJggJnxKmQPDVTnDjJDDKshVHKCxH",
    telp: "+62 889 8597 7908",
    linkTelp: "https://wa.link/m2oqzt",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/GhozyIkbarF",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ghozy-ikbar-fathoni-b66b1a22b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ones_max",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@LetMeKnowAnything",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: 'Freelance',
      href: '',
      location: 'Remote',
      title: 'Web Developer',
      logoUrl: '/bgwhite.jpeg',
      badges: [],
      start: 'Jan 2024',
      end: 'Present',
      description: [
        'Developing an internal monitoring web application for the Ministry of Religion of the Republic of Indonesia',
      ]  
    },
    {
      company: 'DISKOMINFO Kab. Karanganyar',
      href: 'https://diskominfo.karanganyarkab.go.id/',
      location: 'Karanganyar, Central Java',
      title: 'Web Developer',
      logoUrl: '/diskominfokaranganyar.jpeg',
      badges: [],
      start: 'Oct 2022',
      end: 'Nov 2022',
      description: 'Teaming up on developing Surat Perintah Perjalanan Dinas Web Application using Laravel.',
    },
    {
      company: 'Study Independen - Goto Impact Foundation',
      href: 'https://goto-impact.org',
      location: 'Remote',
      title: 'Fontend Developer',
      logoUrl: '/gotoimpact.svg', 
      badges: [],
      start: 'Feb 2022',
      end: 'July 2022',
      description: [
        'Introduced to JavaScript most popular library ReactJS',
        'Developed an learing platform using ReactJS.',
      ],
    },
  ],
  education: [
    {
      school: "Muhammadiyah University of Surakarta",
      href: "https://www.ums.ac.id/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/ums.png",
      start: "2019",
      end: "2023",
    },  
  ],
  projects: [
    {
      title: "Domsat Web Profile",
      href: "",
      dates: "Nov 12 - 26 2024",
      active: false,
      description:
        "An website Domsat company profile",
      technologies: [
        "Next JS",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.domsat.co.id",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Domsatio/company-profile",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/domsat_profile.png",
      video: "",
    },
    {
      title: "DomClub",
      href: "https://domsat-course.vercel.app",
      dates: "21 August - 10 Oct 2024",
      active: false,
      description:
        "A website application that provides paid online courses and has an online store. This website olso have admin side to manage content, order, and make report.",
      technologies: [
        "Next JS",
        "Typescript",
        "Material Tailwind",
        "TailwindCSS",
        "Prisma",
        "Supabase",
        "Midtrans",
      ],
      links: [
        {
          type: "Website",
          href: "https://domsat-course.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Domsatio/Course",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/domclub.png",
      video: "",
    },
    {
      title: "Quiz App",
      href: "https://quizapptrivia.vercel.app",
      dates: "13 Oct 2024",
      active: true,
      description: 'Developed an quiz application which allows users to create and take quizzes.',
      technologies: [
        "React",
        "Vite",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://quizapptrivia.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GhozyIkbarF/Quiz-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/quizapp.png",
      video: "",
    },
    {
      title: "Inkata",
      href: "https://inkata.vercel.app",
      dates: "14 - 19 June 2025",
      active: true,
      description:
        "Inkata is a simple and powerful platform that lets you create, manage, and read articles with ease. Whether you're writing for yourself, your team, or the world — Inkata helps you stay organized and inspired.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://inkata.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GhozyIkbarF/test-fe-seller-pinter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/inkata.png",
      video: "",
    },
    {
      title: "The Social",
      href: "https://blog-tau-one-26.vercel.app",
      dates: "1 - 8 Oct 2023",
      active: true,
      description:
        "Developed an social media app where the user can create a post, find posts by categories, and search posts. Built with Next.js and Prisma. Development is still in progress.",
      technologies: [
        "Next.js",
        "Typescript",
        "Express JS",
        "Prisma",
        "TailwindCSS",
        "Radix UI",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://blog-tau-one-26.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GhozyIkbarF/blog",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/thesocial.png",
      video: "",
    },
    {
      title: "Travel Umrah",
      href: "",
      dates: "April 2023 - September 2023",
      active: false,
      description:
        "Developed an website application for Travel Umrah company profile and olso has admin side to organize content.",
      technologies: [
        "Laravel",
        "MySQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/GhozyIkbarF/Travel-umrah",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/travelumrah.png",
      video: "",
    },
    {
      title: "Movies App",
      href: "https://ghozyikbarf-movie-collection.vercel.app",
      dates: "7 - 10 Oct 2023",
      active: true,
      description:
        "A movies app for searching your favorite movies.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://ghozyikbarf-movie-collection.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GhozyIkbarF/Movies",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/movies.png",
      video: "",
    },
    {
      title: "Gaveeta",
      href: "",
      dates: "7 March - 21 Juli 2023",
      active: false,
      description:
        "A website application to manage orders on gaveeta.",
      technologies: [
        "React JS",
        "Cakra UI",
        "Laravel",
        "MySQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/GhozyIkbarF/gaveeta_fontend",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/gaveeta.png",
      video: "",
    },
  ],
  certificate: [
    {
      image: "/udemy.jpeg",
      title: "Pemrograman Javascript: Pemula sampai mahir",
      issuer: "Udemy",
      date: "19 Oct 2023",
      credential: "https://drive.google.com/file/d/15xvyuD3wA6sbAkJeaSaczbPLKYnxUCO5/view?usp=sharing",
    },
    {
      image: "/progate.jpeg",
      title: "Javascript Course",
      issuer: "Progate",
      date: "2 March 2022",
      credential: "https://drive.google.com/file/d/1ZhsGs0THppz3sVRj5hrSFG9KMpLG5BjV/view?usp=sharing",
    },
    {
      image: "/progate.jpeg",
      title: "React JS Course",
      issuer: "Progate",
      date: "2 March 2022",
      credential: "https://drive.google.com/file/d/1e7bc2PTH68RWKAzfl0fLz23xZ439Mxv5/view?usp=sharing",
    },
    {
      image: "/progate.jpeg",
      title: "Git Course",
      issuer: "Progate",
      date: "3 March 2022",
      credential: "https://drive.google.com/file/d/1FyTsTYCydcWjjVE8a0nPXn3nJHg2ctIa/view?usp=sharing",
    },
    {
      image: "/hackerrank.jpeg",
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "8 Feb 2023",
      credential: "https://www.hackerrank.com/certificates/9137c006f183",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
