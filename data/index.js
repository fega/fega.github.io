export const fabian ={
  yearsOfExperience: 3,
  mainStack: [
    {
      image: require("~/assets/icons/node.svg"),
      name: "Node.js"
    },
    {
      image: require('~/assets/icons/mongo.png'),
      name: "MongoDb"
    },
    {
      image: require('~/assets/icons/express.png'),
      name: "Express"
    },
    {
      image: require('~/assets/icons/vue.svg'),
      name: "Vue.js"
    },
    {
      image: require('~/assets/icons/react.svg'),
      name: "React"
    },
    {
      image: require('~/assets/icons/react.svg'),
      name: "React Native"
    },
    {
      image: require('~/assets/icons/ts.svg'),
      name: "Typescript",

    }
  ],
  otherStack: [
    {
      name: "GraphQl"
    },
    {
      name: "Python"
    },
    {
      name: "Redis"
    },
    {
      name: "Git"
    },
    {
      name: "TDD"
    },
    {
      name: "Docker"
    },
    {
      name: "Google Cloud"
    },
    {
      name: "Mocha"
    },
    {
      name: "Jest"
    },
    {
      name: "Ava"
    },
    {
      name: "Arduino"
    },
    {
      name: "Bootstrap"
    },
    {
      name: "Vuetify"
    },
    {
      name: "Socket.io"
    },
    {
      name: "JQuery"
    },
    {
      name: "Heroku"
    },
    {
      name: "Puppeter"
    },
    {
      name: "Jira"
    },
    {
      name: "Sequelize"
    },
    {
      name: "ElasticSearch"
    },
    {
      name: 'Google Cloud',
    },
    {
      name: 'Firebase'
    }
  ],
  experience:[{
    image:'https://angel.co/cdn-cgi/image/width=60,height=60,format=auto,fit=scale-down/https://d1qb2nb5cznatu.cloudfront.net/startups/i/5182868-415d92df97745458b339421bea2cd2df-medium_jpg.jpg?buster=1516134296',
    title:'Full Stack Engineer',
    company: 'Ember labs LLC',
    description: /*html*/`
    <p>
      Product development using leading edge technologies.
      For this role I lead the development of different products from scratch, in both sides, Backend and Frontend.
    </p>
    <br />
    <h4>Backend:</h4>
    <p>
      Node.js, Express, MongoDb, Redis, GraphQL, Elastic Search, Ngnix, Google Cloud, Firebase.
    </p>
    <br />
    <h4>Frontend:</h4>
    <p>
      Vue, React, Redux, Nuxt, PWAs, Web Components.
    </p>
    <br />
    <h4>Mobile:</h4>
    <p>
      React Native, Cordova, Redux, Redux Sagas.
    </p>
`, 
    start: 'August 2018',
    end: 'Current',   
  },{
    image: 'https://angel.co/cdn-cgi/image/width=60,height=60,format=auto,fit=scale-down/https://d1qb2nb5cznatu.cloudfront.net/startups/i/636075-e238ade5e48f32655c7881cd2bf53e54-medium_jpg.jpg?buster=1492506991',
    title:'Node.js Backend Engineer',
    company: 'KickFit',
    description: /* html */`
      <p>
        Development of a Sport coaching platform Backend:
      </p>
      <br />
      <h4>Tech Stack:</h4>
      <p>
        Microservices, Node.js, TypeScript, Mongodb, ElasticSearch, Redis, REST and GraphQL
      </p>`,
    start: 'June 2017',
    end: 'August 2018',   
  }],

  professionalProjects: [{
    title: 'Bliss (Demo)',
    description: "Bliss lets you book flights instantly and pay for them over time.",
    roles: ['BackEnd', 'FrontEnd'],
    image: require('~/assets/projects/bliss.png'),
    buttons:{
      url: 'https://5e5f3f418ac420de08353d0e--naughty-goldstine-601997.netlify.app'
    }
  },{
    title: 'Herd',
    description:"Anonymous social network for university students",
    image: require('~/assets/projects/herd.png'),
    roles: ['BackEnd', 'Mobile'],
    buttons:{
      appStore: "https://apps.apple.com/us/app/herd-campus-stories/id1441051038"
    }
  },{
    title: 'Craft.co (Demo)',
    description:"Shop modern products at huge discounts.",
    roles: ['FrontEnd'],
    image: require('~/assets/projects/craftco.png'),
    buttons:{
      url:"https://simpli-app.herokuapp.com/"
    },
  },{
    title: 'FlightDrop',
    description: "Flightdrop finds and alerts you on incredibly cheap flights, guaranteed to be 50-70% off regular price. ",
    image: require('~/assets/projects/flightdrop.jpg'),
    roles: ['FrontEnd', "Backend", "Mobile"],
    buttons:{
      appStore: "https://apps.apple.com/us/app/flightdrop-huge-flight-deals/id1325279425"
    }
  },{
    title: 'GPS Tracker',
    description: "GPS Tracker Responsive WebPage",
    image: require('~/assets/projects/gps-tracker.png'),
    roles: ['FrontEnd', 'Backend Integration'],
    buttons:{
      url:"http://www.gpstrackerls.com/"
    }
  },{
    title: 'Meloway',
    description: "Gastronomic tours website",
    image: require('~/assets/projects/meloway.png'),
    roles: ['FrontEnd', 'Backend Integration'],
    buttons:{
      url:"http://www.meloway.com/"
    }
  },{
    title: 'Maravillarte',
    description:"E-commerce for handicraft made items",
    image: require('~/assets/projects/maravillarte.png'),
    roles: ['FrontEnd', 'Backend']
  }],
}