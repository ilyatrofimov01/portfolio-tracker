import { appleNews, nvidiaNews, teslaNews } from "mock-data/news-data";
import { News } from "types/news";

export function getNewsDataByCompanyId(companyId: string): News[] {
    switch (companyId) {
        case "1": return appleNews;
        case "2": return nvidiaNews;
        case "3": return teslaNews;
        default: return [];
    }
}