import { companiesData } from "mock-data/companies-data";
import { userData } from "mock-data/user-data";
import { useEffect, useState } from "react";
import { CompanyInformation } from "types/company";
import { User } from "types/user";
import userStore from "store/user-store";
import dayjs from "dayjs";

interface UseDataLoadProps {
    setDefaultCompany?: (company: CompanyInformation) => void;
}

interface UseDataLoad {
    companies: CompanyInformation[];
    loading: boolean;
    error: boolean;
}

interface DataLoadResponse {
    companies: CompanyInformation[];
    user: User;

}

export function useDataLoad({setDefaultCompany}: UseDataLoadProps): UseDataLoad {
    const [loadedCompanies, setCompanies] = useState<CompanyInformation[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const loadCompanies = async (): Promise<void> => {
        setLoading(true);

        try {
            const {companies, user} = await new Promise<DataLoadResponse>((resolve) => {
                setTimeout(() => {
                    resolve({
                        companies: companiesData,
                        user: userData
                    });
                }, 1000);
            });
            userStore.setUser(user);
            setLoading(false);
            const sortedCompaniesDayPrices = companies.map((company) => ({
                ...company,
                dayPrices: company.dayPricesList.sort((dayPrice, dayPrice2) =>
                    dayjs(dayPrice.date).isAfter(dayjs(dayPrice2.date)) ? -1 : 1)
            }));

            if (setDefaultCompany && sortedCompaniesDayPrices.length > 0) {
                setDefaultCompany(sortedCompaniesDayPrices[0]);
            }

            setCompanies(sortedCompaniesDayPrices); 
        } catch (e) {
            setError(true);
            setLoading(false);
        }

    };

    useEffect(() => {
        loadCompanies();
    }, []);

    return {
        companies: loadedCompanies,
        loading,
        error 
    };
}