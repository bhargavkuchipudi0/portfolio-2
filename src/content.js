const content = {
    experience: [
        {
            companyName: 'Walmart', //company name is case sensitive. Must start with a capital letter.
            companyFullName: 'Walmart Global Tech',
            designation: 'Software Engineer - III',
            duration: 'July 2021 - Present',
            duties: [
                'Designed and Developed Single Page Application (SPA) using React.JS, JavaScript, HTML5, CSS3, SCSS, and Redux.',
                'Implemented React-Redux for managing state and reinforced the logic of having a global state and shared information among components from a single location.',
                'Worked with JSON web tokens for authentication and authorization security configurations using Node.js',
                'Responsible for executing unit test cases and end-to-end using React Testing Library and Test Cafe.'
            ]
        },
        {
            companyName: 'Techolution',
            companyFullName: 'Techolution',
            designation: 'Front End Developer',
            duration: 'June 2018 - July 2019',
            duties: [
                'Designing and developing full-stack applications across multiple platforms using modern industryadopted languages and frameworks.',
                'Developing cross-browser and multi-browser compatible web pages AngularJS and NodeJS.',
                'Developing REST architecture-based web services to facilitate communication between client and servers by writing application-level code to interact with APIs.',
                'Involving in intense User Interface (UI) operations and client-side validations.'
            ]
        },
        {
            companyName: 'Asteriisc',
            companyFullName: 'Asteriisc Technologies',
            designation: 'Front End Developer',
            duration: 'May 2016 - May 2018',
            duties: [
                'Converting mock-ups into mobile first responsive web pages using HTML, CSS, JavaScript.',
                'Developing REST architectures with HTTP standards, API best practices, web security, authentication, and building scalable solutions.',
                'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
                'Creating the automation scripts using Python for testing various applications.'
            ]
        }
    ],
    mywork: [
        {
            index: 0,
            heading: 'Adversarial machine learning for spam filters',
            text: 'Using natural language processing (NLP) and Baysian model as an example, we developed and tested three invasive techniques, i.e., synonym replacement, ham word injection and spam word spacing. ',
            tools: ['Python', 'Machine Learning', 'Latex', 'ARES Conference', 'ACM Proceedings'],
            link: 'https://dl.acm.org/doi/abs/10.1145/3407023.3407079',
            repo: null,
            type: 'publication'
        },
        {
            index: 1,
            heading: 'Personal Website - Vesion 1',
            text: 'A Static HTML page to showcase my skills and expertise. Built with pure HTML, CSS, Canvas, & JavaScript. I have used the power of PWA and built this web app work offline.',
            tools: ['HTML', 'CSS', 'Javascript', 'PWA'],
            link: 'https://bhargavkuchipudi.herokuapp.com/',
            repo: 'https://github.com/bhargavkuchipudi0/portfolio-0286',
            type: 'personal'
        },
        {
            index: 2,
            heading: 'Personal Website - Vesion 2',
            text: 'Designed and developed using Figma and React. Even though it is a static site, building this portfolio with react makes it more flexible, simple, and organised.',
            tools: ['React', 'HTML', 'CSS', 'Figma'],
            link: 'https://bhargavkuchipudi.netlify.app/',
            repo: 'https://github.com/bhargavkuchipudi0/portfolio-2',
            type: 'personal'
        },
        {
            index: 3,
            heading: 'Accu-Weather | Weather App',
            text: 'Yet another weather app with Vue.js. With this application, you can look up the weather around the world by city name. It is a simple and minimalistic app built to get my self started with a new framework (Vue.js)',
            tools: ['Vue.js', 'Chart.js', 'JavaScript', 'HTML', 'CSS'],
            link: 'https://accu-weather.netlify.app/',
            repo: 'https://github.com/bhargavkuchipudi0/vue-weather-app',
            type: 'personal'
        },
        {
            index: 4,
            heading: 'Fast News Now',
            text: 'This is a front end application built with React JS using Newsapi.org developer api. I have integrated the filter module to search betweeen different categories and sources (CNN, BBC NEws, ESPN, The Hindu, etc..,).',
            tools: ['React', 'Newsapi', 'HTML', 'CSS'],
            link: null,
            repo: 'https://github.com/bhargavkuchipudi0/fastnewsnow',
            type: 'personal'
        },
        {
            index: 5,
            heading: 'COVID-19 Automation script for live update',
            text: 'A simple python automation script for COVID-19 that scraps few sites for the data and triggers an email to the list of people signed up for.',
            tools: ['Python', 'Automation', 'AWS'],
            link: null,
            repo: 'https://github.com/bhargavkuchipudi0/COVID-19-automation-script',
            type: 'personal'
        },
        {
            index: 6,
            heading: 'Using AI for More Accurate COVID-19 Forecasting',
            text: 'Used different Machine learning models to predict the forecast of COVID-19 in United States. I have used Linear Regression, Support Vector Machines(SVM), and Bayesian Ridge Regression for the forecast.',
            tools: ['Python', 'Machine Learning'],
            link: 'https://www.linkedin.com/posts/bhargav-kuchipudi-389036b6_machineabrlearning-predictiveanalytics-stayhomesaveslives-activity-6656622775802925056-hS9c',
            repo: null,
            type: 'personal'
        }
    ]
}

module.exports = content;