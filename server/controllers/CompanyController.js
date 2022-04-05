const CompanyApiService = require ("../services/CompanyApiService");

class CompanyController {


	static async show(req, res) {
		try {
            const result = await CompanyApiService.fetchCompanyByDomain(req.params.domain);
			if(!result)
				res.sendStatus(500);
			res.send(result);
		} catch (e) {
            console.log(e.message);
			res.sendStatus(500);
		}
	}

	
}

module.exports = CompanyController;
