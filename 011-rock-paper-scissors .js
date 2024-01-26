 let score = 
            JSON.parse(localStorage.getItem('score'));
        
            if (!score) {
                score = {
                    wins:0,
                    losses:0,
                    ties: 0
                }
            }

        //updateScoreElement();

        let isAutoPlaying = false;
        let intervalId;

        function autoPlay() {
            if (!isAutoPlaying){
                function autoPlay() {
                    intervalId = setInterval(function() {
                        const playerMove = pickComputerMove();
                        playGame(playerMove);
                    }, 1000);

                    isAutoPlaying = true;
               } 
        } else {
            clearInterval(intervalId);
            isAutoPlaying = false;
        }
      
        }
 

        function playGame(playerMove){
                pickComputerMove();
        let result = '';  
        if (playerMove === 'Scissors') {
                if (computerMove === 'Rock') {
                result = 'you win.';
            } else if (computerMove === 'Paper'){
                result = 'Tie';
            } else if (computerMove === 'Scissors'){
                result = 'You lose';
            }
            } else if (playerMove === 'paper') {
                 if (computerMove === 'Rock') {
                result = 'you win.';
            } else if (computerMove === 'Paper'){
                result = 'Tie';
            } else if (computerMove === 'Scissors'){
                result = 'You lose';
            }
            } else if (playerMove ==='rock') {
                if (computerMove === 'Rock') {
                result = 'Tie.';
            } else if (computerMove === 'Paper'){
                result = 'You lose';
            } else if (computerMove === 'Scissors'){
                result = 'You win';
            }
            }

            if (result ==='You win'){
                score.wins +=1;
            } else if (result === 'You lose'){
                score.losses +=1;
            } else if (result ==='Tie') {
                score.ties +=1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();

            document.querySelector('.js-result').
            innerHTML = result;

            document.querySelector('.js-moves').
            innerHTML = `you 
        <img src="${playerMove}-emoji.png" class="move-icon">
        <img src="${computerMove}-emoji.png" class="move-icon">
        computer`;
            
        }

        function updateScoreElement() {
            document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, losses:${score.losses}, ties: ${score.ties}`;
        }
        
        let computerMove = '';

        function pickComputerMove (){
            const randomNumber = Math.random();


        if (randomNumber >= 0 && randomNumber < 1/3)
        {computerMove = ('Rock');}
        else if (randomNumber >= 1/3 && randomNumber < 2/3){computerMove = ('Paper');}
        else {computerMove = ('Scissors');}
        }