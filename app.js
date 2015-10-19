var hit = document.getElementById('hit');
var stand = document.getElementById('stand');
var clear = document.getElementById('new-game');
var bet = document.getElementById('bet');
var bank = document.getElementById("bank");
var pCard1 = document.getElementById('pCard1');
var dCard1 = document.getElementById('dCard1');
var pCard2 = document.getElementById('pCard2');
var dCard2 = document.getElementById('dCard2');
pCard1.style.backgroundImage = "url(http://bit.ly/1PB7mnX)";
dCard1.style.backgroundImage = "url(http://bit.ly/1PB7mnX)";
pCard2.style.backgroundImage = "url(http://bit.ly/1PB7mnX)";
dCard2.style.backgroundImage = "url(http://bit.ly/1PB7mnX)";
document.getElementById('score').innerHTML = "Please place your bets! Then click New Game.";


var bankAmount = 100;
bank.innerHTML = "$" + bankAmount;
var delayHelp = 0;


function delay()
{
  if(delayHelp === 0)
  {
    betting();
  }
  else
  {
    blackjack();
  }
}

function betting()
{
  if(bet.value >= 1 && bet.value <= bankAmount)
  {
    bankAmount -= bet.value;
    bank.innerHTML = "$" + bankAmount;
    bet.disabled = true;
    delayHelp = 1;
    delay();
  }
  else
  {
    alert("Invalid Bet Amount");
  }
}


