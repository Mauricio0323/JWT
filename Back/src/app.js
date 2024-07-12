import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import companyRoutes from './routes/company.routes.js'
import userCompanyRoutes from './routes/userCompany.routes.js'
import cors from 'cors'


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', tasksRoutes);
app.use('/api', companyRoutes);
app.use('/api', userCompanyRoutes);





export default app;