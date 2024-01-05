import axios from "axios"

class PartnerService {
    constructor() {
        this.baseUrl = "https://sleek-selection-production.up.railway.app/api/partners"
    }

    async getAllPartners() {
        return await axios.get(this.baseUrl).then((response) => response.data);
    }
}

export default PartnerService;