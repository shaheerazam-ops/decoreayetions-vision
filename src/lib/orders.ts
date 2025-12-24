import { supabase } from "@/integrations/supabase/client";

export type OrderPayload = {
  user_id: string;
  // Extend this type with whatever columns your `orders` table has
  items?: unknown;
  total?: number;
  name?: string;
  email?: string;
  phone?: string | null;
  event_type?: string | null;
  event_date?: string | null;
  guests?: string | null;
  budget?: string | null;
  message?: string;
};

export async function placeOrder(payload: OrderPayload) {
  // Ensure required fields are present
  if (!payload.name || !payload.email || !payload.event_type || !payload.message) {
    throw new Error("Missing required fields: name, email, event_type, and message are required");
  }

  const { data, error } = await supabase
    .from("orders")
    .insert([payload])
    .select("id, created_at")
    .single();

  if (error) {
    console.error("Order insertion error:", error);
    throw new Error(error.message || "Failed to save your order. Please try again.");
  }

  if (!data) {
    throw new Error("Order was created but no data was returned");
  }

  return data;
}

export async function sendOrderConfirmation(orderId: string, email: string) {
  // Option A: write to a `notifications` table (non-blocking - don't fail if table doesn't exist)
  try {
    const { error } = await supabase.from("notifications").insert([
      {
        type: "order_confirmation",
        data: { order_id: orderId, email },
      },
    ]);

    if (error) {
      // Log but don't throw - notification is optional
      console.warn("Could not create notification (table may not exist):", error);
    }
  } catch (err) {
    // Table might not exist - that's okay, just log it
    console.warn("Notifications table not available:", err);
  }
}


