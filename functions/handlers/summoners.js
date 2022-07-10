const { fetchSummonerInfo } = require("../../middleware/index");

exports.getSummonerInfo = (req, res) => {
    const data = fetchSummonerInfo();
    return data;
};
