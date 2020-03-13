import React, { Component } from "react";
import "./style.scss";
import movieIdImage from "../../assets/movieID.png";
import Axios from "axios";
import Select from "react-select";
// import "firebase/firebase-firestore";
import firebase from "firebase/app";

let moods = [
  "Feel Relax",
  "True Friends",
  "Humour",
  "A Good Cry",
  "Letting Heart win head",
  "Funny",
  "Rethink Life",
  "Feeling Like Travelling",
  "Heart Touching",
  "Shaking System",
  "Tasting Glory",
  "Holding Breathe",
  "Thought Provoking",
  "No-Brainer Laugh",
  "Soothing Love Story",
  "Uncomfortable Viewing",
  "Dark Comedy"
];
let streams = [
  "Hotstar",
  "Netflix",
  "Amazon Prime Video",
  "Voot",
  "Zee5",
  "SonyLiv",
  "Airtel TV",
  "Vodafone U",
  "Jio Cinema",
  "Viu",
  "Eros Now",
  "Youtube",
  "Alt Balaji"
];

let reviewer = [
  "Indian Express",
  "Times of India",
  "Hindustan Times",
  "The Hindu",
  "First Post",
  "NDTV"
];
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      textarea: "",
      dataTitle: "",
      movieData: {},
      mood: "",
      streamingOn: {},
      trailerLink: "",
      filmseerRating: "",
      filmseerDecimalRating: "",
      reviewer1: { "": "" },
      reviewer2: { "": "" },
      reviewer3: { "": "" }
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  componentDidMount() {
    // Axios.get(`https://www.imdb.com/title/tt1431045/reviews/_ajax`).then(
    //   res => {
    //     console.log("res", res);
    //     this.setState({ all: res.data });
    //   }
    // );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.dataTitle !== this.state.dataTitle) {
      this.getMovieDetails();
    }
  }

  async getMovieDetails() {
    let response = await Axios.get(
      `http://www.omdbapi.com/?i=${this.state.dataTitle}&apikey=93010d27&plot=full`
    );
    this.setState({
      movieData: { ...response.data }
    });
    console.log(response);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    var el = document.createElement("html");
    el.innerHTML = value;

    var attrs = Array.from(el.getElementsByTagName("span")[0].attributes);
    for (let attr of attrs) {
      console.log(attr.name + "=" + attr.value);
      if (attr.name === "data-title") {
        this.setState({
          dataTitle: attr.value
        });
      }
    }

    this.setState({
      [name]: value
    });
  }

  handleMovieInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (
      name === "dataTitle" ||
      name === "filmseerRating" ||
      name === "trailerLink"
    ) {
      this.setState({
        [name]: value
      });
      return;
    }
    let streamToSet = { ...this.state.streamingOn };
    streamToSet[name] = value;
    console.log(streamToSet);

    this.setState({
      streamingOn: streamToSet
    });
  };

  handleReviewerInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let reviewerToSet = {};
    reviewerToSet[value] = "";
    this.setState({
      [name]: reviewerToSet
    });
  };

  handleReviewInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let reviewerToSet = {};
    reviewerToSet[Object.keys(this.state[name])[0]] = value;
    this.setState({
      [name]: reviewerToSet
    });
  };
  handleSubmit(event) {
    const {
      movieData,
      filmseerRating,
      filmseerDecimalRating,
      mood,
      streamingOn,
      reviewer1,
      reviewer2,
      reviewer3,
      trailerLink
    } = this.state;
    // const { Title, Year } = movieData;
    const picked = (({
      Title,
      Year,
      Released,
      Runtime,
      Genre,
      Director,
      Writer,
      Actors,
      Plot,
      Awards,
      Poster,
      imdbRating,
      imdbID
    }) => ({
      Title,
      Year,
      Released,
      Runtime,
      Genre: Genre.split(","),
      Director: Director.split(","),
      Writer,
      Actors: Actors.split(","),
      Plot,
      Awards,
      Poster,
      imdbRating,
      imdbID
    }))(movieData);
    const dataToSent = {};
    // console.log(picked);
    let reviews = { ...reviewer1, ...reviewer2, ...reviewer3 };
    console.log(mood, "mood");
    // console.log("reviews", reviews);
    picked.filmseerRating = filmseerRating + "." + filmseerDecimalRating;
    picked.mood = mood;
    picked.streamingOn = Object.keys(streamingOn);
    picked.streamingUrl = Object.values(streamingOn);
    picked.reviews = reviews;
    picked.trailerLink = trailerLink;
    const db = firebase.firestore();

    db.collection("movies")
      .doc(picked.imdbID)
      .set(picked)
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    event.preventDefault();
  }

  handleReviewerUi = (name, value, placeholder) => {
    return (
      <div>
        <br />
        <input
          type="text"
          name={name}
          value={value}
          onChange={this.handleReviewerInputChange}
          className="form-control"
          placeholder={placeholder}
        />
        or
        <Select
          placeholder="Select reviewer"
          isMulti={false}
          options={reviewer.map(reviewerName => ({
            label: reviewerName,
            value: reviewerName
          }))}
          onChange={opt => {
            let { value } = opt;

            let reviewerToSet = {};
            reviewerToSet[value] = "";
            console.log(reviewerToSet);
            this.setState({
              [name]: reviewerToSet
            });
          }}
        />
      </div>
    );
  };
  handleReviewerUiLink = (name, value, placeholder) => {
    return (
      <input
        type="text"
        name={name}
        value={value}
        onChange={this.handleReviewInputChange}
        className="form-control"
        placeholder={placeholder}
      />
    );
  };
  render() {
    console.log(this.state, "state");
    return (
      <div className="admin">
        <form onSubmit={this.handleSubmit}>
          {/* <h2>Sign Up/Login on IMDb:</h2>
          <a href="http://imdb.com" target="_blank">
            Click here to Sign Up/Login
          </a>
          <p>
            If logged In, open below URL, search for the Movie name, copy the
            HTML and paste in the below box.
          </p>
          <a href="https://www.imdb.com/plugins" target="_blank">
            Get Movie Details from IMDb
          </a> */}
          <div className="form-group">
            {/* <textarea
              type="text"
              name="textarea"
              value={this.state.textarea}
              onChange={this.handleChange}
              className="form-control"
              id="HTML"
              placeholder="HTML"
            />
            <h4>Or</h4> */}
            <p>
              search for the movie name on IMDb, copy the title ID and paste in
              below box
            </p>
            <img src={movieIdImage} alt="title ID" />

            {/* <label htmlFor="dataTitle">Movie Id</label> */}
            <input
              type="text"
              name="dataTitle"
              value={this.state.dataTitle}
              onChange={this.handleMovieInputChange}
              className="form-control"
              id="dataTitle"
              placeholder="title ID"
            />
          </div>
          <div style={{ display: "grid" }}>
            <Select
              placeholder="filmseer rating"
              options={[...Array(11).keys()].slice(1).map(rating => ({
                label: rating,
                value: rating
              }))}
              onChange={opt => this.setState({ filmseerRating: opt.value })}
            />
            <Select
              placeholder="filmseer decimal rating"
              options={[...Array(10).keys()].map(decimalRating => ({
                label: decimalRating,
                value: decimalRating
              }))}
              onChange={opt =>
                this.setState({ filmseerDecimalRating: opt.value })
              }
            />
          </div>
          <input
            type="text"
            name="trailerLink"
            value={this.state.trailerLink}
            onChange={this.handleMovieInputChange}
            className="form-control"
            placeholder="trailer Link"
          />
          {Object.keys(this.state.movieData).length
            ? Object.keys(this.state.movieData).map(el => {
                return (
                  <div key={el}>
                    {typeof this.state.movieData[el] === "string" ? (
                      <p>{el} :</p>
                    ) : (
                      <h5>{el}</h5>
                    )}
                    {typeof this.state.movieData[el] === "string"
                      ? this.state.movieData[el]
                      : this.state.movieData[el].length
                      ? this.state.movieData[el].map(review => {
                          return Object.keys(review).length
                            ? Object.keys(review).map(content => {
                                return (
                                  <p>
                                    {content} :{review[content]}
                                  </p>
                                );
                              })
                            : null;
                        })
                      : null}
                  </div>
                );
              })
            : null}

          <Select
            placeholder="Select Mood/s"
            isMulti={true}
            options={moods.map(mood => ({
              label: mood,
              value: mood
            }))}
            onChange={opt => {
              let moodToSet = opt && opt.map(({ value }) => value);
              console.log(moodToSet);
              this.setState({
                mood: moodToSet
              });
            }}
          />

          <h3>Critics Review</h3>
          {this.handleReviewerUi(
            "reviewer1",
            Object.keys(this.state.reviewer1)[0],
            "review 1st"
          )}
          {this.handleReviewerUiLink(
            "reviewer1",
            this.state.reviewer1[Object.keys(this.state.reviewer1)[0]],
            "review 1st link"
          )}
          {this.handleReviewerUi(
            "reviewer2",
            Object.keys(this.state.reviewer2)[0],
            "review 2nd"
          )}
          {this.handleReviewerUiLink(
            "reviewer2",
            this.state.reviewer2[Object.keys(this.state.reviewer2)[0]],
            "review 2nd link"
          )}
          {this.handleReviewerUi(
            "reviewer3",
            Object.keys(this.state.reviewer3)[0],
            "review 3rd"
          )}
          {this.handleReviewerUiLink(
            "reviewer3",
            this.state.reviewer3[Object.keys(this.state.reviewer3)[0]],
            "review 3rd link"
          )}
          <br />
          <h3>Streaming On</h3>
          {streams.map(stream => {
            // console.log(this.state.streamingOn[stream], "rrr");
            return (
              <input
                key={stream}
                type="text"
                name={stream}
                value={this.state.streamingOn[stream] || ""}
                onChange={this.handleMovieInputChange}
                className="form-control"
                placeholder={stream + " link"}
              />
            );
          })}

          <input
            disabled={
              !this.state.movieData.Response ||
              this.state.movieData.Response == "False"
            }
            type="submit"
            value="Submit"
            className="btn btn-primary"
          />
        </form>
      </div>
    );
  }
}

export default ContactForm;
