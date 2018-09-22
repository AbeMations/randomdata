var mouseO; //mouse is over gif
var htmlContents = document.documentElement.innerHTML;

var lasti = {num:"", say:""};
var locurl = {0:"api.openweathermap.org/data/2.5/weather?lat=", 1:"&lon=", 2:"&appid=490ad36885b8f3eddd59989baee6f344"};
  
var jsonurl = "https://raw.githubusercontent.com/AbeMations/pixdatabase/master/pixintents.json"; 
var pixget = undefined;
pixget = JSON.parse(localStorage.getItem("pixget"));
  
var namesurl = "https://raw.githubusercontent.com/AbeMations/pixdatabase/master/pixnamesdata.json";
var pixnames = undefined;
pixnames = JSON.parse(localStorage.getItem("pixnames"));
  
var caturl = "https://api.myjson.com/bins/17qcyc";
var pixcatfacts = undefined;
  
var classurl = "https://raw.githubusercontent.com/AbeMations/pixdatabase/master/classes8th.json";
var classj = undefined;
classj = JSON.parse(localStorage.getItem("classj"));
  
var ips = ["70.45.25.28", "209.133.216.186"];
var talkingto = "a stranger";  //Who The AI is talking to.
if (localStorage.getItem("username") != null) {
  talkingto = localStorage.getItem("username");
}
var isOwner = false;
  
var blocked = localStorage.getItem("blocked");
//blocked = true;
var tob = localStorage.getItem("tob");
if (tob == "NaN") {
  localStorage.setItem("tob", 0);
  tob = 0;
}
  
if (navigator.onLine) {
  pixget = JSON.parse(Get(jsonurl));
  localStorage.setItem("pixget", JSON.stringify(pixget));
  
  pixnames = JSON.parse(Get(namesurl));
  localStorage.setItem("pixnames", JSON.stringify(pixnames));
  
  pixcatfacts = JSON.parse(Get(caturl));
  
  classj = JSON.parse(Get(classurl));
  localStorage.setItem("classj", JSON.stringify(classj));
}

var pear = false; //If there are people around
  
function Get(yourUrl) {
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", yourUrl, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

function rem() {
  if (pixget == undefined) {
    pixget = JSON.parse(localStorage.getItem("pixget"));
  }
  if (pixnames == undefined) {
    pixnames = JSON.parse(localStorage.getItem("pixnames"));
  }
  var ips = ["70.45.25.28", "209.133.216.186"];
  
  $(document).ready(function(){  
  $('body').find('img[src$="https://cdn.rawgit.com/000webhost/logo/e9bd13f7/footer-powered-by-000webhost-white2.png"]').remove();
  });
}
rem();
  
var mobile = false; 
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  mobile = true;
}
function pixelMobile() {
  if (mobile) {
    if (window.innerHeight > window.innerWidth) {
      if (document.getElementById("gifi").width < 201) {
      } else {
        document.getElementById("gifi").width = 200;
        document.getElementById("gifi").height = 200;
      }
      document.getElementById("gifi").scrollIntoView();
    } else {
      if (document.getElementById("gifi").width < 201) {
      } else {
        document.getElementById("gifi").width = 100;
        document.getElementById("gifi").height = 100;
      }
      document.getElementById("gifi").scrollIntoView();
    }
  }
}

function pixelMBlur() {
  if (mobile) {
    if (window.innerHeight > window.innerWidth) {
      if (document.getElementById("gifi").width > 201) {
      } else {
        document.getElementById("gifi").width = 375;
        document.getElementById("gifi").height = 375;
      }
      document.getElementById("gifi").scrollIntoView();
    } else {
      if (document.getElementById("gifi").width > 201) {
      } else {
        document.getElementById("gifi").width = 300;
        document.getElementById("gifi").height = 300;
      }
      document.getElementById("gifi").scrollIntoView();
    }
  }
}

var timet;  
function pimgover() {
  setTimeout(stillMouseOvered, 2000);
}
  
function stillMouseOvered() {
  if (mouseO) {
    pixSay(pixget.steadyvar[0]["mouseover"]);
  }
}
  
function gifcl() {
  if (mobile) {
    pixSay(pixget.steadyvar[0].tap);
  } else {
    pixSay(pixget.steadyvar[0].click);
  }
}
  
function deleteU() {
  document.getElementById("userText").value = "";
  document.getElementById("userText").focus();
}
  
function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}
function editDistance(s1, s2) {
  
  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}
function pixSay(says) {
  document.getElementById("pixeltext").innerText = says;
}
  
function cbl() {
  if (blocked == "true") {
    if (localStorage.getItem("blocked") != "true") {
      localStorage.setItem("blocked", "true");
    }
    if (isOwner != true) {
      document.getElementsByTagName("body")[0].onload = function() { document.write("<h1>YOU ARE BANNED!</h1><h5>yay</h5>") };
      document.write("<h1>YOU ARE BANNED!</h1><h5>yay</h5>");
    }
  } else {
    document.getElementById("gifi").style.display = "block";
  }
}
  
function delB() {
  block = false;
  tob = 0;
  localStorage.removeItem("tob");
  localStorage.removeItem("blocked");
}
  
