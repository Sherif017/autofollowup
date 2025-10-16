import { createClient } from '@supabase/supabase-js';

type Contact = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
  status: 'lead' | 'prospect' | 'client' | 'perdu';
  created_at: string;
};

// Cette page est un Server Component par défaut, on peut donc utiliser process.env en toute sécurité ici.
export default async function Home() {
  const supabaseUrl = process.env.SUPABASE_URL!;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { data: contacts, error } = await supabase
    .from('contact')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">AutoFollowUp — Mini CRM + Relances IA</h1>
      <p className="text-gray-700 mt-2">
        Ci-dessous : les contacts lus depuis ta base Supabase.
      </p>

      {error && (
        <div className="mt-4 p-3 border border-red-300 text-red-700 rounded">
          Erreur de lecture : {error.message}
        </div>
      )}

      <ul className="mt-6 space-y-3">
        {(contacts as Contact[] | null)?.map((c) => (
          <li key={c.id} className="border rounded p-3">
            <div className="font-medium">
              {c.first_name ?? ''} {c.last_name ?? ''}
            </div>
            <div className="text-sm text-gray-600">{c.email}</div>
            <div className="text-xs mt-1">
              Statut : <span className="font-semibold">{c.status}</span>
            </div>
          </li>
        ))}

        {!contacts?.length && (
          <li className="text-gray-600">Aucun contact pour le moment.</li>
        )}
      </ul>
    </main>
  );
}
