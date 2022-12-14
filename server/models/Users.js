module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gradYear: {
            type: DataTypes.STRING,
            defaultValue: "0000"
        },
        lockerNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        student: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        nonApprovedHours: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        verifiedHours: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    })

    Users.associate = (models) => {
        Users.hasMany(models.Forms, {
            onDelete: "cascade", 
        });
    }

    return Users;
}