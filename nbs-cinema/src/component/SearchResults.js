import React, { Component } from 'react';
import MovieRow from './MovieRow.js';
import { SearchJumbotron } from "../component/SearchJumbotron";
import { BrowserRouter as Router} from 'react-router-dom'
import NotFound from "../Pages/NotFound";

class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText:this.props.match.params.searchText,
            rows:[]
        };
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
        fetch('http://localhost:8080/searchfilms/'+this.props.match.params.searchText)
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
        }).catch(()=>{
            this.setState({rows:<NotFound/>})
        });
    };

    render() {
        return (<div>
                <SearchJumbotron/>
            <div>
                {this.state.rows}
            </div>
            </div>
        )
    }
}

export default SearchResults
