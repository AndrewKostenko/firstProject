import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { suscribe } from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './redux/state';
import  {subscribe} from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<App appState={state} updateNewPostText={updateNewPostText} addPost={addPost} />
		</React.StrictMode>
	);
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree);

reportWebVitals();
