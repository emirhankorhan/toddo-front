import axios from "axios"

class NoteService {
    constructor() {
        this.baseUrl = "https://sleek-selection-production.up.railway.app/api/partners"
    }

    async getAllNotes() {
        return await axios.get(this.baseUrl).then((response) => response.data);
    }
}

export default NoteService;