"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitWhistleblowingReport } from "@/actions/submitReport";

// Simplified schema with only essential fields
const formSchema = z.object({
  incidentType: z
    .string()
    .min(1, { message: "Please select an incident type" }),
  department: z.string().min(1, { message: "Please select a department" }),
  description: z.string().min(10, {
    message: "Please provide more details (minimum 10 characters)",
  }),
  contactEmail: z.string().email().optional(),
});

export default function WhistleblowingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      incidentType: "",
      department: "",
      description: "",
      contactEmail: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await submitWhistleblowingReport(values);
      setSubmitMessage(result.message);
      form.reset();
    } catch (error) {
      console.error("Error submitting report:", error);
      setSubmitMessage(
        "An error occurred while submitting your report. Please try again."
      );
    }
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="incidentType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Incident</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="unauthorized_spending">
                    Unauthorized Spending
                  </SelectItem>
                  <SelectItem value="misappropriation">
                    Misappropriation of Funds
                  </SelectItem>
                  <SelectItem value="wasteful_spending">
                    Wasteful Spending
                  </SelectItem>
                  <SelectItem value="procurement_violation">
                    Procurement Policy Violation
                  </SelectItem>
                  <SelectItem value="other">Other Financial Concern</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department/Agency of Concern</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department or agency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="agriculture">
                    Department of Agriculture (USDA)
                  </SelectItem>
                  <SelectItem value="commerce">
                    Department of Commerce
                  </SelectItem>
                  <SelectItem value="defense">
                    Department of Defense (DOD)
                  </SelectItem>
                  <SelectItem value="education">
                    Department of Education (ED)
                  </SelectItem>
                  <SelectItem value="energy">
                    Department of Energy (DOE)
                  </SelectItem>
                  <SelectItem value="hhs">
                    Health and Human Services (HHS)
                  </SelectItem>
                  <SelectItem value="homeland">
                    Homeland Security (DHS)
                  </SelectItem>
                  <SelectItem value="hud">
                    Housing and Urban Development (HUD)
                  </SelectItem>
                  <SelectItem value="interior">
                    Department of the Interior
                  </SelectItem>
                  <SelectItem value="justice">
                    Department of Justice (DOJ)
                  </SelectItem>
                  <SelectItem value="labor">
                    Department of Labor (DOL)
                  </SelectItem>
                  <SelectItem value="state">Department of State</SelectItem>
                  <SelectItem value="transportation">
                    Department of Transportation (DOT)
                  </SelectItem>
                  <SelectItem value="treasury">
                    Department of the Treasury
                  </SelectItem>
                  <SelectItem value="va">Veterans Affairs (VA)</SelectItem>
                  <SelectItem value="usaid">
                    US Agency for International Development (USAID)
                  </SelectItem>
                  <SelectItem value="epa">
                    Environmental Protection Agency (EPA)
                  </SelectItem>
                  <SelectItem value="nasa">NASA</SelectItem>
                  <SelectItem value="other">Other Agency/Department</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What happened?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe what happened..."
                  className="h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your email (optional)</FormLabel>
              <FormControl>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Report"}
        </Button>

        {submitMessage && (
          <p className="text-sm p-3 bg-green-100 text-green-800 rounded">
            {submitMessage}
          </p>
        )}
      </form>
    </Form>
  );
}
