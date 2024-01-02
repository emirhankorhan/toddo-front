import axios from "axios"

class NoteService {
    constructor() {
        this.baseUrl = "http://localhost:8082/api/users/paw"
    }

    async updateUserPaw(userId, paw) {
        const response = await axios.patch(`${this.baseUrl}/${userId}?paw=${paw}`);
        return response.data;
    } 
}

export default NoteService;