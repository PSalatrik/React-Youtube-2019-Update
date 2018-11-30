import React from 'react';
import VideoItem from './videoitem';

const VideoList = ({videos, onVideoSelect}) => {

	const renderedList = videos.map( (videos) => {
		return <VideoItem 
			key={videos.id.videoId}
			onVideoSelect={onVideoSelect}
			videos={videos} />
	});

	return (
		<div className="ui relaxed divided list">
			{renderedList}
		</div>
		)
}

export default VideoList;