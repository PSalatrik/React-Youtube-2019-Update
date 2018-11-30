import React, { Component } from 'react';
import Searchbar from './searchbar';
import youtube from '../API/youtube';
import VideoList from './videolist';
import VideoDetail from './videodetail'

class App extends Component {

	state= { videos: [], selectedVideo: null }

	componentDidMount(){
		this.onTermSubmit('Compuware');
	}

	onTermSubmit = async (term) => {	
				const result = await youtube.get('/search',
					{
			  		params: {q: term }

					});
				
				this.setState({
					videos: result.data.items,
					selectedVideo: result.data.items[0]
					});

			}

	onVideoSelect = (svideo) => {
		this.setState({ selectedVideo: svideo });
	};


	render(){
		return (
				<div className="ui container">
					<Searchbar onTermSubmit={ this.onTermSubmit } />
					<div className="ui grid">
						<div className="ui row">
							<div className="eleven wide column">
								<VideoDetail video={this.state.selectedVideo} />
							</div>
							<div className="five wide column">
								<VideoList 
									onVideoSelect={this.onVideoSelect} 
									videos={this.state.videos} />
							</div>
						</div>
					</div>
			    </div>
			);
	}
}


export default App;

