import React, { useState, useRef, Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import music from "../../assets/music.svg";
import music2 from "../../assets/music2.svg";
import Duration from "../Audio_1/Duration";
import "./AudioCard.scss";

class AudioCard2 extends Component {
  state = {
    url: "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
    playing: false,
    played: 0,
    loaded: 0,
    duration: 0,
    color: 0,
  };
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };
  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };
  handlePause = () => {
    console.log("onPause");
    this.setState({ playing: false });
  };
  handlePlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };
  handleSeekMouseDown = e => {
    this.setState({ seeking: true });
  };

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = e => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleProgress = state => {
    console.log("onProgress", state);
    this.setState({ color: Math.ceil(this.state.played * 16) });
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };
  handleDuration = duration => {
    console.log("onDuration", duration);
    this.setState({ duration });
  };
  ref = player => {
    this.player = player;
  };
  render() {
    const { url, playing, played, loaded, duration, color } = this.state;
    const n = 16;
    let i;
    return (
      <div className="AudioCard2">
        <ReactPlayer
          ref={this.ref}
          className="react-player"
          width="100%"
          height="100%"
          url={url}
          playing={playing}
          played={played}
          onSeek={e => console.log("onSeek", e)}
          onProgress={this.handleProgress}
          onDuration={this.handleDuration}
        />

        <div className="imsection">
          {[...Array(color)].map((elementInArray, index) => (
            <Image src={music2} className="immusic" />
          ))}
          {[...Array(16 - color)].map((elementInArray, index) => (
            <Image src={music} className="immusic" />
          ))}
        </div>
        <input
          type="range"
          min={0}
          max={0.999999}
          step="any"
          value={played}
          className="slider"
          style={{
            backgroundImage: `linear-gradient(to right,#e20f9c ${
              played * 100
            }%, #e20f9c 0%, #e10e9b2e 0%,#e10e9b2e 100%)`,
          }}
          onMouseDown={this.handleSeekMouseDown}
          onChange={this.handleSeekChange}
          onMouseUp={this.handleSeekMouseUp}
        />
        <Container>
          <Row>
            <Col>
              <Duration seconds={duration * played} className="ltime" />
            </Col>
            <Col>
              <span onClick={this.handlePlayPause}>
                {playing ? (
                  <i className="fa fa-pause" />
                ) : (
                  <i className="fa fa-play" />
                )}
              </span>
            </Col>
            <Col>
              <Duration seconds={duration} className="rtime" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AudioCard2;
