/* global Vue*/
const projects =[{
	name:"Random Quote machine",
	description:"",
	link:"https://fega.github.io/freecodecamp/random-quote",
	img:"",
	category:"freecodecamp",
	technologies:["Materialize","Axios"],
},{
	name:"Local weather app",
	description:"",
	link:"https://fega.github.io/freecodecamp/local-weather",
	img:"",
	category:"freecodecamp",

	technologies:["Materialize","Axios"],
}, {
	name:"GPS tracker webpage",
	description:"A Front-End project developed with Gulp, Handlebars and Materialize for a Colombian GPS company, as a curiosity, my decisions in hosting and domain provider saves the company from a 1 week of problems in the service provided and also from a couple of lawsuits.",
	link:"http://www.gpstrackerls.com/",
	img:"img/gps-tracker.png",
	category:"frontend",
	technologies:["Materialize","Handlebars","Schema.org","Gulp"],
},{
	name:"Espractica Landing page",
	description:"A Front-End project developed with Gulp, Handlebars and Materialize to perform a market research in online education",
	link:"http://espractica.github.io/",
	img:"img/espractica.png",
	category:"frontend",
	technologies:["Materialize","Handlebars","Schema.org","Gulp"],
}, {
	name:"Foundation Rock event showcase",
	description:"A simple static HTML page, made with the Foundation framework",
	link:"https://fega.github.io/frontend/foundation",
	img:"img/rock.png",
	category:"frontend",
	technologies:["Foundation"],
},{
	name:"Bootstrap Shop showcase",
	description:"A simple static HTML page, made with the Bootstrap framework",
	link:"https://fega.github.io/frontend/bootstrap",
	img:"img/pebbleshop.png",
	category:"frontend",
	technologies:["Bootstrap"],
},{
	name:"Arduair Project",
	description:"My Environmental engineering undergraduate project, it combines my career with full-stack development and the development of a physic device (with Arduino)",
	link:"http://arduair.herokuapp.com",
	img:"img/arduair.png",
	category:"fullstack",
	labels:["Spa arquitecture"],
	technologies:["Node.js","Jquery","Arduino","Moment.js","Lodash","MongoDb"]
},{
	name:"Meloway webpage",
	description:"A full-stack project developed with vue.js, Node.js and materialize for a Colombian based startup",
	link:"http://www.meloway.com/",
	img:"./img/meloway.png",
	category:"fullstack",
	labels:["Spa arquitecture","Rest API"],
	technologies:["Materialize","Axios","Vue.js","Express.js","Babel.js","Gulp"],
},{
	name:"Maravillarte eShop",
	description:"A full-stack project developed with Jquery.js, Express.js and materialize for a Colombian based startup",
	link:"http://www.maravillarte.co/",
	img:"./img/maravillarte.png",
	category:"fullstack",
	labels:["Spa arquitecture","Rest API"],
	technologies:["Materialize","Express.js","Babel.js","Gulp"],
},{
	name:"Calculating pi!",
	description:"A curious project that shows the basel method to get the Pi Number",
	link:"/quantum-fracture ",
	img:"./img/pi.png",
	category:"frontend",
	// labels:["Spa arquitecture","Rest API"],
	technologies:["Materialize","Express.js","Babel.js","Gulp"],
},{
	name:"express-ion",
	description:"A mvc framework build on top of express and inspired by laravel. ",
	link:"",
	img:"",
	category:"backend",
	// labels:["Spa arquitecture","Rest API"],
	technologies:["Express.js","Babel.js","Gulp"],
},]

const categories =[{
	name:"Full-stack",
	description:"My Full-stack projects made in Javascript, Django, On Rails, etc",
	category:"fullstack"
},{
	name:"Front-End",
	description:"Some projects made in different frameworks or technologies, Vue, React, Materialize, Bootstrap, Foundation, etc",
	category:"frontend",
},
	// {
	// 	name:"FreeCodeCamp",
	// 	description:'A selection of some projects made for the freeCodeCamp web page. to see all projects, <a  href="https://fega.github.io/freecodecamp/">click here to see al my freeCodeCamp projects</a>',
	// 	category:"freecodecamp"
	// },
	// {
	// 	name:"Back-end",
	// 	description:'',
	// 	category:"backend"
	// },
]

const social=[
	// {
	// 	name:"Facebook",
	// 	alt:"Fabian Gutierrez's Facebook Fan page",
	// 	link:"#",
	// 	icon:"img/icons/facebook.png",
	// 	tooptip:"",
	// 	color:"",
	// },
	{
		name:"GitHub",
		alt:"Fabian Gutierrez's GitHub Link",
		link:"https://github.com/fega",
		icon:"img/icons/github.png",
		tooptip:"",
		color:"",
	}
	// ,{
	// 	name:"Medium",
	// 	alt:"Fabian Gutierrez's Medium blog",
	// 	link:"#",
	// 	icon:"img/icons/medium.png",
	// 	tooptip:"",
	// 	color:"",
	// }
	// ,{
	// 	name:"Youtube",
	// 	alt:"Fabian Gutierrez's Youtube channel",
	// 	link:"#",
	// 	icon:"img/icons/youtube.png",
	// 	tooptip:"",
	// 	color:"",
	// }
]
var skills = [{
	name: "Linux management",
	icon: "",
	tooptip: "",
	category: "",
	level: 1,
	main: false
}, {
	name: "Amazon AWS management",
	icon: "",
	tooptip: "",
	category: "",
	level: 1,
	main: false
},{
	name: "Git workflow",
	icon: "",
	tooptip: "",
	category: "",
	level: 2,
	main: false
},{
	name: "Node.js",
	icon: "",
	tooptip: "",
	category: "",
	level: 4,
	main: false
},{
	name: "express.js",
	icon: "",
	tooptip: "",
	category: "",
	level: 4,
	main: false
},{
	name: "Vue.js",
	icon: "",
	tooptip: "",
	category: "",
	level: 4,
	main: false
}]

Vue.component("sections-c",{
	template:"#sections-t",
	props:["categories","projects"],
	methods:{
		categoryFilter(array,category){
			return array.filter((item)=>item.category===category)
		}
	}
})

Vue.component("nav-c",{
	template:"#nav-t",
	props:["categories","blog","burger"],
	mounted(){
		$(".button-collapse").sideNav()
		$("#mobile-nav>li").sideNav('hide')
		$('.dropdown-button').dropdown()
	}
})

Vue.component("social-c",{
	template:"#social-t",
	props:["social"]
})

var vm = new Vue({
	el: "main",
	data:{
		projects,
		categories,
		social,
	}
})
