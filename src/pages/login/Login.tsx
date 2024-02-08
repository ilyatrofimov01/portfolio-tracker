import { Typography, Spin, Input, Button } from "antd";
import { CenteredContainer } from "components/shared-components";
import { MailOutlined, KeyOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useForm, Controller} from "react-hook-form";
import { StyledForm } from "./styled-components";
import { LoginFormValues } from "./types";
import authService from "services/auth/auth-service";
import { useNavigate } from "react-router";

export function Login(): JSX.Element {
    const [isLoading, setIsLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const {control, handleSubmit} = useForm<LoginFormValues>();
    const navigate = useNavigate();

    const onSubmit = async ({email, password}: LoginFormValues): Promise<void> => {
        setIsLoading(true);
        const result = await authService.login(email, password);

        if (result) {
            navigate("/");
        }
        setIsLoading(false);
    };

    return (
        <CenteredContainer style={{height: "100vh"}}>
            <Spin
                spinning={isLoading} tip="Loading"
                size="small"
            >
                <Typography.Title>Log In</Typography.Title>
                <StyledForm style={{gap: "10px"}} onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="email"
                        render={(props) => (
                            <Input
                                type="email" size="large"
                                placeholder="Email" prefix={<MailOutlined />}
                                {...props.field}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={(props) => (
                            <Input.Password 
                                size="large" 
                                placeholder="Password" 
                                prefix={<KeyOutlined />} 
                                visibilityToggle={{
                                    visible: passwordVisible,
                                    onVisibleChange: setPasswordVisible 
                                }}
                                {...props.field}
                            />
                        )}
                    />
                    <Button type="primary" htmlType="submit">Log In</Button>
                </StyledForm>
            </Spin>
        </CenteredContainer>
    );
}