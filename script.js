function generate() {
    var quotes = {
        "Oscar Wilde" : '“Be yourself! Everyone else is already taken.”',
        "Frank Zappa" : '“So many books, so little time.”',
        "Marcus Tullius Cicero" : '“A room without books is like a body without a soul.”'
    }

    var authors = Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random()*authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}