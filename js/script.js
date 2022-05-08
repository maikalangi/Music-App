// alert('js connected')

const promise = $.ajax({
    url:'https://audius-discovery-7.cultur3stake.com/v1/tracks/search?query=baauer'
});

const $art = $('img');
const $song = $('source');

promise.then(
    (res) => {
    //  $des.text(data, description);
    const artwork = res.data[0].artwork['480x480'];
    $art.attr('src', artwork);
    },
    (error) => {
     console.log('bad request: ', error);
    }
);

// const arr = {
//     150x150: 'https://content-node.audius.co/ipfs/QmVCwBE7STz7BFoKru43uukW3qvSpHgzpWLp5EkatMMD8q/150x150.jpg', 480x480: 'https://content-node.audius.co/ipfs/QmVCwBE7STz7BFoKru43uukW3qvSpHgzpWLp5EkatMMD8q/480x480.jpg', 1000x1000: 'https://content-node.audius.co/ipfs/QmVCwBE7STz7BFoKru43uukW3qvSpHgzpWLp5EkatMMD8q/1000x1000.jpg'
// };



// const connect = promise.description;
// console.log(connect);
// $('body').append(connect);

fetch('https://audius-discovery-12.cultur3stake.com/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    const song = body;
    console.log(song);
    // $song.attr('src', song);
});
