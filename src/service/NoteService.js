import axios from "axios"

class NoteService {
    constructor() {
        this.baseUrl = "http://sleek-selection-production.up.railway.app/api/notes"
    }

    async getAllNotes(userId, taskType) {
        return await axios.get(`${this.baseUrl}?userId=${userId}&isCompleted=${taskType}`).then((response) => response.data);
    }

    async postOneNote(note) {
        return await axios.post(this.baseUrl, note).then((response) => response.data);
    }

    async updateOneNote(id, note) {
        const url = this.baseUrl + "/" + id;
        return await axios.put(url, note).then((response) => response.data);
    }

    async deleteOneNote(id) {
        const url = this.baseUrl + "/" + id;
        return await axios.delete(url);
    }

    async deleteAllNotes() {
        return await axios.delete(this.baseUrl);
    }
}

export default NoteService;