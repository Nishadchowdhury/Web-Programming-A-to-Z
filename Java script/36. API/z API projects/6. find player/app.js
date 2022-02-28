const allPlayers = () => {
    document.getElementById('player-Container').innerHTML = '';
    const srcValue = document.getElementById('search-box').value;
    
    document.getElementById('spinner').style.display = 'block';
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${srcValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if(data.player == null){
            document.getElementById('spinner').style.display = 'block';
        }else{
            showPlayeDetails(data.player);
            document.getElementById('spinner').style.display = 'none';
        }
    })
    
    document.getElementById('search-box').value = '';
}

const showPlayeDetails = (players) =>{
   
    const srcValue = document.getElementById('search-box').value;
    console.log(srcValue);

   for(const player of players){
       
    const parent = document.getElementById('player-Container');
    const div = document.createElement('div');
    div.innerHTML = 
    
    `

    <div class="card">
    <div class="pro-pic">
        <img class="w-25 " src="${player.strThumb}" alt="">
    </div>
    <h2>Nmae: "${player.strPlayer}" </h2>
    <h2>Country: ${player.strNationality}</h2>
    <p></p>
    <div class="allbutton">
        <button class="btn-danger" >Delete</button>
        <button class="btn-success" onClick="ditails(${player.idPlayer})" >Ditails</button>
    </div>
    </div>
    `

    parent.appendChild(div);

      }

};

const ditails = (playerID) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerID}`
    fetch(url)
    .then(res => res.json())
    .then(data => setDetailsInfo(data.players[0]))

};

const setDetailsInfo = (detailArray) => {
 
    // console.log(detailArray.players[0].strPlayer);
    console.log(detailArray.strGender);

    if(detailArray.strGender == 'Male'){
        document.getElementById("male-pic").style.display = 'block';
        document.getElementById("female-pic").style.display = 'none';

    }
    else if(detailArray.strGender == 'Female'){
        document.getElementById("female-pic").style.display = 'block';
        document.getElementById("male-pic").style.display = 'none';

    }

}




/* 
   <div class="card">
            <div class="pro-pic">
                <img class="w-25" src="" alt="">
            </div>
            <h2>Nmae: </h2>
            <h2>Country: </h2>
            <p></p>
            <div class="allbutton">
                <button class="btn-danger" >Delete</button>
                <button class="btn-danger" >Ditails</button>
            </div>
        </div>
*/