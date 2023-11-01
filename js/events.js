
const monthLookup = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
}

function createEvents(){
    events.forEach(addEvent);
}

function addEvent(evnt) {
    let season = evnt.season;
    let title = evnt.title;
    let desc = evnt.description;
    let presenterBio = evnt.presenterBio;
    let date = evnt.date;
    let splitDate = date.split("/");
    let day = splitDate[0]
    let monthNum = splitDate[1];
    let month = monthLookup[monthNum];
    let time = evnt.time;

    let img = evnt.fileName;
    if (img == ""){
        img = "no-image.jpg";
    }

    let eventsTemplate = `

    <div class="single-event media pb-70"><img class="img-fluid d-flex mr-3" src=../files/${img} width=195px height=180px>
        <div class=dates><span>${day}</span>
            <p>${month}</div>
            <div class="media-body align-self-center">
                <h4 class=mt-0>${title}</h4>
                <p class=event-desc>${desc}
            <div class=meta-bottom>
                <div class=details><i class="fas fa-comments">&nbsp;</i>${presenterBio}</div>
                <div class=details><i class="fas fa-calendar">&nbsp;</i>${date}, ${time}</div>
            </div>
        </div>
    </div>

`;


    let eventList = document.getElementById("eventList");

    if(season === general.season) {
        let eDiv = document.createElement("div");
        eDiv.classList.add("col-lg-6");
        eDiv.innerHTML = eventsTemplate;
        eventList.appendChild(eDiv);
    }
}

function createNextEvents(){
    events.forEach(addNextEvent);
}

let nextCounter = 0;

function addNextEvent(evnt) {
    let season = evnt.season;
    let title = evnt.title;
    let desc = evnt.description;
    let presenterBio = evnt.presenterBio;
    let date = evnt.date;
    let splitDate = date.split("/");
    let day = splitDate[0]
    let monthNum = splitDate[1];
    let year = splitDate[2];
    let month = monthLookup[monthNum];
    let time = evnt.time;

    let img = evnt.fileName;
    if (img == ""){
        img = "no-image.jpg";
    }

    let eventsTemplate = `

    <div class="single-event media pb-70"><img class="img-fluid d-flex mr-3" src=./files/${img} width=195px height=180px>
        <div class=dates><span>${day}</span>
            <p>${month}</div>
            <div class="media-body align-self-center">
                <h4 class=mt-0>${title}</h4>
                <p class=event-desc>${desc}
                <div class=meta-bottom>
                    <div class=details><i classe="fas fa-comments">&nbsp;</i>${presenterBio}</div>
                    <div class=details><i class="fas fa-calendar">&nbsp;</i>${date}, ${time}</div>
            </div>
        </div>
    </div>

`;


    let eventList = document.getElementById("nextEvents");

    if(season === general.season) {
        eDate = new Date(year, monthNum -1 , day);
        nDate = new Date();
        if (eDate > nDate) {
            if (nextCounter != 2) {
                let eDiv = document.createElement("div");
                eDiv.classList.add("col-lg-6");
                eDiv.innerHTML = eventsTemplate;
                eventList.appendChild(eDiv);
                nextCounter++;
            }
        }
    }
}

function createPreviousEvents(){
    events.slice().reverse().forEach(addPreviousEvent);
}

function addPreviousEvent(evnt) {
    let season = evnt.season;
    let title = evnt.title;
    let desc = evnt.description;
    let presenterBio = evnt.presenterBio;
    let date = evnt.date;
    let splitDate = date.split("/");
    let day = splitDate[0]
    let monthNum = splitDate[1];
    let year = splitDate[2];
    let month = monthLookup[monthNum];
    let time = evnt.time;

    let img = evnt.fileName;
    if (img == ""){
        img = "no-image.jpg";
    }

    let eventsTemplate = `
    
    <div class="single-event media pb-70"><img class="img-fluid d-flex mr-3" src=../files/${img} width=195px height=180px>
        <div class=dates><span>${day}</span>
            <p>${month}</div>
            <div class="media-body align-self-center">
                <h4 class=mt-0>${title}</h4>
                <p class=event-desc>${desc}
                <div class=meta-bottom>
                <div class=details><i class="fas fa-comments">&nbsp;</i>${presenterBio}</div>
                <div class=details><i class="fas fa-calendar">&nbsp;</i>${date}, ${time}</div>
            </div>
        </div>
    </div>

`;


    let eventList = document.getElementById("previousEvents");

    eDate = new Date(year, monthNum -1 , day);
    nDate = new Date();
    if (eDate < nDate) {
        let eDiv = document.createElement("div");
        eDiv.classList.add("col-lg-12");
        eDiv.innerHTML = eventsTemplate;
        eventList.appendChild(eDiv);
    }


    /*if(season != general.season) {
        let eDiv = document.createElement("div");
        eDiv.classList.add("col-lg-12");
        eDiv.innerHTML = eventsTemplate;
        eventList.appendChild(eDiv);
    }*/
}

