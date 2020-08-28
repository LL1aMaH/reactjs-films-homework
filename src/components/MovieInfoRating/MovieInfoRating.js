import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

class MovieInfoRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.stars === undefined ? 0 : props.stars,
    };
  }

  render() {
    const result = [];
    for (let i = 1; i < 6; i++, this.state.data -= 2) {
      this.state.data > 2
        ? result.push(<FontAwesomeIcon icon={fasStar} key={i} />)
        : this.state.data > 0
        ? result.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i} />)
        : result.push(<FontAwesomeIcon icon={farStar} key={i} />);
      console.log(`i = ${i}, result= ${result}`);
    }
    return <div className="movieInfoRating">{result}</div>;
  }
}
export default MovieInfoRating;
