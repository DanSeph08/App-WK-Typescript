import { Model, Table, Column, CreatedAt, UpdatedAt, BelongsTo, HasOne, PrimaryKey, AutoIncrement, AllowNull, ForeignKey } from 'sequelize-typescript';
import { Email } from './Email';
@Table
export class User extends Model<User> {
	@PrimaryKey
	@AutoIncrement
	@Column
	id!: number;

	@AllowNull(true)
	@ForeignKey(() => User)
	@Column
	parentId!: number;

	@BelongsTo(() => User, 'parentId')
	parent!: User;

	@Column
	name!: string;

	@Column
	nickname!: string;

	@CreatedAt
	@Column
	createdAt!: Date;

	@UpdatedAt
	@Column
	updatedAt!: Date;

	@HasOne(() => Email)
	email!: Email;
}


