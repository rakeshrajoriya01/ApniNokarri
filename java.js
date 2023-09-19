
//var label = document.querySelectorAll(".label");
function addrowpost() {
    var tableRow = document.getElementById("vacancy-table");
    var row = tableRow.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = document.getElementById("postname").value;
    cell2.innerHTML = document.getElementById("totalposts").value;
    document.getElementById("postname").value = "";
    document.getElementById("totalposts").value= '';
}
function qualification() {
    var qualification = document.getElementById("qualification");
    var rowa = qualification.insertRow(0);
    var cell3 = rowa.insertCell(0);
    var cell4 = rowa.insertCell(1);
    cell3.innerHTML = document.getElementById("postnamelist").value;
    var postqaualification = document.getElementById("postqaualification").value;
    var lines = postqaualification.split('\n');
    var ultoli = lines
        .filter(line => line.trim() !== '')
        .map(line => `<li>${line}</li>`)
        .join('');
    cell4.innerHTML = "<ul>"+ultoli+"</ul>";
    document.getElementById("postnamelist").value ='';
    document.getElementById("postqaualification").value ='';
}
function createlink() {
    var tablelink = document.getElementById("link-table");
    var row = tablelink.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var webLink = document.getElementById("web-link").value;
    cell1.innerHTML = document.getElementById("link-title").value;
    cell2.innerHTML = `<a href="${webLink}" rel="nofollow" target="_blank">Click Here</a>`;
    document.getElementById("web-link").value ='';
    document.getElementById("link-title").value ='';
}
function createHTML() {
    var name = document.getElementById("name").value;
    var title = document.getElementById("post-title").value;
    var label = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (var i = 0; i < checkboxes.length; i++) {
        label.push(checkboxes[i].value)
    }
    var shortInformation = document.getElementById("short-information").value;
    var title1 = document.getElementById("title1").value;
    var title2 = document.getElementById("title2").value;
    var title3 = document.getElementById("title3").value;

    var importantDates = document.getElementById('date').value;
    var lines = importantDates.split('\n');
    var ultoli = lines
        .filter(line => line.trim() !== '')
        .map(line => `<li>${line}</li>`)
        .join('');

    var appliFees = document.getElementById("fees").value;
    var feeslines = appliFees.split('\n');
    var feesli = feeslines
        .filter(line => line.trim() !== '')
        .map(line => `<li>${line}</li>`)
        .join('');

    var posts = document.getElementById("total-posts").value;

    var howtofill = document.getElementById("howtofill").value;
    var filllines = howtofill.split('\n');
    var fillli = filllines
        .filter(line => line.trim() !== '')
        .map(line => `<li>${line}</li>`)
        .join('');
    var agedate = document.getElementById("agedate").value;
    var agelimit = document.getElementById("agelimit").value;
    var agelines = agelimit.split('\n');
    var ageli = agelines
        .filter(line => line.trim() !== '')
        .map(line => `<li>${line}</li>`)
        .join('');
    var result = document.getElementById("result");
    var table = document.querySelector("#vacancy-table").outerHTML;
    var qualification = document.querySelector("#qualification").outerHTML;
    var linkTable = document.querySelector("#link-table").outerHTML;

    result.value = `
    Post Title : ${title}
    Post label : ${label}
    <p style='text-align: justify;'>${name}. ${shortInformation}</p>
    <p class='title'>${title1}</p>
    <p class='title1'>${title2}</p>
    <p class='title2'>${title3}</p>
    <h2>${name} Important Dates</h2>
    <ul>${ultoli}</ul>
    <h2>${name} Application Fees</h2>
    <ul>${feesli}</ul>
    <h2>${name} Age Limit as on ${agedate}</h2>
    <ul>${ageli}</ul>
    <h2>${name} Vacancy Details Total ${posts} Posts</h2>
    ${table}
    <h2>${name} Qualification Details</h2>
    ${qualification}
    <h2>How to Fill ${name} Online Form 2023</h2>
    <ul>${fillli}</ul>
    <p style="text-align: center; font-weight: bold;color: darkgreen;">Interested Candidates Can Read the Full Notification Before Apply Online.</p>
    <h2>Some Useful Important Links</h2>
    ${linkTable}
    `;
}
function reset(){
    location.reload();
}

