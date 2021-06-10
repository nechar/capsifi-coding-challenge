## Wishlist JavaScript Coding Challenge

### System Requirements

The coding challenge requires the following to be installed on your development machine:

 - [nodejs](https://nodejs.org/en/) version 10 or above.
 - A [git](https://git-scm.com/downloads) client.

### Installation

 - Fork the `Wishlist-JavaScript-Coding-Challenge` repository to your personal github account;
 - Clone the `Wishlist-JavaScript-Coding-Challenge` repository from your personal github account onto your development machine;
 - Open a terminal and `cd` into the root directory of the `Wishlist-JavaScript-Coding-Challenge` repository.
 - Execute `npm install` in the terminal.

This installation will only give you the Typescript library, it is your responsabilty to create the structure of folders and files that you will need for the challenge. Feel free to include more `scripts` into the `package.json` file, for example to run Typescript in watch mode. E.g : `"watch-ts": "tsc -w"`.

### The Challenge
Most of us like computer games, but there are so many that sometimes we forget which ones we like the most. Wouldn't it be wonderful if we could have our own personal wishlist with all the games we love. We are pretty sure there is nothing like that on market (cof...cof...) so let's build one!!

### Instructions
Our UI designers have already created some mockups and defined the UX that need to be applied. Of course we need some data, in fact it doesn’t even feel real without any related gamming data, so let's use the wonderful RAWG Video Games API:

https://rawg.io/api/collections/must-play/games

This endpoint will give you a list of the most playlable games in `JSON` format.

**Let's start with the homepage:**

The homepage is divided in two sections; the navbar, that only has the company name and a button (the heart icon) that will toggle the wishlist flyout on the right hand side. When the user loads this page for the first time, a fetch request is sent to the RAWG API server and a list of twenty results is returned. Each one of the result needs to be rendered like a card with the data sugested in the mockups.

![image](https://user-images.githubusercontent.com/3682538/120755892-e6cab800-c551-11eb-97c0-417b73b64cf6.png)

When you click on one of the heart icons at the bottom of the card (e.g hearts set to red in the image below), you are marking that particular game as one of your favorites, sending it to the wishlist flyout.

![image](https://user-images.githubusercontent.com/3682538/120756033-17125680-c552-11eb-8430-b392d11bb53e.png)

**The wishlist flyout:**

When the heart icon at the top right is clicked, a flyout will be displayed showing the list of all your favorites games. Each item on the list has a remove button (trash icon) that will allow the user to remove that item from the wishlist.

![image](https://user-images.githubusercontent.com/3682538/120756067-2396af00-c552-11eb-825f-40fab70ae1f8.png)

### Requirements

1. The HTTP GET function return value must be a promise that resolves to the overall results array;
2. If the HTTP status code of the response is not 200, deal with the error showing some alert on the page;
3. The cards on the homepage must be in sync with the wishlist, that means if a card is already in the wishlist  it can not be added again;
4. The challenge needs to be developed only using HTML, CSS or SASS, modern Javascript (E6) and Typescript. No librarys like jQuery, React, Lodash or simliar are permited.

**IMPORTANT:** this is not a UI design test it's a technical test. You don't need to follow in detail the mockups shown above. Instead of card's you can render a simple list of games with the same data, the icons can be subtitued by simple buttons. The flyout does not need to be floated... you get the idea. But if we can render a decent interface,  it will be a bonus :)

### Tips

- We are most impressed with readable code that works;
- Keep your solution as simple as possible;
- Separation of concerns is important;
- It's also a Typescript challenge too so adding static type definitions and `interfaces` are important;
- Code as if your HTTP functions may one day be used in a real http implementation;
- Similiar solutions to this challenge may be available on the internet and may be used to give you ideas, however, we do not agree with some of the implementations we saw;
-   Direct plagiarism results in an immediate failure.

### Bonus

- Include a game search;
- Include a selector were the user can filter the data by Released, Created, Rating or any other relevant filter;
- Include unit tests;
- Any details you include to improve the app will be a bonus.

### Submission

Send us the link of your github repo with your solution. Please do not create a pull request against the source repository.

Good luck!!
