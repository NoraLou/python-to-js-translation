var Book = function(title, genre, author, finished, readDate, readNow){
    this.title = title || "Untitled";
    this.genre = genre || "Generic";
    this.author = author || "Noone";
    this.finished = finished || false;
    this.readDate = readDate || new Date();
    this.readNow = readNow || false;
};

var BookList = function(booksRead, booksUnRead, bookShelf){
    this.booksRead = booksRead || 0;
    this.booksUnRead = booksUnRead || 0;
    this.bookShelf = bookShelf || [];
};

BookList.prototype.add = function(book){
    this.bookShelf.push(book);
};

BookList.prototype.nextBook = function(){
    for(var i = 0; i < this.bookShelf.length; i++){
        if(this.bookShelf[i].finished === false && this.bookShelf[i].readNow === false){
            return this.bookShelf[i];
        }
    }
};

BookList.prototype.currentRead = function(){
    for(var i = 0; i < this.bookShelf.length; i++){
        if(this.bookShelf[i].readNow === true){
            return this.bookShelf[i];
        }
    }
    
};

BookList.prototype.finishCurrentBook = function(){
    var currentBook = this.BookList.currentRead();
    currentBook.readNow = false;
    currentBook.readDate = new Date();
};

