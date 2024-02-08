import { newsData } from "mock-data/news-data";
import { useEffect, useState } from "react";
import { News } from "types/news";

interface UseNewsLoad {
    loading: boolean;
    error: boolean;
    newsList: News[];
}

export function useNewsLoad(): UseNewsLoad {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [newsList, setNewsList] = useState<News[]>([]);

    const loadNews = async (): Promise<void> => {
        setLoading(true);

        try {
            const news = await new Promise<News[]>((resolve) => {
                setTimeout(() => {
                    resolve(newsData);
                }, 1700);
            });
            
            setLoading(false);

            setNewsList(news); 
        } catch (e) {
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        loadNews();
    },[]);

    return {
        loading,
        error,
        newsList
    };
}