import mailchimp from '@mailchimp/mailchimp_marketing';

export const addEmailSubscriber = async (subscriberData) => {

    mailchimp.setConfig({
        apiKey: process.env.MAIL_CHIMP_API_KEY,
        server: process.env.MAIL_CHIMP_SERVER_PREFIX,
    });

    try {
        await mailchimp.lists.addListMember(process.env.MAIL_CHIMP_AUDIENCE_ID, {
            email_address: subscriberData.email,
            status: "subscribed",
            merge_fields: {
                FNAME: subscriberData.firstName,
                LNAME: subscriberData.lastName,
                CITY: subscriberData.city,
                STATE: subscriberData.state
            }
        })
    } catch (error) {
        console.error('Error pinging Mailchimp:', error);
    }

}