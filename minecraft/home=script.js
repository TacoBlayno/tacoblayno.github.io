var minecraftSectionListEl = document.getElementById("minecraft-section-list");
    var minecraftSectionDiscriptionEl = document.getElementById("minecraft-section-description");
    
    var dataBase = [
      shapesCommands = {
        name: "Shape Commands Behavior Pack",
        id: "shapes-commands",
        description: "This behavior pack adds shape filling commands to Minecraft.",
        src: "https://tacoblayno.github.io/minecraft/shape-commands.html"
      },
      parkourGenerator = {
        name: "Parkour Generator Behavior Pack",
        id: "parkour-generator",
        description: "Generates parkour courses. Some of these courses are bound to certain zones and some are not. Some have a designated start place; some do not. Some Have time limits, but others do not. Some are runing at all times their chunks are open, but others are not. Some disappear, but others stay.",
        src: "https://tacoblayno.github.io/minecraft/parkour-generator.html"
      }
    ];
    
    function travel() {
      if (minecraftSectionListEl.value === "select") {
        alert("You have not selected anything, yet you are attempting to travel to a link!");
      } else {
        for (let index = 0; index < dataBase.length; index++) {
          if (dataBase[index]["id"] === minecraftSectionListEl.value) {
            window.open(dataBase[index]["src"]);
          }
        }
      }
    }
    
    function information() {
      if (minecraftSectionListEl.value === "select") {
        alert("You have not selected anything, yet you are attempting to access some information about a page!");
      } else {
        for (let index = 0; index < dataBase.length; index++) {
          if (dataBase[index]["id"] === minecraftSectionListEl.value) {
            clearChildren(minecraftSectionDiscriptionEl);
            
            let name = document.createElement("h3");
            let description = document.createElement("p");
            
            name.appendChild(document.createTextNode(dataBase[index]["name"]));
            description.appendChild(document.createTextNode(dataBase[index]["description"]));
            
            minecraftSectionDiscriptionEl.appendChild(name);
            minecraftSectionDiscriptionEl.appendChild(description);
          }
        }
      }
      
      function clearChildren(element) {
        if (typeof(element) === "string") {
          var div = document.getElementById(element);
        } else {
          div = element;
        }
        
        while(div.firstChild) {
          div.removeChild(div.firstChild);
        }
      }
    }
