import axios from 'axios'
import Cookies from 'js-cookie';

const csrfToken = Cookies.get('csrftoken');

const Base_URL = "http://127.0.0.1:8000/api/"

const getChaosMapAnalysis = async(chaos_map, formData) => {
    const response = await axios.post(Base_URL + chaos_map + "/", {
        formData
    }, {
        headers: {
            'X-CSRFToken': csrfToken
        }
    });
    if (response) {
        return response
    }
}

export default getChaosMapAnalysis