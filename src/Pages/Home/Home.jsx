import { fetchNewsArticles, fetchData, selectNews, selectNewsArticles, selectSportsNews, fetchSportsNews, selectMovieUpdates, fetchMovieUpdates, selectTrendingUpdates, fetchTrendingUpdates } from '../../Features/HomeSlice'
import "./Home.css"
import 'swiper/css';
import Row from '../../Components/Row';
import Header from '../../Components/Header';
import { useEffect } from 'react';
import gsap from 'gsap';
import Loading from '../../Components/Loading/Loading';

const Home = () => {

    useEffect(()=>{
       let cursor = document.querySelector(".home-box")
       
       document.addEventListener("mousemove",(dets)=>{
        gsap.to(cursor,{
            left: dets.x,
            top: dets.y
        })
       })
       
    },[])

    return (
        <>
        <div className="home-box"></div>
            {/* <div className="header w-100">
                <Header select={selectNews} action={fetchData} />
            </div> */}
            <div className='mt-3 gap-5'>
                <Row select={selectNews} action={fetchData} title="Top News" />
                <Row select={selectTrendingUpdates} action={fetchTrendingUpdates} type="trending" title="Trending" />
                <Row select={selectSportsNews} action={fetchSportsNews} type="sports" title="Sports News" />
                <Row select={selectMovieUpdates} action={fetchMovieUpdates} type="movie" title="Movie Updates" />
                <Row select={selectNewsArticles} action={fetchNewsArticles} type="bitcoin" title="Cryptocurrency" />
            </div>
        </>
    )
}

export default Home


// 328355ffdfcc4fbdbe8d101187aebf1f