ALTER TABLE workspaces ADD COLUMN billing_plan TEXT CHECK (char_length(billing_plan) <= 100);
