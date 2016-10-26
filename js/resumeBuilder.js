/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio =
{
  "name": "Pradeep Kumar",
  "role" : "web-developer",
  "contacts" :
  {
  "mobile":'8489256183',
  "email":"pradeepraghu9427@gmail.com",
  "twitter":"@pradeep9427rpk",
  "github":"rpkraghu7",
  "location":"krishnagiri"
  },
  "welcomeMessage":"Vanakkam vanthanam",
  "skills": ["web-developer","programmer","js"],
  "biopic": "images/fry.jpg"
};

bio.display=function()
{
  var formattedname= HTMLheaderName.replace("%data%",bio.name);
  var formattedrole = HTMLheaderRole.replace("%data%",bio.role);
  var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var github = HTMLgithub.replace("%data%",bio.contacts.github);
  var email =HTMLemail.replace("%data%",bio.contacts.email);
  var twitter =HTMLtwitter.replace("%data%",bio.contacts.twitter);
  var location1 =HTMLlocation.replace("%data%",bio.contacts.location);
  var welcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  var pictureURL = HTMLbioPic.replace("%data%",bio.biopic);

$("#header").append(HTMLskillsStart);
  for (var i=0; i<bio.skills.length;i++) {
    var formattedskills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedskills);
  }

  $("#header").prepend(formattedrole);
  $("#header").prepend(formattedname);
  $("#header").append(pictureURL);
  $("#topContacts").append(mobile);
  $("#topContacts").append(github);
  $("#topcontacts").append(email);
  $("#topContacts").append(twitter);
  $("#topcontacts").append(location1);
  $("#footerContacts").append(mobile);
  $("#footerContacts").append(github);
  $("#footerContacts").append(email);
  $("#footerContacts").append(twitter);
  $("#footerContacts").append(location1);
  $("#header").append(welcomeMessage);
};

bio.display();

var education={

    "schools":
    [
      {
         "name":"kurinji matric higher secondary school",
        "degree": "10th",
        "majors": ["Matriculation","Hindi"],
        "location":"namakkal",
        "dates": '2010',
        "url":"https://www.kurinjischoolnkl.in/cgi-sys/suspendedpage.cgi"
    },
    {
      "name":"kurinji higher secondary school",
      "degree" : "12th",
      "majors":["Maths","Biology"],
      "location":"namakkal",
      "dates": '2012',
      "url":"https://www.kurinjischoolnkl.in/cgi-sys/suspendedpage.cgi"
    },
    {
      "name":"Anna University(CEG campus)",
      "degree": "B.E",
      "majors": ["Biomedical Engineering","Matlab"],
      "location": "chennai",
      "dates": '2016',
      "url":"https://www.annauniv.edu/"
    }
  ],
    "onlineCourses":
    [
      {
      "school": "udacity",
      "title":"online resume",
      "dates": '2016',
      "url":"https://github.com/rpkraghu7/frontend-nanodegree-resume"
    },{
      "school":"udacity",
      "title":"portfolio website",
      "dates": '2016',
      "url":"https://github.com/rpkraghu7/portfolio"
    }
  ]
};

education.display= function() {


    $("#education").append(HTMLschoolStart);
    for ( var i=0;i< education.schools.length ;i++)
     {
      var format =HTMLschoolName.replace("#",education.schools[i].url);
      format = format.replace("%data%",education.schools[i].name);
      $(".education-entry:last").append(format);
      format = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
      $(".education-entry:last").append(format);
      format= HTMLschoolLocation.replace("%data%",education.schools[i].location);
      $(".education-entry:last").append(format);
      format =HTMLschoolDates.replace("%data%",education.schools[i].dates);
      $(".education-entry:last").append(format);
      format =HTMLschoolName.replace("#",education.schools[i].url);
      for (var j=0;j<education.schools[i].majors.length;j++)
          {
          format = HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
          $(".education-entry:last").append(format);
        }
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (i=0; i< education.onlineCourses.length ; i++)
    {
      var format = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
      $(".education-entry:last").append(format);
      format = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
      $(".education-entry:last").append(format);
      format =HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
      $(".education-entry:last").append(format);
      format = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
      $(".education-entry:last").append(format);
    }

};

education.display();

var work = {
  "jobs" :
  [
     {
    "title" : "System-engineer",
    "employer" : "Infosys",
    "location" : "Bangalore",
    "dates" : "2016",
    "description": "got hired for infosys from campus"
  },
  {
    "title" : "web-developer",
    "employer" : "udacity",
    "location" : "Chennai",
    "dates" : "2016",
    "description" : "got shifted to udacity"
  }
]
};

work.display=function()
{
for (var i=0;i<work.jobs.length; i++)
{
  $("#workExperience").append(HTMLworkStart);

      var formattedemployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
      var formattedtitle= HTMLworkTitle.replace("%data%",work.jobs[i].title);
      var formattedlocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
      var formatteddtaes = HTMLworkDates.replace("%data%",work.jobs[i].dates);
      var formatteddescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
      var formattedemployertitle = formattedemployer +formattedtitle;
      $(".work-entry:last").append(formattedemployertitle);
      $(".work-entry:last").append(formatteddtaes);
      $(".work-entry:last").append(formatteddescription);
      $(".work-entry:last").append(formattedlocation);
}
};


work.display();
$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName(){
  var name=bio.name;
  var name1=name.trim().split(" ");
  name1[0]=name1[0].slice(0,1).toUpperCase()+name1[0].slice(1).toLowerCase();
  name1[1]=name1[1].toUpperCase();
  var Internationalize = name1.join(" ");

  return Internationalize;
}

var projects = {
  "projects" :
  [
    {
    "title": "portfolio project",
    "dates": "2016",
    "description": "In this project,I have built my first responsive portfolio project using responsive images including grunt",
      "images" : ["images/197x148.gif","images/197x148.gif"]
    //"github-link" : "https://github.com/rpkraghu7/portfolio.git"
  },
  {
    "title": "html project",
    "dates": '2016',
    "description": "In this project,I have built my first html mockup page.",
    "images" : ["images/197x148.gif","images/197x148.gif"]
  }
]
};

projects.display=function()
{
  $("#projects").append(HTMLprojectStart);
for ( var i=0;i<projects.projects.length ; i++)
{
      var formattedtitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      $(".project-entry:last").append(formattedtitle);

      var formatteddate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      $(".project-entry:last").append(formatteddate);

      var format =HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      $(".project-entry:last").append(format);

      for (var j =0;j<projects.projects[i].images.length;j++)
        {
          var formatedimage=HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
          $(".project-entry:last").append(formatedimage);
        }
      }

};

projects.display();

$("#mapDiv").append(googleMap);
