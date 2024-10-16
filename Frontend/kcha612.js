let userisLoggedIn = false;

const showhome = () => {
    document.getElementById("home").style.display = "block";
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("nzsl").style.display = "none";
    document.getElementById("events").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("Log").style.display = "none";

    document.getElementById("hometab").style.backgroundColor = "white";
    document.getElementById("Guestbooktab").style.backgroundColor = "lightgrey";
    document.getElementById("NZSLtab").style.backgroundColor = "lightgrey";
    document.getElementById("Eventstab").style.backgroundColor = "lightgrey";
    document.getElementById("Logintab").style.display = "none";
    document.getElementById("Registertab").style.backgroundColor = "lightgrey";
    document.getElementById("LogTab").style.backgroundColor = "lightgrey";
    fetchVersion();
}

const showguest = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("guestbook").style.display = "block";
    document.getElementById("nzsl").style.display = "none";
    document.getElementById("events").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("Log").style.display = "none";

    document.getElementById("hometab").style.backgroundColor = "lightgrey";
    document.getElementById("Guestbooktab").style.backgroundColor = "white";
    document.getElementById("NZSLtab").style.backgroundColor = "lightgrey";
    document.getElementById("Eventstab").style.backgroundColor = "lightgrey";
    document.getElementById("Logintab").style.display = "none";
    document.getElementById("Registertab").style.backgroundColor = "lightgrey";
    document.getElementById("LogTab").style.backgroundColor = "lightgrey";
    fetchCommentsAndPopulateIframe();
    fetchVersion();
}

const showNZSL = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("nzsl").style.display = "block";
    document.getElementById("events").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("Log").style.display = "none";

    document.getElementById("hometab").style.backgroundColor = "lightgrey";
    document.getElementById("Guestbooktab").style.backgroundColor = "lightgrey";
    document.getElementById("NZSLtab").style.backgroundColor = "white";
    document.getElementById("Eventstab").style.backgroundColor = "lightgrey";
    document.getElementById("Logintab").style.display = "none";
    document.getElementById("Registertab").style.backgroundColor = "lightgrey";
    document.getElementById("LogTab").style.backgroundColor = "lightgrey";
    fetchsigns();
    fetchVersion();
}

const showlogin = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("nzsl").style.display = "none";
    document.getElementById("events").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("Log").style.display = "none";

    document.getElementById("hometab").style.backgroundColor = "lightgrey";
    document.getElementById("Guestbooktab").style.backgroundColor = "lightgrey";
    document.getElementById("NZSLtab").style.backgroundColor = "lightgrey";
    document.getElementById("Eventstab").style.backgroundColor = "lightgrey";
    document.getElementById("Logintab").style.display = "none";
    document.getElementById("Registertab").style.backgroundColor = "lightgrey";
    document.getElementById("LogTab").style.backgroundColor = "lightgrey";
    fetchVersion();
}

const showregister = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("nzsl").style.display = "none";
    document.getElementById("events").style.display = "none";
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("Log").style.display = "none";

    document.getElementById("hometab").style.backgroundColor = "lightgrey";
    document.getElementById("Guestbooktab").style.backgroundColor = "lightgrey";
    document.getElementById("NZSLtab").style.backgroundColor = "lightgrey";
    document.getElementById("Eventstab").style.backgroundColor = "lightgrey";
    document.getElementById("Logintab").style.display = "none";
    document.getElementById("Registertab").style.backgroundColor = "white";
    document.getElementById("LogTab").style.backgroundColor = "lightgrey";
    fetchVersion();
}

const showevents = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("nzsl").style.display = "none";
    document.getElementById("events").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("Log").style.display = "none";

    document.getElementById("hometab").style.backgroundColor = "lightgrey";
    document.getElementById("Guestbooktab").style.backgroundColor = "lightgrey";
    document.getElementById("NZSLtab").style.backgroundColor = "lightgrey";
    document.getElementById("Eventstab").style.backgroundColor = "white";
    document.getElementById("Logintab").style.display = "none";
    document.getElementById("Registertab").style.backgroundColor = "lightgrey";
    document.getElementById("LogTab").style.backgroundColor = "lightgrey";
    getnumberevents();
    fetchVersion();
}

