import { ProjectProps } from "./Project";

export const ProjectDetails = [
    {
        title: "check-commit",
        subtitle: "Github Action 🚀",
        techStack: ["TypeScript", "jest", "@actions/github"],
        details: `
- Github Action to check if the commit message follows proper syntax
- Added unit tests using **jest** with **94% line coverage** and **89% branch coverage**
- Published the action on [Github Marketplace](https://github.com/marketplace/actions/check-commit-message)
`,
        repositoryLink: "https://github.com/adityaa30/check-commit",
        webLink: "https://github.com/marketplace/actions/check-commit-message",
        readme: "https://raw.githubusercontent.com/adityaa30/check-commit/master/README.md"
    },
    {
        title: "Nostalgia",
        subtitle: "Delta Force | NIT Trichy",
        techStack: ["JavaScript", "Svelte", "Node Express", "MySQL", "Docker"],
        duration: "April 2020 - May 2020",
        details: `
- Built **Svelte** and **NodeJS Express** application for end of the year event for 4th years
in NIT Trichy
- Wrote **responsive** UI components for **Login, Vote, Nominate and Result** views
- Implemented **authentication middleware** using JWT and **secure http cookie** for
routes that require a logged-in user
- **Dockerized** the entire application and configured **webpack** to build production
ready code
`,
        webLink: "https://delta.nitt.edu/nostalgia/"
    },
    {
        title: "Beer Factory",
        subtitle: "Delta Force | NIT Trichy",
        techStack: ["python", "django", "TensorFlow"],
        duration: "December 2019 - February 2020",
        details: `
- An **online strategy-based**, single-player **resource management** game. Each player
competes against **computer simulated opponent**
- Implemented custom **FactoryEnvironment** to simulate gameplay
- Implemented **Asynchronous Advantage Actor Critic** algorithm and trained the
agent using **TensorFlow**
- Designed database models, game and leaderboard logic views
`,
        webLink: "https://www.pragyan.org/20/projects/"
    },
    {
        title: "Pragyan App",
        subtitle: "Delta Force | NIT Trichy",
        techStack: ["Java", "AndroidX", "Android Jetpack", "OpenGL"],
        duration: "February 2019 - April 2019",
        details: `
- Worked on the official app for the *Pragyan’19 (The International
Techno-Managerial Fest of NIT Trichy)*
- Created a customized implementation of a **general particle simulation using
OpenGL in Java** exponentially improving performance
- A frame rate of **30 fps** was achieved rendering **50,000 particles** on an old low spec
android smartphone
- Revamp the database of the app using **room persistence library**
`,
        playstoreLink: "https://play.google.com/store/apps/details?id=com.pragyan19.app"
    },
    {
        title: "Morpheus",
        subtitle: "Pragyan Hackathon, Chennai",
        duration: ["January 2019"],
        techStack: ["python", "Java", "Dlib", "django", "AndroidX"],
        details: `
- **Top 5 out of 100+ teams** in [Pragyan’19 Hackathon 2019](https://www.pragyan.org/hackathon/),
event at *Pragyan’19 (The International Techno-Management Festival of NIT-Trichy)*.
- Provide **drivers** with an **easy, intuitive and effective means of assistance while driving**
for long hours, **sounds alarm** if deemed too tired to drive safely, **providing assistance
by directing them** to the nearestrest-stop, hotel, parking-lot, etc
- Implement **Multi-task Cascaded Neural Networks** to identify faces in a video stream
on a frame by frame basis and **Dlib** library to identify landmarks on face and extract
coordinates of eyes
- Achieved a process time of **0.112 seconds/image**
- Developed an android app to **sound alarms** if **drowsiness is detected** and display **graphs of
recent EAR activity** of the driver
`,
        repositoryLink: "https://github.com/adityaa30/morpheus-backend"
    },
    {
        title: "Quantum Eye",
        subtitle: "VIT Hack",
        duration: ["October 2018"],
        techStack: ["python", "Java", "TensorFlow", "Transfer Learning", "Android", "FCM"],
        details: `
- Used **Convolutional Neural Networks** and applied **Transfer Learning** from the
[**InceptionV3**](https://cloud.google.com/tpu/docs/inception-v3-advanced) model
to **flag baggage X-ray images for dangerous objects**
- Achieved an overall testing accuracy of **99.12%**
- Developed an android app to receive alerts of illegal object detection using **Firebase
Cloud Messaging**
`,
        repositoryLink: "https://github.com/adityaa30/QuantumEye"
    }
] as Array<ProjectProps>;