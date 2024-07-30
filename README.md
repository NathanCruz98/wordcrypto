# wordcrypto

In the "Top Party Games" on BGG there are two similar word games: Decrypto & Just One. This web app consolidates both games onto a phone-friendly layout

## Compacting The Collection
Some inevitable problems that comes with collecting board games are the physical space required to own said games and the possibility of "redundant" games.
Having to bring multiple boxes to play a variety of games can be cumbersome when some of these games can share components with each other.
There's a reason why a standard deck of cards is considered portable and this web app does the same with 2 of the most popular word board games on the market.

## Quick Start
Access the web app with: [http://itsburpee.github.io/wordcrypto](https://itsburpee.github.io/wordcrypto/)

## How to Use
- Set the `Code Size` you want to use then press `Word List` to generate a list of words
  - If you're playing **Just One**, set the `Code Size` to `4`. You only need this step to play that game!
  - The `Word List` button uses the [**Word Game DB**](https://www.wordgamedb.com/) API made by **Lucas Silbernagel** 
- Once the `Code Size` is set, press `New Code` to generate a digit code for your **Decrypto** game!
  - To ensure a fair distribution of numbers present, the `New Code` shuffles a number array with the Fisher-Yates Algorithm
- To view the digit code hold down the `VIEW` button or use the `Toggle` option
- Once you've written your clues based on the digit code, press the `⏱` button to set up a timer for your opponent
  - To prevent timer interruptions, the other buttons on this web app will be disabled during countdown
  - To turn off the timer, press the `⏱` button while the timer is going
- Should you want to see older digit codes or you accidently generate a new code, you can press `Code History` to see the last 4 code viewed
  - If a code was never viewed, it isn't archived
  - The codes are ordered from the most recent code to the oldest code
 
## Contributing
Clone the repo or download the ZIP

Then run the `index.html` to start the web app

Feel free to make edits for your own personal version!

## Known Issues
- Timer may sometimes skip digits due to implementation. See the documentation in `script.js` for more details

## Thanks To
- **Lucas Silbernagel** for creating the [**Word Game DB**](https://www.wordgamedb.com/) API
- [freecodecamp.org](https://www.freecodecamp.org/) for giving some motivation for creating this web app
- **You** for trying/using the web app!
