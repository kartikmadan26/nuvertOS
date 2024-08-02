// we define the table structure in this file
module.exports = (sequelize, DataTypes) => {
    const CompoundTable = sequelize.define("CompoundTable", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        CompoundName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CompoundDescription: {
            type: DataTypes.TEXT,
        },
        strImageSource: {
            type: DataTypes.STRING,
        },
        strImageAttribution: {
            type: DataTypes.STRING,
        },
        dateModified: {
            type: DataTypes.DATE,
        },
    })

    return CompoundTable;
}
