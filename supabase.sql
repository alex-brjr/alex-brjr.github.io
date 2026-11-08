create table messages (
  id bigint generated always as identity primary key,
  pseudo text not null check (char_length(pseudo) <= 20),
  avatar text not null,
  body text not null check (char_length(body) <= 280),
  user_id uuid references auth.users(id),
  created_at timestamptz default now()
);
alter table messages enable row level security;
create policy "lecture publique" on messages for select using (true);
create policy "ecriture publique" on messages for insert with check (true);
alter publication supabase_realtime add table messages;
