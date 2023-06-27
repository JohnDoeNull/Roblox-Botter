import axios from "axios";

const takeToken = async () => {
    //const id = await axios.get("http://2captcha.com/in.php?json=1&key=60e5ea3c0cb8ab63ef5f40ad7dfbfc92&method=funcaptcha&publickey=476068BF-9607-4799-B53D-966BE98E2B81&surl=https://roblox-api.arkoselabs.com&pageurl=https://www.roblox.com")

    //console.log(id.data);
    let result;

    for(let i = 0; i < 5; i++){
        try{
            result = await axios.get(`http://2captcha.com/res.php?key=60e5ea3c0cb8ab63ef5f40ad7dfbfc92&action=get&id=${73922066169}`, {
                timeout: 20000
            })
            console.log(result.data);

        }catch(err){
            console.log(err);
        }
    }

}

takeToken();