const showLog = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("nzsl").style.display = "none";
    document.getElementById("events").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("Log").style.display = "block";

    document.getElementById("hometab").style.backgroundColor = "lightgrey";
    document.getElementById("Guestbooktab").style.backgroundColor = "lightgrey";
    document.getElementById("NZSLtab").style.backgroundColor = "lightgrey";
    document.getElementById("Eventstab").style.backgroundColor = "lightgrey";
    document.getElementById("Logintab").style.display = "none";
    document.getElementById("Registertab").style.backgroundColor = "lightgrey";
    document.getElementById("LogTab").style.backgroundColor = "white";
    fetchVersion();
    fetchLogData()
}















function formatDate(dtstart, dtend) {
    const startYear = dtstart.substring(0, 4);
    const startMonth = dtstart.substring(4, 6);
    const startDay = dtstart.substring(6, 8);
    const startHour = dtstart.substring(9, 11);
    const startMinute = dtstart.substring(11, 13);

    const endYear = dtend.substring(0, 4);
    const endMonth = dtend.substring(4, 6);
    const endDay = dtend.substring(6, 8);
    const endHour = dtend.substring(9, 11);
    const endMinute = dtend.substring(11, 13);

    const startDate = new Date(Date.UTC(startYear, startMonth - 1, startDay, startHour, startMinute));
    const endDate = new Date(Date.UTC(endYear, endMonth - 1, endDay, endHour, endMinute));

    const options = { timeZone: 'Pacific/Auckland', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedStartDate = startDate.toLocaleString('en-US', options);
    const formattedEndDate = endDate.toLocaleString('en-US', options);

    return `${formattedStartDate} to ${formattedEndDate}`;
}



function getnumberevents() {
    const eventsContainer = document.getElementById('eventsContainer');
    eventsContainer.innerHTML = ''; 
    fetch('https://cws.auckland.ac.nz/nzsl/api/EventCount')
        .then(response => response.json())
        .then(eventCount => {
            for (let i = 0; i < eventCount; i++) {
                fetch(`https://cws.auckland.ac.nz/nzsl/api/Event/${i}`)
                    .then(response => response.text())
                    .then(data => {
                        const lines = data.split('\n');
                        let summary = '';
                        let description = '';
                        let dtstart = '';
                        let dtend = '';
                        let location = '';

                        lines.forEach(line => {
                            if (line.startsWith('SUMMARY:')) {
                                summary = line.substring(8);
                            } else if (line.startsWith('DESCRIPTION:')) {
                                description = line.substring(12);
                            } else if (line.startsWith('DTSTART:')) {
                                dtstart = line.substring(8);
                            } else if (line.startsWith('DTEND:')) {
                                dtend = line.substring(6);
                            } else if (line.startsWith('LOCATION:')) {
                                location = line.substring(9);
                            }
                        });

                        const formattedDate = formatDate(dtstart, dtend);

                        const eventDiv = document.createElement('div');
                        eventDiv.classList.add('event');

                        const eventTitle = document.createElement('h3');
                        eventTitle.textContent = summary;

                        const eventDescription = document.createElement('p');
                        eventDescription.textContent = description;

                        const eventDate = document.createElement('p');
                        eventDate.textContent = `Date: ${formattedDate}`;

                        const eventLocation = document.createElement('p');
                        eventLocation.textContent = `Location: ${location}`;

                        const addToCalendarButton = document.createElement('button');
                        addToCalendarButton.textContent = 'Add to Calendar';
                        addToCalendarButton.onclick = () => {
                            const eventData = {
                                name: summary,
                                description: description,
                                date: dtstart
                            };
                            addToCalendar(eventData);
                        };

                        eventDiv.appendChild(eventTitle);
                        eventDiv.appendChild(eventDescription);
                        eventDiv.appendChild(eventDate);
                        eventDiv.appendChild(eventLocation);
                        eventDiv.appendChild(addToCalendarButton);

                        eventsContainer.appendChild(eventDiv);
                    })
                    .catch(error => console.error('Error fetching event:', error));
            }
        })
        .catch(error => console.error('Error fetching event count:', error));
}



function addToCalendar(eventData) {
    const eventTitle = eventData.name;
    const eventDescription = eventData.description;
    const eventDate = new Date(eventData.date);

    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}${month}${day}`;
    }

    const iCalString = `
        BEGIN:VCALENDAR
        PRODID:-//Your Organization//Your Website//EN
        VERSION:2.0
        METHOD:PUBLISH
        BEGIN:VEVENT
        DTSTART:${formatDate(eventDate)}T000000
        DTEND:${formatDate(eventDate)}T235959
        SUMMARY:${eventTitle}
        DESCRIPTION:${eventDescription}
        END:VEVENT
        END:VCALENDAR
    `;
    const iCalDataUri = `data:text/calendar;charset=utf-8,${encodeURIComponent(eventData)}`;

    const modal = document.getElementById('confirmationModal');

    modal.style.display = 'block';

    const confirmButton = document.getElementById('confirmAdd');
    const cancelButton = document.getElementById('cancelAdd');
    const modalMessage = document.getElementById('confirmationModalMessage');
    const modalCloseButton = modal.getElementsByClassName('close')[0];

    confirmButton.addEventListener('click', () => {
        modalMessage.textContent = `'${eventTitle}' added to your calendar.`;
        const downloadLink = document.createElement('a');
        downloadLink.href = iCalDataUri;
        downloadLink.download = `${eventTitle}.ics`;
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();

        modal.style.display = 'none';
    });

    cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modalCloseButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}










function fetchsigns() {
    const fetchpromise = fetch('https://cws.auckland.ac.nz/nzsl/api/AllSigns');
    const streampromise = fetchpromise.then(response => response.json());
    streampromise.then(data => {
        const signsContainer = document.getElementById('signsContainer');
        signsContainer.innerHTML = ''; 

        data.forEach(sign => {
            const signDiv = document.createElement('div');
            signDiv.classList.add('sign');

            const signDescription = document.createElement('p');
            signDescription.textContent = sign.description;

            const signImage = document.createElement('img');
            signImage.src = `https://cws.auckland.ac.nz/nzsl/api/SignImage/${sign.id.toString()}`;
            signImage.alt = `${sign.name} Image`;

            signDiv.appendChild(signDescription);
            signDiv.appendChild(signImage); 

            signsContainer.appendChild(signDiv);
        });
    });
}





