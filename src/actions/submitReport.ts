"use server";

import { z } from "zod";

const formSchema = z.object({
  incidentType: z.string(),
  description: z.string(),
  date: z.string().optional(),
  location: z.string().optional(),
  involvedParties: z.string().optional(),
  evidenceDescription: z.string().optional(),
  contactEmail: z.string().email().optional(),
});

export async function submitWhistleblowingReport(
  data: z.infer<typeof formSchema>
) {
  // Validate the incoming data
  const validatedData = formSchema.parse(data);

  // TODO: Implement actual report submission logic here
  // This could involve saving to a database, sending an email, etc.
  console.log("Received whistleblowing report:", validatedData);

  // Simulate a delay to mimic processing time
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return a success message
  return {
    message:
      "Your report has been submitted successfully. Thank you for your courage in speaking up.",
  };
}
