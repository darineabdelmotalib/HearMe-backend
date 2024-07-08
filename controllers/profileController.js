import initKnex from "knex";
import configiration from "../knexfile.js";
const knex = initKnex(configiration);


const getAll = async (_req, res) => {
    try {
       const data = await knex("profiles");
        res.status(200).json(data);
         
    } catch (err) {
        res.status(400).send(`error ${err}`);
    }
}

const add = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: "Bad request, no data is given",
        });
    }

    try {
        const result = await knex("profiles").insert(req.body);
        console.log("result: ", result);

        const createdWarehouse = await knex("profiles").where({ id: result[0] });
        res.status(200).json("Warehouse successfully added");

    } catch (error) {
        res.status(500).json({
            message: `Unable to create new profile: ${error}`,
        });
    }
}

export {
    getAll, 
    add
}