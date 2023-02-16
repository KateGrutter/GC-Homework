
const mainButton = document.querySelector('button');
    mainButton.addEventListener('click', () => {

function main() {  

    //1
const growMe = document.getElementById('grow-me');
growMe.classList.add('.big');
//2
const shrinkMe = document.getElementById('shrink-me');
shrinkMe.classList.remove('.big');

//3
const lis = document.querySelectorAll('li');

for (let li of lis) {
    console.log(li);
}
//4
const newLink = document.querySelector('.link');
newLink.setAttribute('href', 'https://www.example.com');


}
});