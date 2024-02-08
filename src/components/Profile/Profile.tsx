import { observer } from "mobx-react-lite";
import { ProfileContainer } from "./styled-components";
import { Typography } from "antd";
import userStore from "store/user-store";

export const Profile = observer(function Profile(): JSX.Element {
    return (
        <ProfileContainer>
            <Typography>Industry: {userStore.user?.industry}</Typography>
            <Typography>Sector: {userStore.user?.sector}</Typography>
            <Typography>Employees: {userStore.user?.employees}</Typography>
            <Typography>Equity: {userStore.user?.equity}</Typography>
        </ProfileContainer>
    );
});