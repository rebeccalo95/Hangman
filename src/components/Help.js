//help component returning the text that appears after the help toggle has been toggled
const Help = () => {
    return (
        <div className="helptext">
            <h4>How to play:</h4>
            <ul>
                <li>A word has been randomly generated and the aim of the game is to guess this word!</li>
                <li>Each underscore represents a letter of that random word</li>
                <li>Click on any letter displayed in the keypad</li>
                <li>If you select a letter that is in the random word, this letter will be revealed</li>
                <li>If you select a letter that is not in the random word, you will see the image change</li>
                <li>All you need to do is guess the correct word before a fully formed hang(ed) man appears. You only have 10 incorrect guesses before this happens</li>
                <li>If you guess the word correctly, you win! If not, you lose! Simple</li>
                <li>After finishing the game, you will have a chance to play again by clicking "Replay"</li>
            </ul>
        </div>
    ) 
};

export default Help;
