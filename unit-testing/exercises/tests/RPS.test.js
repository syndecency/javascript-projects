const whoWon = require('../RPS');

describe("whoWon", function() {
    test("should return a tie if both players choose the same item", function() {
        expect(whoWon('rock', 'rock')).toEqual("TIE!");
    });

    test("should declare player 2 the winner if player1 chooses 'rock' and player2 chooses 'paper'", function () {
        expect(whoWon('rock', 'paper')).toEqual('Player 2 wins!');
    });

    test("should declare player 2 the winner if player1 chooses 'paper' and player 2 chooses 'scissors", function() {
        expect(whoWon('paper', 'scissors')).toEqual('Player 2 wins!');
    });

    test("should declare player 2 the winner if player1 chooses 'scissors' and player 2 chooses 'rock", function() {
        expect(whoWon('scissors', 'rock')).toEqual('Player 2 wins!');
    });

    test("should declare player 1 the winner if player1 chooses 'scissors' and player 2 chooses 'paper", function() {
        expect(whoWon('scissors', 'paper')).toEqual('Player 1 wins!');
    });

    test("should instruct player to choose rock, paper, or scissors if they write something else", function () {
        expect(whoWon('car', 'paper')).toEqual('Must choose Rock, Paper, or Scissors.');
    }); 
});