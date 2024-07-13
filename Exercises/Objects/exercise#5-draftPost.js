//Draft Constructor-Function

// PascalNaming
function DraftPost(title,body,author){
    this.title = title;
    this.body= body;
    this.author= author;
    // by default 0
    this.views= 0;
     // by default nothing
    this.comments= [];
    // by default false (draft)
    this.isLive= false;
}

let containerBlog = new DraftPost('a','b','c');
console.log(containerBlog);
