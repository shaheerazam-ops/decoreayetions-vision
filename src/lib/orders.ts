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
  const { data, error } = await supabase
    .from("orders")
    .insert([payload])
    .select("id")
    .single();

  if (error) throw error;
  return data;
}

export async function sendOrderConfirmation(orderId: string, email: string) {
  // Option A: write to a `notifications` table
  const { error } = await supabase.from("notifications").insert([
    {
      type: "order_confirmation",
      data: { order_id: orderId, email },
    },
  ]);

  if (error) throw error;
}


