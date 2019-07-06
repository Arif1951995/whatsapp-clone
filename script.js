fetch(`https://cors-anywhere.herokuapp.com/https://tk-whatsapp.herokuapp.com/messages`)
.then(result => {
    return result.json();
})
.then(data => {
    data.forEach(e => {
        console.log(e);
        if(e.isUnread) {
            document.querySelector('ul').insertAdjacentHTML('afterbegin', `
        <li id='unread-li'> <div class="left" class="img"> <img src="${e.profilePic}" alt="Profile Pic"> </div><div class="center"> <div class="heading"> <h3>${e.name}</h3> <p>${e.number}</p></div><div class="message"> <p>${e.firstLine}</p></div><div class="time"> ${e.time} </div></div><div id="unread-div" class="right"> <span class="numOfUnreadMessage">${e.numbUnread}</span> </div></li>
        `);
        }else {
            document.querySelector('ul').insertAdjacentHTML('afterbegin', `
            <li> <div class="left" class="img"> <img src="${e.profilePic}" alt="Profile Pic"> </div><div class="center"> <div class="heading"> <h3>${e.name}</h3> <p>${e.number}</p></div><div class="message"> <p>${e.firstLine}</p></div><div class="time"> ${e.time} </div></div><div class="right"> <span class="numOfUnreadMessage">${e.numbUnread}</span> </div></li>
            `);
        }
    });
})
.catch(error => {
    document.write(`<h1>${error}</h1>`)
})


