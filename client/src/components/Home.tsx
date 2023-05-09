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
        <div>
            <h1>{users.map((user) => user)}</h1>
        </div>
    )
}