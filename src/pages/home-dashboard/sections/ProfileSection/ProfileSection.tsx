import { Typography } from "antd";
import { ProfileContainer } from "./styled-components";
import { Profile } from "components/Profile";

export function ProfileSection(): JSX.Element {
    return (
        <ProfileContainer>
            <Typography.Title level={2}>Profile</Typography.Title>
            <Profile />
        </ProfileContainer>
    );
}