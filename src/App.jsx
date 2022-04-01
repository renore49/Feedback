import FeedbackForm from './components/FeedbackForm/FeedbackForm'
import FeedbackList from './components/FeedbackList/FeedbackList'
import FeedbackStat from './components/FeedbackStat/FeedbackStat'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPages from './pages/AboutPages'
import AboutLinkIcon from './components/AboutLinkIcon/AboutLinkIcon'
import Post from './components/Post/Post'
import { FeedbackProvider } from './FeedbackContext/FeedbackContext'

const App = () => {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackForm />
									<FeedbackStat />
									<FeedbackList />
								</>
							}
						></Route>
						<Route exact path='/about' element={<AboutPages />}></Route>
						<Route exact path='/post/:id/:name' element={<Post />}></Route>
					</Routes>
					<AboutLinkIcon />
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App
