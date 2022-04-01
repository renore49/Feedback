import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from '../../Shared/Card'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import FeedbackContext from '../../FeedbackContext/FeedbackContext'

const FeedBackItem = ({ item }) => {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<button className='close' onClick={() => deleteFeedback(item.id)}>
				<FaTimes color='red' />
			</button>
			<button className='edit' onClick={() => editFeedback(item)}>
				<FaEdit color='purple' />
			</button>
			<Link to={`/post/${item.rating}/${item.text}`}>
				<div className='text-display'>{item.text}</div>
			</Link>
		</Card>
	)
}
FeedBackItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default FeedBackItem
