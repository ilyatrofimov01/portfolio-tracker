import { observer } from "mobx-react-lite";
import { ItemDate, ItemSnippet, ItemTitle, NewsContainer, NewsListItem } from "./styled-components";
import { useNewsLoad } from "./hooks/useNewsLoad";
import { Spin } from "antd";
import dayJS from "dayjs";

export const NewsList = observer(function NewsList(): JSX.Element {
    const {loading, newsList} = useNewsLoad();

    const onNewsClick = (url: string): void => {
        window.open(url, "_blank");
    };

    return (
        <Spin
            spinning={loading} 
            tip="Loading"
            size="small"
        >
            <NewsContainer>
                {newsList.map((news) => (
                    <NewsListItem key={news.id} onClick={()=> onNewsClick(news.sourceUrl)}>
                        <ItemTitle>{news.title}</ItemTitle>
                        <ItemDate>{dayJS(news.date).format("ddd, DD MMM YYYY h:mma")}</ItemDate>
                        <ItemSnippet>{news.snippet}</ItemSnippet>
                    </NewsListItem>
                ))}
            </NewsContainer>
        </Spin>
    );
});