import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks"
import { getUsers } from "../redux/actions/usersGet";

export const Home = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.usersReducer.users);

    useEffect(() => {
        dispatch(getUsers())
     }, [dispatch])

    
    return (
        <div className="Users">
            <h1>Users</h1>
            {users.map((user: any, index: number) => {
                return (
					<div
						key={index}
						style={{
							border: '1px solid white',
							padding: '10px',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							flexWrap: 'wrap',
							width: '100%',
						}}>
						<span style={{ flex: '0 0 100%'}}>
						    {user.name}
						</span>
						<span style={{ flex: '0 0 100%'}}>
							{user.nickname}
						</span>
						<span style={{ flex: '0 0 100%'}}>
							{user.email}
						</span>
					</div>
				);
            })}
        </div>
    )
}