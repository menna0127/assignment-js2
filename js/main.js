function quote() {

    var authors = [ "Oscar Wilde" , "Albert Einstein" , "Marilyn Monroe" , "Frank Zappa" , "Marcus Tullius Cicero" ];

    var quotes = [ "“Be yourself; everyone else is already taken.”", 
                   "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" ,
                   "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”" ,
                   "“So many books, so little time.”" ,
                   "“A room without books is like a body without a soul.”" ];
    
    var num = Math.floor( Math.random() * authors.length );
    
    document.getElementById("text").innerHTML = quotes[num];
    document.getElementById("person").innerHTML = authors[num];
    
}
