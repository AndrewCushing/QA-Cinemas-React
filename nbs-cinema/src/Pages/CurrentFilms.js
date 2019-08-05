import React, { Component } from 'react';
import MovieRow from '../component/MovieRow'

class CurrentFilms extends Component {

    constructor(props) {
        super(props);
        this.state = {rows:[]}
    };

    componentDidMount(){
        let movieRows = [];
        const classifications = {
            ClassU:"/ClassificationImages/U.png",
            ClassPG:"/ClassificationImages/PG.png",
            Class12A:"/ClassificationImages/12A.png",
            Class12:"/ClassificationImages/12.png",
            Class15:"/ClassificationImages/15.png",
            Class18:"/ClassificationImages/18.png"
        };
        fetch('http://localhost:8080/getnewfilms')
            .then(res => res.json() ).catch(console.log).then(results => {
            const movies = results.contentList;
            movies.forEach(movie => {
                movie.classification = classifications[movie.classification];
                const movieRow = <MovieRow key={movie.id} movie={movie}/>;
                movieRows.push(movieRow)
            });
            this.setState({
                rows:movieRows
            });
        });
    };

    handleHome = () => {

        this.props.history.push('/home');
    };

    handleClose = () => {

        if (window.confirm("Are you sure you want to exit?")) {
            window.close();
        }
    };

    render() {
        return (
                <div>

                {this.state.rows}


            </div>

        )
    }
}

export default CurrentFilms