import React from 'react';
import DragDropCard from './DragDropCard';
function Queue({ queueData, onUpdate, onRemove }) {
	const getStatusColor = (status) => {
		switch (status) {
			case 'waiting':
				return 'orange';
			case 'serving':
				return 'yellow';
			case 'completed':
				return 'green';
			default:
				return 'white';
		}
	};
	return (
		<div className="border border-gray-700 rounded-xl p-4 w-full flex flex-col">
			<h1 className="text-2xl font-bold  pb-4">Queue Data</h1>
			{queueData.length === 0 ? (
				<div className="flex-1 flex items-center justify-center ">
					<p className="pt-2 text-xl font-semibold">No customer data</p>
				</div>
			) : (
				<div>
					{/* {queueData.map((customer, idx) => {
						return (
							<div
								className="p-4 border-b border-gray-700 flex justify-between items-end"
								key={customer.id}
							>
								<div>
									<p className=" text-lg font-semibold ">{customer.name}</p>
									<p>
										Service : <span>{customer.service}</span>
									</p>
									<p style={{ color: getStatusColor(customer.status) }}>
										{customer.status}
									</p>
								</div>
								<div className=" flex justify-center items-center gap-4">
									{customer.status === 'waiting' && (
										<button
											className=" bg-green-700 px-4 py-2 rounded cursor-pointer"
											onClick={() => onUpdate(customer.id, 'serving')}
										>
											Serve
										</button>
									)}
									{customer.status === 'serving' && (
										<button
											className=" bg-green-700 px-4 py-2 rounded cursor-pointer"
											onClick={() => onUpdate(customer.id, 'completed')}
										>
											Complete
										</button>
									)}
									<div>
										<button
											className="bg-red-700 px-4 py-2 rounded cursor-pointer"
											onClick={() => onRemove(customer.id)}
										>
											Remove
										</button>
									</div>
								</div>
							</div>
						);
					})} */}
					<div className=" flex justify-around items-stretch border border-gray-700 rounded-2xl gap-4">
						<div className="flex-1 p-4 overflow-y-auto">
							<p className="font-semibold mb-4 text-lg">Waiting</p>
							{/* Demo Card */}
							{queueData
								.filter((item) => item.status === 'waiting')
								.map((item, idx) => (
									<DragDropCard key={idx} data={item} />
								))}
						</div>
						<div className=" border border-gray-700 "></div>
						<div className="flex-1 p-4 overflow-y-auto">
							<p className="font-semibold mb-4 text-lg">Serving</p>
							{/* Demo Card */}
						{queueData
							.filter((item) => item.status === 'serving')
							.map((item, idx) => (
								<DragDropCard key={idx} data={item} />
							))}
					</div>
					<div className=" border border-gray-700 "></div>
					<div className="flex-1 p-4 overflow-y-auto">
						<p className="font-semibold mb-4 text-lg">Completed</p>
						{/* Demo Card */}
						{queueData
							.filter((item) => item.status === 'completed')
							.map((item, idx) => (
								<DragDropCard key={idx} data={item} />
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
export default Queue;
