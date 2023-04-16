import { Model, Table, Column, CreatedAt, UpdatedAt } from 'sequelize-typescript';
@Table
export class User extends Model<User> {
    @Column
    name!: string;

    @Column
    lastName!: string;

    @Column
    dateBirthday!: string;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

// User.hasMany(Project, {
//   sourceKey: "id",
//   foreignKey: "ownerId",
//   as: "projects", // ¡esto determina el nombre en `asociaciones`!
// });

// User.belongsToMany(Example, {
//  sourceKey: "userId",
//  foreignKey: "exampleId",
//  as: "Realtions",
// });
    
// Address.belongsTo(User, { targetKey: "id" });
// User.hasOne(Address, { sourceKey: "id" });


}