document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function () {
        const query = searchInput.value;

        if (query.trim().length === 0) {
            fetchsigns(); 
        } else {
            fetchsignsSearch(query); 
        }
    });
});





function fetchsignsSearch(query) {
    const apiUrl = `https://cws.auckland.ac.nz/nzsl/api/Signs/${query}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const signsContainer = document.getElementById('signsContainer');
            signsContainer.innerHTML = '';

            data.forEach(sign => {
                const signDiv = document.createElement('div');
                signDiv.classList.add('sign');

                const signDescription = document.createElement('p');
                signDescription.textContent = sign.description;

                const signImage = document.createElement('img');
                signImage.src = `https://cws.auckland.ac.nz/nzsl/api/SignImage/${sign.id}`;
                signImage.alt = `${sign.name} Image`;

                signDiv.appendChild(signDescription);
                signDiv.appendChild(signImage);

                signsContainer.appendChild(signDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching or displaying signs:', error);
        });
}







function showModal(message) {
    const modal = document.getElementById('Modal');
    const modalMessage = document.getElementById('modalMessage');

    modalMessage.textContent = message;

    modal.style.display = 'block';

    const closeBtn = modal.getElementsByClassName('close')[0];
    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}



function fetchVersion() {
    fetch('https://cws.auckland.ac.nz/nzsl/api/Version')
        .then(response => response.text())
        .then(version => {
            const versionElements = document.querySelectorAll('.version-footer'); 
            versionElements.forEach(element => {
                element.innerHTML = `Server Version: ${version}`;
            });
        })
        .catch(error => {
            console.error('Error fetching server version:', error);
        });
}



