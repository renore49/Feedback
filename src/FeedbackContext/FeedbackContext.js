import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([])

	useEffect(() => {
		fetchFeedback()
	}, [])

	//Fetch
	const fetchFeedback = async () => {
		const response = await fetch(
			'https://62470429739ac8459195f0e6.mockapi.io/Feedback'
		)
		const data = await response.json()
		setFeedback(data)
	}

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	// Delete Feedback
	const deleteFeedback = async id => {
		if (window.confirm('Ara you sure want to delete ?'))
			await fetch(
				`https://62470429739ac8459195f0e6.mockapi.io/Feedback/${id}`,
				{ method: 'DELETE' }
			)
		setFeedback(feedback.filter(el => el.id !== id))
	}

	// Add Feedback
	const addFeedback = async newFeedback => {
		const response = await fetch(
			'https://62470429739ac8459195f0e6.mockapi.io/Feedback',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newFeedback),
			}
		)
		const data = await response.json()
		setFeedback([data, ...feedback])
	}

	//Edit Feedback
	const editFeedback = item => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}

	//Update Feedback
	const updateFeedback = async (id, updItem) => {
		const response = await fetch(
			`https://62470429739ac8459195f0e6.mockapi.io/Feedback/${id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updItem),
			}
		)
		const data = await response.json()
		setFeedback(
			feedback.map(item => (item.id === id ? { ...item, ...data } : item))
		)
	}
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				addFeedback,
				editFeedback,
				feedbackEdit,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
