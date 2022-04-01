import { useParams } from 'react-router-dom'
import Card from '../../Shared/Card'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import FeedbackContext from '../../FeedbackContext/FeedbackContext'

const Post = () => {
	const params = useParams()
	// console.log(params)
	const { deleteFeedback } = useContext(FeedbackContext)
	return (
		<Card>
			<Link to='/'>
				<button className='close' onClick={() => deleteFeedback(params.id)}>
					<FaTimes />
				</button>
			</Link>
			<h1>Post id:{params.id}</h1>
			<p>Post name:{params.name}</p>
		</Card>
	)
}

export default Post