function isLoggedIn() {
    return localStorage.getItem('username') !== null && localStorage.getItem('password') !== null;
}



function updateUsernameDisplay() {
    const username = localStorage.getItem('username');
    const to_show = document.getElementById('showusername');
    to_show.innerHTML = "Welcome " + username + "!";
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.style.display = 'block';
}

const logoutButton = document.getElementById('logoutButton');



logoutButton.addEventListener('click', function() {
    localStorage.setItem('username', null);
    localStorage.setItem('password', null);
    userisLoggedIn = false;
    logoutButton.style.display = 'none';
    const to_show = document.getElementById('showusername');
    to_show.innerHTML = "Not Logged In";
    document.getElementById("Registertab").style.display = "flex";
});








document.addEventListener('DOMContentLoaded', function () {
    const loginform = document.getElementById('loginform');
    loginform.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('loginuser').value;
        const password = document.getElementById('loginpass').value;
        const base64Credentials = btoa(username + ':' + password);
        fetch('https://cws.auckland.ac.nz/nzsl/api/TestAuth', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64Credentials,
            }

        })

            .then(response => {
                if (response.status === 200) {
                    showModal(`${username} successfully logged in`);
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                    userisLoggedIn = true;
                    updateUsernameDisplay()
                    showhome()
                    document.getElementById("Registertab").style.display = "none";
                } else if (responsre.status === 401) {
                    showModal("Login Failed. Please check your credentials.");
                } else {
                    showModal("Login Failed. Please check your credentials.");
                }
            })
            .catch(error => {
                console.error('Error during login:', error);
                showModal("Login Failed. Please check your credentials.");
            });
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const address = document.getElementById('address').value;

        const data = {
            username: username,
            password: password,
            address: address
        };

        fetch('https://cws.auckland.ac.nz/nzsl/api/Register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text())
            .then(responseText => {
                if (responseText === 'Username not available') {
                   showModal('Username not available.');
                } else if (responseText === `User ${username} registered`) {
                    showModal(`User ${username} registered`);
                    registrationForm.reset();
                    showlogin();
                } else {
                    showModal('Registration failed');
                }
            })
            .catch(error => {
                console.error('Error during registration:', error);
            });
    });
});








