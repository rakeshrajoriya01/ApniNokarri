
//var label = document.querySelectorAll(".label");
function addrowpost() {
    var tableRow = document.getElementById("vacancy-table");
    var row = tableRow.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = document.getElementById("postname").value;
    cell2.innerHTML = document.getElementById("totalposts").value;
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
}
function createlink() {
    var tablelink = document.getElementById("link-table");
    var row = tablelink.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var webLink = document.getElementById("web-link").value;
    cell1.innerHTML = document.getElementById("link-title").value;
    cell2.innerHTML = `<a href="${webLink}" rel="nofollow" target="_blank">Click Here</a>`;
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

    var result = document.getElementById("result");
    postTable = document.getElementById("vacancy-table");
    result.innerHTML = `<h2>${name} Vacancy Details Total ${posts} Posts</h2>`+ `${postTable}`;
}
