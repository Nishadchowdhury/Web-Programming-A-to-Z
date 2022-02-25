const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies()
const displayBuddies = data => {
    let buddies = data.results;
    const codeContainer = document.getElementById('code');
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
        const p = document.createElement('p');
        p.innerText =`name: ${buddy.name.first} ${ buddy.name.last} "---->" ${ buddy.email} `;
        buddiesDiv.appendChild(p);
        
        console.log(buddy);
        
        const p2 = document.createElement('div');
        p2.innerText =  "buddy";

    } 
    for(const buddy of buddies){
        const textData = JSON.stringify(buddy);
        const p2 = document.createElement('div');
        p2.innerHTML = textData;
        codeContainer.appendChild(p2)

    } 
}

//