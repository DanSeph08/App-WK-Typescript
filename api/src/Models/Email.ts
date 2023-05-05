import { Model, Table, Column, CreatedAt, UpdatedAt, BelongsTo, HasOne, ForeignKey } from 'sequelize-typescript';
import { User } from './User';
@Table
export class Email extends Model<Email> {
	@Column
	email!: string;

	@CreatedAt
	@Column
	createdAt!: Date;

	@UpdatedAt
	@Column
	updatedAt!: Date;

	@ForeignKey(() => User)
	@Column
	userId!: number;

	@BelongsTo(() => User)
	user!: User;
}
