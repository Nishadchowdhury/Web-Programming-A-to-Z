function setPlayerStyle(player){
    player.style.border = '1px red solid';
    player.style.borderRadius = '15px'
    player.style.margin = '10px';
    player.style.padding = '10px';
}

const players = document.getElementsByClassName('player');
for(const player of players){
   setPlayerStyle(player);
   player.addEventListener('click' , function(){
       player.style.backgroundColor = 'yellow';
   })
}

function addPlayer(){
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <div class="player">
    <h4 class="player-name">new player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus fugit itaque nulla repellendus debitis, rem voluptatibus mollitia eligendi obcaecati, doloremque totam quaerat in iste, temporibus quae. Aperiam, consequuntur sed!</p>
    </div>`
    setPlayerStyle(player);
    playersContainer.appendChild(player);
}


document.getElementById('players').addEventListener('click', function(event){
if(event.target.tagName.toLowerCase() == 'div' ){
    event.target.style.backgroundColor = 'yellow';
}else{
    event.target.parentNode.style.backgroundColor = 'red';
}
})