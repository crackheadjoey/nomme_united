players = {
    '33': {
        'name': 'Jevgeni Demidov',
        'position': 'Forward',
        'games': 4,
        'goals': 5,
    },
    '14': {
        'name': 'Aleksander Švedovski',
        'position': 'Right Winger',
        'games': 4,
        'goals': 0,
    },
    '21': {
        'name': 'Oleksandr Musolitin',
        'position': 'Midfielder',
        'games': 1,
        'goals': 0,
    },
    '30': {
        'name': 'Markus Riisenberg',
        'position': 'Midfielder',
        'games': 14,
        'goals': 2,
    },
    '18': {
        'name': 'Babou Cham',
        'position': 'Left Winger',
        'games': 1,
        'goals': 0,
    },
    '11': {
        'name': 'Tristan Vendelin',
        'position': 'Defensive MidFielder',
        'games': 3,
        'goals': 1,
    },
    '3': {
        'name': 'Samuel Merilai',
        'position': 'Defender',
        'games': 39,
        'goals': 1,
    },
    '28': {
        'name': 'Steven Salmistu',
        'position': 'Defender',
        'games': 55,
        'goals': 2,
    },
    '4': {
        'name': 'Aleksandr Alteberg',
        'position': 'Defender',
        'games': 30,
        'goals': 4,
    },
    '23': {
        'name': 'Karl Läänelaid',
        'position': 'Defender',
        'games': 15,
        'goals': 3,
    },
    '12': {
        'name': 'Marko Meerits',
        'position': 'Goalkeeper',
        'games': 4,
        'goals': 0,
    }
}





function main() {
        //võtan kõik elemendid mille klass on playericon et saaksin neile event handleri lisada
        const playerIcons = document.getElementsByClassName('playerIcon');

        function handleClick(event) {
            id = event.target.id;
            console.log(id);
            changeCard(id);
            // Eemalda 'selected' klass kõikidelt elementidelt
            for (let i = 0; i < playerIcons.length; i++) {
                playerIcons[i].classList.remove('selected');
            }
            // Add the 'selected' class to the clicked element
            event.target.classList.add('selected');

        }

        function changeCard(playerID){
            document.getElementById('playerName').innerHTML = players[playerID]['name'];
            document.getElementById('playerPosition').innerHTML = players[playerID]['position'];
            document.getElementById('playerGames').innerHTML = "Mänge: " + players[playerID]['games'];
            document.getElementById('playerGoals').innerHTML = "Väravaid: " + players[playerID]['goals'];

            const img = document.getElementById('playerimg')
            img.src = "lisad/players/" + playerID + ".png";

            //juhuks kui pilti ei leidu
            const altSrc = '/lisad/players/placeholder.png';
            img.setAttribute('onerror', `this.onerror=null;this.src='${altSrc}'`);
        }

        // Lisan igale elemendile event handleri
        for (let i = 0; i < playerIcons.length; i++){
            playerIcons[i].addEventListener('click', handleClick);
        }
}
    
document.addEventListener('DOMContentLoaded', function() {
   main() // Your code here...
});