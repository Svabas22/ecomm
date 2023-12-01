import axios from 'axios';


async function fetchData(url) {
    try {
        // Assuming you fetch your data asynchronously and resolve it
        const data = await axios.get("/api"+url); 
        const jsondata = await data.json();
        return jsondata
    } catch (error) {
        console.error('Error fetching data:', error);
        return null
    }
};

export default fetchData;