import axios from 'axios';

	const KEY= 'AIzaSyDl6kxPCu24YmzC7EhcQZid8DQJ2TXHuJ4';

    export default axios.create({
    	baseURL: 'https://www.googleapis.com/youtube/v3',
    	params: {
    		part: 'snippet',
    		maxResults: 10,
    		key: KEY 
    	}

    });