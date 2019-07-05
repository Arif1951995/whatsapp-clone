let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://cors-anywhere.herokuapp.com/https://tk-whatsapp.herokuapp.com/messages');
myRequest.send();
myRequest.onload = () => {
    let data =     JSON.parse(myRequest.responseText);   
   console.log(data);
     data.forEach((e,i) => {
        // console.table(e);
      
        if(e.numbUnread > 0) {
            document.querySelector('ul').insertAdjacentHTML('afterbegin', `
        <li id='unread-li'> <div class="left" class="img"> <img src="${e.profilePic}" alt="Profile Pic"> </div><div class="center"> <div class="heading"> <h3>${e.name}</h3> <p>${e.number}</p></div><div class="message"> <p>${e.firstLine}</p></div><div class="time"> ${e.time} </div></div><div id="unread-div" class="right"> <span class="numOfUnreadMessage">${e.numbUnread}</span> </div></li>
        `);
        }else {
            document.querySelector('ul').insertAdjacentHTML('afterbegin', `
            <li> <div class="left" class="img"> <img src="${e.profilePic}" alt="Profile Pic"> </div><div class="center"> <div class="heading"> <h3>${e.name}</h3> <p>${e.number}</p></div><div class="message"> <p>${e.firstLine}</p></div><div class="time"> ${e.time} </div></div><div class="right"> <span class="numOfUnreadMessage">${e.numbUnread}</span> </div></li>
            `);
        }
    });
    
}


