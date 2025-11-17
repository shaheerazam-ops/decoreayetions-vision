import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export const useSupabaseAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (!isMounted) return;

      if (error) {
        console.error("Failed to fetch Supabase session", error);
        setUser(null);
      } else {
        setUser(data.session?.user ?? null);
      }

      setInitialLoading(false);
    };

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isMounted) return;
      setUser(session?.user ?? null);
      setInitialLoading(false);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return { user, initialLoading };
};

export type UseSupabaseAuthReturn = ReturnType<typeof useSupabaseAuth>;

