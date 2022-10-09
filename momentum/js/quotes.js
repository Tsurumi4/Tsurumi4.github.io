const quotes = [
    {
        quote: "“Bad biscuits make the baker broke, bro.”",
        author: "Jake the Dog",
    },
    {
        quote: "”You’re letting your brain dial turn your fear volume up.”",
        author: "Finn the Human",
    },
    {
        quote: "“People get built different. We don’t need to figure it out, we just need to respect it.”",
        author: "Princess Bubblegum",
    },
    {
        quote: "“You don’t need a mirror to look good. You’re beautiful on the inside.”",
        author: "Finn the Human",
    },
    {
        quote: "“Sometimes life is scary and dark. That is why we must find the light.” ",
        author: "BMO",
    },
    {
        quote: "“Everything small is just a smaller version of something big.”",
        author: "Finn the Human",
    },
    {
        quote: "“You won’t be able to tell if everything is going to be totally haywire.” ",
        author: "BMO",
    },
    {
        quote: "”I’m collecting them all first to be sure I make the right choice!”",
        author: "Ice King",
    },
    {
        quote: "“Responsibility demands sacrifice.”",
        author: "Princess Bubblegum",
    },
    {
        quote: "”You’re getting hung up on imaginary problems. You got to focus on what’s real.”",
        author: "Jake the Dog",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;