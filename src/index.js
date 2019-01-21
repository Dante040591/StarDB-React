// fetch('https://swapi.co/api/people/4/').then((response) => {
//    return response.json();
// }).then((body) => {
//     console.log(body);
// });

class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResponse (url) {
        const response = await fetch(`${this._apiBase}${url}`);
        if (!response.ok) {
            console.log(`Could not fetch ${response.status}`);
        }

        return await response.json();
    };

    async getAllPeople () {
        const res = await this.getResponse('/people/');
        return res.results;
    }

    getPerson (id) {
        return this.getResponse(`/people/${id}`);
    }

    async getAllPlanets () {
        const res = await this.getResponse('/planets/');
        return res.results;
    }

    getPlanet (id) {
        return this.getResponse(`/planets/${id}`);
    }

    async getAllStarships () {
        const res = await this.getResponse('/starships/');
        return res;
    }

    getStarship (id) {
        return this.getResponse(`/starships/${id}`);
    }
}

const swapi = new SwapiService();
swapi.getStarship(3).then((body) => {
    console.log(body.model);
});
