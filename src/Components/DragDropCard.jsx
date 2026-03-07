import React from 'react';

function DragDropCard({ data }) {
	console.log(data);
	
	if (!data) {
		return null;
	}
	
	return (
		<div className="bg-gray-800 border border-gray-600 rounded-lg p-4 mb-3 hover:border-orange-400 cursor-move transition">
			<p className="text-white font-semibold mb-2">{data.name}</p>
			<p className="text-gray-300 text-sm mb-3">
				Service: <span className="text-white">{data.service}</span>
			</p>
			<p className="text-orange-400 text-sm font-semibold">{data.status}</p>
			<button className="mt-3 w-full bg-red-700 px-2 py-1 rounded text-sm cursor-pointer hover:bg-red-600 transition">
				Remove
			</button>
		</div>
	);
}

export default DragDropCard;
