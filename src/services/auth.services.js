import { baseUrlDev,loginSchool,registerSchool } from '../utils/environment';
class AuthService{
    constructor(httpClient){
        this.httpClient=httpClient;
    }
    async registerSchool(schoolData){
        try{
            const response = await this.httpClient.post(`${baseUrlDev}${registerSchool}`,schoolData);
            return response.json()
        }catch(e){
            console.log(e)
            throw e;
        }
    }
    async loginSchool(schoolData){
        try{
            const response = await this.httpClient.post(`${baseUrlDev}${loginSchool}`,schoolData);
            return response.json()
        }catch(e){
            console.log(e)
            throw e;
        }
    }
}
export default AuthService;