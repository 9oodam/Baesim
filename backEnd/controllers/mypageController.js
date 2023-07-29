const { User, Case, Category, Finished, Interested, sequelize } = require("../models");

// result 변환(몇 년 몇 개월 단위로 변환)
const transformResult = (el, isFinished) => {
    const year = Math.floor(el.dataValues.Case.result / 12);
    const month = el.dataValues.Case.result % 12;
    let str = "";
    if (year == 0) {
        str = month + "개월"
    } else {
        str = year+"년 "+ month + "개월"
    }
    el.dataValues.Case.dataValues.resultStr = str;

    if (isFinished) {
        const year = Math.floor(el.dataValues.result / 12);
        const month = el.dataValues.result % 12;
        let str = "";
        if (year == 0) {
            str = month + "개월"
        } else {
            str = year+"년 "+ month + "개월"
        }
        el.dataValues.resultStr = str;
    }

    return el;
}


exports.getUser = async (req, res) => {
    try {
        const { id } = req.decoded;

        // 설문 완료한 판례
        const finished = await Finished.findAll({
            attributes : ['id', 'user_id', 'case_id', 'result',
            // [sequelize.fn(), 'result_str'],
            ],
            include : [{
                model : Case,
                include : [ {model: Category, attributes : ['name']}],
            },
        ],
            where : {user_id : id}
        });

        const finishedList = finished.map((el)=>transformResult(el, true));

        // 관심 판례
        const interested = await Interested.findAll({
            attributes : ['id', 'user_id', 'case_id'],
            include : [{
                model : Case,
                include : [ {model: Category, attributes : ['name']}],
            }],
            where : {user_id : id}
        });

        const interestedList = interested.map((el)=>transformResult(el,false));

        // return res.json({finished, interested});
        return res.json({finishedList, interestedList});
    } catch (error) {
        console.log(error);
        return res.json({error})
    }
}