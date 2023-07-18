const x = new XMLHttpRequest();
x.open("GET", "task.json");

x.onload = function () {
    const data = JSON.parse(this.responseText);
    console.log(data);

    var table = document.getElementsByTagName("tbody")[0];
    for (let i = 0; i <= 3; i++) {
        var Row = document.createElement("tr");
        table.appendChild(Row);

        var Name = document.createElement("td");
        Name.textContent = data[i].Name;
        Row.appendChild(Name);

        var Age = document.createElement("td");
        Age.textContent = data[i].Age;
        Row.appendChild(Age);

        var Major = document.createElement("td");
        Major.textContent = data[i].Major;
        Row.appendChild(Major);

        var University = document.createElement("td");
        University.textContent = data[i].University;
        Row.appendChild(University);

        var Image = document.createElement("td");
        var image = document.createElement("img");
        image.src = data[i].Image;
        // image.style.width = "200px";
        Image.appendChild(image);
        Row.appendChild(Image);
    }
};

x.send();