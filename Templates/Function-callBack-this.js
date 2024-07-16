
//#1 self method(not recomended)
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'], showTags() {
        const self = this; //before getting in callback function
        this.tags.forEach(function (tag) {
            console.log('video self: ' + self.title, tag);
        });
    }
};
video.showTags();

//#2 bind method 
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'], showTags() {
        this.tags.forEach(function (tag) {
            console.log('video bind: ' + this.title, tag);
        }.bind(this)); // bind(this) is outside callback fun
    }
};
video2.showTags();

//#3 arrowFun method 
const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() { // method -> obj
        this.tags.forEach(tag => { //callBack arrowFunction inherit the THIS value from container method/obj
            console.log('video arrowFun: ' + this.title, tag); //this. points to obj of method showTags() 
        }); //no need for extra arguements
    }
};
video3.showTags();
