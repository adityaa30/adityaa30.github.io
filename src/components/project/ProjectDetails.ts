import { ProjectProps } from "./Project";

export const experience = [
  {
    title: "Amazon",
    subtitle: "Software Developement Engineer Intern | Alexa Communications | Chennai",
    techStack: ["python", "Java", "TensorFlow", "Dagger", "Stanford CoreNLP"],
    duration: "May 2020 - June 2020",
    details: `
- Designed an algorithm to **classify a string into a valid or invalid phone book name**
- Integrated in **Amazon Spoken Name Entity Resolution Service** to **decrease overall latency** by ignoring
the lookup in ES Index when input is not a valid contact name
- **Currently in testing phase**, with scope for expansion
`
  },
  {
    title: "Indian Institute of Technology, Delhi",
    subtitle: "Summer Research Intern | GIPEDI",
    techStack: ["python", "Java", "Java Swing", "AndroidX", "TensorFlow", "Firebase ML Kit", "ReactJS"],
    duration: "May 2019 - July 2019",
    details: `
*Guide: [Prof. Tapan K Gandhi](https://tapankgandhi.com/), EE, Indian Institute of Technology, Delhi*

1. Low Cost Vision Device and Mobile Application
- Developed a **customized bounding box travel interface** in **Java’s Swing** based desktop application
to navigate among all the predicted text blocks (bounding box) in an image
- Developed an **android application** to **help people with Low Vision** in **classifying
objects and reading textual documents**
- Created a simple **Speak List View** interface to show classification and OCR results with buttons
provided to select a list item and **convert into Speech output** using inbuilt Google Text To Speech
model.
2. Intelligent Tutoring System for Rehabilitation Device for Child with ASD
- As part of a four-member team, trained a **RL agent** to **improve patient’s decision-making process**
- Developed an **interactive maze game** in ReactJS with **varied difficulty levels decided by the agent**
- Developed a Flask based API to **predict the next difficulty level based on the performance on current
level**
`
  },
  {
    title: "Technische Universität Dresden",
    subtitle: "Research Intern | Germany",
    techStack: ["python", "JavaScript", "flask", "MySQL"],
    duration: "Jan 2019 – Jan 2020",
    details: `
*Guide: Prof. Prabhas Kumar Yadav (TU Dresden, DE and MUJ, IN) and Prof R. Liedl (TU Dresden)*

- Developed an **interactive and easy-to-use data management and computational online tool** for the
**assessment and evaluation of surface water quality**
- Developed a **data calibration interface** to calibrate parameters concentration to obtain optimum
WQI
- Wrote the Flask based API to calculate WQI based on complex methods such as CCME WQI, Tiwari and Mishra
Index, Prati’s Index and OIP and generate plots using Plotly
- Designed efficient DB schema to store water-data having variable number of parameters to
decrease query time
- Full Stack Web Development, JavaScript, Python, Git and debugged using Chrome Developer
Tools
`
  },
  {
    title: "Probus Smart Things",
    subtitle: "Winter Intern | Delhi",
    techStack: ["Java", "AndroidX", "Android Jetpack", "RxJava", "BLE"],
    duration: "December 2018",
    details: `
- Worked on the android app for the project **Real-Time Water Quality Sensor**
- Synchronized the app with the provided Water API to **display real time sensor**
data analysis in **tables and graphs**
- Develop an **offline BLE scanner** feature to **fetch data from a nearby sensor in real time**
- Revamp the existing database architecture using **Room Persistence Library** to save water data
collected from the sensor
`
  },
  {
    title: "Delta Force",
    subtitle: "Software Developer | NIT Trichy",
    duration: "July 2018 - Present",
    details: `
- The coding club of my college, which handles most of the **software development** for
various web related activities of festivals such as [Festember](https://festember.com/),
[Pragyan](https://www.pragyan.org/20/home/) and [NittFest](https://www.nittfest.in/)
- Responsible for **developing & maintaining** the [institute’s official website](https://www.nitt.edu/)
- Conducted an introductory **workshop on algorithms** for more than 100 freshers
`,
    repositoryLink: "https://github.com/delta",
    webLink: "https://delta.nitt.edu/"
  }
] as Array<ProjectProps>;

export const projects = [
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
    title: "Labyrinth",
    subtitle: "Delta Force | NIT Trichy",
    techStack: ["JavaScript", "ReactJS", "MongoDB"],
    duration: "January 2019 - February 2020",
    details: `
- Labyrinth is an online treasure hunt event that tests your technical and analytical skills
- Revamp all the class based components to **functional components** using **React Hooks**
- Design the Login, SignUp & Leaderboard components
`,
    webLink: "https://labyrinth.pragyan.org/"
  },
  {
    title: "Beer Factory",
    subtitle: "Delta Force | Pragyan'19 | NIT Trichy",
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
    title: "socket-ip",
    subtitle: "Internetworking Protocols - Project | NIT Trichy",
    techStack: ["python", "Go"],
    details: `
- Implement **Broadcast**, **Multicast**, **Go Back N ARQ**, **Selective Repeat** for client server using
**python sockets** library
- Implement multicast with chatting interface for command-line using *net.Conn* in Go
`,
    repositoryLink: "https://github.com/adityaa30/socket-ip",
    readme: "https://raw.githubusercontent.com/adityaa30/socket-ip/master/readme.md"
  },
  {
    title: "cuda-dapa",
    subtitle: "Design & Analysis of Parallel Algorithms - Assignment | | NIT Trichy",
    techStack: ["C++", "CUDA"],
    details: `
- Implemented **Matrix Transpose** using **Shuffle and Mesh architectures**
- Designed a parallel algorithm to compute all nCk combinations for first N natural numbers
`,
    repositoryLink: "https://github.com/adityaa30/cuda-dapa",
    readme: "https://raw.githubusercontent.com/adityaa30/cuda-dapa/master/readme.md"
  },
  {
    title: "Pragyan App",
    subtitle: "Delta Force | NIT Trichy",
    techStack: ["Java", "AndroidX", "Android Jetpack", "RxJava", "Dagger2", "OpenGL"],
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
