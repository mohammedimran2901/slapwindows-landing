import supabase from "@/lib/mongodb";

const TABLE = "licenses";

export async function createLicense(data: {
  key: string;
  email: string;
  paymentId: string;
}) {
  const { data: license, error } = await supabase
    .from(TABLE)
    .insert({
      key: data.key,
      email: data.email,
      payment_id: data.paymentId,
      activated: false,
      created_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) throw error;
  return license;
}

export async function findLicenseByKey(key: string) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("key", key)
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return data || null;
}

export async function findLicenseByPaymentId(paymentId: string) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("payment_id", paymentId)
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return data || null;
}

export async function activateLicense(key: string) {
  const { data, error } = await supabase
    .from(TABLE)
    .update({ activated: true })
    .eq("key", key)
    .select()
    .single();

  if (error) throw error;
  return data;
}
