import { ProfileContainer } from "./styled-components";
import { Typography } from "antd";
import { CompanyProfile } from "types/company";

interface ProfileProps {
    companyProfile?: CompanyProfile;
}

export function Profile({companyProfile}: ProfileProps): JSX.Element {
    if (!companyProfile) {
        return (<></>);
    }

    return (
        <ProfileContainer>
            <Typography>Industry: {companyProfile.industry}</Typography>
            <Typography>Sector: {companyProfile.sector}</Typography>
            <Typography>Employees: {companyProfile.employees}</Typography>
            <Typography>Equity: {companyProfile.equity}</Typography>
        </ProfileContainer>
    );
}