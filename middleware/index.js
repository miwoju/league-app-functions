const axios = require("axios");

exports.fetchSummonerInfo = async () => {
    const data = await axios.get(
        "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/miwoju?api_key=RGAPI-542b2eeb-7bd1-47c1-b721-e6a207474d60"
    );
    return data;
};
