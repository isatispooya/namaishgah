import axios from "axios";

const api =axios.create({
    url:import.meta.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }

})
export default api