import React, { useState } from 'react';
import Form from './Components/Form';
import Queue from './Components/Queue';

function App() {
	const [queue, setQueue] = useState([]);
	const addToQueue = (customer) => {
		setQueue([...queue, { ...customer, id: Date.now(), status: 'waiting' }]);
		console.log(queue);
	};

	const updateQueue = (id, newStatus) => {
		setQueue(
			queue.map((customer) =>
				customer.id === id ? { ...customer, status: newStatus } : customer,
			),
		);
	};

	const removeFromQueue = (id) => {
		setQueue(queue.filter((customer) => customer.id !== id));
	};

	return (
		<div className="bg-gray-900 w-screen h-screen text-white">
			<div className=" text-center pt-10">
				<h1 className=" text-5xl mb-4">Queue Management</h1>
				<h6 className="text-xl"> Welcome to Queue Management system</h6>
			</div>
			<main className=" p-10 flex justify-center items-top gap-4">
				<Form onAdd={addToQueue} />
				<Queue
					queueData={queue}
					onUpdate={updateQueue}
					onRemove={removeFromQueue}
				/>
			</main>
		</div>
	);
}
export default App;
