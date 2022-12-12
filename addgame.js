const team = {
    _players: [
    {firstName: 'Israel', lastName: 'Adesanya', age: 33},
    {firstName: 'Kyrie', lastName: 'Irving', age: 30},
    {fistName: 'Blxckie', lastName: 'Somnyama', age: 23}
    ],
    _games: [
      {opponent: 'Steve', teamPoints: 41, opponentPoints: 33},
      {opponent: 'paul', teamPoints: 36, opponentPoints: 28},
      {opponent: 'gasol', teamPoints: 64, opponentPoints: 55}
      ],
      get players(){
    return this._players
  },
       get games(){
    return this._games
  },
  
  addPlayer(newFirstName, newLastName, newAge){
    let player = { 
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge,
  }
  this.players.push(player)
  },
  
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
    opponent: newOpponent,
    teamPoints:  newTeamPoints,
    opponentPoints: newOpponentPoints,
    };
    this.games.push(game)
    }
  };
  team.addPlayer('Stehphen', 'curry', 35);
  console.log(team._players)
  
  team.addGame('Titans', 100, 98);
  
  console.log(team._games)
  
  