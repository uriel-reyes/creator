import express from 'express';
import { getCampaigns, createCampaign, updateCampaign, deleteCampaign } from '../models/campaignModel';

const router = express.Router();

// Get list of campaigns
router.get('/', async (req, res) => {
  const campaigns = await getCampaigns();
  res.json(campaigns);
});

// Create a new campaign
router.post('/', async (req, res) => {
  const newCampaign = await createCampaign(req.body);
  res.status(201).json(newCampaign);
});

// Update a campaign
router.put('/:id', async (req, res) => {
  const updatedCampaign = await updateCampaign(req.params.id, req.body);
  res.json(updatedCampaign);
});

// Delete a campaign
router.delete('/:id', async (req, res) => {
  await deleteCampaign(req.params.id);
  res.status(204).send();
});

export default router;
