import React from 'react';
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
		<div className="border border-gray-700 rounded-xl p-4 w-1/2 flex flex-col">
			<h1 className="text-2xl font-bold border-b border-gray-700 pb-4">
				Queue Data
			</h1>
			{queueData.length === 0 ? (
				<div className="flex-1 flex items-center justify-center ">
					<p className="pt-2 text-xl font-semibold">No customer data</p>
				</div>
			) : (
				<div>
					{queueData.map((customer, idx) => {
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
					})}
				</div>
			)}
		</div>
	);
}
export default Queue;