document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('commentForm');
    const loginModal = document.getElementById('loginModal');
    const loginModalForm = document.getElementById('loginModalForm');
    const modalUsername = document.getElementById('modalUsername');
    const modalPassword = document.getElementById('modalPassword');
    const commentModal = document.getElementById('commentModal');
    const modalMessage = document.getElementById('CommentlModalMessage');
    const closeBtn = document.getElementsByClassName('close')[0];

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!userisLoggedIn) {
            loginModal.style.display = 'block';
        } else {
            submitComment();
        }
    });

    loginModalForm.addEventListener('submit', function (event) {      
        event.preventDefault();

        const username = modalUsername.value;
        const password = modalPassword.value;
        const base64Credentials = btoa(username + ':' + password);

        fetch('https://cws.auckland.ac.nz/nzsl/api/TestAuth', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64Credentials
            }
        })
        .then(response => {
            if (response.status === 200) {
                userisLoggedIn = true;
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                loginModal.style.display = 'none'; 
                updateUsernameDisplay()
                document.getElementById("Registertab").style.display = "none";
                submitComment();
            } else {
                alert('Login failed. Please check your credentials.');
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            alert('Login failed.');
        });
    });

    function submitComment() {
        const comment = document.getElementById('comment').value;
    
        if (comment.trim() === '') {
            modalMessage.textContent = 'Comment cannot be empty.';
            commentModal.style.display = 'block';
            return;
        }
        console.log("Comment to be submitted:", comment);
    
        const url = `https://cws.auckland.ac.nz/nzsl/api/Comment?comment=${(comment)}`;
    
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
            }
        })
        .then(response => {
            if (response.status === 200) {
                modalMessage.textContent = 'Comment submitted successfully.';
                commentForm.reset();
                
                fetchCommentsAndPopulateIframe(); 
            } else {
                modalMessage.textContent = 'Error submitting comment.';
            }
            commentModal.style.display = 'block';
        })
        .catch(error => {
            console.error('Error submitting comment:', error);
            modalMessage.textContent = 'Error submitting comment.';
            commentModal.style.display = 'block';
        });
    }
    

    closeBtn.onclick = function () {
        loginModal.style.display = 'none';
    };

    closeBtn.onclick = function () {
        commentModal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        } else if (event.target == commentModal){
            commentModal.style.display = 'none';
        }
    };

});



function fetchCommentsAndPopulateIframe() {
    fetch('https://cws.auckland.ac.nz/nzsl/api/Comments')
        .then(response => response.text())
        .then(data => {

            const iframe = document.getElementById('commentsFrame');
            let modifiedData = data.replace(/color:\s*yellow/g, 'color: white');

            if (iframe.contentDocument) {
                iframe.contentDocument.open();
                iframe.contentDocument.write(modifiedData);
                iframe.contentDocument.close();
            } else if (iframe.contentWindow) {
                iframe.contentWindow.document.open();
                iframe.contentWindow.document.write(modifiedData);
                iframe.contentWindow.document.close();
            } else {
                iframe.setAttribute('srcdoc', modifiedData);
            }
        })
        .catch(error => {
            console.error('Error fetching and displaying comments:', error);
        });
}








function fetchLogData() {
    fetch('https://cws.auckland.ac.nz/nzsl/api/Log')
        .then(response => response.json())
        .then(data => {
            renderGraph(data);
            renderSourceData(data);
        })
        .catch(error => console.error('Error fetching log data:', error));
}


