import React, { Component } from 'react';
import './Home.css'
import Movie from '../components/Movie.js'
import axios from 'axios';
class App extends Component {
  state={ //상태관리
    isLoading:true, //값이 true 기본값
    movie:[], //무비 데이터가 로딩되는 곳
  };

  //비동기방식으로 빠르게 불러오기 위해 async와 await 사용
  getMovies = async()=>{
    const {
      data:{
        data:{movies}, //구조분해할당을 통해 movies키에 접근하기 위해 수정함
      },
    } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating&order_by=desc');
    console.log(movies); //무비데이터만 출력
    this.setState({movies, isLoading:false}); //es6문법에서 객체의 키이름과 대입할 변수의 이름이 같으면 생략이 가능하다
  }

  //생명주기함수 render링이 끝나고 나서 실행되는 함수
  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState({isLoading:false})
    // },3000);
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <>
        <main>
          {isLoading ? (
            <div className='load_box'>
              <img src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`} alt="로딩중" className='load_img' />
              <p>Loading...</p>
            </div>
            ) : (
              <section>
                {/* mpa함수 - 기존배열 안에 있는 원소들을 각각함수로 대입하여 연산도니 결과값을 가지고 새로운 벼열을 만들 때 사용한다. */}
                {movies.map((movie)=>
                <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                />
                )}
              </section>
          )}
        </main>
      </>
    );
  }
}

export default App;