function blackjack()
{ 
  // Our deal function will return a random card
  function deal() 
  {
    card = Math.floor(Math.random() * 52 + 1);
    return card;
  }

  // keeping count of player and dealer's total
  var playerTotal = 0;
  var dealerTotal = 0;

  // initializing the hit, stand, and new game button


  var ace = 0;

  hit.disabled = false;
  stand.disabled = false;

  // Deal out our first hand

  var playerCard1 = deal();
  var dealerCard1 = deal();
  var playerCard2 = deal();
  var dealerCard2 = deal();

  var playerImage1Help = playerCard1;
  var dealerImage1Help = dealerCard1;
  var playerImage2Help = playerCard2;
  var dealerImage2Help = dealerCard2;

  // This function takes a card as a parameter and returns the value
  // of that card
  function getValue(card) 
  {
    // if its a face card, number should be set to 10     
    if(card % 13 === 0 || card % 13 === 11 || card % 13 === 12)
    {
      return 10;
    }
    
    // What if it's an ace?
    else if(card % 13 === 1)
    {
      ace += 1;
      return 11;
    }
    // Otherwise, we just want its number value
    else
    {
      return card % 13;
    }
  }

  function getSuit(card)
  {
    if(card >= 1 && card <= 13)
    {
      return "spades";
    }
    else if(card >= 14 && card <= 26)
    {
      return "diamonds";
    }
    else if(card >= 27 && card <= 39)
    {
      return "clubs";
    }
    else
    {
      return "hearts";
    }
  }

  function forImage(card)
  {
    if(card % 13 === 0)
    {
      card = "k";
      return card;
    }
    else if(card % 13 === 11)
    {
      card = "j";
      return card;
    }
    else if(card % 13 === 12)
    {
      card = "q";
      return card;
    }
    else if(card % 13 === 1)
    {
      card = "1";
      return card;
    }
    else
    {
      return card % 13;
    }
  }

  function showCards()
  {
    pCard1.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(playerImage1Help) + "" + getSuit(playerCard1) + ".png)";
    dCard1.style.backgroundImage = "url(http://bit.ly/1PB7mnX)";
    pCard2.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(playerImage2Help) + "" + getSuit(playerCard2) + ".png)";
    dCard2.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(dealerImage2Help) + "" + getSuit(dealerCard2) + ".png)";
  }

  showCards();

  score(playerCard1, playerCard2);

  document.getElementById('score').innerHTML = "Your score is: " + playerTotal + " would you like to hit or stand?";


  // Score the hand
  function score(card1, card2)
  {
    playerTotal = getValue(card1) + getValue(card2);
    if(playerTotal === 22) {
      playerTotal = 12;
    }
    return playerTotal;
  }

  function dealerScore(cardA, cardB)
  {
    dealerTotal = getValue(cardA) + getValue(cardB);
    return dealerTotal;
  }


  if(dealerScore(dealerCard1, dealerCard2) === 21)
  {
    dCard1.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(dealerImage1Help) + "" + getSuit(dealerCard1) + ".png)";
    hit.disabled = true;
    stand.disabled = true;
    document.getElementById('score').innerHTML = "The dealer got blackjack";
    gameOver();
  }


  if(playerTotal === 21)
  {
    bankAmount += (bet.value * 2);
    bank.innerHTML = "$" + bankAmount;
    hit.disabled = true;
    document.getElementById('score').innerHTML = "Blackjack! You got a blackjack";
    dCard1.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(dealerImage1Help) + "" + getSuit(dealerCard1) + ".png)";
    stand.disabled = true;
    gameOver();
  }


  hit.onclick = function(event)
  {
    var helpValue = deal();
    var newCard = document.createElement('div');
    newCard.className = "cards";

    newCard.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(helpValue) + "" + getSuit(helpValue) + ".png)";

    
    document.getElementById('player-cards').appendChild(newCard);
    cardValue = getValue(helpValue)

    if((playerTotal + cardValue) > 21)
      {
        if(ace === 1) {
        playerTotal = playerTotal - 10;
      }
        else {
        playerTotal = playerTotal - ((ace-1)*10);
      }

      playerTotal += cardValue;
      document.getElementById('score').innerHTML = "Your score is: " + playerTotal + " would you like to hit or stand?";
      ace = 0;
    }
    else
    {
      playerTotal += getValue(helpValue);
    }
      if(playerTotal > 21)
      {
        document.getElementById('score').innerHTML = "You busted! You got more than 21!";
        dCard1.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(dealerImage1Help) + "" + getSuit(dealerCard1) + ".png)";
        hit.disabled = true;
        stand.disabled = true;
        gameOver();
      }
      else if(playerTotal === 21)
      {
        document.getElementById('score').innerHTML = "Your score is: 21!";
        bankAmount += (bet.value * 2);
        bank.innerHTML = "$" + bankAmount;
        dealerTurn();
        hit.disabled = true;
        stand.disabled = true;
      }
      else
      {
        document.getElementById('score').innerHTML = "Your score is: " + playerTotal + " would you like to hit or stand?";
      }
    }

  stand.onclick = function(event)
  {
    hit.disabled = true;
    hit.style.borderColor = "black";
    stand.disabled = true;
    stand.style.borderColor = "black";
    dCard1.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(dealerImage1Help) + "" + getSuit(dealerCard1) + ".png)";
    dealerTurn();
  }

  // create a function for the dealer's game.
  function dealerTurn()
  {
    if(dealerTotal >= 17 && (dealerTotal <= playerTotal))
    {
      document.getElementById('score').innerHTML = "You won! The dealer got: " + dealerTotal + ". You got: " + playerTotal + "!";
      dCard1.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(dealerImage1Help) + "" + getSuit(dealerCard1) + ".png)";
      gameOver();
      bankAmount += (bet.value * 2);
      bank.innerHTML = "$" + bankAmount;
    }
    else if(dealerTotal >= 17 && dealerTotal > playerTotal && dealerTotal <= 21)
    {
      document.getElementById('score').innerHTML = "You lost! The dealer got: " + dealerTotal + "! You got: " + playerTotal + ".";
      dCard1.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(dealerImage1Help) + "" + getSuit(dealerCard1) + ".png)";
      gameOver();
    }
    else if(dealerTotal > 21)
    {
      document.getElementById('score').innerHTML = "You won! The dealer busted. You got: " + playerTotal + "!";
      dCard1.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(dealerImage1Help) + "" + getSuit(dealerCard1) + ".png)";
      gameOver();
      bankAmount += (bet.value * 2);
      bank.innerHTML = "$" + bankAmount;
    }
    else if(dealerTotal < 17)
    {
      var helpValue = deal();
      dCard1.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(dealerImage1Help) + "" + getSuit(dealerCard1) + ".png)";
      var newCard = document.createElement('div');
      newCard.className = "cards";

      newCard.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(helpValue) + "" + getSuit(helpValue) + ".png)";

      document.getElementById('dealer-cards').appendChild(newCard);

      dealerTotal += getValue(helpValue);

      dealerTurn();
    }
    else
    {
      document.getElementById('score').innerHTML = "It's a tie! The dealer got: " + dealerTotal + "! You got: " + playerTotal + "!";
      dCard1.style.backgroundImage = "url(/Users/jayanpatel/WDI_Lettuce/blackjack/images/" + forImage(dealerImage1Help) + "" + getSuit(dealerCard1) + ".png)";
      gameOver();
    }
  }
  if(bankAmount === 0)
  {
    bet.disabled = true;
    hit.disabled = true;
    stand.disabled = true;
    clear.disabled = true;
    document.getElementById('score').innerHTML = "Can't play! You are poor!";
  }


  console.log("You have cards " + playerCard1 + " and " + playerCard2 +
        " for a score of " + score(playerCard1, playerCard2));

  // implement something for keep tabs on the bet amount.

}

// blackjack();

// new game keeps playing blackjack until the player runs out of money.
clear.onclick = function(event)
{
  var element = document.getElementById('player-cards');
  while(element.childNodes.length != 4)
  {
    element.removeChild( element.childNodes[ element.childNodes.length - 1 ] );
  }

  var dealerElement = document.getElementById('dealer-cards');
  while(dealerElement.childNodes.length != 4)
  {
    dealerElement.removeChild( dealerElement.childNodes[ dealerElement.childNodes.length - 1 ] );
  }
  
  betting();
  bet.disabled = false;

  hit.style.borderColor = "white";
  stand.style.borderColor = "white";
}

function gameOver()
{
  console.log("Done!");
}







