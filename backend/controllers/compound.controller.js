const { CompoundTable } = require('../models/compoundTable')
const db = require('../models/index')
const csv = require('csvtojson')

const compoundData = db.CompoundTable;

const populateCompoundTable = async (req, res) => {
    try {
        let compounds = []
        const compoundDataCsv = await csv().fromFile("./data/compound.csv")
        for (let i = 0; i < compoundDataCsv.length; i++) {
            const {
                id: id,
                CompoundName: CompoundName,
                CompoundDescription: CompoundDescription,
                strImageSource: strImageSource,
                strImageAttribution: strImageAttribution,
                dateModified: dateModified } = compoundDataCsv[i];
            compounds.push({ id, CompoundName, CompoundDescription, strImageSource, strImageAttribution, dateModified });
        }
        const data = await compoundData.bulkCreate(compounds)
        return res
            .status(200)
            .json(data)
    }
    catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ error: 'An error occurred.', details: err.message });
    }
}

const getAllCompounds = async (req, res) => {
    try {
        const compounds = await compoundData.findAll()
        return res
            .status(200)
            .json(compounds)
    }
    catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ error: 'An error occurred while fetching all compounds.', details: err.message });
    }
}

const getCompoundUsingId = async (req, res) => {
    try {
        const compound = await compoundData.findOne({
            where: {
                id: req.params.id
            }
        })
        return res
            .status(200)
            .json(compound)
    }
    catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ error: 'An error occurred while fetching compound.', details: err.message });
    }
}

const createCompound = async (req, res) => {
    try {
        const compound = await compoundData.create(req.body)
        return res
            .status(200)
            .json(compound)
    }
    catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ error: 'An error occurred while creating compound.', details: err.message });
    }
}

const updateCompound = async (req, res) => {
    try {
        const updatedCompound = await compoundData.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        return res
            .status(200)
            .json(updatedCompound)
    }
    catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ error: 'An error occurred while updating compound.', details: err.message });
    }
}

const deleteCompound = async (req, res) => {
    try {
        await compoundData.destroy({
            where: {
                id: req.params.id
            }
        })
        return res
            .status(200)
            .json(`compound deleted`)
    }
    catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ error: 'An error occurred while updating compound.', details: err.message });
    }
}

module.exports = {
    populateCompoundTable,
    getAllCompounds,
    getCompoundUsingId,
    createCompound,
    updateCompound,
    deleteCompound
}