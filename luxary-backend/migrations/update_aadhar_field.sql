-- Replace aadhar_image_path with aadhar_number
ALTER TABLE users
DROP COLUMN IF EXISTS aadhar_image_path;

-- Add aadhar_number column as nullable first
ALTER TABLE users
ADD COLUMN IF NOT EXISTS aadhar_number VARCHAR(12);

-- Set a default value for existing records
UPDATE users SET aadhar_number = '000000000000' WHERE aadhar_number IS NULL;

-- Now make it not nullable
ALTER TABLE users
ALTER COLUMN aadhar_number SET NOT NULL;
