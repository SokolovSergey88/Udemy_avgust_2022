const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// let i = 0;
const deletElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deletElement);
    // }
};

btn.addEventListener('click', deletElement);
overlay.addEventListener('click', deletElement);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
});
