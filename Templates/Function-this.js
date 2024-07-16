// method -> obj
// function -> global (window, global)

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};
function Video(title) {
    this.title = title;
    console.log(this);
}
const v = new Video('b'); // {}

// ---------------------- //

const video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};
video1.showTags();