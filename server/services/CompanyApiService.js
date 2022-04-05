const axios = require('axios');

class CompanyApiService{
    static async fetchCompanyByDomain  (domain)  {
        const baseUrl ="https://company.clearbit.com/v2/companies/find";
        const token = "sk_30240e2d1dfc1d73d26ab80390d1fd49";
        const url =`${baseUrl}?domain=${domain}`;
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
          const response =  await axios.get(url, config);
          if(response.status == 200)
            return response.data;
          return false;
        } catch (error) {
          console.error(error)
          return false;
        }
      }
}
module.exports = CompanyApiService;
