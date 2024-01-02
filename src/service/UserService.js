import axios from "axios"

class NoteService {
    constructor() {
        this.baseUrl = "https://sleek-selection-production.up.railway.app/api/users/paw"
    }

    async updateUserPaw(userId, paw) {
        const response = await axios.patch(`${this.baseUrl}/${userId}?paw=${paw}`);
        return response.data;
    } 
}

export default NoteService;