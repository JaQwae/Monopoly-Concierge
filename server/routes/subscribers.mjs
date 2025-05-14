import express from 'express';
const router = express.Router();
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: 'YOUR_API_KEY',
  server: 'YOUR_SERVER_PREFIX', // e.g., us1
});

async function addEmailToList(listId, email, status = "subscribed") {
  try {
    const response = await mailchimp.lists.createListMember(listId, {
      email_address: email,
      status: status, // "subscribed", "pending", "unsubscribed", "cleaned", or "transactional"
    });
    console.log(`Successfully added email to list: ${email}`);
    return response;
  } catch (error) {
    console.error("Error adding email to list:", error);
    throw error;
  }
}


export default router;