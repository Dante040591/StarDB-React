// fetch('https://swapi.co/api/people/4/').then((response) => {
//    return response.json();
// }).then((body) => {
//     console.log(body);
// });

const getResponse = async (url) => {
    const response = await fetch(url);
    const body = response.json();
    return body;
};

getResponse('https://swapi.co/api/people/4/').then((body) => {
    console.log(body);
});