import React, { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
function Form({ onAdd }) {
	const [name, setName] = useState('');
	const [service, setService] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name.trim() || !service.trim()) return;
		onAdd({ name, service });
		setName('');
		setService('');
		console.log(name, service);
	};

	return (
		<div className=" w-fit h-fit border border-gray-700 rounded-xl p-4 ">
			<h1 className=" text-2xl font-bold">Add to Queue</h1>
			<form action="" onSubmit={handleSubmit}>
				<div className=" mt-6">
					{/* <label htmlFor="customerName">Customer name</label> */}
					<input
						type="text"
						id="customerName"
						className=" bg-gray-700 p-2 border border-gray-600 rounded w-80 placeholder:text-white"
						placeholder=" Customer Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					{/* <label htmlFor="customerName">Customer name</label> */}
					<select
						name="issue"
						id="issue"
						className=" bg-gray-700 p-2 border border-gray-600 rounded w-80 mt-4 "
						value={service}
						onChange={(e) => setService(e.target.value)}
					>
						<option value="" className=" text-gray-800 bg-gray-300">
							Select Service
						</option>
						<option value="Consultation" className="text-gray-800 bg-gray-300 ">
							Consultation
						</option>
						<option value="Payment" className=" text-gray-800 bg-gray-300">
							Payment
						</option>
						<option value="Support" className=" text-gray-800 bg-gray-300">
							Support
						</option>
					</select>
				</div>
				<button
					className=" flex justify-center items-center w-full p-2 mt-4 bg-gray-200 text-gray-900 rounded"
					type="submit"
				>
					<FaUserPlus /> Add Customer
				</button>
			</form>
		</div>
	);
}
export default Form;
