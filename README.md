#Blackjack
////////////////////////////////////
MVP PSEUDO CODE:
////////////////////////////////////
SETUP:
Create five decks of cards
Assign values to cards
Setup Player
Setup the Players Bank
Setup the Bet Amount
Setup Dealer

GAME:

START:
Shuffle Deck
Player place bet
Dealer Gets first card in deck down
Player gets second card in deck up
Dealer get third card in deck up
Player gets fourth card in deck up

CHECK FOR DEALER BLACKJACK(Insurance):
Insurance
End round if dealer has blackjack

PLAYER MOVE:
Hits or Stands
Repeat until Player stands or busts

DEALER:
Reveals down card
If Dealer cards value is less than or equal to 16 Dealer must hit

BANK ADJUSTMENT:
Win or loss

GAME OVER:
If player is broke


////////////////////////////////////
PSEUDO CODE:
////////////////////////////////////
SETUP HTML:
Display DIV player element
	DIV bet amount
	DIV card 1
	DIV card 2
display DIV bankroll
display DIV dealer
	DIV card down
	DIV card up

SETUP JAVASCRIPT:
Assign values to cards
	assign value to each card(utilize objects);
Create five decks of cards:
	Create a Deck array of 5 of each card number of each suit (Total: 260)
Setup player variable (array)
Setup bankroll variable (total number of money left)
Setup current bet variable;
Setup the bet amount variable (amount deducted from bankroll)
Setup dealer (array .hide Jquery)

Shuffle Function:
	Populate Deck array with card objects.

Place Bet Function:
	Player deducts amount from bankroll variable;
	Add deducted amount from bankroll variable to current bet variable;
Deal a Single Card function: (one function for computer, one for player)
	push card to array
	add up total value

Initial Deal Function:
	Push one index value from Deck array to dealer array
	Push one index value from Deck array to player array
	Push one index value from Deck array to dealer array
	Push one index value from Deck array to player array

Player Move Function:
(Loop the functions below until Player stands or busts):
for every hit, deal single card function
if total is less then 21, ask if they want to hit again
if total is over 21, bust
if equal to 21, automatically stand

Computer move function:
(Loop function until equal or greater than 17)
deal single card for computer function
if total is over 21, bust

endgame function
if player wins, add 2x bet to bankroll
if player pushes, add bet to bankroll