function renderGraph(data) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svgWidth = 1000;
    const svgHeight = 400;
    const padding = 50;

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
    svg.setAttribute("preserveAspectRatio", "xMinYMin meet"); 
    svg.style.width = "80%"; 
    svg.style.height = "auto";

    const maxVisits = Math.max(...data.map(item => Math.max(item.visits, item.uniqueVisits)));
    const minVisits = Math.min(...data.map(item => Math.min(item.visits, item.uniqueVisits)));

    const xScale = (svgWidth - 2 * padding) / data.length;
    const yScale = (svgHeight - 2 * padding) / maxVisits;

    const xAxis = document.createElementNS(svgNS, "line");
    xAxis.setAttribute("x1", padding);
    xAxis.setAttribute("y1", svgHeight - padding);
    xAxis.setAttribute("x2", svgWidth - padding);
    xAxis.setAttribute("y2", svgHeight - padding);
    xAxis.setAttribute("stroke", "black");
    svg.appendChild(xAxis);

    const yAxis = document.createElementNS(svgNS, "line");
    yAxis.setAttribute("x1", padding);
    yAxis.setAttribute("y1", padding);
    yAxis.setAttribute("x2", padding);
    yAxis.setAttribute("y2", svgHeight - padding);
    yAxis.setAttribute("stroke", "black");
    svg.appendChild(yAxis);

    const minYLabel = document.createElementNS(svgNS, "text");
    minYLabel.setAttribute("x", padding - 40);
    minYLabel.setAttribute("y", svgHeight - padding + 5);
    minYLabel.textContent = minVisits;
    svg.appendChild(minYLabel);

    const maxYLabel = document.createElementNS(svgNS, "text");
    maxYLabel.setAttribute("x", padding - 40);
    maxYLabel.setAttribute("y", padding + 5);
    maxYLabel.textContent = maxVisits;
    svg.appendChild(maxYLabel);

    const firstDate = data[0].date;
    const lastDate = data[data.length - 1].date;

    const firstXLabel = document.createElementNS(svgNS, "text");
    firstXLabel.setAttribute("x", padding);
    firstXLabel.setAttribute("y", svgHeight - padding + 20);
    firstXLabel.textContent = firstDate;
    svg.appendChild(firstXLabel);

    const lastXLabel = document.createElementNS(svgNS, "text");
    lastXLabel.setAttribute("x", svgWidth - padding - 50);
    lastXLabel.setAttribute("y", svgHeight - padding + 20);
    lastXLabel.textContent = lastDate;
    svg.appendChild(lastXLabel);

    function plotLine(data, color, key) {
        const points = data.map((item, index) => {
            const x = padding + index * xScale;
            const y = svgHeight - padding - item[key] * yScale;
            return `${x},${y}`;
        }).join(" ");

        const line = document.createElementNS(svgNS, "polyline");
        line.setAttribute("points", points);
        line.setAttribute("fill", "none");
        line.setAttribute("stroke", color);
        line.setAttribute("stroke-width", 2);
        svg.appendChild(line);
    }

    plotLine(data, "blue", "visits");
    plotLine(data, "red", "uniqueVisits");

    const legend = document.createElementNS(svgNS, "g");

    const visitsLegend = document.createElementNS(svgNS, "text");
    visitsLegend.setAttribute("x", svgWidth - 150);
    visitsLegend.setAttribute("y", 30);
    visitsLegend.setAttribute("fill", "blue");
    visitsLegend.textContent = "Visits";
    legend.appendChild(visitsLegend);

    const uniqueVisitsLegend = document.createElementNS(svgNS, "text");
    uniqueVisitsLegend.setAttribute("x", svgWidth - 150);
    uniqueVisitsLegend.setAttribute("y", 50);
    uniqueVisitsLegend.setAttribute("fill", "red");
    uniqueVisitsLegend.textContent = "Unique Visits";
    legend.appendChild(uniqueVisitsLegend);

    svg.appendChild(legend);

    logContainer.appendChild(svg);
}



function renderSourceData(data) {
    const table = document.createElement("table");
    table.setAttribute("border", "1");
    
    const headerRow = document.createElement("tr");
    const emptyCell = document.createElement("th");
    emptyCell.textContent = ""; 
    headerRow.appendChild(emptyCell);

    data.forEach(item => {
        const dateHeader = document.createElement("th");
        dateHeader.textContent = item.date;
        headerRow.appendChild(dateHeader);
    });
    table.appendChild(headerRow);

    const visitsRow = document.createElement("tr");
    const visitsHeader = document.createElement("th");
    visitsHeader.textContent = "Visits";
    visitsRow.appendChild(visitsHeader);

    data.forEach(item => {
        const visitsCell = document.createElement("td");
        visitsCell.textContent = item.visits;
        visitsRow.appendChild(visitsCell);
    });
    table.appendChild(visitsRow);

    const uniqueVisitsRow = document.createElement("tr");
    const uniqueVisitsHeader = document.createElement("th");
    uniqueVisitsHeader.textContent = "Unique Visits";
    uniqueVisitsRow.appendChild(uniqueVisitsHeader);

    data.forEach(item => {
        const uniqueVisitsCell = document.createElement("td");
        uniqueVisitsCell.textContent = item.uniqueVisits;
        uniqueVisitsRow.appendChild(uniqueVisitsCell);
    });
    table.appendChild(uniqueVisitsRow);

    logContainer.appendChild(table);
}



window.onload = showhome;


