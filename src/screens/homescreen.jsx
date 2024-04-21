
import { useEffect, useState } from "react";
import Box from "../components/box"
import Container from "../components/container"
const Body = () => {
    const [news, setNews] = useState([]);




    var url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=794849674d3346ce85a158a532631f31';

    const getdata = async () => {
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
        // setNews(data)

    }

    useEffect(() => {
        getdata();
    }, [])




    return (
        <>
            <div className="flex flex-col h-screen">
                <Container />
                <div className="flex flex-wrap flex-row gap-2" >
                    {
                        // news.length > 0 &&
                        // news.map(e => {
                        //     return (
                        //         <Box img={e.urlToImage} title={e.title} date={e.publishedAt} key={e.date} />
                        //     )
                        // })
                        <Box />
                    }

                </div>

            </div>
        </>
    )
}

export default Body