function addT(st) {
  pixget.qna[pixget.qna.length] = JSON.parse(st);
}
  
function tobp(par) {
  if (localStorage.getItem("tob") == null) {
    if (tob >-1 || tob < 10) {
    } else {
      tob = 1;
    }
    localStorage.setItem("tob", tob);
  }
  if (tob != localStorage.getItem("tob")) {
    if (localStorage.getItem("tob") < tob) {
      localStorage.setItem("tob", tob);
    } else {
      tob = parseInt(localStorage.getItem("tob"));
    }
  }
  if (tob >-1 || tob < 10) {
  } else {
    tob = 1;
    localStorage.setItem("tob", tob);
  }
  tob = parseInt(tob) + parseInt(par);
  localStorage.setItem("tob", parseInt(tob));
  if (tob > 9.8) {
    blocked = "true";
    cbl();
  }
}
 
var keystrokes = 0;
function typeEnterW() {
  ++keystrokes;
  setTimeout(reveal, 1000);
}
var allperc = [];
function reveal() {
  --keystrokes;
  if (keystrokes == 0) {
    
    var t = 0;
    var tallest = -1;
    for (t = 0; t < pixget.qna.length; t++) {
      allperc[t] = similarity(pixget.qna[t].qst.toLowerCase(), document.getElementById("userText").value.toLowerCase());
    }
    for (t = 0; t < allperc.length; t++) {
      allperc[t] = allperc[t] * 1000;
      allperc[t] = Math.floor(allperc[t]);
    }
    t = 0;
    tallest = allperc.indexOf(Math.max(...allperc));
    var needsay = "";
    if (isOwner) {
      
      if (Math.floor(Math.random() * 10) > 5) {
        needsay = pixget.qna[tallest].ansa;
      } else {
        needsay = pixget.qna[tallest].ansb;
      }
      
      if (pixget.qna[tallest].act == "null" || pixget.qna[tallest].act == "") {
      } else {
        eval(pixget.qna[tallest].act);  
      }
      
    } else {
      
      if (pixget.qna[tallest].foro == "true") {
        if (Math.floor(Math.random() * 10) > 5) {
          needsay = pixget.qna[tallest].stra;
        } else {
          needsay = pixget.qna[tallest].strb;
        }
        if (pixget.qna[tallest].sac == "null" || pixget.qna[tallest].sac == "") {
        } else {
          eval(pixget.qna[tallest].sac);  
        }
      } else {
        if (Math.floor(Math.random() * 10) > 5) {
          needsay = pixget.qna[tallest].ansa;
        } else {
          needsay = pixget.qna[tallest].ansb;
        }
        if (pixget.qna[tallest].act == "null" || pixget.qna[tallest].act == "") {
        } else {
          eval(pixget.qna[tallest].act);  
        }
      }
      
    }
    
    var splt = needsay.split(" ");
    if (splt.includes("$%vara") || splt.includes("$%vara,") || splt.includes("$%vara!") || splt.includes("$%vara?") || splt.includes("$%vara.")) {
      for (t = 0; t < splt.length + 1; t++) {
        if (splt[t] == "$%vara" || splt[t] == "$%vara!" || splt[t] == "$%vara," || splt[t] == "$%vara?" || splt[t] == "$%vara.") {
          //console.log("Has $%vara");
          var rep = splt[t].substring(6,7);
          if (pixget.qna[tallest].vari.substring(0, 2) == "$%") {
            equa = eval((pixget.qna[tallest].vari).substring(2, (pixget.qna[tallest].vari).length));
          } else {
            var equa = pixget.steadyvar[0][pixget.qna[tallest].vari];
          }
          
          if (equa.substring(0,2) == "$%") {
            splt[t] = eval(equa.substring(2,equa.length)) + rep;
          } else {
            if (equa == talkingto) {
              equa = talkingto;
            }
            splt[t] = equa + rep;
          }
          if (t < 1) {
            var ups = splt[t];
            splt[t] = ups.toLowerCase();
            var exl = splt[t].substring(1,splt[t].length());
          }
        }
      }
    }
    
    lasti.num = tallest;
    lasti.say = splt.join(' ');
    
    console.log("Intent Number: " + tallest);
    pixSay(splt.join(' '));
  }
}  
  
var element = document.getElementById("computerIp");
var elementb = document.getElementById("pixeltext");
var elementc = document.getElementById("deleteU");
if (window.innerHeight > window.innerWidth) {
  element.style.display = "none";
  if (mobile) {
    document.getElementById("gifi").width = 375;
    document.getElementById("gifi").height = 375;
  }
} else {
  element.style.display = "block";
  if (mobile) {
    document.getElementById("gifi").width = 300;
    document.getElementById("gifi").height = 300;
  }
}
  
window.addEventListener("orientationchange", function() {
if (window.innerHeight > window.innerWidth) {
  element.style.display = "none";
  if (mobile) {
    document.getElementById("gifi").width = 375;
    document.getElementById("gifi").height = 375;
  }
} else {
  element.style.display = "block";
  if (mobile) {
    document.getElementById("gifi").width = 300;
    document.getElementById("gifi").height = 300;
  }
}
});
