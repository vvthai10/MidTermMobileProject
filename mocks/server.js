/* eslint-disable eqeqeq */
import { createServer } from 'miragejs';
import ListMovies from '../assets/data/listMovies';
import ListUsers from '../assets/data/listUsers';
import ListDetailMovies from '../assets/data/listDetailMovies';

if (window.server) {
    window.server.shutdown();
}

const GetDateBefore = (item) => {
    let curDate = new Date();
    const date = item.premiere;

    // curDate.setDate(curDate.getDate() + 5);
    curDate = curDate.toLocaleDateString();

    var date1 = new Date(curDate);
    var date2 = new Date(date);

    curDate = curDate.split('/');
    curDate = `${curDate[1] < 10 ? `0${curDate[1]}` : `${curDate[1]}`}/${
        curDate[0] < 10 ? `0${curDate[0]}` : `${curDate[0]}`
    }/${curDate[2]}`;
    // //console.log(`ngay khoi chieu: ${date}`);
    // //console.log(`ngay co suat chieu: ${curDate}`);

    // if (date1.toLocaleDateString() >= date2.toLocaleDateString()) {
    //     //console.log('Phim đã được công chiếu');
    // } else {
    //     //console.log('Hummm.');
    // }

    // return date1.toLocaleDateString() >= date2.toLocaleDateString();
    return curDate >= date;
};

const GetDateAfter = (item) => {
    let curDate = new Date();
    const date = item.premiere;
    // curDate.setDate(curDate.getDate() + 5);
    curDate = curDate.toLocaleDateString();
    var date1 = new Date(curDate);
    var date2 = new Date(date);

    curDate = curDate.split('/');
    curDate = `${curDate[1] < 10 ? `0${curDate[1]}` : `${curDate[1]}`}/${
        curDate[0] < 10 ? `0${curDate[0]}` : `${curDate[0]}`
    }/${curDate[2]}`;
    //
    // //console.log(`ngay khoi chieu: ${date}`);
    // //console.log(`ngay co suat chieu: ${curDate}`);
    // return date1.toLocaleDateString() < date2.toLocaleDateString();
    return curDate < date;
};

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/movies/top', () => {
            let list = ListMovies.sort((a, b) => b.ratings - a.ratings);
            return list.filter(GetDateBefore);
        });

        this.get('/movies', (schema, req) => {
            const type = req.queryParams.type;
            const categoryNeed = req.queryParams.category;
            // //console.warn(categoryNeed.slice(5).toLowerCase());

            // //console.error(`Type is: ${type}`);

            // var date = Date.parse(curDate);
            // //console.warn(curDate >= '12/30/2022');
            if (type == 2) {
                // //console.error(type);
                return ListMovies.filter(GetDateAfter).filter((movie) =>
                    movie.category.toLowerCase().includes(categoryNeed.slice(5)),
                );
            } else {
                // //console.error(55);
                return ListMovies.filter(GetDateBefore).filter((movie) =>
                    movie.category.toLowerCase().includes(categoryNeed.slice(5)),
                );
            }
            // return ListMovies;
        });

        this.get('/login', (schema, req) => {
            const phone = req.queryParams.phone;
            //console.log(phone);
            const res = ListUsers.filter((user) => user.phone === phone);
            //console.log(res);
            return res;
        });

        this.post('/signup', (schema, req) => {
            const attrs = JSON.parse(req.requestBody);
            //console.warn(attrs);
            //console.log(attrs);
            ListUsers.push(attrs);

            return ListUsers;
        });

        this.get('/movie/time', (schema, req) => {
            let idFilm = req.queryParams.id;
            let date = req.queryParams.date;
            date = date.split('/');
            let dateNeed = `${date[2]}/${date[1] < 9 ? `0${date[1]}` : `${date[1]}`}/${date[3]}`;

            // //console.log(req.queryParams);
            let listDetail = ListDetailMovies.find(({ id }) => id === idFilm);
            listDetail = listDetail.detail;

            let res = listDetail.find(({ date }) => date === dateNeed);
            // //console.log(`Danh sach co chieu: ${idFilm}`);
            // //console.log(res);

            return res;
        });
        this.get('/movie', (schema, req) => {
            let idFilm = req.queryParams.id;

            return ListMovies.find(({ id }) => id === idFilm);
        });
    },
});
