import { getNewsDataByCompanyId } from "mock-data/helpers/getNewsDataByCompanyId";
import { useEffect, useState } from "react";
import { News } from "types/news";

interface UseNewsLoad {
    loading: boolean;
    error: boolean;
    newsList: News[];
}

interface UseNewsLoadProps {
    companyId: string;
}

export function useNewsLoad({companyId}: UseNewsLoadProps): UseNewsLoad {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [newsList, setNewsList] = useState<News[]>([]);

    const loadNews = async (): Promise<void> => {
        setLoading(true);

        try {
            const news = await new Promise<News[]>((resolve) => {
                setTimeout(() => {
                    resolve(getNewsDataByCompanyId(companyId));
                }, 1700);
            });
            
            setNewsList(news); 
        } catch (e) {
            setError(true);
        }
        
        setLoading(false);
    };

    useEffect(() => {
        loadNews();
    }, [companyId]);

    return {
        loading,
        error,
        newsList
    };
}