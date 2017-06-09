var politician = {};

politician.name = "";
politician.electionResults = null;
politician.totalVotes = 0;
politician.bio = "";
politician.partyColor = "";
politician.headshot = "";

// factory function to create new politician
var newPolitician = function(polName, polBio, partyColor) {
    
    // creates new blank politician object
    var politician = {}; 
    politician.name = polName; // sets name as defined in parameter
    politician.electionResults = null; // creates empty election results property
    politician.totalVotes = 0; // creates totalVotes property set to 0
    politician.bio = polBio;
    politician.partyColor = partyColor;
    politician.headshot = "";
    
    // function to announce newly created politician in console
    var announcePolitician = function() {
        
        console.log("We welcome " + polName + " to the political arena!");
    };
    
    // announces new politician
    announcePolitician();
    
    // function to tally results
    politician.tallyResults = function() {
  
        // adds together all election results
        for (var i = 0; i < this.electionResults.length; i++) {
            this.totalVotes = this.totalVotes + this.electionResults[i];
        }
        
        // announces total votes to console
        console.log(polName + " has " + this.totalVotes + " votes.");
    };
    
    return politician;

};

// function to set the color of each state
var setStateResults = function(state) {

    theStates[state].winner = null;
      
    if (sparrow.electionResults[state] > alligator.electionResults[state]){
        theStates[state].winner = sparrow; // sets winner to name of object
        
    } else if (sparrow.electionResults[state] < alligator.electionResults[state]) {
            theStates[state].winner = alligator; // sets winner to name of object
    }
        
    var stateWinner = theStates[state].winner;
        
    // assign color value to state depending on winner
    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    
    } else {
            theStates[state].rgbColor = [125, 125, 125];
    }
    
    
    // STATES RESULTS TABLE
    // connect state results table with var names
    var stateTable = document.getElementById("stateResults");
    var header = stateTable.children[0].children[0];
    var row1 = stateTable.children[1].children[0];
    var row2 = stateTable.children[1].children[1];
    var row3 = stateTable.children[1].children[2];
    
    // populate state results table with data
    var stateName = header.children[0];
    stateName.innerText = theStates[state].nameFull;

    var stateAbbrev = header.children[1];
    stateAbbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

    var candidate1Name = row1.children[0];
    candidate1Name.innerText = sparrow.name;

    var results1 = row1.children[1];
    results1.innerText = sparrow.electionResults[state];

    var candidate2Name = row2.children[0];
    candidate2Name.innerText = alligator.name;

    var results2 = row2.children[1];
    results2.innerText = alligator.electionResults[state];

    var winnerName = row3.children[1];
    if (theStates[state].winner === null) {
        winnerName.innerText = "DRAW";
    } else {
        winnerName.innerText = theStates[state].winner.name;
    }
    
};
    


// create politicians
var sparrow = newPolitician("Giant Sparrow", "She's a giant passerine with a giant heart for the American people.", [145, 116, 144]); // candidate 1
var alligator = newPolitician("Friendly Alligator", "She's eager to show the world that America is so much more than its bite.", [139, 188, 115]); // candidate 2

// assign sparrow election results
sparrow.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

// assign alligator election results
alligator.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

// assign headshot images
sparrow.headshot = "https://s-media-cache-ak0.pinimg.com/564x/a6/92/be/a692be107089f1e68639bedff458b189.jpg";
alligator.headshot = "https://s-media-cache-ak0.pinimg.com/originals/f2/27/78/f22778cd205827077e6767809130865d.jpg";

// populate candidate tiles with title, image, and bio
document.getElementById("title-sparrow").innerText = sparrow.name;
document.getElementById("title-alligator").innerText = alligator.name;
document.getElementById("img-sparrow").src = sparrow.headshot;
document.getElementById("img-alligator").src = alligator.headshot;
document.getElementById("img-sparrow").alt = sparrow.bio;
document.getElementById("caption-sparrow").innerText = sparrow.bio;
document.getElementById("caption-alligator").innerText = alligator.bio;

// updating arrays with recount data
sparrow.electionResults[4] = 17;
sparrow.electionResults[9] = 1;
sparrow.electionResults[43] = 11;

alligator.electionResults[4] = 38;
alligator.electionResults[9] = 28;
alligator.electionResults[43] = 27;

// tallying the results of the election
sparrow.tallyResults();
alligator.tallyResults();



// function for announcing the winner to console
var winner = "";
var announceWinner = function() {
    
    // compares total votes for each candidate
    if (sparrow.totalVotes > alligator.totalVotes) {
        winner = sparrow.name;
    }
    else if (sparrow.totalVotes < alligator.totalVotes) {
        winner = alligator.name;
    }
    else {
        winner = "It's a tie! No one";
    }
    
    // announces winner in console
    console.log(winner + " wins the election!");
};

// call function to announce winner
announceWinner();


// populate country results table with data
var countryTable = document.getElementById("countryResults");
var countryRow = countryTable.children[0].children[0];

countryRow.children[0].innerText = sparrow.name;
countryRow.children[1].innerText = sparrow.totalVotes;
countryRow.children[2].innerText = alligator.name;
countryRow.children[3].innerText = alligator.totalVotes;
countryRow.children[5].innerText = winner;
