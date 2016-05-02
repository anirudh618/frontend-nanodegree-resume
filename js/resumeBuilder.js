/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
//var formattedRole = HTMLheaderRole.replace("%data%",role)


var bio= {
	"name": "Anirudh Reddy",
	"role": "Analyst",
	"contacts":{
		"mobile": "8479134167",
		"email": "Anirudh618@gmail.com",
		"github":"Anirudh618",
		"location": "Chantilly,Virginia"
	},
	"welcome message": "Welcome to the jungle",
	"skills": [

		"Stats","analytics","Sleep Enthusiast"	
	],
	"bioPic":"http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg"
};

var education ={
	"schools":[
		{
			"name":"Loyola University Chicago",
			"location":"Chicago, Illinois",
			"degree": "Bachelors",
			"dates": 2013,
			"major":"Finance & Economics",
			"url": "www.luc.edu"

		},
		{
			"name": "Stevenson High School",
			"location": "Lincolnshire,Illinois",
			"degree": "High School",
			"major":"High School Diploma",
			"dates": 2009,
			"url": "d125.org"
		}
	],
	"onlineCourses":[{
		"title": "Javascript Basics",
		"school": "Udacity",
		"dates": 2016,
		"url": "www.udacity.com"
	}]

}

var work ={
	"jobs":[
		{"employer":"Allstate",
		"title":"Financial Analyst",
		"location":"Chantilly, Virgnia",
		"dates": "Feb 2014- Apr 2016",
		"description": "Worked as an analyst to the business of allsate.Primarily dealing with sales analytics and data analysis"
	},
		{"employer":"Morgan Stanley",
		"title":"Operations Analyst",
		"location":"Baltimore, Maryland",
		"dates": "Aug 2013- Feb 2014",
		"description": "Worked as an analyst to the business of morgan stanley.Dealing with trade support"
	}

	]

}

var projects = {
	"projects": [
	{
		"title": "Mock website",
		"dates": 2016,
		"description":"mock website resume",
		"images":[
		"http://www.i4uinc.com/images/Buttons/website.png",
		"http://blog.brillskills.com/wp-content/uploads/2013/04/Homer-Simpson-Computer.png"
		]
	}

	]
	
}

//skills section
if(bio.skills.length >0){

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}


//work section
function displayWork(){
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates= HTMLworkDates.replace("%data%",work.jobs[job].dates);
	var formattedDescription= HTMLworkDescription.replace("%data",work.jobs[job].description);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);
	
	}
}
displayWork();

//Bio
var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
var formattedbioPic =HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").prepend(formattedbioPic);


//Top Contacts
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedLocation);


//internatinoalize name
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1]= name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" " +name[1];

}

$('#main').append(internationalizeButton);

//projects section
projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates =HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription =HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length >0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedImage);
				
			}
		}
	}
}

projects.display();


//education below
function displayEducation(){
for (school in education.schools) {
	$("#education").append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
	$(".education-entry:last").append(formattedSchoolName);

	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
	$(".education-entry:last").append(formattedSchoolDegree);

	var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
	$(".education-entry:last").append(formattedSchoolDates);

	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
	$(".education-entry:last").append(formattedSchoolLocation);
	
	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
	$(".education-entry:last").append(formattedSchoolMajor);
	}
}
displayEducation();


//letsconnect information below

$("#footerContacts").append(formattedMobile);

$("#footerContacts").append(formattedEmail);

$("#footerContacts").append(formattedGithub);

$("#footerContacts").append(formattedLocation);



//map
$("mapDiv").append(googleMap);