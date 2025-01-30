const posts = [
    {title: 'Post One' , body: 'This is past one'},
    {title: 'Post Two' , body: 'This is past Two'}
    // {title: 'Post Three' , body: 'This is past Three'},
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post , index) => {
            output +=`<li>${post.title}</li>`            
        });
        document.body.innerHTML = output;
    },1000)
}

function createPost(post , callback) {
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000)
}
createPost({title: 'Post Three' , body: 'This is post Three'} ,getPosts);