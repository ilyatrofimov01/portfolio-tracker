import { Typography } from "antd";
import { ProfileContainer } from "./styled-components";
import { Profile } from "components/Profile";
import { CompanyProfile } from "types/company";

interface ProfileSectionProps {
    companyProfile?: CompanyProfile;
}

export function ProfileSection({companyProfile}: ProfileSectionProps): JSX.Element {
    return (
        <ProfileContainer>
            <Typography.Title level={2}>Profile</Typography.Title>
            <Profile companyProfile={companyProfile} />
        </ProfileContainer>
    );
}