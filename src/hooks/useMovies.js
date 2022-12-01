import { useState, useEffect, useCallback } from 'react';

export const useTopMovies = () => {
    const [listMovies, setListMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fetchMovies = async (type) => {
        try {
            setLoading(true);
            const res = await fetch(`/api/movies/top`);
            const data = await res.json();
            setListMovies(data || []);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    console.log(typeof listMovies);

    return [listMovies];
};

export const useMovies = () => {
    const [listMovies, setListMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fetchMovies = useCallback(async (type, category) => {
        try {
            setLoading(true);
            const res = await fetch(`/api/movies?type=${type}&category=${category}`);
            const data = await res.json();
            setListMovies(data || []);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }, []);

    return [listMovies, isLoading, fetchMovies];
};


export const useIDMovies = () => {
    const [listMovies, setListMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fetchMovies = useCallback(async (id) => {
        try {
            setLoading(true);
            const res = await fetch(`/api/movies?id=${id}`);
            const data = await res.json();
            setListMovies(data || []);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }, []);

    return [listMovies, fetchMovies];
};
