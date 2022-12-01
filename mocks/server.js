import { createServer } from 'miragejs';
import ListMovies from '../assets/data/listMovies';
import ListUsers from '../assets/data/listUsers';

if (window.server) {
    window.server.shutdown();
}

const GetDateBefore = (item) => {
    const curDate = new Date().toLocaleDateString();
    const date = item.premiere;
    return curDate >= date;
};

const GetDateAfter = (item) => {
    const curDate = new Date().toLocaleDateString();
    const date = item.premiere;
    return !(curDate >= date);
};

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/movies/top', () => {
            return ListMovies.sort((a, b) => b.buyTickets - a.buyTickets);
        });

        this.get('/movies', (schema, req) => {
            const type = req.queryParams.type;
            const categoryNeed = req.queryParams.category;
            console.warn(categoryNeed.slice(5).toLowerCase());

            // var date = Date.parse(curDate);
            // console.warn(curDate >= '12/30/2022');
            if (type == 2) {
                // console.error(type);
                return ListMovies.filter(GetDateAfter).filter((movie) =>
                    movie.category.toLowerCase().includes(categoryNeed.slice(5)),
                );
            } else {
                // console.error(55);
                return ListMovies.filter(GetDateBefore).filter((movie) =>
                    movie.category.toLowerCase().includes(categoryNeed.slice(5)),
                );
            }
            // return ListMovies;
        });

        this.get('/login', (schema, req) => {
            const phone = req.queryParams.phone;

            return ListUsers.find((user) => user.phone === phone);
        });

        this.get("/movies", (schema, request) => {
            let id = request.params.id

            return schema.movies.find(id)
        })
    },
});
