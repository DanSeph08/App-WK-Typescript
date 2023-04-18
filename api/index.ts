import server from './src/App'
import { sequelize } from './src/DB';

sequelize.sync({ force: true, logging: false }).then(() => {
    console.log('DB is connect 💪');
    server.listen(3001, () => {
        console.log('listening on port 3001');
    });
})
.catch((err) => console.error(err));
