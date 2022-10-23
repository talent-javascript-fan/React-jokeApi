import axios from "axios";

const GetData = async (url) => {
	try {
		const repoData = await axios.get(url);
		return repoData.data;
	} catch (error) {
		console.log(error);
	}
};


export default GetData
