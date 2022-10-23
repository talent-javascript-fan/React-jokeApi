import axios from "axios";

const GetStatusCode = async (url) => {
	try {
		const repoData = await axios.get(url);
		return repoData.status;
	} catch (error) {
		console.log(error.response.status);
		return error.response.status;
	}
};


export default GetStatusCode
