// const promise = $.ajax({
//     url:'https://audius-discovery-7.cultur3stake.com/v1/tracks/search?query=baauer'
// });

// const $art = $('img');

// promise.then(
//     (res) => {
//     const artwork = res.data[0].artwork['480x480'];
//     $art.attr('src', artwork);
//     },
    // (error) => {
    //  console.log('bad request: ', error);
    // }
// );

// working code

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
const host = $.ajax('https://api.audius.co');
console.log(host.then(res=>{sample(res.data)}));

// function handleGetData () {
    
//     // event.preventDefault();

//     $.ajax(url).then((res) => {
//         return sample(res.data);
//         // console.log(host);
//     },
//     (error) => {
//         console.log('bad request', error);
//     })
// };

// $(document).ready(handleGetData);



// const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
// const host = fetch('https://api.audius.co')
//   .then(r => r.json())
//   .then(j => j.data)
//   .then(d => sample(d))