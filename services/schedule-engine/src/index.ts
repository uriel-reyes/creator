import express from 'express';
import campaignRoutes from './api/campaigns';
import { commercetoolsMiddleware } from './api/middleware';

const app = express();
app.use(express.json());

// Middleware for commercetools
app.use(commercetoolsMiddleware);

// Routes
app.use('/campaigns', campaignRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
