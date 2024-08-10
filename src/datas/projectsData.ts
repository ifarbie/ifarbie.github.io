const projectsData = [
  {
    img: '/img/projects/steampowered.com-clone.png',
    name: 'Steampowered.com Clone',
    description: `Steampowered.com Clone is a collaborative project built using the MERN stack with MySQL and Tailwind CSS. It features users authentication, product listings, shopping cart functionalities, and user management, providing a fully functional prototype that mimics the core functionalities of steampowered.com.`,
    skills: 'JavaScript, React.js, Express.js, Tailwind CSS, MySQL, Sequelize',
    github: 'https://github.com/ifarbie/steampowered.com-clone',
  },
  {
    img: 'https://opengraph.githubassets.com/aef369b35f8f717740cff71a2a93bbac2c55ecab458ec97e8f5e77eac55d6e21/ifarbie/openmusic-api',
    name: 'Openmusic API',
    description: `"OpenMusic API" is a RESTful API built with Hapi, utilizing RabbitMQ, PostgreSQL, and Redis for comprehensive music management. Users can add songs, create and collaborate on playlists, upload album photos, like albums, and export playlists on this public platform.`,
    skills: 'JavaScript, Hapi.js, Joi, PostgreSQL, RabbitMQ, Redis',
    github: 'https://github.com/ifarbie/openmusic-api',
  },
  {
    img: '/img/projects/personal-website.png',
    name: 'Personal Website',
    description:
      'My personal site that provides information about me, showcases my skills, and lists the projects I have created. Developed using Next.js, TypeScript, and Tailwind CSS, it offers a comprehensive and polished presentation of my professional profile.',
    skills: 'TypeScript, Next.js, TailwindCSS',
    github: 'https://github.com/ifarbie/gpa-calculator',
    url: 'https://ifarbie.github.io/gpa-calculator/',
  },
  {
    img: '/img/projects/gpa-calculator.png',
    name: 'GPA Calculator',
    description: 'This project is a web application designed as a GPA calculator tool, enabling students to compute their cumulative GPA as well as semester-specific GPAs. Built using Vite, TypeScript, React, and Tailwind CSS.',
    skills: 'TypeScript, React.js, Tailwind CSS',
    github: 'https://github.com/ifarbie/gpa-calculator',
    url: 'https://ifarbie.github.io/gpa-calculator/',
  },
  {
    img: '/img/projects/crud-posts.png',
    name: 'CRUD Posts',
    description:
      '"CRUD Posts" is a single-page web application built with Vite, utilizing TypeScript, React, and Chakra UI. It allows users to create, edit, and delete posts, fetching API data upon reload, caching it, and managing state for efficient data manipulation.',
    skills: 'TypeScript, React.js, Chakra UI',
    github: 'https://github.com/ifarbie/crud-posts',
    url: 'https://crud-posts-react-fariz.vercel.app/',
  },
  {
    img: '/img/projects/bookshelf-apps.png',
    name: 'Bookshelf Apps',
    description:
      'A simple single-page website developed using HTML, Bootstrap, and JavaScript. It allows users to save, edit, delete, and filter book titles they want to read or have already read, providing a straightforward and efficient way to manage their reading list.',
    skills: 'HTML, Bootstrap, JavaScript',
    github: 'https://github.com/ifarbie/bookshelf-apps',
    url: 'https://ifarbie.github.io/bookshelf-apps/',
  },
  {
    img: 'https://opengraph.githubassets.com/2078542ba35275152e7036df6490bf6aaa2debd68e4a99ed9a0bfed096526f07/ifarbie/gopix-api',
    name: 'GoPix API',
    description:
      'GoPix API is a Golang-based RESTful API built with Gin and GORM, featuring two endpoints: one for user management (login, register, update, delete, logout) and another for handling photos (upload, get, update, delete). The API includes JWT authentication and leverages MySQL for data storage, providing a secure and efficient backend for user and photo operations.',
    skills: 'Golang, Gin, GORM, MySQL',
    github: 'https://github.com/ifarbie/gopix-api',
  },
  {
    img: '/img/projects/ecommerce-catalog.png',
    name: 'Ecommerce Catalog',
    description:
      '"Ecommerce Catalog" is a single-page website built with Vue.js and vanilla CSS, designed to display detailed information about one product at a time. Users can click "Next" to fetch and view details of the next product, ensuring a seamless browsing experience through the product catalog.',
    skills: 'JavaScript, Vue.js, CSS',
    github: 'https://github.com/ifarbie/ecommerce-catalog',
    url: 'https://ecommerce-catalog-5b747.web.app/',
  },
  {
    img: '/img/projects/personal-notes.png',
    name: 'Personal Notes',
    description:
      'This is my first project in learning React, using vanilla CSS for styling, featuring functionality for users to create, save, archive, and delete notes. It includes a search feature to find notes, whether archived or active, and is ideal for storing newly learned knowledge, definitions, and more.',
    skills: 'React.js, CSS',
    github: 'https://github.com/ifarbie/personal-notes',
    url: 'https://personal-notes-47684.web.app/',
  },
  {
    img: '/img/projects/more-coffee-landing-page.png',
    name: 'More Coffee - Landing Page',
    description: `A cleanly designed website for a coffee shop, featuring sections for home, about, contact, and a fixed sidebar showcasing social media links. Built with HTML, CSS, and JavaScript, it includes smooth navigation, repetitive elements, and a hamburger menu for an enhanced user experience.`,
    skills: 'HTML, CSS, JavaScript',
    github: 'https://github.com/ifarbie/more-coffee-landing-page',
    url: 'https://ifarbie.github.io/more-coffee-landing-page/',
  },
  {
    img: '/img/projects/tiket-ka-landing-page.png',
    name: 'Tiket KA - Landing Page',
    description: `"Tiket KA - Landing Page" is a project developed to complete the SiM-K (Simulasi Kerja) mini bootcamp by Harisenin. It involves slicing a Figma design for a train ticketing website, featuring a login form and an about page describing the application, built with HTML and Tailwind CSS.`,
    skills: 'HTML, Tailwind CSS',
    github: 'https://github.com/ifarbie/tiket-ka-landing-page',
    url: 'https://ifarbie.github.io/tiket-ka-landing-page/',
  },
  {
    img: '/img/projects/kalkulator-bmi.png',
    name: 'Kalkulator BMI',
    description: `The first project in learning web development, featuring a tool to calculate the ideal body weight for users. The website includes form validation and is built using HTML, CSS, and JavaScript to provide a seamless user experience.`,
    skills: 'HTML, CSS, JavaScript',
    github: 'https://github.com/ifarbie/kalkulator-bmi',
    url: 'https://ifarbie.github.io/kalkulator-bmi/',
  },
];

export default projectsData;
